"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  Variants,
  useSpring,
  useTransform,
} from "framer-motion";

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

const features = [
  {
    step: "01 / INGEST",
    title: "CrivoExtract",
    desc: "Native extraction from DOCX, XLSX, PDF, EML, MSG, HTML, TXT, RTF, ODS. Metadata, page counts, word counts — all extracted in a single pass.",
    badge: "NATIVE ENGINE",
    badgeType: "teal",
    colSpan: "col-span-12 lg:col-span-7",
    height: "h-[480px] lg:h-[540px]",
    mockup: <IngestMockup />,
  },
  {
    step: "02 / RENDER",
    title: "CrivoConverter",
    desc: "DOCX, XLSX, PPTX, HTML, and email formats converted to PDF on-server via pure Python pipeline. Sub-second conversion. No external API calls.",
    badge: "NATIVE ENGINE",
    badgeType: "teal",
    colSpan: "col-span-12 lg:col-span-5",
    height: "h-[480px] lg:h-[540px]",
    mockup: <RenderMockup />,
  },
  {
    step: "03 / VIEW",
    title: "CrivoImager",
    desc: "PDF pages rendered to JPEG at any DPI using PyMuPDF. Supports TIFF, BMP, WebP passthrough natively.",
    badge: "NATIVE ENGINE",
    badgeType: "teal",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-[460px]",
    mockup: <ViewMockup />,
  },
  {
    step: "04 / EMAIL",
    title: "CrivoPSTExtract",
    desc: "Parallel PST/OST/MSG extraction with thread ID linking and custodian mapping. Terabyte-scale capable.",
    badge: "NATIVE ENGINE",
    badgeType: "teal",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-[460px]",
    mockup: <EmailMockup />,
  },
  {
    step: "05 / REVIEW",
    title: "CrivoView",
    desc: "Word, Excel, PPTX, PDF, email, image — one viewer, zero plugins. SheetJS for spreadsheets, dark mode included.",
    badge: "NATIVE VIEWER",
    badgeType: "teal",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-[460px]",
    mockup: <ReviewMockup />,
  },
  {
    step: "06 / SEARCH",
    title: "Full-Text Index",
    desc: "Every extracted word indexed in OpenSearch. Keyword search, fuzzy matching, regular expressions, field-level filters. Saved searches with cross-workspace alerts.",
    badge: "OPENSEARCH",
    badgeType: "teal",
    colSpan: "col-span-12 lg:col-span-8",
    height: "h-[420px]",
    mockup: <SearchMockup />,
  },
  {
    step: "07 / REDACT",
    title: "CrivoRedact 2.0",
    desc: "Pattern-based (SSN, EIN, email) and AI-assisted redaction. Permanent burn-in via PyMuPDF with audit trail.",
    badge: "NEW IN S40",
    badgeType: "orange",
    colSpan: "col-span-12 lg:col-span-4",
    height: "h-[420px]",
    mockup: <RedactMockup />,
  },
  {
    step: "08 / PRODUCE",
    title: "Production Engine",
    desc: "Bates numbering, slip sheet generation, load file export (DAT/OPT/CSV). TIFF, PDF, native. Full chain-of-custody.",
    badge: "COURT-READY",
    badgeType: "teal",
    colSpan: "col-span-12 lg:col-span-6",
    height: "h-[440px]",
    mockup: <ProduceMockup />,
  },
  {
    step: "09 / FIELDS",
    title: "Dynamic Field Registry",
    desc: "35 pre-built review fields across 7 categories — Media, ICR, Redaction, Comments. Fields appear automatically.",
    badge: "NEW IN S40",
    badgeType: "orange",
    colSpan: "col-span-12 lg:col-span-6",
    height: "h-[440px]",
    mockup: <FieldsMockup />,
  },
];

function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* High-tech mesh grid pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(83,74,183,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(83,74,183,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,white_20%,transparent_80%)]" /> */}

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

