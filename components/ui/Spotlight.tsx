import React, { useEffect } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';

export const Spotlight: React.FC = () => {
  // Smooth spring animation for the light movement
  const mouseX = useSpring(0, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Initialize off-screen or center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 opacity-0 md:opacity-100 mix-blend-soft-light dark:mix-blend-normal"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(var(--spotlight-rgb), 0.08),
            transparent 60%
          )
        `,
      }}
    />
  );
};