"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function StripeCTA() {
  return (
    <section className="relative py-32 bg-stripe-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-stripe-purple/20 via-[#ff5db1]/10 to-[#ffba43]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-[750px] mx-auto"
        >
          <h2 className="text-[48px] md:text-[64px] font-[800] text-white leading-[1.08] tracking-[-0.03em] mb-6">
            Ready to get{" "}
            <span className="bg-gradient-to-r from-stripe-purple to-[#ad6bff] bg-clip-text text-transparent">
              started?
            </span>
          </h2>
          <p className="text-[19px] text-slate-400 leading-relaxed mb-12 max-w-[560px] mx-auto">
            Explore Stripe now, or create an account and start building today.
            You can also contact us to design a custom package for your
            business.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-stripe-purple hover:bg-stripe-light text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-2xl shadow-stripe-purple/40 active:scale-95 text-[17px]">
              Start now <ChevronRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all active:scale-95 text-[17px]">
              Contact sales <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
