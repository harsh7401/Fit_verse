const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');

// Get all progress entries for a user
router.get('/:userId', async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new progress entry
router.post('/:userId', async (req, res) => {
  try {
    const entry = await Progress.create({ ...req.body, userId: req.params.userId });
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
