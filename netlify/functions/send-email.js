import nodemailer from "nodemailer";

// Origens autorizadas a chamar esta função a partir do browser.
// solylluvia.net envia uma cópia paralela do formulário nativo do Duda.
const ALLOWED_ORIGINS = [
  "https://www.solylluvia.net",
  "https://solylluvia.net",
  "https://solylluviaeu.netlify.app",
];

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

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // E-mail de destino (variável de ambiente)
      replyTo: email, // <-- NOVA LINHA AQUI
      subject: `Nova mensagem de ${nombre} (${ciudad}) - ${asunto || "Sol y Lluvia Landing"}`,
      html: `
        <h2>Mais um Futuro Cliente Jefferson. BOA VENDA</h2>
        <p><strong>Nome:</strong> ${nombre}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Cidade:</strong> ${ciudad}</p>
        ${telefono ? `<p><strong>Telefone:</strong> ${telefono}</p>` : ""}
        ${asunto ? `<p><strong>Assunto:</strong> ${asunto}</p>` : ""}
        <p><strong>Mensagem:</strong></p>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Mensagem enviada através do formulário de contato do site.</em></p>
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

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "E-mail enviado com sucesso!",
        redirect: "https://solylluviagraias.netlify.app/"
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
