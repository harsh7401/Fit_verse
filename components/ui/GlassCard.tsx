"use client";

import { motion } from "framer-motion";

export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass rounded-2xl p-6 transition-all duration-300"
    >
      {children}
    </motion.div>
  );
}