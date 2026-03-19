import React from 'react';
export default function ProductCatalog() {
  return (
    <div className="rounded-xl bg-black/40 p-6 shadow border border-white/10 mb-8">
      <h2 className="text-xl font-bold mb-4 text-neon-blue">Product Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example product */}
        <div className="rounded-lg bg-white/5 p-4 flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-3" />
          <div className="font-bold text-white">Whey Protein</div>
          <div className="text-neon-blue font-bold">₹2,499</div>
          <button className="mt-2 px-4 py-2 rounded bg-neon-blue text-black font-bold hover:bg-neon-purple transition">Buy</button>
        </div>
        {/* More products will be mapped here */}
      </div>
    </div>
  );
}
