import React from 'react';

export default function StatsCard({ label, value, icon }: { label: string; value: string | number; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-6 shadow-xl border border-white/10">
      {icon && <div className="text-3xl">{icon}</div>}
      <div>
        <div className="text-lg font-bold">{label}</div>
        <div className="text-2xl">{value}</div>
      </div>
    </div>
  );
}
