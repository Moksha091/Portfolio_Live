
import React from 'react';
import { Navbar } from './Navbar';
import { Cursor } from './Cursor';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const HUDLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-bg-dark text-text-primary overflow-hidden font-sans selection:bg-accent-primary/30 selection:text-white">
      
      {/* Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/10 rounded-full blur-[120px]" />
      </div>

      <Cursor />
      <Navbar />

      <main className="relative z-10 w-full min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 border-t border-white/5 mt-auto px-6 md:px-12 flex justify-between items-center text-sm text-text-muted">
        <div>© {new Date().getFullYear()} Vemula Moksha</div>
        <div className="flex gap-6">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Twitter size={18} /></a>
        </div>
      </footer>
    </div>
  );
};
