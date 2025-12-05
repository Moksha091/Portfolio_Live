import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Orb 1: Dark Slate/Gray - Top Left */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-gray-400/20 dark:bg-zinc-800/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Orb 2: Neutral Zinc - Bottom Right */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-slate-300/20 dark:bg-neutral-900/40 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Orb 3: Subtle Center Highlight */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-gray-200/20 dark:bg-white/5 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-overlay"
      />
    </div>
  );
};