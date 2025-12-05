import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { MagneticButton } from '../components/ui/MagneticButton';
import { StarField } from '../components/ui/StarField';

export const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll Parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Parallax (Directional Light Simulation)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 20; // range -10 to 10
        const y = (e.clientY / innerHeight - 0.5) * 20;
        mouseX.set(x);
        mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Invert movement for shadow/light source effect
  const textX = useTransform(springX, (x) => x * -1); 
  const textY = useTransform(springY, (y) => y * -1);

  const transition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  const scrollToWork = () => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex flex-col justify-center relative perspective-1000 overflow-hidden">
      
      {/* Starfield Background - Left Aligned */}
      <StarField />

      {/* Text Glow / Ambient Light - Neutralized */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 left-[20%] w-[40vw] h-[40vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 dark:opacity-40" 
      />

      {/* Main Text Container - Strictly Left Aligned */}
      <div className="flex flex-col gap-0 relative z-10 select-none items-start w-full px-6 md:px-24 lg:px-32">
        <div className="overflow-hidden">
          <motion.h1 
            style={{ y: y2, x: textX }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={transition}
            className="text-[12vw] md:text-[10vw] leading-[0.9] font-medium tracking-tight text-text-primary mix-blend-normal relative z-20"
          >
            DESIGN
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            style={{ y: y1, x: textY }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="text-[12vw] md:text-[10vw] leading-[0.9] font-medium tracking-tight text-gray-500 dark:text-gray-600 mix-blend-normal relative z-10"
          >
            ENGINEER
          </motion.h1>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...transition, delay: 0.6 }}
        className="mt-12 flex flex-col items-start relative z-30 px-6 md:px-24 lg:px-32 w-full max-w-4xl"
      >
        <div className="mb-12">
          <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light leading-relaxed tracking-wide max-w-2xl">
            <span className="text-text-primary font-medium">{PERSONAL_INFO.tagline}</span> <br/>
            Constructing digital narratives with mathematical precision.
          </p>
        </div>

        <div>
            <MagneticButton onClick={scrollToWork} className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest px-8 py-4 bg-surface border border-border hover:border-text-primary/50 backdrop-blur-md transition-colors duration-300">
              Selected Works
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2 text-text-primary" />
            </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};