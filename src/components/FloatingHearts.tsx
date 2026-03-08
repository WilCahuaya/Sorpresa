"use client";

import { motion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  emoji: "❤️",
  size: 12 + Math.random() * 16,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
  duration: 3 + Math.random() * 4,
}));

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute text-pink-300/60"
          style={{
            left: heart.left,
            bottom: -50,
            fontSize: heart.size,
          }}
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            y: [-50, -600],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  );
}