export default function StripeProducts() {
  return (
    <section id="solutions" className="relative py-24 md:py-32 overflow-hidden">
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
            Platform Features
          </h4>
          <h2 className="text-[28px] md:text-[36px] font-[800] text-[#080E23] leading-tight mb-4 tracking-tight">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-relaxed">
            From ingestion to production, every step runs on native Crivo
            engines — no licensing fees, no cloud dependencies, no surprises.
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

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth 3D parallax
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 600], [5, -5]);
  const rotateY = useTransform(springX, [0, 800], [-5, 5]);

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
    mouseX.set(300); // Default to center-ish resting value
    mouseY.set(300);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1500 }}
      className={`group relative bg-white border border-slate-100 shadow-sm rounded-3xl overflow-hidden flex flex-col z-10 ${feature.colSpan} ${feature.height}`}
    >
      {/* Background Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(83, 74, 183, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* Animated Gradient Border Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(52, 120, 246, 0.4),
              transparent 80%
            )
          `,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: `xor`,
          maskComposite: `exclude`,
          padding: `1px`,
        }}
      />

      {/* Text Content */}
      <div className="relative z-20 p-8 lg:p-10 pointer-events-none pb-0">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-[800] text-[#3478F6] tracking-[0.1em] uppercase mb-3 block">
              {feature.step}
            </span>
            <h3 className="text-[20px] font-[800] text-[#080E23] leading-tight mb-2 max-w-[300px]">
              {feature.title}
            </h3>
          </div>
          <span
            className={`px-2.5 py-1 text-[9px] font-[800] rounded uppercase tracking-wider whitespace-nowrap mt-1 ${
              feature.badgeType === "teal"
                ? "bg-[#E6F6EC] text-[#0C8052] shadow-[0_0_10px_rgba(12,128,82,0.1)]"
                : "bg-[#FFF3E0] text-[#E67B00] shadow-[0_0_10px_rgba(230,123,0,0.1)]"
            }`}
          >
            {feature.badge}
          </span>
        </div>
        <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[400px]">
          {feature.desc}
        </p>
      </div>

      {/* Mockup Area (Parallaxed) */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative flex-1 mt-6 overflow-hidden pointer-events-none transform-gpu"
      >
        {/* Glossy 3D glare effect */}
        <motion.div
          className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[20px]"
          style={{
            background: useMotionTemplate`
                radial-gradient(
                  circle at ${mouseX}px ${mouseY}px,
                  rgba(255, 255, 255, 0.6) 0%,
                  rgba(255, 255, 255, 0) 40%
                )
             `,
            mixBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent z-40" />
        {feature.mockup}
      </motion.div>
    </motion.div>
  );
}

// CUSTOM MOCKUP COMPONENTS

function IngestMockup() {
  return (
    <div className="absolute inset-x-8 bottom-0 h-[85%] flex items-end justify-center">
      <div className="w-full h-full bg-gradient-to-tr from-[#534AB7] via-[#3478F6] to-[#80e9ff] rounded-t-3xl p-6 flex gap-8 shadow-[0_-10px_40px_rgba(83,74,183,0.2)] relative overflow-hidden">
        {/* Advanced Grid */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

        {/* Glowing Orb */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/2 w-64 h-64 bg-[#FF5DB1]/30 blur-[60px] rounded-full pointer-events-none mix-blend-screen"
        />

        {/* File Queue Side with connected SVG lines */}
        <div className="w-[180px] h-full flex flex-col justify-end gap-4 pb-8 relative z-20">
          {[
            { tag: "PDF", name: "Contract_v2.pdf", color: "bg-red-500" },
            {
              tag: "DOCX",
              name: "Settlement_Agreement.docx",
              color: "bg-blue-500",
            },
            { tag: "EML", name: "Re_Important.eml", color: "bg-orange-500" },
          ].map((f, i) => (
            <div key={i} className="relative group">
              {/* Laser line to dashboard */}
              <motion.svg
                className="absolute left-[180px] top-4 w-24 h-[120px] overflow-visible z-0 -ml-2"
                style={{ pointerEvents: "none" }}
              >
                <motion.path
                  d={`M 0 0 C 40 0, 40 ${120 - i * 60}, 90 ${120 - i * 60}`}
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <motion.path
                  d={`M 0 0 C 40 0, 40 ${120 - i * 60}, 90 ${120 - i * 60}`}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "linear",
                  }}
                />
              </motion.svg>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white/95 backdrop-blur-xl p-3 rounded-xl shadow-2xl border border-white/60 flex items-center gap-3 relative z-10"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-bold text-white shadow-inner ${f.color}`}
                >
                  {f.tag}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-[10px] font-bold text-[#080E23] truncate">
                    {f.name}
                  </p>
                  <motion.div className="h-1 bg-slate-100 rounded mt-1 overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`h-full ${f.color}`}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dashboard Extraction Side */}
        <div className="flex-1 bg-white/95 backdrop-blur-2xl rounded-t-2xl shadow-[0_-5px_30px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col border border-white/50 relative z-20 mt-12 bg-opacity-95">
          <div className="h-10 bg-slate-50/50 backdrop-blur-md border-b border-white flex items-center px-4 gap-2">
            <div className="flex gap-1.5 mr-4">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="px-3 py-1 bg-white shadow-sm border border-slate-100 rounded-md text-[9px] font-bold text-slate-500 flex items-center gap-2">
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
              />
              Extractor Thread 1
            </div>
            <div className="px-3 py-1 bg-white shadow-sm border border-slate-100 rounded-md text-[9px] font-bold text-slate-500">
              Extractor Thread 2
            </div>
          </div>
          <div className="flex-1 p-6 relative overflow-hidden bg-white/50">
            {/* Advanced Extracting Text Animation */}
            <motion.div
              animate={{ y: [0, -100] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="space-y-4"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <span className="text-[10px] font-mono text-slate-400 w-8">
                    L{104 + i}
                  </span>
                  <div className="flex-1 flex gap-2">
                    <motion.div
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: i * 0.1,
                      }}
                      className="h-2.5 bg-gradient-to-r from-[#534AB7]/20 to-transparent rounded w-16"
                    />
                    <div
                      className={`h-2.5 bg-slate-200 rounded w-[${60 + (i % 3) * 10}%]`}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderMockup() {
  return (
    <div className="absolute inset-x-8 bottom-0 h-[85%] rounded-t-3xl bg-[#080E23] overflow-hidden p-8 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-x border-[#3478F6]/30 group">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3478F6]/20 blur-[80px] rounded-full pointer-events-none z-0" />

      {/* Top UI */}
      <div className="flex justify-between items-center mb-6 relative z-10 w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#534AB7] to-[#3478F6] flex items-center justify-center text-white font-mono text-[10px] font-bold shadow-[0_0_15px_rgba(83,74,183,0.5)]">
            PY
          </div>
          <div>
            <p className="text-[12px] text-white font-bold tracking-wider">
              CrivoConverter
            </p>
            <div className="flex items-center gap-1">
              <div className="h-1 w-12 bg-[#3478F6]/30 overflow-hidden rounded">
                <motion.div
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="h-full bg-[#3478F6]"
                />
              </div>
              <p className="text-[8px] text-[#A5B4FC] uppercase tracking-widest">
                Sub-second
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 py-1 bg-green-500/10 text-green-400 text-[9px] font-bold uppercase tracking-widest border border-green-500/30 rounded shadow-[0_0_10px_rgba(34,197,94,0.2)]">
          Running
        </div>
      </div>

      {/* Fast Terminal UI */}
      <div className="flex-1 bg-black/60 backdrop-blur-xl border border-white/5 rounded-xl p-5 font-mono text-[10px] sm:text-[11px] overflow-hidden relative z-10 shadow-inner">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 space-y-2.5 opacity-90"
        >
          <p className="text-slate-400 flex">
            <span className="text-[#3478F6] mr-2">❯</span> ./convert_batch
            --workers=16 --optimize
          </p>
          <p className="text-white/70">[INFO] Pipeline initialized in 0.002s</p>
          <motion.div className="flex flex-col gap-1">
            {[
              "Processing DOCX",
              "Processing XLSX",
              "Processing PPTX",
              "Processing EML",
            ].map((txt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ repeat: Infinity, duration: 4, delay: i * 0.2 }}
                className="text-[#80e9ff] flex justify-between pr-4"
              >
                <span>{txt} ...</span>
                <span className="text-[#3478F6]">
                  {(Math.random() * 5).toFixed(1)}ms
                </span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-[#FF5DB1]"
          >
            _
          </motion.p>
        </motion.div>
        {/* Intense Scanline */}
        <motion.div
          animate={{ top: ["-20%", "120%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-[#3478F6]/20 to-transparent pointer-events-none mix-blend-screen"
        />
      </div>
    </div>
  );
}

function ViewMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Dynamic colorful blobs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -ml-32 -mt-32 w-64 h-64 bg-gradient-to-r from-[#3478F6]/30 to-[#FF5DB1]/30 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"
      />
      <div style={{ perspective: 1200 }} className="relative mt-16 group">
        {/* Stack of documents */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              rotateY: [-10, 10, -10],
              rotateX: [10, -10, 10],
              y: [-10 + i * 5, 10 + i * 5, -10 + i * 5],
              z: [0 + i * -40, 20 + i * -40, 0 + i * -40],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{ zIndex: 10 - i }}
            className={`absolute inset-0 w-[200px] h-[280px] rounded-2xl bg-white/95 backdrop-blur-md p-5 flex flex-col transform-gpu border border-white shadow-[0_20px_40px_rgba(0,0,0,0.1)]`}
          >
            <div className="w-full h-28 bg-[#f8f9fa] rounded-lg mb-4 overflow-hidden relative border border-slate-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EEEDFE] to-white" />
              <motion.svg
                className="relative w-12 h-12 opacity-80"
                viewBox="0 0 100 100"
              >
                <motion.path
                  d="M20 80 Q 50 20 80 80"
                  fill="none"
                  stroke="url(#blue-grad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <defs>
                  <linearGradient
                    id="blue-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3478F6" />
                    <stop offset="100%" stopColor="#534AB7" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
              <div className="h-2 w-full bg-slate-200 rounded-full" />
              <div className="h-2 w-5/6 bg-slate-200 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EmailMockup() {
  const nodes = Array.from({ length: 20 }).map(() => ({
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    size: 2 + Math.random() * 5,
  }));
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent mt-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(83,74,183,0.15)_0%,transparent_100%)] pointer-events-none" />

      <svg
        viewBox="0 0 100 100"
        className="w-[120%] h-[120%] p-4 origin-center"
      >
        {/* Animated Connecting Lines */}
        {nodes.map(
          (n, i) =>
            i > 0 && (
              <motion.line
                key={`line-${i}`}
                x1={nodes[i - 1].x}
                y1={nodes[i - 1].y}
                x2={n.x}
                y2={n.y}
                stroke="url(#lineGrad)"
                strokeWidth="0.4"
                strokeOpacity="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
              />
            ),
        )}
        {/* Pulsing Nodes */}
        {nodes.map((n, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={n.x}
            cy={n.y}
            r={n.size}
            fill={i % 4 === 0 ? "#FF5DB1" : i % 2 === 0 ? "#3478F6" : "#80e9ff"}
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 1.5 + Math.random(),
              delay: i * 0.1,
              repeat: Infinity,
            }}
            className="filter mix-blend-multiply"
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3478F6" />
            <stop offset="100%" stopColor="#FF5DB1" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl px-4 py-3 rounded-xl shadow-2xl border border-white/60 flex items-center gap-3 z-10"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <p className="text-[10px] font-bold text-[#080E23] tracking-wider uppercase">
          Parallel Thread mapping...
        </p>
      </motion.div>
    </div>
  );
}

function ReviewMockup() {
  return (
    <div className="absolute inset-x-6 bottom-0 h-[240px] bg-[#1a1b1e] rounded-t-2xl rounded-b-none shadow-[0_-15px_40px_rgba(0,0,0,0.5)] p-4 overflow-hidden border-t border-x border-[#3478F6]/20">
      <div className="flex gap-4 h-full relative">
        {/* Glass Sidebar */}
        <div className="w-24 border-r border-[#2b2d31]/50 pr-4 space-y-3 relative z-10">
          <div className="w-full flex justify-between gap-1 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="h-1.5 bg-[#2b2d31] rounded w-full" />
          <div className="h-1.5 bg-[#2b2d31] rounded w-3/4" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-1.5 bg-[#534AB7] rounded w-full shadow-[0_0_8px_rgba(83,74,183,0.8)]"
          />
          <div className="h-1.5 bg-[#2b2d31] rounded w-5/6" />
        </div>
        {/* Main Viewer Area */}
        <div className="flex-1 bg-[#202124] rounded-xl p-5 border border-[#3c4043] relative shadow-inner overflow-hidden">
          {/* Dynamic Document Content */}
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-[#3c4043] flex items-center justify-center">
                <div className="w-4 h-4 rounded bg-[#534AB7]" />
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="h-2.5 bg-[#e8eaed] rounded w-1/3" />
                <div className="h-2 bg-[#9aa0a6] rounded w-1/4" />
              </div>
            </div>
            <div className="space-y-2 pt-2 relative z-10">
              <div className="h-1.5 bg-[#5f6368] rounded w-full" />
              <div className="h-1.5 bg-[#5f6368] rounded w-[90%]" />
              <div className="h-1.5 bg-[#5f6368] rounded w-3/4" />
            </div>
          </div>
          {/* Glowing Highlight Overlay */}
          <motion.div
            initial={{ left: "-100%" }}
            whileInView={{ left: "16px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-[82px] h-4 bg-[#FFED86]/40 rounded-sm w-[60%] flex items-center overflow-hidden border border-[#FFED86]/50"
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1s_infinite_linear]" />
          </motion.div>
          {/* AI summary dialog popping up */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 right-4 bg-[#3478F6] p-3 rounded-xl shadow-[0_10px_20px_rgba(52,120,246,0.3)] w-48 border border-[#80e9ff]/30 text-white"
          >
            <p className="text-[9px] font-bold flex justify-between">
              AI Summary <span className="bg-white/20 px-1 rounded">NEW</span>
            </p>
            <p className="text-[8px] opacity-80 mt-1 leading-snug">
              Contract obligates party to terms by Q4.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function SearchMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent mt-12 overflow-hidden">
      {/* Background gradient flares */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#3478F6]/5 to-[#534AB7]/10 rounded-full blur-[100px] -z-10" />

      <div className="w-[85%] max-w-[550px] flex flex-col items-center">
        {/* Advanced Search Bar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="w-full h-16 bg-white rounded-2xl shadow-[0_20px_60px_rgba(83,74,183,0.15)] border-2 border-transparent transition-all overflow-hidden flex items-center px-6 relative z-30"
        >
          {/* Animated Border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#534AB7] via-[#3478F6] to-[#534AB7] opacity-20 pointer-events-none rounded-2xl p-[2px]">
            <div className="w-full h-full bg-white rounded-[14px]" />
          </div>

          <div className="w-5 h-5 rounded-full border-[2.5px] border-[#534AB7] mr-4 relative z-10">
            <div className="absolute top-3.5 left-3.5 w-2.5 h-0.5 bg-[#534AB7] rotate-45 transform origin-left" />
          </div>

          {/* Typing effect */}
          <motion.span
            initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }}
            whileInView={{
              clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
            }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="text-[13px] md:text-[15px] font-mono text-[#0A2540] whitespace-nowrap z-10"
          >
            content:(fraud OR "wire transfer")
          </motion.span>

          <div className="ml-auto flex items-center gap-2 z-10 pl-4 bg-gradient-to-l from-white to-transparent">
            <div className="px-2.5 py-1 bg-slate-100 rounded-md text-[9px] font-bold text-slate-500 shadow-sm border border-slate-200">
              REGEX
            </div>
            <div className="px-2.5 py-1 bg-[#EEEDFE] rounded-md text-[9px] font-bold text-[#534AB7] shadow-sm border border-[#534AB7]/20">
              FUZZY
            </div>
          </div>
        </motion.div>

        {/* Cascading Search Results */}
        <div className="w-[95%] mt-6 relative z-20">
          {/* Line connecting to results */}
          <div className="absolute top-[-24px] left-8 w-[2px] h-6 bg-gradient-to-b from-[#534AB7]/50 to-transparent" />

          <div className="space-y-3">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="w-full bg-white/80 backdrop-blur-xl rounded-xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3478F6]" />
                <div className="flex gap-4">
                  <div className="w-10 h-12 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <div className="text-[8px] font-bold text-slate-400">
                      PDF
                    </div>
                  </div>
                  <div className="w-full space-y-2 pt-1">
                    <div className="flex gap-2 items-center">
                      <div className="h-2 bg-slate-200 rounded w-16" />
                      {/* Highlighted keyword */}
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="h-2.5 bg-[#FFED86] rounded w-20 shadow-[0_0_5px_rgba(255,237,134,0.8)]"
                      />
                      <div className="h-2 bg-slate-200 rounded w-24" />
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RedactMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center mt-20 p-8">
      {/* Ambient red warning glow */}
      <div className="absolute top-1/2 left-1/2 -mt-20 -ml-20 w-40 h-40 bg-red-500/10 rounded-full blur-[50px] pointer-events-none" />

      <div className="w-full max-w-[200px] space-y-4 bg-white/50 backdrop-blur p-6 rounded-2xl border border-white/60 shadow-lg relative z-10">
        <div className="h-2.5 w-full bg-slate-200/80 rounded" />
        <div className="flex gap-2 relative">
          <div className="h-2.5 w-1/4 bg-slate-200/80 rounded" />
          <div className="h-2.5 w-1/3 bg-slate-200/80 rounded" />
          {/* Redaction box sliding over with a laser effect */}
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "35%" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="absolute left-[28%] top-[-3px] bottom-[-3px] bg-[#0A2540] rounded flex items-center justify-end overflow-hidden z-20"
          >
            {/* Laser edge */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1.4 }}
              className="w-[2px] h-full bg-red-500 shadow-[0_0_10px_red]"
            />
          </motion.div>
          <div className="h-2.5 w-1/4 bg-slate-200/80 rounded" />
        </div>
        <div className="h-2.5 w-5/6 bg-slate-200/80 rounded" />
        <div className="flex gap-2 relative">
          <div className="h-2.5 w-1/2 bg-slate-200/80 rounded" />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "25%" }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            className="absolute left-[54%] top-[-3px] bottom-[-3px] bg-[#0A2540] rounded flex items-center justify-end overflow-hidden z-20"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1.8 }}
              className="w-[2px] h-full bg-red-500 shadow-[0_0_10px_red]"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ rotate: -90 }}
        className="absolute bottom-6 right-6 flex items-center justify-center p-2 bg-red-50 text-red-500 border border-red-100 rounded-full shadow-lg"
      >
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500/20">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-sm" />
        </div>
      </motion.div>
    </div>
  );
}

function ProduceMockup() {
  return (
    <div className="absolute inset-0 flex items-end justify-center overflow-hidden pb-4">
      {/* Main prominent document */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-[220px] h-[280px] bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-slate-100 p-6 flex flex-col relative z-30"
      >
        <div className="w-full text-right mb-8">
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block font-mono text-[10px] font-bold text-white bg-[#0A2540] px-2 py-1 rounded shadow-md uppercase tracking-widest relative overflow-hidden"
          >
            <motion.div
              initial={{ left: "-100%" }}
              whileInView={{ left: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-y-0 w-4 bg-white/30 skew-x-12"
            />
            CRI-0000142
          </motion.span>
        </div>
        <div className="flex-1 space-y-4 flex flex-col justify-center opacity-80">
          <div className="h-2 w-full bg-slate-200 rounded" />
          <div className="h-2 w-[85%] bg-slate-200 rounded" />
          <div className="h-2 w-full bg-slate-200 rounded" />
          <div className="h-2 w-[70%] bg-slate-200 rounded" />
        </div>
        <div className="mt-auto flex gap-2">
          <div className="w-8 h-8 rounded-lg border-2 border-red-500/20 flex items-center justify-center relative">
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute text-red-500 font-bold text-[8px] transform -rotate-12"
            >
              CONF
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Background cascading cards to imply mass production */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: i === 1 ? -25 : -45 }}
          transition={{ type: "spring", damping: 12, delay: i * 0.2 }}
          style={{
            scale: 1 - i * 0.05,
            zIndex: 20 - i,
            opacity: 1 - i * 0.2,
          }}
          className="absolute bottom-4 w-[220px] h-[280px] bg-slate-50 rounded-xl border border-slate-200 shadow-xl"
        />
      ))}
    </div>
  );
}

function FieldsMockup() {
  return (
    <div className="absolute right-0 bottom-0 top-16 w-[320px] bg-white rounded-tl-[32px] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] border-t border-l border-white/50 p-6 flex flex-col gap-4 backdrop-blur-sm z-20 transition-transform hover:-translate-y-2 duration-500">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-[800] text-[#0A2540] uppercase tracking-widest">
          Dynamic Coding Panel
        </p>
        <div className="px-2 py-0.5 bg-[#FFF3E0] text-[#E67B00] rounded text-[8px] font-bold">
          AUTO-SYNCED
        </div>
      </div>

      <div className="space-y-3">
        {[
          { name: "Responsiveness", active: true, color: "bg-[#3478F6]" },
          { name: "Privilege", active: true, color: "bg-[#534AB7]" },
          { name: "Issues", active: true, color: "bg-[#FF5DB1]" },
          { name: "Confidentiality", active: false, color: "bg-slate-300" },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-[#3478F6]/30 transition-colors shadow-sm"
          >
            <div className="flex gap-3 items-center">
              <div
                className={`w-1.5 h-1.5 rounded-full ${f.active ? f.color : "bg-slate-300"}`}
              />
              <span className="text-[12px] font-[600] text-[#080E23]">
                {f.name}
              </span>
            </div>

            {/* Fancy Toggle Switch */}
            <div
              className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 ${f.active ? f.color : "bg-slate-200"} shadow-inner flex items-center`}
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`w-4 h-4 bg-white rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.2)] ${f.active ? "ml-auto" : "mr-auto"}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glowing gradient cast on the parent */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-white/90 to-transparent rounded-tl-[32px] pointer-events-none" />
    </div>
  );
}
