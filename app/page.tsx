"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* 🔹 Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          Pulse<span className="text-blue-500">AI</span>
        </h1>

        <div className="flex gap-8 items-center text-sm">
          {["Dashboard", "Shop", "Social"].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/auth"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* 🚀 Hero Section */}
      <section className="flex flex-col items-center text-center mt-28 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Your AI Fitness Coach
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Smarter workouts. Real-time posture correction. Personalized AI guidance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mt-10"
        >
          <Link
            href="/dashboard"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-blue-500/20"
          >
            Start Now
          </Link>

          <Link
            href="/ai"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Try AI Coach
          </Link>
        </motion.div>

        {/* 🧠 Floating UI Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 w-full max-w-4xl"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition">
            <img
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e"
              alt="AI fitness"
              className="rounded-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* ⚡ Features Section */}
      <section className="mt-32 px-10 grid md:grid-cols-3 gap-8">

        {[
          {
            title: "AI Coach",
            desc: "Real-time workout guidance using AI",
          },
          {
            title: "Progress Tracking",
            desc: "Track every rep and improvement",
          },
          {
            title: "Smart Nutrition",
            desc: "AI-generated meal plans",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 📊 Stats Section */}
      <section className="mt-32 px-10 text-center">
        <div className="grid md:grid-cols-3 gap-8">

          {[
            { num: "10K+", label: "Active Users" },
            { num: "500K+", label: "Workouts Completed" },
            { num: "98%", label: "Accuracy" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-blue-400">
                {stat.num}
              </h2>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="mt-32 px-10 pb-20 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-700 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Your AI Fitness Journey
          </h2>

          <Link
            href="/auth"
            className="inline-block mt-6 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

    </main>
  );
}