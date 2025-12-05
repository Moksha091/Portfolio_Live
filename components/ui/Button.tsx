import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  
  const baseStyles = "px-8 py-3 rounded-full font-sans font-medium text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-bg-dark hover:bg-gray-200 shadow-lg shadow-white/10",
    secondary: "bg-accent-primary text-white hover:bg-accent-primary/90 shadow-lg shadow-accent-primary/20",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};