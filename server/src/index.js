require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./lib/db');
const payments = require('./routes/payments');
const auth = require('./routes/auth');
const ai = require('./routes/ai');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Stripe webhooks require the raw body, so we'll attach the raw parser only for that route.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/payments', payments);
app.use('/api/auth', auth);
app.use('/api/ai', ai);

// Stripe webhook - raw body
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.post('/api/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event types you care about
  switch (event.type) {
    case 'checkout.session.completed':
      // handle checkout
      console.log('Checkout completed', event.data.object.id);
      break;
    case 'invoice.payment_succeeded':
      console.log('Invoice payment succeeded for', event.data.object.customer);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

app.get('/', (req, res) => res.json({ status: 'PulseAI backend running' }));

app.listen(PORT, () => console.log(`PulseAI backend listening on port ${PORT}`));
