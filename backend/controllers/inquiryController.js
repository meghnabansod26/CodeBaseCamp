const Inquiry = require('../models/Inquiry');
const nodemailer = require('nodemailer');

exports.submitInquiry = async (req, res) => {
  const { fullName, email, phone, course, preferredTime, question } = req.body;

  try {
    // Save inquiry to MongoDB
    const inquiry = new Inquiry({ fullName, email, phone, course, preferredTime, question });
    await inquiry.save();

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,      // must match your Gmail
        pass: process.env.EMAIL_PASS       // must be your Gmail App Password
      }
    });

    // Send email to yourself or another recipient
    await transporter.sendMail({
      from: `"Inquiry Bot" <${process.env.EMAIL_USER}>`,  // fixed the "from" field
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // fallback if EMAIL_RECEIVER not set
      subject: 'New Inquiry Submission',
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Preferred Time: ${preferredTime}
        question : ${question}
      `
    });

    res.status(200).json({ message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Email send failed:', error);
    res.status(500).json({ message: 'Failed to submit inquiry', error });
  }
};
