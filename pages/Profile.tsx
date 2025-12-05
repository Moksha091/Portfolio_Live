
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CREDITS, PERSONAL_INFO, EXPERIENCE } from '../constants';

export const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
  });

  // Split parallax: Text moves slowly up, Skills move faster up (or down relative to text)
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const ySkills = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="min-h-screen w-full py-32 flex items-center">
      <div className="max-w-[90rem] mx-auto w-full">
        <motion.div style={{ y: yText }} className="mb-20 border-b border-border pb-6">
           <h1 className="text-sm font-bold uppercase tracking-widest text-text-muted">Index / 02</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          
          {/* Narrative Column */}
          <motion.div style={{ y: yText }} className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Profile Picture */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
               whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               className="mb-12"
            >
                <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl border border-border group cursor-none">
                    <div className="absolute inset-0 bg-bg/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                    {/* User: Ensure your image is named 'profile.jpg' and placed in the public/images folder */}
                    <img 
                        src="/images/profile.jpg" 
                        alt={PERSONAL_INFO.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100 ease-out"
                    />
                </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
               className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-text-primary mb-12 tracking-tight">
                Engineering interfaces with <span className="text-text-muted">quiet confidence</span>.
              </h2>
              <div className="space-y-8 text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl">
                <p>
                  I am a Design Engineer based in {PERSONAL_INFO.location}. My practice exists at the intersection of systems thinking and aesthetic precision.
                </p>
                <p>
                  I do not simply build applications; I construct digital environments where every interaction interacts with user psychology. The goal is not just utility, but immersion.
                </p>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-8">Professional Trajectory</h3>
              <div className="space-y-6">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="group border border-border bg-surface p-8 rounded-lg hover:border-text-primary/30 transition-colors duration-500 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                      <h4 className="text-2xl font-medium text-text-primary">{exp.company}</h4>
                      <span className="text-sm font-mono text-text-muted">{exp.period}</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <span className="text-lg text-text-primary font-light">{exp.role}</span>
                      <span className="hidden md:block w-1 h-1 bg-text-muted rounded-full"></span>
                      <span className="text-sm text-text-secondary font-mono uppercase tracking-wide">{exp.location}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-text-secondary font-light leading-relaxed">
                          <span className="mt-2.5 w-1 h-1 bg-text-muted shrink-0 rounded-full group-hover:bg-text-primary transition-colors duration-300"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Grid (Spec Sheet Style) */}
          <motion.div style={{ y: ySkills }} className="lg:col-span-5 pt-12 lg:pt-0">
             <div className="sticky top-32">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted mb-10">Technical Specifications</h3>
                 
                 <div className="flex flex-col gap-6">
                    {CREDITS.map((group, idx) => (
                        <motion.div 
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1), duration: 0.8 }}
                            className="group border border-border p-8 rounded-lg bg-surface hover:bg-bg-secondary hover:border-text-muted/40 transition-all duration-500 backdrop-blur-sm"
                        >
                            <h4 className="text-sm font-mono text-text-muted uppercase mb-6 flex items-center gap-3 group-hover:text-text-primary transition-colors duration-300 font-semibold">
                                <span className="w-1.5 h-1.5 bg-text-muted/50 rounded-full group-hover:bg-text-primary transition-colors duration-300 shadow-[0_0_8px_rgba(255,255,255,0.4)]"/>
                                {group.category}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <span 
                                        key={item} 
                                        className="text-sm text-text-primary bg-bg px-3 py-1.5 rounded-md border border-border group-hover:border-text-muted/20 transition-colors cursor-default hover:text-text-primary hover:bg-surface"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
