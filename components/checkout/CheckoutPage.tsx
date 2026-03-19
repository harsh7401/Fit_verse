import React from 'react';
import CheckoutHeader from './CheckoutHeader';
import CheckoutForm from './CheckoutForm';
export default function CheckoutPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <CheckoutHeader />
      <section className="max-w-2xl mx-auto px-4 py-8">
        <CheckoutForm />
      </section>
    </main>
  );
}
