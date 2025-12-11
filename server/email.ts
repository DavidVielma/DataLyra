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
    // TEMPORARY: Both emails go to verified address for testing
    // Change back to ventas@datalyra.com once you verify that domain in Resend
    await Promise.all([
      // Email to Sales/Admin (temporary: goes to your verified email)
      resend.emails.send({
        from: "DataLyra <onboarding@resend.dev>",
        to: "david.vielma.vidal@gmail.com", // TEMPORARY - change to ventas@datalyra.com later
        subject: `[ADMIN] New Contact Form Submission from ${name}`,
        html: dataLyraAdminHtml(payload),
      }),
      // Email to Client (Auto-reply)
      resend.emails.send({
        from: "DataLyra <onboarding@resend.dev>",
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
