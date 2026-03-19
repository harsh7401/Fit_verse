const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');

// In-memory OTP store (replace with Redis in production)
const otps = new Map();

// Request OTP (phone)
router.post('/request-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone required' });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otps.set(phone, { otp, createdAt: Date.now() });

    // TODO: send via SMS provider (Twilio). For now return OTP in response for dev.
    console.log(`OTP for ${phone}: ${otp}`);
    res.json({ ok: true, otp });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Verify OTP and create/find user
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const record = otps.get(phone);
    if (!record || record.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });

    // OTP valid — find or create user
    let user = await User.findOne({ phone });
    if (!user) {
      user = await User.create({ phone, name: `User ${phone.slice(-4)}` });
    }

    // Create a simple session token (in production use JWT or sessions)
    const token = uuidv4();
    // For demo, return token and user
    res.json({ ok: true, user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
