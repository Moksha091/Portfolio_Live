import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const NAV_ITEMS = [
  { id: 'hero', label: 'Index' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'Profile' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-8 mix-blend-difference text-white">
      <button onClick={() => scrollToSection('hero')} className="text-sm font-semibold tracking-widest uppercase font-sans cursor-pointer">
        V. Moksha
      </button>

      <div className="flex items-center gap-8 md:gap-12">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id} 
              onClick={() => scrollToSection(item.id)}
              className="relative group cursor-pointer hidden md:block"
            >
              <span className={`text-xs font-medium tracking-widest uppercase transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="nav-line"
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          );
        })}

        <button 
          onClick={toggleTheme}
          className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun size={18} className="text-white" />
          ) : (
            <Moon size={18} className="text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};