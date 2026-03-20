import React from 'react';

// Dummy graph component (replace with chart.js or recharts for real data)
export default function Graph({ data, label }: { data: number[]; label: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-6 shadow-xl border border-white/10">
      <div className="font-bold mb-2">{label}</div>
      <div className="h-24 flex items-end gap-1">
        {data.map((v, i) => (
          <div key={i} className="bg-gradient-to-t from-blue-500 via-purple-600 to-pink-500 rounded-t w-3" style={{ height: `${v * 2}px` }} />
        ))}
      </div>
    </div>
  );
}
