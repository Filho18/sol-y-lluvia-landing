import nodemailer from "nodemailer";

// Origens autorizadas a chamar esta função a partir do browser.
// solylluvia.net envia uma cópia paralela do formulário nativo do Duda.
const ALLOWED_ORIGINS = [
  "https://www.solylluvia.net",
  "https://solylluvia.net",
  "https://solylluviaeu.netlify.app",
];

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
    const { nombre, email, telefono, ciudad, asunto, mensaje } = body;

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

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

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
