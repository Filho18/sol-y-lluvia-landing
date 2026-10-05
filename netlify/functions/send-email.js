import nodemailer from "nodemailer";

// Origens autorizadas a chamar esta função a partir do browser.
// solylluvia.net envia uma cópia paralela do formulário nativo do Duda.
const ALLOWED_ORIGINS = [
  "https://www.solylluvia.net",
  "https://solylluvia.net",
  "https://solylluviaeu.netlify.app",
];

// Escapa texto do visitante antes de o pôr no HTML do email. Sem isto, quem
// submete o formulário controla marcação dentro da caixa de entrada do cliente.
function escHtml(valor) {
  return String(valor == null ? "" : valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Normaliza o telefone para wa.me: só dígitos, sem "+". Números de 9 dígitos
// sem indicativo assumem Espanha (34), que é onde o cliente opera.
function telParaWhatsapp(valor) {
  const limpo = String(valor || "").replace(/\D/g, "");
  if (!limpo) return "";
  return limpo.length <= 9 ? "34" + limpo : limpo;
}

// Entrega o lead ao pipeline do Supabase (receive-webhook), que persiste na
// tabela leads, faz hash do PII e escreve a linha de conversao offline no
// Google Sheet. Chamada servidor-a-servidor: o secret nunca chega ao browser.
//
// O receive-webhook aceita um objeto plano em que CADA CHAVE e tratada como
// label do campo (mapDudaFields itera Object.entries quando o payload nao e
// array), pelo que nao foi preciso alterar nada do lado do Supabase. Os labels
// abaixo sao os que o parser dele ja reconhece; o que nao reconhecer cai em
// form_data (jsonb).
async function entregarLeadAoPipeline(lead) {
  const url = process.env.SUPABASE_WEBHOOK_URL;
  const secret = process.env.SUPABASE_WEBHOOK_SECRET;

  if (!url || !secret) {
    throw new Error(
      "SUPABASE_WEBHOOK_URL ou SUPABASE_WEBHOOK_SECRET nao estao configurados"
    );
  }

  const payload = {
    Nombre: lead.nombre,
    Email: lead.email,
    Teléfono: lead.telefono || "",
    Localidad: lead.ciudad,
    Mensaje: lead.mensaje,
    gclid: lead.gclid || "",
    utm_source: lead.utm_source || "",
    utm_medium: lead.utm_medium || "",
    utm_campaign: lead.utm_campaign || "",
    Asunto: lead.asunto || "",
    Origen: "solylluvia.net (formulario proprio)",
    // Mesmos labels que o formulario do Duda ja enviava, para os leads novos
    // ficarem consistentes com os que la estao.
    "Política de privacidad": lead.privacidad ? "true" : "false",
    "Autorización contacto": lead.autorizacion ? "true" : "false",
  };

  // O secret vai no header e nao na query string, para nao ficar em logs de
  // acesso nem em referers. O receive-webhook le o header primeiro.
  const resposta = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-webhook-secret": secret,
    },
    body: JSON.stringify(payload),
  });

  if (!resposta.ok) {
    const detalhe = await resposta.text();
    throw new Error(`receive-webhook respondeu ${resposta.status}: ${detalhe}`);
  }

  return resposta.json().catch(() => ({}));
}

