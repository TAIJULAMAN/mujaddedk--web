"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function CrivoCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    "Boutique Litigation",
    "AmLaw 200",
    "Corporate Legal",
    "International Arbitration",
    "Legal Service Providers"
  ];

  return (
    <section 
      id="demo" 
      ref={containerRef}
      className="relative py-28 md:py-40 bg-slate-50 overflow-hidden flex items-center justify-center font-sans"
    >
      
      {/* Animated Glowing Orbs (Softened for Light Mode) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          x: [0, 80, 0], 
          y: [0, -60, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3478F6] opacity-[0.08] blur-[100px] rounded-full mix-blend-multiply pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          x: [0, -60, 0], 
          y: [0, 80, 0] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[15%] translate-x-1/4 w-[500px] h-[500px] bg-[#FF5DB1] opacity-[0.06] blur-[120px] rounded-full mix-blend-multiply pointer-events-none z-0" 
      />
      
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(10,37,64,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,0.3) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-[1100px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Glassmorphic Container */}
        <motion.div
           initial={{ opacity: 0, y: 40, scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="w-full relative rounded-3xl md:rounded-[40px] border border-slate-200 bg-white/70 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          {/* Subtle top border gradient */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3478F6] to-transparent opacity-30" />
          
          <div className="p-10 md:p-16 lg:p-20 text-center flex flex-col items-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-[#3478F6] text-[11px] font-[800] tracking-[0.15em] uppercase mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3478F6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3478F6]"></span>
              </span>
              Start your free trial
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[34px] sm:text-[46px] md:text-[56px] font-[800] text-[#0A2540] leading-[1.1] tracking-tight mb-6 max-w-[800px]"
            >
              Ready to give your firm a genuine advantage in discovery?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[#425466] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[550px] mx-auto mb-12"
            >
              See a live demonstration with your own documents — not a scripted demo. 
              Fourteen days to evaluate on a real matter, no credit card required.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full sm:w-auto"
            >
              {/* Primary Premium Button */}
              <button className="relative group w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold flex items-center justify-center overflow-hidden shadow-[0_0_40px_-10px_rgba(52,120,246,0.4)] hover:shadow-[0_0_60px_-10px_rgba(52,120,246,0.6)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3478F6] via-[#2563EB] to-[#6034f6] scale-[1.05] group-hover:scale-100 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <PlayCircle size={18} className="opacity-90" /> 
                  Schedule a Demonstration
                </span>
              </button>
              
              {/* Secondary Premium Button */}
              <a href="#pricing" className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-slate-50 shadow-sm">
                View Pricing
                <ArrowRight size={16} className="text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1.5 transition-all duration-300" />
              </a>
            </motion.div>
          </div>
          
          {/* Decorative Corner Glow */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#3478F6] opacity-[0.05] blur-[80px] rounded-full" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#FF5DB1] opacity-[0.05] blur-[80px] rounded-full" />
        </motion.div>

        {/* Footer Items below the container */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.7 }}
           className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[#6b7c93] text-[12px] md:text-[13px] font-[800] tracking-[0.1em]"
        >
          {items.map((item) => (
             <motion.span 
               key={item} 
               whileHover={{ color: "#0A2540" }}
               className="flex items-center gap-2.5 uppercase cursor-default transition-colors"
             >
                 <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                 {item}
             </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
