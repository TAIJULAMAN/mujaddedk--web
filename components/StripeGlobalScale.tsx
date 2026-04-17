"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Play, Pause, Moon } from "lucide-react";

export default function StripeGlobalScale() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-[#0a2540] overflow-hidden text-white"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#1e3a8a_0%,#0a2540_70%)] opacity-50" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[44px] md:text-[56px] font-[700] tracking-tight leading-[1.1]"
          >
            The backbone <br className="md:hidden" /> of global commerce
          </motion.h2>
        </div>

        {/* Divider Top */}
        <div className="w-full h-[1px] bg-white/10 mb-12 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatItem
            value="135+"
            label="currencies and payment methods supported"
            delay={0.1}
            isInView={isInView}
          />
          <StatItem
            value="$1.9T"
            label="in payments volume processed in 2025"
            delay={0.2}
            isInView={isInView}
          />
          <StatItem
            value="99.999%"
            label="historical uptime for Stripe services"
            delay={0.3}
            isInView={isInView}
          />
          <StatItem
            value="200M+"
            label="active subscriptions managed on Stripe Billing"
            delay={0.4}
            isInView={isInView}
          />
        </div>

        {/* Divider Middle */}
        <div className="w-full h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 relative">
            <div className="absolute top-0 right-0 flex items-center gap-4 -translate-y-1/2 bg-[#0a2540] border border-white/10 rounded-lg px-3 py-1.5 shadow-xl">
                <div className="flex items-center gap-3">
                    <Pause size={12} className="text-white fill-white cursor-pointer hover:scale-110 transition-transform" />
                    <Play size={12} className="text-white/20 cursor-pointer hover:text-white/40 transition-colors" />
                </div>
                <div className="w-[1px] h-3 bg-white/10" />
                <Moon size={12} className="text-white/40 cursor-pointer hover:text-white transition-colors" />
            </div>
        </div>

        {/* Dense Silk Burst Visualization */}
        <div className="relative h-[600px] w-full mt-12 flex justify-center items-end overflow-visible">
             <SilkBurst isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
function StatItem({ value, label, delay, isInView }: { value: string; label: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="text-center md:text-left"
    >
      <p className="text-[32px] md:text-[36px] font-[700] tracking-tight mb-2">
        {value}
      </p>
      <p className="text-[13px] text-white/50 font-medium max-w-[180px] mx-auto md:mx-0 leading-snug">
        {label}
      </p>
    </motion.div>
  );
}

function SilkBurst({ isInView }: { isInView: boolean }) {
  // Generate many white particles/lines for a dense fiber-optic look
  const particleCount = 450;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    // Emergence point is bottom center
    const angle = (Math.random() * 160) - 170; // Narrower upward sweep
    const length = 150 + Math.pow(Math.random(), 2) * 450;
    const opacity = 0.05 + Math.random() * 0.4;
    const duration = 1.5 + Math.random() * 3;
    const delay = Math.random() * 8;
    const size = Math.random() * 1.5 + 0.2;
    
    return { id: i, angle, length, opacity, duration, delay, size };
  });

  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none flex items-end justify-center">
      {/* Central Base Glow */}
      <div className="absolute bottom-[-100px] w-[900px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-50px] w-[400px] h-[200px] bg-blue-400/20 blur-[80px] rounded-full" />
      
      <svg viewBox="0 0 1000 800" className="w-full h-full overflow-visible" filter="url(#glow)">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {isInView && particles.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const x2 = 500 + Math.cos(rad) * p.length;
          const y2 = 800 + Math.sin(rad) * p.length;
          
          return (
            <React.Fragment key={p.id}>
              {/* Particle line */}
              <motion.line
                x1="500"
                y1="800"
                x2={x2}
                y2={y2}
                stroke="white"
                strokeWidth={p.size * 0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                    pathLength: [0, 0.4, 0],
                    pathOffset: [0, 1.2],
                    opacity: [0, p.opacity, 0] 
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Head particle */}
              <motion.circle
                cx="500"
                cy="800"
                r={p.size}
                fill="white"
                animate={{
                    cx: [500, x2],
                    cy: [800, y2],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
              />
            </React.Fragment>
          );
        })}
      </svg>
    </div>
  );
}



