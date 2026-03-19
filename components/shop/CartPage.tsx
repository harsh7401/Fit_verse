import React from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const cartItems = [
  {
    id: 1,
    name: 'Whey Protein',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    qty: 1,
  },
  {
    id: 2,
    name: 'Resistance Bands',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    qty: 2,
  },
];

export default function CartPage() {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
        <div className="space-y-4 mb-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 bg-black/30 rounded-xl p-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="font-bold">{item.name}</div>
                <div className="text-white/70 text-sm">${item.price.toFixed(2)}</div>
              </div>
              <div className="text-white/80">x{item.qty}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-lg">Total</span>
          <span className="text-xl">${total.toFixed(2)}</span>
        </div>
        <Button href="/checkout" variant="primary" size="lg" className="w-full">Checkout</Button>
      </Card>
    </div>
  );
}
