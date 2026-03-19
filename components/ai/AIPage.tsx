import React from 'react';
import AIChatbot from './AIChatbot';
import AIExerciseCorrection from './AIExerciseCorrection';

export default function AIPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <AIChatbot />
        <AIExerciseCorrection />
      </section>
    </main>
  );
}
