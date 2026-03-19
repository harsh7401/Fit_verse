"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/ui/StatCard";
import GlassCard from "@/components/ui/GlassCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-glow p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Welcome back, <span className="text-blue-400">Harsh</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Let’s crush today’s workout 💪
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Calories Burned" value="2,430" />
        <StatCard title="Workouts" value="18" />
        <StatCard title="XP Points" value="12,890" />
      </div>

      {/* Graph + Activity */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Fake Graph */}
        <GlassCard>
          <h2 className="text-xl font-semibold mb-4">Progress</h2>
          <div className="h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-end gap-2 p-2">
            {[20, 40, 30, 60, 50, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="w-full bg-blue-500 rounded"
              />
            ))}
          </div>
        </GlassCard>

        {/* Activity */}
        <GlassCard>
          <h2 className="text-xl font-semibold mb-4">Activity</h2>
          <div className="space-y-3">
            <p>🔥 Completed Chest Workout</p>
            <p>🏃 Ran 3km</p>
            <p>💪 New PR achieved</p>
          </div>
        </GlassCard>

      </div>
    </div>
  );
}