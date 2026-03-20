// Seed script for demo data
const mongoose = require('../lib/db');
const Product = require('../models/Product');

async function seedProducts() {
  await Product.deleteMany({});
  await Product.insertMany([
    {
      title: 'Whey Protein',
      description: 'Premium grass-fed whey protein for muscle growth and recovery.',
      price: 49.99,
      currency: 'usd',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80',
      inventory: 100
    },
    {
      title: 'Resistance Bands',
      description: 'Durable bands for strength and mobility training.',
      price: 19.99,
      currency: 'usd',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      inventory: 200
    }
  ]);
  console.log('Seeded products');
  process.exit();
}

seedProducts();
