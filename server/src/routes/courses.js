const express = require('express');
const router = express.Router();

// Demo: return static courses (replace with DB in prod)
router.get('/', (req, res) => {
  res.json([
    { id: '1', title: 'HIIT Mastery', price: 29.99, trainer: 'Coach Emily', cover: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Strength 101', price: 19.99, trainer: 'Coach Alex', cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' }
  ]);
});

module.exports = router;
