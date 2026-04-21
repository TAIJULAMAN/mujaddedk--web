"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Pause, Sun } from "lucide-react";

export default function StripeGlobalScale() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative pt-24 pb-0 bg-white font-sans overflow-hidden">
      
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[#0A2540] text-[42px] md:text-[54px] font-[700] tracking-tight leading-[1.1]"
        >
          The backbone <br /> of global commerce
        </motion.h2>
      </div>

      {/* Top Divider */}
      <div className="max-w-[1040px] mx-auto w-full relative z-10 px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-60" />
      </div>

      {/* Stats Grid */}
      <div className="max-w-[1040px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 relative z-10">
        <StatItem
          value="135+"
          label="currencies and payment"
          label2="methods supported"
          delay={0.1}
          isInView={isInView}
        />
        <StatItem
          value="$1.9T"
          label="in payments volume"
          label2="processed in 2025"
          delay={0.2}
          isInView={isInView}
        />
        <StatItem
          value="99.999%"
          label="historical uptime"
          label2="for Stripe services"
          delay={0.3}
          isInView={isInView}
        />
        <StatItem
          value="200M+"
          label="active subscriptions"
          label2="managed on Stripe Billing"
          delay={0.4}
          isInView={isInView}
        />
      </div>

      {/* Bottom Divider */}
      <div className="max-w-[1040px] mx-auto w-full relative z-10 px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-60" />
      </div>

      {/* Silk Burst Presentation Canvas */}
      <div className="max-w-[1200px] mx-auto relative h-[500px] sm:h-[600px] mt-2 sm:mt-8 flex justify-center items-end">
        {/* Glow behind the burst */}
        <div className="absolute bottom-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_bottom,#fff8f0_0%,#fffdfa_40%,transparent_70%)] mix-blend-multiply pointer-events-none" />
        
        <SilkBurst isInView={isInView} />
      </div>

    </section>
  );
}

function StatItem({ value, label, label2, delay, isInView }: { value: string; label: string; label2: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <p className="text-[32px] md:text-[40px] font-medium text-[#425466] tracking-tight mb-2">
        {value}
      </p>
      <p className="text-[13px] md:text-[14px] text-[#6b7c93] font-medium leading-[1.4]">
        {label}<br/>{label2}
      </p>
    </motion.div>
  );
}

function SilkBurst({ isInView }: { isInView: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particleCount = 300;
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      // Fan out tightly from the center bottom
      const angle = -160 + Math.random() * 140; 
      
      const baseLength = 150;
      const randomExtension = Math.pow(Math.random(), 2) * 500;
      const length = baseLength + randomExtension;
      
      const opacity = Math.random() * 0.8 + 0.2;
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * 4;
      const size = Math.random() * 1.5 + 1;
      
      const colors = ["#3478F6", "#FF5DB1", "#80e9ff", "#4f46e5", "#c026d3"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return { id: i, angle, length, opacity, duration, delay, size, color };
    });
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-end justify-center">
      
      {/* UI Controls */}
      <div className="absolute top-4 right-10 flex items-center gap-2 z-50">
         <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded px-2 py-1 text-[#3478F6] shadow-sm">
             <Pause size={12} strokeWidth={2.5} className="cursor-pointer hover:text-white transition-colors" />
             <div className="w-[1px] h-3 bg-white/20 mx-0.5" />
             <Sun size={12} strokeWidth={2.5} className="cursor-pointer hover:text-white transition-colors" />
         </div>
      </div>

      <svg viewBox="0 0 1000 600" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMax slice">
        <defs>
          <radialGradient id="fadeOrigin" cx="50%" cy="100%" r="70%">
             <stop offset="0%" stopColor="transparent" />
             <stop offset="15%" stopColor="transparent" />
             <stop offset="40%" stopColor="white" stopOpacity="0.5" />
             <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
        </defs>

        <g mask="url(#fadeOrigin)">
          {isInView && particles.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const originX = 500;
            const originY = 600; // Exact bottom center
            
            const x2 = originX + Math.cos(rad) * p.length;
            const y2 = originY + Math.sin(rad) * p.length;
            
            // Random sway between 1.5 and 4 degrees
            const swayAmount = Math.random() * 2.5 + 1.5;
            
            return (
              <React.Fragment key={p.id}>
                {/* 
                  Group for swaying/floating. 
                  Lines are permanently visible instead of splitting/growing.
                */}
                <motion.g
                  style={{ transformOrigin: "500px 600px" }}
                  animate={{ rotate: [-swayAmount, swayAmount, -swayAmount] }}
                  transition={{
                    duration: p.duration * 3, // Slow, gentle floating sway
                    delay: p.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* The static, fully visible track */}
                  <line
                    x1={originX}
                    y1={originY}
                    x2={x2}
                    y2={y2}
                    stroke={p.color}
                    strokeWidth={p.size * 0.3}
                    strokeLinecap="round"
                    opacity={p.opacity}
                  />
                  
                  {/* The permanent glowing tip at the end of the line */}
                  <motion.circle
                    cx={x2}
                    cy={y2}
                    r={p.size}
                    fill={p.color}
                    animate={{
                      opacity: [p.opacity, p.opacity * 0.4, p.opacity],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: p.duration * 1.5,
                      delay: p.delay,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.g>
              </React.Fragment>
            );
          })}
        </g>
      </svg>
    </div>
  );
}



