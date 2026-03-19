import React from 'react';

// TODO: Connect to backend leaderboard API
export default function SocialLeaderboard() {
  return (
    <div className="rounded-xl bg-black/40 backdrop-blur-md p-6 shadow-lg border border-white/10">
      <h2 className="text-2xl font-bold mb-4 text-neon-purple">Leaderboard</h2>
      <ol className="space-y-2">
        <li className="flex items-center gap-3">
          <span className="text-lg font-bold text-yellow-400">1</span>
          <span className="font-semibold">@champion</span>
          <span className="ml-auto text-green-400 font-mono">XP: 12,500</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-lg font-bold text-gray-300">2</span>
          <span className="font-semibold">@runnerup</span>
          <span className="ml-auto text-green-400 font-mono">XP: 10,200</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-lg font-bold text-orange-400">3</span>
          <span className="font-semibold">@fitstar</span>
          <span className="ml-auto text-green-400 font-mono">XP: 9,800</span>
        </li>
      </ol>
    </div>
  );
}
