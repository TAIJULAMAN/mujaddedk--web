"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  Variants,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Search,
  Sparkles,
  Cloud,
  Zap,
} from "lucide-react";

// --- Variants ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

// --- Content Data ---

const features = [
  {
    step: "01 / METRICS",
    title: "Defensibility score — live, auditable, reportable.",
    desc: "Every matter in Crivo carries a live 0-100 defensibility score across four dimensions: chain of custody, audit trail, production integrity, and process documentation. See exactly where you're exposed before a sanction threatens to surface the gap. No other platform in the eDiscovery space grades your work this way.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-[4rem] rounded-bl-xl",
    theme: "glass",
    icon: <ShieldCheck size={22} />,
  },
  {
    step: "02 / INTELLIGENCE",
    title: "The reports your partners actually read.",
    desc: "Ten report types out of the box — Matter Status, Review Performance, Custodian, Processing, Privilege & Claw back, Production Summary, Search Term, Cost & AI Spend, Audit Trail, Cross-Matter Portfolio. Every report is live, exportable to PDF or CSV, and can be scheduled for automatic delivery on a cadence you set. And every matter report ships with an AI-generated executive summary partners and clients can absorb in thirty seconds. Turn eDiscovery from a black box into a reportable function.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-3xl rounded-tr-[5rem]",
    theme: "light",
    icon: <BarChart3 size={22} />,
  },
  {
    step: "03 / STRATEGY",
    title: 'ECA that answers "should we take this case?"',
    desc: "Competitors call their import screen ECA. Crivo's ECA engine is a dedicated decision-making workflow: custodian-by-custodian communication mapping, document kind analysis, AI-powered responsiveness predictions, and budget projections — all before you promote a single document into full review. Make the go/no-go call on evidence, not estimates.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-[3rem] rounded-tl-none",
    theme: "white",
    icon: <Search size={22} />,
  },
  {
    step: "04 / REVIEW",
    title: "AI review without the black box.",
    desc: "Crivo AI runs on every document by default — no premium tier, no per-seat surcharge, no opaque scoring. Every responsiveness and privilege suggestion shows its reasoning, so reviewers verify in seconds instead of second-guessing for minutes. And because AI spend is tracked in its own dedicated report, you always know what your automation is costing — per matter, per user, per week.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-3xl rounded-br-[6rem]",
    theme: "glass",
    icon: <Sparkles size={22} />,
  },
  {
    step: "05 / INFRASTRUCTURE",
    title: "Built on this decade's technology. Priced like it.",
    desc: "Crivo runs on the infrastructure you'd pick if you were starting today: modern cloud architecture, near-instant search across millions of documents, SaaS pricing that scales with your matter, not your IT footprint. While competitors charge you to maintain their 2008 technology, Crivo costs less because it costs less to run. No license renegotiation. No on-premise refugee tax. No storage surprises.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-[5rem] rounded-tr-2xl",
    theme: "accent",
    icon: <Cloud size={22} />,
  },
  {
    step: "06 / EXPERIENCE",
    title:
      "Reviewers finish faster because the product was built for reviewers.",
    desc: "Keyboard-driven coding. Resume-where-you-left-off. Native rendering of Office, PDF, email, and — uniquely — modern chat file formats rendered as readable conversations instead of source-code dumps. Document extraction coverage above 97%. The platform was designed for the reviewer coding 500 documents a day, not the salesperson running a demo.",
    badge: "",
    badgeType: "",
    colSpan: "col-span-12 md:col-span-6",
    height: "min-h-[400px] h-full",
    shape: "rounded-3xl rounded-bl-[5rem]",
    theme: "light",
    icon: <Zap size={22} />,
  },
];

// --- Sub-components ---

function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Moving lasers */}
      <motion.div
        className="absolute top-0 w-[1px] h-48 bg-gradient-to-b from-transparent via-[#3478F6] to-transparent shadow-[0_0_15px_rgba(52,120,246,0.8)]"
        style={{ left: "20%" }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-0 w-[1px] h-64 bg-gradient-to-b from-transparent via-[#534AB7] to-transparent shadow-[0_0_15px_rgba(83,74,183,0.8)]"
        style={{ left: "50%" }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#FF5DB1] to-transparent shadow-[0_0_15px_rgba(255,93,177,0.8)]"
        style={{ left: "80%" }}
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1 }}
      />

      {/* Floating ethereal orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-[#3478F6]/10 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-[#534AB7]/10 rounded-full blur-[140px]"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
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

  // Theme-based styles
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "dark":
        return "bg-[#080E23] text-white border-white/10 shadow-2xl";
      case "glass":
        return "bg-white/40 backdrop-blur-xl border-white/60 shadow-xl";
      case "accent":
        return "bg-[#EEEDFE] border-[#534AB7]/10 shadow-lg";
      case "white":
        return "bg-white border-slate-100 shadow-sm";
      default:
        return "bg-slate-50/50 border-slate-200/60 shadow-sm";
    }
  };

  const getTextColor = (theme: string) => {
    return theme === "dark" ? "text-white/70" : "text-slate-500";
  };

  const getHeadingColor = (theme: string) => {
    return theme === "dark" ? "text-white" : "text-[#080E23]";
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

      {/* Floating Interactive Background Elements (Data Particles) */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${feature.theme === "dark" ? "bg-[#80e9ff]" : "bg-[#3478F6]"}`}
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
                  ? "text-[#80e9ff]"
                  : "text-[#3478F6]"
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
                  ? "bg-white/10 border-white/20 text-[#80e9ff] shadow-[0_0_20px_rgba(128,233,255,0.1)]"
                  : "bg-white border-slate-100 text-[#3478F6] shadow-[0_10px_20px_rgba(52,120,246,0.1)]"
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
                      ? "bg-[#E6F6EC]/80 text-[#0C8052] border-[#0C8052]/10"
                      : "bg-[#FFF3E0]/80 text-[#E67B00] border-[#E67B00]/10"
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
          className={`absolute inset-0 ${feature.theme === "dark" ? "bg-white" : "bg-[#534AB7]"}`}
        />
      </div>
    </motion.div>
  );
}

// --- Main Export ---

export default function StripeProducts() {
  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden">
      <AnimatedGridBackground />
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mb-16 relative"
        >
          {/* Header glowing accent line */}
          <div className="absolute -left-6 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3478F6] to-transparent rounded-r-sm hidden sm:block" />

          <h4 className="text-[12px] font-[800] text-[#534AB7] tracking-[0.15em] uppercase mb-4 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5DB1] animate-pulse shadow-[0_0_8px_#FF5DB1]" />
            Crivo
          </h4>
          <h2 className="text-[28px] md:text-[36px] font-[800] text-[#080E23] leading-tight mb-4 tracking-tight">
            eDiscovery you can defend. Measurably.
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-relaxed">
            The first platform that scores your matter&apos;s defensibility in
            real time — so you know where you stand before opposing counsel
            does.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-12 gap-6 relative"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
