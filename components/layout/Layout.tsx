import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Cursor } from './Cursor';
import { Grain } from '../ui/Grain';
import { BackgroundGradient } from './BackgroundGradient';
import { Spotlight } from '../ui/Spotlight';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-bg text-text-primary font-sans selection:bg-accent-cyan/20 selection:text-text-primary transition-colors duration-500">
      <Spotlight />
      <BackgroundGradient />
      <Grain />
      <Cursor />
      <Navbar />

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full min-h-screen px-8 md:px-16 pt-32 pb-20"
      >
        {children}
      </motion.main>
    </div>
  );
};