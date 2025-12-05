import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Cursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 30 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHover);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHover);
    };
  }, [mouseX, mouseY]);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div 
        animate={{ 
          width: isHovering ? 64 : 12, 
          height: isHovering ? 64 : 12,
          opacity: isHovering ? 1 : 0.8
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`rounded-full border ${isHovering ? 'border-white bg-transparent' : 'bg-white border-transparent'}`}
      />
    </motion.div>
  );
};