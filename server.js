const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Use environment variables for SMTP configuration
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // SMTP host from .env
    port: process.env.SMTP_PORT, // SMTP port from .env
    secure: process.env.SMTP_PORT == 465, // Use SSL if port is 465
    auth: {
      user: process.env.SMTP_USER, // Email user from .env
      pass: process.env.SMTP_PASS, // App password from .env
    },
  });

  const mailOptions = {
    from: email, // Sender's email (from the contact form)
    to: process.env.EMAIL_USER, // Your email (destination)
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
