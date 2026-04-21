"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CrivoAbout() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#EEEDFE] to-transparent rounded-full blur-[100px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-[#f6f9fc] to-transparent rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[12px] font-[800] text-[#534AB7] tracking-[0.15em] uppercase mb-4 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#534AB7]" />
              Our Mission
            </h4>
            <h2 className="text-[32px] md:text-[44px] font-[800] text-[#080E23] leading-[1.1] mb-6 tracking-tight">
              Rebuilding eDiscovery from the engine up.
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-relaxed mb-6">
              When we looked at the landscape of legal technology, we saw platforms built on decades-old foundations, patched together with third-party plugins, and hidden behind unpredictable per-gigabyte pricing models.
            </p>
            <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-relaxed mb-10">
              We knew there had to be a better way. Crivo is the result of years of engineering dedicated to building native processing, rendering, and search engines specifically for modern litigation. No black boxes. No hidden fees. Just relentless performance.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               <div className="space-y-2 border-l-2 border-[#3478F6]/20 pl-4">
                 <h3 className="text-[36px] font-[800] text-[#3478F6] tracking-tight">100%</h3>
                 <p className="text-[14px] font-bold text-slate-800 uppercase tracking-wider">Native Engines</p>
                 <p className="text-[13px] text-slate-500 max-w-[200px]">Built from scratch, zero reliance on third-party dependencies.</p>
               </div>
               <div className="space-y-2 border-l-2 border-[#FF5DB1]/20 pl-4">
                 <h3 className="text-[36px] font-[800] text-[#FF5DB1] tracking-tight">0¢</h3>
                 <p className="text-[14px] font-bold text-slate-800 uppercase tracking-wider">Per Gigabyte</p>
                 <p className="text-[13px] text-slate-500 max-w-[200px]">Predictable per-seat pricing that scales cleanly with your firm.</p>
               </div>
            </div>
          </motion.div>

          {/* Right Column - Visual/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glossy card container */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[32px] overflow-hidden bg-[#0A2540] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-[#ffffff15] group">
               {/* Animated gradient ring */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#3478F6] via-transparent to-[#FF5DB1] opacity-20 pointer-events-none transition-opacity duration-700" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#3478F6] rounded-full mix-blend-screen opacity-20 blur-[80px]" />
               
               {/* Content inside the visual block */}
               <div className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center z-10">
                 <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 shadow-xl">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#80e9ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V12" stroke="#80e9ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8H12.01" stroke="#80e9ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
                 <h3 className="text-white text-[24px] md:text-[28px] font-[800] leading-tight mb-4 max-w-[300px]">
                   Completely transparent technology.
                 </h3>
                 <p className="text-[#A5B4FC] text-[15px] md:text-[16px] max-w-[85%] leading-relaxed">
                   We believe you should know exactly what happens to your data down to the CPU cycle. Open architecture and full mathematical audit trails on every process.
                 </p>
                 
               </div>

               {/* Simulated code/mesh network effect in background */}
               <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            </div>

            {/* Floating badge */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-4 sm:-left-10 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20"
            >
               <div className="w-12 h-12 rounded-[14px] bg-[#E6F6EC] flex items-center justify-center shadow-inner">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C8052" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                 </svg>
               </div>
               <div>
                  <p className="text-[11px] font-[800] text-[#0C8052] uppercase tracking-[0.1em] mb-0.5">Security</p>
                  <p className="text-[16px] font-[800] text-[#080E23]">Enterprise Grade</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
