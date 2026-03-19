"use client";

import GlassCard from "./GlassCard";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <GlassCard>
      <p className="text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </GlassCard>
  );
}