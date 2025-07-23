import nodemailer from "nodemailer";

exports.handler = async (event, context) => {
  // Configurar CORS
  const headers = {
    "Access-Control-Allow-Origin": "*", // Em produção, altere para o domínio do seu frontend
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

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
    const { nombre, email, telefono, asunto, mensaje } = body;

    // Validação básica
    if (!nombre || !email || !mensaje) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Campos obrigatórios: nome, email e mensagem" }),
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
      subject: `Nova mensagem de ${nombre} - ${asunto || "Sol y Lluvia Landing"}`,
      html: `
        <h2>Mais um Futuro Cliente Jefferson. BOA VENDA</h2>
        <p><strong>Nome:</strong> ${nombre}</p>
        <p><strong>E-mail:</strong> ${email}</p>
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
