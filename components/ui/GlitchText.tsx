import React from 'react';
import { motion } from 'framer-motion';

interface FadeInTextProps {
  text: string;
  className?: string;
  delay?: number;
}

// Replaced Glitch effect with a smooth professional fade-in
export const GlitchText: React.FC<FadeInTextProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
};