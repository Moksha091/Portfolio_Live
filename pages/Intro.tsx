import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] bg-bg flex items-center justify-center pointer-events-none"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl font-light tracking-[0.5em] uppercase text-text-primary"
        >
          Vemula Moksha
        </motion.h1>
      </div>
    </motion.div>
  );
};