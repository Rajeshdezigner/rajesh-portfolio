const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ── MIDDLEWARE ────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS — allow React dev server + production frontend
app.use(cors({
  origin: [
    process.env.CLIENT_URL || 'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:4173', // Vite preview
  ],
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ── ROUTES ────────────────────────────────────────
app.use('/api/contact', require('./routes/contact'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    time: new Date().toISOString(),
  });
});

// ── SERVE REACT BUILD IN PRODUCTION ──────────────
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// ── MONGODB CONNECTION ────────────────────────────
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('YOUR_USER')) {
      console.log('⚠️  MongoDB URI not configured in .env — running without DB');
      console.log('   Copy server/.env.example to server/.env and add your MongoDB URI');
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ MongoDB connected');
  } catch (err) {
    console.error('✗ MongoDB connection failed:', err.message);
    // Don't exit — server still runs for frontend serving
  }
};

// ── START SERVER ──────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n✓ Rajesh Portfolio API running on http://localhost:${PORT}`);
    console.log(`  Health check: http://localhost:${PORT}/api/health`);
    console.log(`  Contact API:  http://localhost:${PORT}/api/contact\n`);
  });
});
