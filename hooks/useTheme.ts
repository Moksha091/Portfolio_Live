import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Type checking for document.startViewTransition
    const doc = document as any;

    if (!doc.startViewTransition) {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      return;
    }

    const transition = doc.startViewTransition(() => {
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    });

    transition.ready.then(() => {
      // Wave originates from the top-right corner
      const x = window.innerWidth;
      const y = 0;
      
      // Calculate radius to cover the furthest corner (bottom-left)
      const right = window.innerWidth - x;
      const bottom = window.innerHeight - y;
      const radius = Math.hypot(
        Math.max(x, right),
        Math.max(y, bottom)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return { theme, toggleTheme };
};