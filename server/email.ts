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
    await Promise.all([
      // Email to Sales/Admin
      resend.emails.send({
        from: "DataLyra <onboarding@resend.dev>", // Will be replaced with your domain later
        to: "ventas@datalyra.com",
        subject: `New Contact Form Submission from ${name}`,
        html: dataLyraAdminHtml(payload),
      }),
      // Email to Client (Auto-reply)
      resend.emails.send({
        from: "DataLyra <onboarding@resend.dev>", // Will be replaced with your domain later
        to: email,
        subject: "Hablemos de tus necesidades de datos - DataLyra",
        html: dataLyraClientHtml(payload),
      }),
    ]);

    console.log("✅ Emails sent successfully via Resend");
    return true;
  } catch (error) {
    console.error("❌ Error sending emails via Resend:", error);
    throw new Error("Failed to send emails");
  }
}
