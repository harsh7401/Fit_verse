import React from 'react';
import Modal from './Modal';

export default function RewardsPopup({ open, onClose, reward }: { open: boolean; onClose: () => void; reward: string }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center">
        <div className="text-5xl mb-4">🏆</div>
        <div className="text-2xl font-bold mb-2">Congratulations!</div>
        <div className="text-lg text-white/80 mb-4">You earned: <span className="font-bold text-neon-blue">{reward}</span></div>
        <button onClick={onClose} className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-black font-bold shadow hover:opacity-90 transition">Close</button>
      </div>
    </Modal>
  );
}
