"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
};

export default function FeatureCard({
  feature,
  index,
}: {
  feature: any;
  index: number;
}) {
  const mouseX = useMotionValue(300);
  const mouseY = useMotionValue(300);

  // Spring physics for smooth 3D parallax
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 600], [4, -4]);
  const rotateY = useTransform(springX, [0, 800], [-4, 4]);

  // Magnetic values for the icon and high-depth elements
  const iconX = useTransform(springX, [0, 800], [-10, 10]);
  const iconY = useTransform(springY, [0, 600], [-10, 10]);

  // Parallax layers for text depth
  const titleX = useTransform(springX, [0, 800], [-3, 3]);
  const titleY = useTransform(springY, [0, 600], [-3, 3]);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(300);
    mouseY.set(300);
  }

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "dark":
        return "bg-chromeDark text-white border-white/10 shadow-2xl";
      case "glass":
        return "bg-white/40 backdrop-blur-xl border-white/60 shadow-xl";
      case "accent":
        return "bg-primary/20 border-primary/10 shadow-lg";
      case "white":
        return "bg-white border-divider shadow-sm";
      default:
        return "bg-surfaceSunken/50 border-divider/60 shadow-sm";
    }
  };

  const getTextColor = (theme: string) => {
    return theme === "dark" ? "text-textSecondary" : "text-textSecondary";
  };

  const getHeadingColor = (theme: string) => {
    return theme === "dark" ? "text-chromeDark" : "text-chromeDark";
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`group relative overflow-hidden flex flex-col z-10 border transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${feature.colSpan} ${feature.height} ${feature.shape} ${getThemeStyles(feature.theme)} py-2`}
    >
      {/* Background Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-700 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${feature.theme === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(83, 74, 183, 0.08)"},
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${feature.theme === "dark" ? "bg-[#80e9ff]" : "bg-primary"}`}
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              x: useTransform(springX, [0, 800], [(i + 2) * -5, (i + 2) * 5]),
              y: useTransform(springY, [0, 600], [(i + 2) * -5, (i + 2) * 5]),
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main 3D Tilt Wrapper */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-20 h-full w-full p-8 lg:p-10 flex flex-col transform-gpu"
      >
        <div className="flex justify-between items-start gap-4 mb-6">
          <motion.div
            style={{ x: titleX, y: titleY, translateZ: 20 }}
            className="flex-1"
          >
            <span
              className={`text-[10px] font-[800] tracking-[0.1em] uppercase mb-2 block ${
                feature.theme === "dark" || feature.theme === "glass"
                  ? "text-[#3B5876]"
                  : "text-[#3B5876]"
              }`}
            >
              {feature.step}
            </span>
            <h3
              className={`text-[20px] md:text-[24px] font-[900] leading-tight mb-2 tracking-tight ${getHeadingColor(
                feature.theme,
              )}`}
            >
              {feature.title}
            </h3>
          </motion.div>

          <div className="flex flex-col items-end gap-3">
            <motion.div
              style={{ x: iconX, y: iconY, translateZ: 40 }}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border backdrop-blur-md ${
                feature.theme === "dark" || feature.theme === "glass"
                  ? "bg-white/10 border-white/20 text-[#3B5876] shadow-[0_0_20px_rgba(128,233,255,0.1)]"
                  : "bg-white/10 border-white/20 text-[#3B5876] shadow-[0_0_20px_rgba(128,233,255,0.1)]"
              }`}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {feature.icon}
              </motion.div>
            </motion.div>

            {feature.badge && (
              <motion.div style={{ translateZ: 30 }}>
                <span
                  className={`px-3 py-1.5 text-[10px] font-[900] rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm border ${
                    feature.badgeType === "teal"
                      ? "bg-surfaceSunken text-primary border-primary/10"
                      : "bg-accent/10 text-accent border-accent/10"
                  }`}
                >
                  {feature.badge}
                </span>
              </motion.div>
            )}
          </div>
        </div>

        <motion.p
          style={{ translateZ: 10 }}
          className={`text-[14px] md:text-[15px] font-medium leading-relaxed max-w-[600px] transition-colors ${getTextColor(feature.theme)}`}
        >
          {feature.desc}
        </motion.p>
      </motion.div>

      {/* Animated background subtle pulse */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 ${feature.theme === "dark" ? "bg-white" : "bg-primary"}`}
        />
      </div>
    </motion.div>
  );
}
