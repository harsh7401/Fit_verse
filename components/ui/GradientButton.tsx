"use client";

import { motion } from "framer-motion";

export default function GradientButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg"
    >
      {children}
    </motion.button>
  );
}