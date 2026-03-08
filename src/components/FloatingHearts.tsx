"use client";

import { motion } from "framer-motion";

// Partículas perla y aceituna - delicadas para señorita
const elements = [
  { id: 0, type: "pearl", size: 4, left: "12%", delay: 0, duration: 5 },
  { id: 1, type: "olive", size: 3, left: "28%", delay: 0.4, duration: 5.5 },
  { id: 2, type: "pearl", size: 3, left: "45%", delay: 0.2, duration: 5 },
  { id: 3, type: "olive", size: 4, left: "62%", delay: 0.8, duration: 5.5 },
  { id: 4, type: "pearl", size: 3, left: "78%", delay: 0.3, duration: 5 },
  { id: 5, type: "olive", size: 3, left: "92%", delay: 0.6, duration: 5.5 },
  { id: 6, type: "pearl", size: 3, left: "8%", delay: 1, duration: 5 },
  { id: 7, type: "olive", size: 4, left: "52%", delay: 0.5, duration: 5.5 },
  { id: 8, type: "pearl", size: 4, left: "85%", delay: 0.7, duration: 5 },
  { id: 9, type: "olive", size: 3, left: "35%", delay: 0.9, duration: 5.5 },
];

export default function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full"
          style={{
            left: el.left,
            bottom: -20,
            width: el.size,
            height: el.size,
            backgroundColor: el.type === "pearl" ? "rgba(248, 246, 240, 0.9)" : "rgba(139, 154, 107, 0.6)",
            boxShadow:
              el.type === "pearl"
                ? "0 0 8px rgba(248, 246, 240, 0.8)"
                : "0 0 6px rgba(139, 154, 107, 0.4)",
            border: el.type === "pearl" ? "1px solid rgba(224, 221, 212, 0.5)" : "none",
          }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: [0, 0.8, 0.8, 0],
            y: [-20, -500],
            scale: [0.3, 1, 1, 0.3],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  );
}
