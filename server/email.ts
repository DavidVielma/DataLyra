import { Resend } from "resend";
import { dataLyraAdminHtml, dataLyraClientHtml } from "./templates/datalyra";

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export async function sendContactEmails({ name, email, message, company }: ContactEmailParams) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const payload = { name, email, message, company };

  try {
    // Send both emails in parallel
    // Send email to admin only (client email disabled until domain verification)
    await resend.emails.send({
      from: "DataLyra <onboarding@resend.dev>",
      to: "david.vielma.vidal@gmail.com",
      subject: `[ADMIN] Nuevo contacto de ${name}`,
      html: dataLyraAdminHtml(payload),
    });

    // Client confirmation email disabled temporarily
    // To enable: verify datalyra.com domain in Resend
    /*
    await resend.emails.send({
      from: "DataLyra <onboarding@resend.dev>",
      to: email,
      subject: "Hablemos de tus necesidades de datos - DataLyra",
      html: dataLyraClientHtml(payload),
    });
    */

    console.log("✅ Emails sent successfully via Resend");
    return true;
  } catch (error) {
    console.error("❌ Error sending emails via Resend:", error);
    throw new Error("Failed to send emails");
  }
}
