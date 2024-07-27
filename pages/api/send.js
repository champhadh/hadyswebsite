// pages/api/send.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Validate the request body
    if (!email || !subject || !message) {
      return res.status(400).json({ message: 'Email, subject, and message are required.' });
    }

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: process.env.GMAIL_USER, // Your email address
        to: 'hadywehbe98@gmail.com', // Your recipient address
        subject: `Message from ${email}: ${subject}`, // Include sender's email in the subject
        text: message, // Plain text body
        replyTo: email, // Set the reply-to address to the sender's email
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
