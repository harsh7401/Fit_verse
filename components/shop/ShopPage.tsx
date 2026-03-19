import React from 'react';
import ShopHeader from './ShopHeader';
import ProductCatalog from './ProductCatalog';
import ShopRecommendations from './ShopRecommendations';

export default function ShopPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <ShopHeader />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <ProductCatalog />
        <ShopRecommendations />
      </section>
    </main>
  );
}
