import React from 'react';
export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="rounded-xl bg-black/40 p-6 text-center shadow border border-white/10">
        <div className="text-2xl font-bold text-neon-blue">12,500</div>
        <div className="text-xs text-gray-400 mt-1">XP</div>
      </div>
      <div className="rounded-xl bg-black/40 p-6 text-center shadow border border-white/10">
        <div className="text-2xl font-bold text-neon-purple">7</div>
        <div className="text-xs text-gray-400 mt-1">Streak</div>
      </div>
      <div className="rounded-xl bg-black/40 p-6 text-center shadow border border-white/10">
        <div className="text-2xl font-bold text-green-400">82kg</div>
        <div className="text-xs text-gray-400 mt-1">Weight</div>
      </div>
      <div className="rounded-xl bg-black/40 p-6 text-center shadow border border-white/10">
        <div className="text-2xl font-bold text-yellow-400">5</div>
        <div className="text-xs text-gray-400 mt-1">Badges</div>
      </div>
    </div>
  );
}
