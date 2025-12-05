
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yFooter = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="contact" ref={containerRef} className="min-h-[80vh] flex flex-col justify-center items-center w-full pb-20 relative overflow-hidden">
       <motion.div 
         style={{ y }}
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
         className="text-center relative z-10 w-full flex flex-col items-center"
       >
         <p className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-8">Initiate Collaboration</p>
         
         {/* Static interaction - No magnetic effect, no color shift */}
         <div 
            className="group relative z-20 cursor-pointer" 
            onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
         >
             <h1 className="text-[12vw] md:text-[10vw] leading-none font-bold tracking-tighter text-text-primary">
                LET'S TALK
             </h1>
         </div>
         
         <motion.div 
            style={{ y: yFooter }}
            className="mt-24 flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center text-sm uppercase tracking-widest text-text-secondary"
         >
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Twitter</a>
         </motion.div>

         <motion.div style={{ y: yFooter }} className="mt-12 text-xs text-text-muted opacity-50">
            © {new Date().getFullYear()} Vemula Moksha
         </motion.div>
       </motion.div>
    </section>
  );
};
