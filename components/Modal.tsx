import React from 'react';

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white/10 rounded-2xl p-8 shadow-2xl relative min-w-[320px] max-w-lg w-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">×</button>
        {children}
      </div>
    </div>
  );
}
