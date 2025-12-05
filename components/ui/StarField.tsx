import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const StarField: React.FC = () => {
  // Generate a fixed set of stars to prevent hydration mismatches
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Relative to the restricted container width
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5, // Smaller stars (0.5px to 2px)
      duration: Math.random() * 4 + 3, 
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="absolute top-0 left-0 bottom-0 w-[40%] md:w-[25%] z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-50">
      
      {/* Gradient Mask to softly fade out the stars towards the center of the screen */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-bg" />

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-text-secondary rounded-full blur-[0.5px]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1], // More subtle opacity
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};