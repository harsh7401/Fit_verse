import React from 'react';
export default function DashboardFeed() {
  return (
    <div className="rounded-xl bg-black/40 p-6 shadow border border-white/10">
      <h2 className="text-xl font-bold mb-4 text-neon-blue">Your Feed</h2>
      <div className="text-gray-300">No new notifications. Start a workout to see updates!</div>
    </div>
  );
}
