const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

// Create a Checkout Session for a product purchase (one-time)
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { items, userId, successUrl, cancelUrl } = req.body;
    if (!items || !items.length) return res.status(400).json({ error: 'No items provided' });

    // Build line items for Stripe
    const line_items = await Promise.all(items.map(async (it) => {
      // If product has a stripePriceId, use it, otherwise create price_data inline
      const p = await Product.findById(it.productId).lean();
      if (p && p.stripePriceId) {
        return { price: p.stripePriceId, quantity: it.qty };
      }
      return {
        price_data: {
          currency: p?.currency || 'usd',
          product_data: { name: p?.title || 'Product' },
          unit_amount: Math.round((p?.price || it.price || 0) * 100),
        },
        quantity: it.qty,
      };
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: successUrl || `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout/cancel`,
    });

    // Create Order in DB (pending)
    const order = await Order.create({
      userId: userId || null,
      items: items.map(i => ({ productId: i.productId, qty: i.qty, price: i.price })),
      total: items.reduce((s, it) => s + (it.price || 0) * it.qty, 0),
      stripeSessionId: session.id,
      status: 'pending',
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    console.error('create-checkout-session', err);
    res.status(500).json({ error: err.message });
  }
});

// Create a subscription for a user
router.post('/subscription/create', async (req, res) => {
  try {
    const { customerId, priceId, payment_method } = req.body;
    if (!customerId || !priceId) return res.status(400).json({ error: 'Missing customer or priceId' });

    // Attach payment method if provided
    if (payment_method) {
      await stripe.paymentMethods.attach(payment_method, { customer: customerId });
      await stripe.customers.update(customerId, { invoice_settings: { default_payment_method: payment_method } });
    }

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ['latest_invoice.payment_intent'],
    });

    res.json({ subscription });
  } catch (err) {
    console.error('subscription/create', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
