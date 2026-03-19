import React from 'react';
import ProgressHeader from './ProgressHeader';
import ProgressGraphs from './ProgressGraphs';
import ProgressBadges from './ProgressBadges';

export default function ProgressPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <ProgressHeader />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <ProgressGraphs />
        <ProgressBadges />
      </section>
    </main>
  );
}
