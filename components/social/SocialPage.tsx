import React from 'react';
import SocialFeed from './SocialFeed';
import SocialLeaderboard from './SocialLeaderboard';

export default function SocialPage() {
  return (
  <main className="min-h-screen bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      <section className="max-w-5xl mx-auto px-4 py-8">
        <SocialFeed />
        <SocialLeaderboard />
      </section>
    </main>
  );
}
