
import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Work: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Bento Grid Spans based on index for a perfect 3-column layout
  const getSpan = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2"; // Large Feature (Top Left)
    if (index === 3) return "md:col-span-3"; // Full Width Banner (Bottom)
    return "md:col-span-1"; // Standard Stack (Right side)
  };

  return (
    <section id="work" ref={containerRef} className="min-h-screen w-full py-32 relative flex flex-col justify-center">
      <div className="max-w-[90rem] mx-auto w-full h-full flex flex-col px-4 md:px-0">
        
        {/* Section Header with Parallax */}
        <motion.div 
            style={{ y: yHeader }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 border-b border-border pb-6 flex justify-between items-end relative z-10"
        >
           <h1 className="text-sm font-bold uppercase tracking-widest text-text-muted">Index / 01</h1>
           <span className="text-sm font-medium text-text-muted hidden md:block">Selected Works 2023 — 2024</span>
        </motion.div>
        
        {/* Bento Grid with Parallax */}
        <motion.div 
            style={{ y: yGrid }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 auto-rows-[minmax(350px,auto)] relative z-20"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} spanClass={getSpan(i)} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Extracted Card Component for Interaction Logic
const ProjectCard = ({ project, index, spanClass, isInView }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative rounded-lg overflow-hidden border border-border flex flex-col justify-between transition-colors duration-500 ${spanClass} bg-bg-secondary h-full cursor-none`}
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-50 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            </div>

            {/* Scanline Animation Effect */}
            <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden rounded-lg mix-blend-overlay opacity-30">
                {isHovered && (
                    <motion.div
                        initial={{ top: '-50%', opacity: 0 }}
                        animate={{ top: '150%', opacity: 1 }}
                        transition={{ 
                            duration: 2, 
                            ease: "linear", 
                            repeat: Infinity,
                            repeatDelay: 0.5 
                        }}
                        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent w-full blur-sm"
                    />
                )}
            </div>
            
            {/* Content Layer */}
            <div className="relative z-20 flex justify-between items-start w-full p-8 md:p-10 mb-auto">
                <span className="text-sm font-mono font-bold text-white/60 group-hover:text-white transition-colors duration-500">/{project.number}</span>
                <div className="p-3 rounded-full bg-white/10 text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-black">
                    <ArrowUpRight size={20} />
                </div>
            </div>

            <div className="relative z-20 mt-auto w-full p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-semibold uppercase tracking-wider border border-white/20 px-3 py-1.5 rounded-full text-white/80 backdrop-blur-sm group-hover:border-white/40 group-hover:text-white bg-black/20">
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* Text Lift and Shadow Effect */}
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 transition-all duration-500 group-hover:-translate-y-1 group-hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    {project.title}
                </h2>
                <p className="text-lg text-white/70 font-light line-clamp-2 transition-all duration-500 max-w-[95%] group-hover:text-white/90 group-hover:-translate-y-1">
                    {project.description}
                </p>
            </div>
        </motion.a>
    );
};
