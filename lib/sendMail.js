
import nodemailer from 'nodemailer';
export async function sendMail(name, email, message) {
    const transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        secure: false,
        auth: {
            user: process.env.NODEMAILER_Email,
            pass: process.env.NODEMAILER_PASSWORD
        }
    })
    const options = {
        from: `'Website Contact Form' <${process.env.NODEMAILER_Email}>`,
        to: process.env.NODEMAILER_Email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
      <h3>New Message from Website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
    }
    try {
        await transporter.sendMail(options);
        return { success: true, message: "Email sent successfully." }
    } catch (error) {
        return { success: false, message: error.message }
    }
}