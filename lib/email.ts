import { Resend } from "resend";

export async function sendAdmissionEmail(data: any) {
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");
  const { 
    fullName, email, phone, university, degree, 
    interestArea, gradYear, motivation 
  } = data;

  const contactEmails = [
    process.env.CONTACT_EMAIL_1 || "jose@cominges-casal.com",
    process.env.CONTACT_EMAIL_2 || "andres@cominges-casal.com"
  ];

  try {
    // 1. Email to the team
    await resend.emails.send({
      from: "Cominges Casal <notificaciones@cominges-casal.com>",
      to: contactEmails,
      subject: `Nueva solicitud de admisión: ${fullName}`,
      html: `
        <div style="font-family: serif; color: #003057; padding: 20px;">
          <h1 style="border-bottom: 2px solid #003057; padding-bottom: 10px;">Nueva Solicitud de Admisión</h1>
          <p><strong>Candidato:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
          <p><strong>Universidad:</strong> ${university}</p>
          <p><strong>Grado:</strong> ${degree}</p>
          <p><strong>Área de interés:</strong> ${interestArea}</p>
          <p><strong>Año de graduación:</strong> ${gradYear}</p>
          <div style="background: #f4f7fb; padding: 15px; border-left: 4px solid #003057; margin-top: 20px;">
            <p><strong>Motivación:</strong></p>
            <p>${motivation.replace(/\n/g, "<br/>")}</p>
          </div>
        </div>
      `,
    });

    // 2. Confirmation email to the candidate
    await resend.emails.send({
      from: "Cominges Casal <info@cominges-casal.com>",
      to: [email],
      subject: "Hemos recibido tu solicitud · Cominges Casal",
      html: `
        <div style="font-family: serif; color: #003057; padding: 20px; max-width: 600px; margin: auto;">
          <h2 style="text-align: center;">Cominges Casal</h2>
          <p style="text-align: center; font-style: italic; color: #666;">Estudio de Mentoring de Élite</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p>Hola <strong>${fullName}</strong>,</p>
          <p>Confirmamos que hemos recibido tu solicitud de admisión para el programa de mentoring en el área de <strong>${interestArea}</strong>.</p>
          <p>En el Estudio Cominges Casal valoramos la excelencia y el compromiso. Nuestro equipo revisará detalladamente tu perfil y motivaciones. Nos pondremos en contacto contigo en los próximos días para informarte sobre los siguientes pasos del proceso.</p>
          <p>Gracias por tu interés en nuestro acompañamiento profesional.</p>
          <br/>
          <p>Atentamente,</p>
          <p><strong>El Equipo de Cominges Casal</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 10px; color: #999; text-align: center;">
            © 2025 Estudio Cominges Casal · Madrid, España
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
