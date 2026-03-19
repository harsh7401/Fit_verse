import React from 'react';
export default function CheckoutForm() {
  return (
    <form className="bg-black/40 p-8 rounded-xl shadow-lg border border-white/10 w-full max-w-md space-y-6">
      <h2 className="text-2xl font-bold text-neon-blue mb-4">Stripe Payment</h2>
      <input type="text" placeholder="Card details" className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-blue" />
      <button type="submit" className="w-full py-3 rounded-lg bg-neon-blue text-black font-bold shadow hover:bg-neon-purple transition">Pay</button>
    </form>
  );
}
