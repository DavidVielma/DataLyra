import nodemailer from "nodemailer";
import { dataLyraAdminHtml, dataLyraClientHtml } from "./templates/datalyra";

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export async function sendContactEmails({ name, email, message, company }: ContactEmailParams) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const payload = { name, email, message, company };

  // Email to Sales/Admin
  const adminMailOptions = {
    from: `"DataLyra" <${process.env.GMAIL_USER}>`,
    to: "ventas@datalyra.com",
    subject: `New Contact Form Submission from ${name}`,
    html: dataLyraAdminHtml(payload),
  };

  // Email to Client (Auto-reply)
  const clientMailOptions = {
    from: `"DataLyra" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Hablemos de tus necesidades de datos - DataLyra",
    html: dataLyraClientHtml(payload),
  };

  try {
    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);
    console.log("Emails sent successfully to admin and client.");
    return true;
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send emails");
  }
}
