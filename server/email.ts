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
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
    // Force IPv4 to avoid IPv6 timeouts in some cloud environments
    tls: {
      ciphers: "SSLv3",
    },
  });

  // Verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log("❌ Error connecting to email server:", error);
    } else {
      console.log("✅ Email server connection is ready");
    }
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
