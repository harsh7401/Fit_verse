import React from 'react';

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
