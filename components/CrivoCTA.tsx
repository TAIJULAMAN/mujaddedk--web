"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function CrivoCTA() {
  const items = [
    "Boutique Litigation",
    "AmLaw 200",
    "Government Agencies",
    "Corporate Legal",
    "International Arbitration",
    "Legal Service Providers"
  ];

  return (
    <section id="demo" className="relative py-28 md:py-36 bg-[#0B132B] overflow-hidden text-center">
      <div className="max-w-[850px] mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[32px] sm:text-[40px] md:text-[46px] font-[700] text-white font-serif leading-[1.1] mb-6 tracking-tight"
        >
          Ready to give your firm a <br className="hidden sm:block" /> 
          genuine advantage in discovery?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-[#96a8c7] text-[15px] sm:text-[16px] font-medium leading-[1.6] max-w-[500px] mx-auto mb-10"
        >
          See a live demonstration with your own documents — not a scripted demo. 
          Fourteen days to evaluate on a real matter, no credit card required.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-14"
        >
          <button className="w-full sm:w-auto bg-[#3478F6] hover:bg-[#2563EB] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <PlayCircle size={18} /> Schedule a Demonstration
          </button>
          
          <a href="#pricing" className="w-full sm:w-auto bg-transparent border-[1.5px] border-slate-700 hover:border-slate-500 hover:bg-white/5 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View Pricing
          </a>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 text-[#5A6F96] text-[11px] font-bold tracking-wide"
        >
          {items.map((item) => (
             <span key={item} className="flex items-center gap-2 uppercase">
                 <span className="w-1 h-1 rounded-full bg-[#3478F6] shrink-0" />
                 {item}
             </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
