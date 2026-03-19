"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black blur-3xl" />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <h1 className="text-xl font-bold">
          Pulse<span className="text-blue-500">AI</span>
        </h1>

        <div className="flex gap-6 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/social">Social</Link>
          <Link
            href="/auth"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          AI Fitness System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-400"
        >
          Train smarter with AI
        </motion.p>

        <div className="flex gap-4 mt-8">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 rounded-xl"
          >
            Start
          </Link>

          <Link
            href="/ai"
            className="px-6 py-3 border border-white/20 rounded-xl"
          >
            AI Coach
          </Link>
        </div>
      </section>

    </main>
  );
}