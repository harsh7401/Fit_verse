import React from 'react';

export default function Badge({ label, color }: { label: string; color: 'blue' | 'purple' | 'yellow' }) {
  const colorMap = {
    blue: 'bg-gradient-to-r from-blue-500 to-cyan-400',
    purple: 'bg-gradient-to-r from-purple-500 to-pink-500',
    yellow: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold text-black shadow ${colorMap[color]}`}>{label}</span>
  );
}
