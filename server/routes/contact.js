const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// ── POST /api/contact ─────────────────────────────
// Saves message to MongoDB and sends email notification
// ─────────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required',
      });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address',
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        error: 'Message too long (max 2000 characters)',
      });
    }

    // 1. Save to MongoDB
    const contact = new Contact({
      name,
      email,
      message,
      ipAddress: req.ip,
    });
    await contact.save();

    // 2. Send email notification (if credentials are configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS &&
        process.env.EMAIL_USER !== 'your_gmail@gmail.com') {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Gmail App Password
          },
        });

        // Email to you (notification)
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `📬 New message from ${name} — Portfolio`,
          html: `
            <div style="font-family:monospace;background:#0d1117;color:#c9d1d9;padding:24px;border-radius:8px">
              <h2 style="color:#58a6ff;margin-bottom:16px">📬 New Portfolio Message</h2>
              <p><strong style="color:#3fb950">Name:</strong> ${name}</p>
              <p><strong style="color:#3fb950">Email:</strong> <a href="mailto:${email}" style="color:#58a6ff">${email}</a></p>
              <p><strong style="color:#3fb950">Message:</strong></p>
              <div style="background:#161b22;padding:12px;border-left:3px solid #58a6ff;border-radius:4px;margin-top:8px">
                ${message.replace(/\n/g, '<br>')}
              </div>
              <p style="color:#484f58;font-size:12px;margin-top:16px">Received: ${new Date().toLocaleString('en-IN')}</p>
            </div>
          `,
        });

        // Auto-reply to sender
        await transporter.sendMail({
          from: `"Rajesh — MERN Dev" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: `✓ Got your message, ${name}!`,
          html: `
            <div style="font-family:monospace;background:#0d1117;color:#c9d1d9;padding:24px;border-radius:8px">
              <h2 style="color:#58a6ff">✓ Message received!</h2>
              <p>Hey ${name},</p>
              <p>Thanks for reaching out! I've received your message and will reply within 24 hours.</p>
              <div style="background:#161b22;padding:12px;border-left:3px solid #3fb950;border-radius:4px;margin:16px 0">
                <em style="color:#8b949e">${message}</em>
              </div>
              <p style="color:#8b949e">— Rajesh<br>MERN Full Stack Developer · Chennai</p>
            </div>
          `,
        });
      } catch (emailErr) {
        // Email failed but DB save succeeded — log and continue
        console.error('Email send error:', emailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      id: contact._id,
    });

  } catch (err) {
    console.error('Contact route error:', err);
    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.',
    });
  }
});

// ── GET /api/contact ─── (all saved messages — for your own reference)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
