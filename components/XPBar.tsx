import React from 'react';

export default function XPBar({ xp, level }: { xp: number; level: number }) {
  const percent = Math.min((xp % 1000) / 10, 100);
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between text-xs mb-1">
        <span>Level {level}</span>
        <span>{xp} XP</span>
      </div>
      <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full shadow-lg transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
