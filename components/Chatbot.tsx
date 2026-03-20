import React, { useState } from 'react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-black rounded-full p-4 shadow-2xl hover:scale-105 transition"
        onClick={() => setOpen(o => !o)}
      >
        <span role="img" aria-label="AI">🤖</span>
      </button>
      {open && (
        <div className="fixed bottom-24 right-8 z-50 w-80 bg-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-white/10">
          <div className="font-bold mb-2">PulseAI Assistant</div>
          <div className="text-white/80 text-sm mb-4">How can I help you with your fitness journey?</div>
          {/* Chat UI goes here */}
          <input className="w-full p-2 rounded bg-black/30 border border-white/10 text-white" placeholder="Ask me anything..." />
        </div>
      )}
    </>
  );
}