exports.handler = async (event, context) => {
  // CORS restrito: reflete o Origin recebido quando está na allowlist.
  // Não se pode usar "*" quando se quer restringir a origens específicas.
  const requestOrigin =
    (event.headers && (event.headers.origin || event.headers.Origin)) || "";

  const headers = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };

  if (ALLOWED_ORIGINS.includes(requestOrigin)) {
    headers["Access-Control-Allow-Origin"] = requestOrigin;
  }

  // Responder a requisições OPTIONS (preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Apenas aceitar métodos POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Método não permitido" }),
    };
  }

  try {
    // Parse do corpo da requisição
    const body = JSON.parse(event.body);
    const {
      nombre,
      email,
      telefono,
      ciudad,
      asunto,
      mensaje,
      // Atribuicao: opcionais, nao entram na validacao.
      gclid,
      utm_source,
      utm_medium,
      utm_campaign,
      // Consentimentos (RGPD). Sao registados no pipeline; quem os obriga e o
      // formulario, com o atributo required nas checkboxes.
      privacidad,
      autorizacion,
    } = body;

    // Validação básica
    if (!nombre || !email || !ciudad || !mensaje) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Campos obrigatórios: nome, email, cidade e mensagem" }),
      };
    }

    // Configurar o transporter do Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // ou outro provedor SMTP
      auth: {
        user: process.env.EMAIL_USER, // Seu e-mail (variável de ambiente)
        pass: process.env.EMAIL_PASS, // Sua senha de aplicativo (variável de ambiente)
      },
    });

    // ---------------------------------------------------------------------
    // Notificacao do lead.
    //
    // Assunto e corpo estao em castelhano e sem linguagem interna DE PROPOSITO:
    // o Gmail cita a mensagem inteira quando o cliente carrega em Responder, e
    // essa citacao chega ao lead. Tudo o que esta aqui tem de poder ser lido
    // pelo lead sem constrangimento.
    //
    // O botao "Responder" e um mailto: e nao um Reply. O From desta mensagem e
    // a propria caixa onde o cliente a le, por isso o Gmail trata-a como
    // "enviada por mim" e ignora o Reply-To — carregar em Responder devolvia a
    // mensagem a ele mesmo. O mailto: abre uma mensagem NOVA para o lead, sem
    // citacao nenhuma, e resolve as duas queixas de uma vez.
    // ---------------------------------------------------------------------
    const nomeSeguro = escHtml(nombre);
    const emailSeguro = escHtml(email);
    const telWhats = telParaWhatsapp(telefono);

    const assuntoResposta = encodeURIComponent("Sol y Lluvia — su solicitud de presupuesto");
    // Assinatura fixa do Jefferson, no fim de cada resposta. Fica depois de
    // linhas em branco, para ele escrever por cima dela. Emojis em escape
    // unicode para nao dependerem da codificacao do ficheiro.
    const assinatura =
      "Un saludo,\nJefferson Dias\n\u{1F4DE} 618 145 914\n\u{1F310} solylluvia.net";

    const corpoResposta = encodeURIComponent(
      `Hola ${nombre},\n\nGracias por ponerse en contacto con Sol y Lluvia.\n\n\n\n${assinatura}\n`
    );
    const linkResponder = `mailto:${emailSeguro}?subject=${assuntoResposta}&body=${corpoResposta}`;

    const linha = (rotulo, valor) =>
      `<tr>
         <td style="padding:6px 16px 6px 0;color:#6f6a5e;font-size:13px;white-space:nowrap;vertical-align:top">${rotulo}</td>
         <td style="padding:6px 0;color:#14181a;font-size:15px">${valor}</td>
       </tr>`;

    const mailOptions = {
      from: `"Sol y Lluvia — Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Solicitud de presupuesto — ${nombre} (${ciudad})`,
      html: `
        <div style="font-family:system-ui,-apple-system,'Segoe UI',Arial,sans-serif;max-width:560px;color:#14181a;line-height:1.5">
          <p style="margin:0 0 20px;font-size:16px">
            <strong>${nomeSeguro}</strong> ha solicitado información a través de la web.
          </p>

          <p style="margin:0 0 24px">
            <a href="${linkResponder}"
               style="display:inline-block;padding:12px 24px;background:#14181a;color:#ffffff;text-decoration:none;border-radius:4px;font-size:15px">
              Responder a ${nomeSeguro}
            </a>
            ${telWhats
              ? `<a href="https://wa.me/${telWhats}"
                    style="display:inline-block;margin-left:10px;padding:12px 24px;background:#ffffff;color:#14181a;border:1px solid #e4e1d9;text-decoration:none;border-radius:4px;font-size:15px">
                   WhatsApp
                 </a>`
              : ""}
          </p>

          <table style="border-collapse:collapse;width:100%;border-top:1px solid #e4e1d9">
            ${linha("Nombre", nomeSeguro)}
            ${linha("Email", `<a href="mailto:${emailSeguro}" style="color:#14181a">${emailSeguro}</a>`)}
            ${telefono ? linha("Teléfono", `<a href="tel:${escHtml(String(telefono).replace(/[^\d+]/g, ""))}" style="color:#14181a">${escHtml(telefono)}</a>`) : ""}
            ${linha("Localidad", escHtml(ciudad))}
            ${asunto ? linha("Asunto", escHtml(asunto)) : ""}
            ${linha("Mensaje", escHtml(mensaje).replace(/\n/g, "<br>"))}
          </table>

          <p style="margin:24px 0 0;color:#6f6a5e;font-size:12px">
            Enviado desde el formulario de contacto de solylluvia.net
          </p>
        </div>
      `,
    };

    // Email e pipeline seguem em paralelo: a falha de um nao pode derrubar o
    // outro, por isso allSettled em vez de all.
    const [envioEmail, envioPipeline] = await Promise.allSettled([
      transporter.sendMail(mailOptions),
      entregarLeadAoPipeline({
        nombre,
        email,
        telefono,
        ciudad,
        asunto,
        mensaje,
        gclid,
        utm_source,
        utm_medium,
        utm_campaign,
        privacidad,
        autorizacion,
      }),
    ]);

    // Falha do pipeline NAO derruba a resposta ao visitante: o email ja seguiu
    // e o lead chegou ao cliente. Fica registado nos logs da funcao.
    if (envioPipeline.status === "rejected") {
      console.error(
        "Falha ao entregar o lead ao receive-webhook:",
        envioPipeline.reason
      );
    }

    // Falha do email mantem o comportamento antigo: 500 para o visitante.
    if (envioEmail.status === "rejected") {
      throw envioEmail.reason;
    }

    // A pagina de obrigado vive noutro dominio, por isso o cookie de clique do
    // solylluvia.net nao a acompanha. O gclid segue no URL para o gtag de la
    // conseguir atribuir a conversao ao clique que a originou.
    const paginaObrigado = new URL("https://solylluviagraias.netlify.app/");
    if (gclid) paginaObrigado.searchParams.set("gclid", gclid);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "E-mail enviado com sucesso!",
        redirect: paginaObrigado.toString()
      }),
    };

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Erro interno do servidor",
        message: "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
      }),
    };
  }
};
