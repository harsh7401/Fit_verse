import React from 'react';
export default function ProgressHeader() {
  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-neon-blue drop-shadow-lg">Progress</h1>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-lg bg-neon-blue text-black font-bold shadow hover:bg-neon-purple transition">Share</button>
      </div>
    </header>
  );
}
