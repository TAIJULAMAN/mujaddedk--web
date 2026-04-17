"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function StripeSessions() {
  return (
    <section className="bg-white py-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative min-h-[440px] rounded-3xl overflow-hidden bg-[#0a2540] text-white flex flex-col justify-between"
        >
          {/* Background Highlight Effect */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[80%] h-full bg-gradient-to-l from-stripe-purple/30 via-transparent to-transparent blur-3xl" />
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-[#ff5db1]/20 to-transparent rounded-full blur-[100px]" />
          </div>

          {/* Top Content */}
          <div className="relative z-10 p-12 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-[500px]">
              <h2 className="text-[40px] md:text-[48px] font-[800] leading-[1.1] tracking-tight mb-8">
                The internet economy conference
              </h2>
              <button className="group px-4 py-2 bg-stripe-purple rounded-full flex items-center gap-2 text-[15px] font-bold transition-all hover:bg-white hover:text-stripe-purple shadow-xl shadow-stripe-purple/20">
                Join us at Sessions
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Visual representation of conference speakers/stage */}
            <div className="hidden lg:flex gap-6 mt-12 md:mt-0">
              <div className="w-[320px] h-[200px] rounded-2xl bg-gradient-to-br from-[#635bff] to-[#0a2540] border border-white/10 shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-white/10 rounded flex items-center justify-center">
                    <div className="w-12 h-1 bg-white/20 rounded" />
                 </div>
              </div>
              <div className="w-[450px] h-[200px] rounded-2xl bg-gradient-to-br from-[#ad6bff] to-[#0a2540] border border-white/10 shadow-2xl relative overflow-hidden -mr-24">
                 <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                 <div className="absolute bottom-4 left-4">
                    <div className="text-[12px] font-bold opacity-60 uppercase mb-1">stripe sessions</div>
                    <div className="w-32 h-2 bg-white/10 rounded" />
                 </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 p-12 pt-0 flex flex-wrap justify-between items-end gap-8">
            <div className="flex flex-col">
              <span className="text-[20px] font-[800] tracking-tighter mb-1">stripe <span className="font-normal opacity-60">sessions</span></span>
              <div className="w-full h-px bg-white/10 mt-2" />
            </div>
            
            <div className="flex gap-12 text-[14px] font-bold uppercase tracking-widest opacity-60">
                <div className="flex flex-col">
                    <span className="text-[10px] mb-1 opacity-50 font-medium">Date</span>
                    April 28–30, 2024
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] mb-1 opacity-50 font-medium">Location</span>
                    Moscone West, San Francisco
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
