# PulseAI Backend (Express)

This directory contains a Node/Express backend for the PulseAI product. It provides endpoints for payments (Stripe), authentication (OTP stub), AI video processing (stub), and basic models for Orders, Products, Users, Subscriptions and Progress.

Quick start

1. Copy `.env.example` to `.env` and fill values (MongoDB URI, Stripe keys, etc.)

2. Install dependencies and run in development:

```bash
cd server
npm install
npm run dev
```

3. Endpoints

- `POST /api/payments/create-checkout-session` — Create Stripe Checkout session (body: items, userId)
- `POST /api/payments/subscription/create` — Create Stripe subscription
- `POST /api/webhook` — Stripe webhook (raw body required)
- `POST /api/auth/request-otp` — Request OTP for phone login (dev returns OTP in response)
- `POST /api/auth/verify-otp` — Verify OTP and return user + token
- `POST /api/ai/upload-video` — Upload short workout video (multipart/form-data)
- `GET /api/ai/job/:id` — Poll job result (demo stub)

Notes
- This is a scaffold: swap the in-memory OTP store for Redis and replace AI stubs with real MediaPipe/OpenCV workers for production.
