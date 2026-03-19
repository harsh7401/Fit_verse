import React from 'react';
export default function DashboardGamification() {
  return (
    <div className="rounded-xl bg-black/40 p-6 shadow border border-white/10">
      <h2 className="text-xl font-bold mb-4 text-neon-purple">Gamification</h2>
      <ul className="space-y-2">
        <li>Level: <span className="font-bold text-neon-blue">12</span></li>
        <li>XP: <span className="font-bold text-green-400">12,500</span></li>
        <li>Streak: <span className="font-bold text-yellow-400">7 days</span></li>
      </ul>
    </div>
  );
}
