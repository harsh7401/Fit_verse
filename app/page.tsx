export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#0f172a] to-[#1e293b] opacity-80 z-0" />
      {/* Online logo */}
      <img
        src="https://cdn.jsdelivr.net/gh/fitverse-assets/pulseai-logo-dark.svg"
        alt="PulseAI Logo"
        width={80}
        height={80}
        className="mt-20 mb-6 drop-shadow-xl z-10"
      />
      {/* Online hero banner */}
      <img
        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
        alt="Fitness Hero Banner"
        width={800}
        height={300}
        className="rounded-2xl shadow-2xl mb-8 z-10"
      />
      <section className="relative z-10 max-w-3xl mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/10 mt-8">
        <h1 className="text-5xl font-extrabold text-neon-blue mb-6 drop-shadow-lg text-center">PulseAI</h1>
        <p className="text-xl text-white/80 mb-8 text-center">Intelligent Personal Health & Fitness Operating System</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <li className="bg-black/30 rounded-xl p-6 border border-white/10 shadow-lg">
            <span className="text-neon-purple font-bold text-lg">AI Exercise Correction</span>
            <p className="text-white/70 mt-2">Upload workout videos, get instant feedback, posture detection, and real-time voice correction.</p>
          </li>
          <li className="bg-black/30 rounded-xl p-6 border border-white/10 shadow-lg">
            <span className="text-neon-blue font-bold text-lg">Social Fitness Platform</span>
            <p className="text-white/70 mt-2">Profiles, posts, reels, followers, leaderboards, and engagement system.</p>
          </li>
          <li className="bg-black/30 rounded-xl p-6 border border-white/10 shadow-lg">
            <span className="text-neon-green font-bold text-lg">E-commerce + Stripe</span>
            <p className="text-white/70 mt-2">Supplements, gym equipment, apparel, AI-based recommendations, real payment flows.</p>
          </li>
          <li className="bg-black/30 rounded-xl p-6 border border-white/10 shadow-lg">
            <span className="text-neon-yellow font-bold text-lg">Gamification & Progress</span>
            <p className="text-white/70 mt-2">XP, levels, streaks, rewards, challenges, weight, strength, habits tracking, badge showcase.</p>
          </li>
        </ul>
        <div className="flex justify-center gap-4 mt-8">
          <a href="/dashboard" className="px-6 py-3 rounded-xl bg-neon-blue text-black font-bold shadow hover:bg-neon-purple transition">Get Started</a>
          <a href="/shop" className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold shadow hover:bg-white/20 transition">Shop</a>
        </div>
      </section>
      <footer className="relative z-10 mt-16 text-center text-xs text-white/60">
        &copy; 2026 PulseAI. Built for the future of fitness.
      </footer>
    </main>
  );
}
