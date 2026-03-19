const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Store uploads in /tmp/uploads for the demo
const upload = multer({ dest: path.join(__dirname, '../../tmp/uploads') });

// Upload short workout video (5-10s) and return an analysis job id
router.post('/upload-video', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    // In production: push to a worker queue (e.g., SQS, Bull) and process with MediaPipe/OpenCV
    const jobId = uuidv4();

    // For demo respond with fake analysis after a short delay (client should poll /ai/job/:id)
    setTimeout(() => {
      // Pretend processing done — in real system you'd persist result
      console.log(`Processed video ${req.file.path} for job ${jobId}`);
    }, 5000);

    res.json({ ok: true, jobId });
  } catch (err) {
    console.error('upload-video', err);
    res.status(500).json({ error: err.message });
  }
});

// Poll job (demo stub)
router.get('/job/:id', (req, res) => {
  const { id } = req.params;
  // Return a fake result for now
  res.json({ id, status: 'completed', insights: [
    { rep: 1, issue: 'Leaning forward', correction: 'Keep torso upright' },
    { rep: 2, issue: 'Knees valgus', correction: 'Push knees outward' }
  ]});
});

module.exports = router;
