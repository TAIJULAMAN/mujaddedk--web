"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronRight, Maximize2 } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export default function StripeProducts() {
  return (
    <section className="relative bg-[#f6f9fc] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mb-16"
        >
          <h2 className="text-[18px] font-semibold text-stripe-slate mb-4">
            Flexible solutions for every business model.{" "}
            <span className="text-stripe-slate/60 font-medium">
              Grow your business with a comprehensive set of payments and
              financial tools—designed to work individually or together.
            </span>
          </h2>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Row 1: 2 Cards */}
          <div className="col-span-12 lg:col-span-7">
            <ProductCard
              title="Accept and optimize payments globally—online and in person"
              className="h-[480px]"
              index={0}
            >
              <PaymentsMockup />
            </ProductCard>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <ProductCard
              title="Enable any billing model"
              className="h-[480px]"
              index={1}
            >
              <BillingMockup />
            </ProductCard>
          </div>

          {/* Row 2: 3 Cards */}
          <div className="col-span-12 md:col-span-4">
            <ProductCard
              title="Monetize through agentic commerce"
              className="h-[460px]"
              index={2}
            >
              <AgenticMockup />
            </ProductCard>
          </div>
          <div className="col-span-12 md:col-span-4">
            <ProductCard
              title="Create a card issuing program"
              className="h-[460px]"
              index={3}
            >
              <IssuingMockup />
            </ProductCard>
          </div>
          <div className="col-span-12 md:col-span-4">
            <ProductCard
              title="Access borderless money movement with stablecoins and crypto"
              className="h-[460px]"
              index={4}
            >
              <CryptoMockup />
            </ProductCard>
          </div>

          {/* Row 3: 1 Wide Card */}
          <div className="col-span-12">
            <ProductCard
              title="Embed payments in your platform"
              className="h-[400px]"
              index={5}
              isWide
            >
              <PlatformMockup />
            </ProductCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  children,
  className = "",
  index,
  isWide = false,
}: {
  title: string;
  children?: React.ReactNode;
  className?: string;
  index: number;
  isWide?: boolean;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`group relative rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col ${className}`}
    >
      <div className="p-8 pb-4 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-[18px] font-bold text-stripe-dark leading-tight max-w-[200px]">
            {title}
          </h3>
          <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center text-slate-300 transition-colors group-hover:bg-stripe-purple group-hover:text-white">
            <Maximize2 size={12} />
          </div>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">{children}</div>
    </motion.div>
  );
}

// --- Mockup Components ---

function PaymentsMockup() {
  return (
    <div className="absolute inset-x-8 bottom-0 h-full flex items-end justify-center pointer-events-none">
      <div className="relative w-full h-[85%] bg-gradient-to-tr from-[#635bff] to-[#80e9ff] rounded-t-2xl p-6 flex gap-4 shadow-2xl">
        {/* iPhone Mockup (Roastery) */}
        <div className="w-[180px] h-[320px] bg-white rounded-[2.5rem] border-8 border-slate-900 shadow-2xl relative overflow-hidden shrink-0 mt-8">
          <div className="p-4 pt-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                 <div className="w-3 h-3 border border-slate-300 rounded-sm" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Pay Roastery</p>
                <div className="w-12 h-1 bg-slate-100 rounded" />
              </div>
            </div>
            <p className="text-[24px] font-[800] text-stripe-dark tracking-tight mb-4">
              $5.46
            </p>
            <div className="space-y-2 border-t border-slate-50 pt-3">
              {[
                { label: "Mocha Latte", price: "$5.50" },
                { label: "Loyalty (10% off)", price: "-$0.55", color: "text-green-500" },
                { label: "Tax", price: "$0.51" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-[9px]">
                  <span className="text-slate-400">{item.label}</span>
                  <span className={`font-bold ${item.color || "text-stripe-dark"}`}>{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-[10px] font-bold pt-1 border-t border-slate-50">
                <span>Total</span>
                <span>$5.46</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2 bg-[#ffba43] rounded-lg text-white text-[10px] font-bold">
               Continue
            </button>
          </div>
        </div>

        {/* Laptop/Dashboard Preview (Roastery Checkout) */}
        <div className="flex-1 h-[280px] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden mt-12 flex flex-col">
          <div className="h-10 border-b border-slate-50 px-4 flex items-center justify-between bg-white relative">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-48 h-6 bg-slate-50 rounded-full flex items-center px-3 gap-2">
                 <div className="w-2 h-2 bg-slate-200 rounded-full" />
                 <span className="text-[9px] text-slate-400">roastery.com/checkout</span>
            </div>
          </div>
          <div className="flex-1 flex">
            {/* Form Side */}
            <div className="flex-1 p-6 border-r border-slate-50">
              <p className="text-[12px] font-bold text-stripe-dark mb-4">ROASTERY.</p>
              <div className="space-y-4">
                <div>
                   <label className="text-[9px] text-slate-400 font-medium block mb-1">Email</label>
                   <div className="px-3 py-2 border border-slate-100 rounded-md text-[10px] text-stripe-dark">jane.diaz@stripe.com</div>
                </div>
                <div className="flex gap-2">
                   <button className="flex-1 py-1.5 bg-[#00d4aa] rounded border border-[#00d4aa] flex items-center justify-center text-white text-[10px] font-bold">Link</button>
                   <button className="flex-1 py-1.5 bg-black rounded flex items-center justify-center text-white text-[10px] font-bold">Pay</button>
                </div>
                <div className="space-y-2">
                   {[
                     { label: "Card", active: true },
                     { label: "Affirm", sub: "Pay now or in 4 interest-free payments" },
                     { label: "Cash App" },
                     { label: "Crypto" },
                   ].map((method) => (
                     <div key={method.label} className={`p-2 border rounded-md flex items-center gap-2 ${method.active ? "border-stripe-purple bg-stripe-purple/[0.02]" : "border-slate-50"}`}>
                        <div className={`w-3 h-3 rounded-full border ${method.active ? "border-stripe-purple border-4" : "border-slate-200"}`} />
                        <div>
                          <p className="text-[9px] font-bold text-stripe-dark">{method.label}</p>
                          {method.sub && <p className="text-[7px] text-slate-400">{method.sub}</p>}
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
            {/* Summary Side */}
            <div className="w-[180px] p-6 bg-slate-50/50">
               <p className="text-[10px] font-bold text-stripe-dark mb-6">Order summary</p>
               <div className="flex gap-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg border border-slate-100 flex items-center justify-center overflow-hidden">
                     <div className="w-8 h-8 rounded bg-slate-800 flex flex-col items-center justify-center">
                        <div className="w-4 h-0.5 bg-slate-400 rounded-full mb-1" />
                        <div className="w-6 h-4 bg-slate-400 rounded-t-lg" />
                     </div>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-stripe-dark leading-tight">Electric Kettle with Temperature Control</p>
                    <p className="text-[9px] font-bold text-stripe-dark mt-1">$150.00</p>
                  </div>
               </div>
               <div className="space-y-2 border-t border-slate-100 pt-4 text-[9px]">
                  <div className="flex justify-between">
                     <span className="text-slate-400">Subtotal</span>
                     <span className="text-stripe-dark">$150.00</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-400">Tax</span>
                     <span className="text-stripe-dark">$15.00</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2">
                     <span className="text-stripe-dark">Total</span>
                     <span className="text-stripe-dark">$165.00</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BillingMockup() {
  return (
    <div className="absolute inset-x-8 bottom-0 h-full flex items-end justify-center">
      <div className="w-full h-[85%] flex flex-col gap-4">
        {/* Top Card: Pro Plan */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ad6bff]/10 flex items-center justify-center text-[#ad6bff]">
                <Maximize2 size={20} />
              </div>
              <div>
                <p className="text-[14px] font-[800] text-stripe-dark">Pro Plan</p>
                <p className="text-[11px] text-slate-400">Billed monthly</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400">
              Current
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[11px] text-slate-400 font-medium mb-1 uppercase tracking-wider">Tokens</p>
            <p className="text-[12px] font-bold text-stripe-dark">$0.01 per 1,000 units</p>
            <div className="mt-4 flex items-center gap-2">
               <Maximize2 size={12} className="text-slate-300" />
               <p className="text-[10px] font-bold text-stripe-dark">Usage meter</p>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div className="w-[65%] h-full bg-gradient-to-r from-[#635bff] to-[#ad6bff]" />
            </div>
          </div>
        </div>

        {/* Bottom Card: Statistics */}
        <div className="flex-1 bg-white rounded-t-2xl shadow-2xl border border-slate-100 p-6 flex flex-col">
          <p className="text-[11px] text-slate-400 font-bold mb-1">Tokens used in the last 30 days</p>
          <p className="text-[22px] font-[800] text-stripe-dark tracking-tighter mb-6">
            2,010,569,010
          </p>
          <div className="flex-1 flex items-end justify-between gap-1 mt-auto">
            {[20, 35, 25, 60, 40, 75, 50, 65, 45, 85, 55, 30, 40, 60, 95, 70, 40, 30].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="w-full bg-[#635bff] rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgenticMockup() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 p-8">
      {/* Background Particles Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none opacity-40">
           {Array.from({ length: 40 }).map((_, i) => (
               <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#ff5db1] rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    scale: [1, 2, 1],
                    opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                    duration: 3 + Math.random() * 4,
                    repeat: Infinity,
                }}
               />
           ))}
      </div>

      {/* Chat Messages */}
      <div className="w-full max-w-[320px] space-y-4 mb-8">
        <div className="bg-white rounded-2xl rounded-tr-sm p-4 shadow-sm border border-slate-50 ml-auto max-w-[240px]">
           <p className="text-[10px] text-stripe-dark leading-relaxed">
             I'm refreshing my wardrobe. Can you recommend some cozy, comfortable basics in size M?
           </p>
        </div>
        <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-sm border border-slate-50 mr-auto max-w-[240px]">
           <p className="text-[10px] text-stripe-dark leading-relaxed">
             Absolutely. Here are a few comfy essentials that pair well and could be a good starting point:
           </p>
        </div>
      </div>

      {/* Product Grid Mockup */}
      <div className="w-full max-w-[340px] bg-white rounded-2xl p-4 shadow-2xl border border-slate-50 relative z-10">
        <div className="grid grid-cols-2 gap-4">
           {[
             { name: "Deluxe Shirt", color: "Blue - Medium", price: "$26.00", bg: "bg-blue-500" },
             { name: "Essential Hoodie", color: "Navy - Medium", price: "$48.00", bg: "bg-[#1a1f36]" }
           ].map((product) => (
             <div key={product.name} className="flex flex-col border border-slate-50 rounded-xl overflow-hidden shadow-sm">
                <div className={`h-32 ${product.bg} flex items-center justify-center p-4`}>
                    {/* Stylized clothing icon */}
                    <div className="w-16 h-16 opacity-30 bg-white rounded-full flex items-center justify-center">
                         <div className="w-8 h-8 border-2 border-white rounded-t-lg" />
                    </div>
                </div>
                <div className="p-3">
                    <p className="text-[10px] font-bold text-stripe-dark">{product.name}</p>
                    <p className="text-[8px] text-slate-400 font-medium">{product.color}</p>
                    <p className="text-[9px] font-[800] text-stripe-dark mt-2">{product.price}</p>
                    <p className="text-[8px] text-slate-300 mt-1">Cartsy</p>
                </div>
             </div>
           ))}
        </div>
        <button className="w-full mt-4 py-3 bg-[#e8f0fe] rounded-xl text-stripe-purple text-[11px] font-[800] active:scale-95 transition-transform tracking-tight">
            Buy now
        </button>
      </div>
    </div>
  );
}

function IssuingMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50/50 to-white overflow-hidden">
      {/* Ambient glow sweep */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-[#ad6bff]/0 via-[#ad6bff]/5 to-transparent blur-3xl" />
      
      {/* Vertical Card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[220px] h-[340px] rounded-[2rem] shadow-2xl overflow-hidden group border border-white/50"
      >
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-[#fff] z-0" />
        <div className="absolute top-0 left-0 w-full h-[150%] bg-gradient-to-br from-[#ff9bf5] via-[#a394ff] to-[#ffba43] rotate-[15deg] origin-top opacity-90" />
        <div className="absolute -bottom-10 left-0 w-full h-1/2 bg-white skew-y-[-10deg] origin-bottom-left" />
        
        {/* Card Details */}
        <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                {/* Chip */}
                <div className="w-10 h-8 rounded-md bg-white/20 backdrop-blur-sm border border-white/20" />
                <Maximize2 size={20} className="text-white opacity-60" />
            </div>
            
            <div className="flex justify-between items-end">
                <div className="space-y-4">
                     <div className="w-[120px] h-2 bg-white/30 rounded-full" />
                     <div className="w-[80px] h-3 bg-white/30 rounded-full" />
                </div>
                <div className="text-[20px] font-[800] italic text-stripe-dark tracking-tighter">
                   VISA
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}

function CryptoMockup() {
  const points = Array.from({ length: 400 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * 40;
    return {
      cx: 50 + r * Math.cos(angle),
      cy: 50 + r * Math.sin(angle),
      color: i % 4 === 0 ? "#635bff" : i % 4 === 1 ? "#ad6bff" : i % 4 === 2 ? "#ffba43" : "#ff5db1",
    };
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative w-full h-full">
        {/* Floating Labels */}
        <motion.div 
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/4 left-0 z-20 bg-white rounded-lg shadow-xl p-2 border border-slate-50 flex items-center gap-2"
        >
            <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-[10px] text-white">🦊</div>
            <span className="text-[10px] font-bold text-stripe-dark">$879 <span className="text-slate-400">USDC</span></span>
        </motion.div>
        
        <motion.div 
            animate={{ y: [2, -2, 2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-1/3 right-1/4 z-20 bg-white rounded-lg shadow-xl p-2 border border-slate-50 flex items-center gap-2"
        >
            <div className="w-5 h-5 rounded bg-purple-500 flex items-center justify-center text-[10px] text-white">👻</div>
            <span className="text-[10px] font-bold text-stripe-dark">$381 <span className="text-slate-400">CASH</span></span>
        </motion.div>

        {/* Dense Dot Globe */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {points.map((p, i) => (
             <motion.circle
                key={i}
                cx={p.cx}
                cy={p.cy}
                r={0.4}
                fill={p.color}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{ duration: 2 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 4 }}
             />
          ))}
          {/* Paths */}
          <motion.path
            d="M 20 40 Q 50 10 80 50"
            fill="none"
            stroke="#ff5db1"
            strokeWidth="0.2"
            strokeDasharray="1,2"
            animate={{ strokeDashoffset: [0, 10] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 10 60 Q 50 90 90 40"
            fill="none"
            stroke="#635bff"
            strokeWidth="0.2"
            strokeDasharray="1,2"
            animate={{ strokeDashoffset: [0, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </div>
  );
}

function PlatformMockup() {
  return (
    <div className="absolute inset-0 flex flex-col pt-12">
      {/* URL Bar */}
      <div className="mx-12 h-10 bg-white border border-slate-100 rounded-t-xl flex items-center px-4 relative z-20">
         <div className="flex gap-1.5 mr-auto">
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
              <div className="w-2 h-2 rounded-full bg-slate-200" />
         </div>
         <div className="absolute left-1/2 -translate-x-1/2 w-64 h-6 bg-slate-50/50 rounded-full flex items-center justify-center gap-2 border border-slate-50">
            <span className="text-[9px] text-slate-400">dashboard.zenflow.com</span>
         </div>
      </div>
      
      <div className="flex-1 mx-12 bg-white shadow-2xl border border-slate-100 flex overflow-hidden">
        {/* Receipt Float */}
        <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute left-20 top-24 w-[240px] bg-white rounded-2xl shadow-2xl p-6 border border-slate-50 z-30 flex flex-col"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">J</div>
                <p className="text-[12px] font-bold text-stripe-dark">Jackson Hot Yoga</p>
            </div>
            <div className="space-y-4">
                <p className="text-[10px] font-bold text-stripe-dark leading-tight">Thank you!<br/><span className="text-slate-400 font-medium">Your payment was successful.</span></p>
                <div className="pt-4 space-y-3 border-t border-slate-100 text-[9px]">
                    <div className="flex justify-between"><span className="text-slate-400">Order number</span><span className="text-stripe-dark">#2945467</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Date</span><span className="text-stripe-dark">Feb 25</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Payment method</span><span className="text-stripe-dark text-[11px] font-black italic">zip</span></div>
                    <div className="flex justify-between font-bold pt-3"><span className="text-stripe-dark">Total</span><span className="text-stripe-dark">A$72.00</span></div>
                </div>
            </div>
        </motion.div>

        {/* Sidebar */}
        <div className="w-56 bg-white border-r border-slate-50 p-6 pt-12 space-y-6">
          <div className="flex items-center gap-2 mb-10">
             <div className="w-8 h-8 rounded-lg bg-[#ff5db1]/10 flex items-center justify-center text-[#ff5db1]">🌸</div>
             <p className="text-[12px] font-[800] text-stripe-dark">Zenflow</p>
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`flex items-center gap-2 ${i === 2 ? "text-stripe-dark opacity-100" : "opacity-30"}`}>
               <div className="w-4 h-4 rounded-sm bg-slate-200" />
               <div className="w-20 h-2 bg-slate-200 rounded" />
            </div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-10 pt-12 pl-12">
            <h4 className="text-[16px] font-[800] text-stripe-dark mb-8">Connected Accounts</h4>
            <div className="space-y-4 overflow-hidden">
                <div className="grid grid-cols-4 text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    <span className="col-span-1">Accounts</span>
                    <span>Account country</span>
                    <span>Payment balance (USD)</span>
                    <span>Volume (USD)</span>
                </div>
                {[
                    { name: "Vital Flow", country: "Canada", flag: "🇨🇦", balance: "$8,348.00", vol: "$71,562.98" },
                    { name: "Daybreak Yoga", country: "United States", flag: "🇺🇸", balance: "$1,502.00", vol: "$8,879.00", active: true },
                    { name: "Sacred Space", country: "UK", flag: "🇬🇧", balance: "$1,247.00", vol: "$24,569.09" },
                    { name: "Jackson Hot Yoga", country: "Australia", flag: "🇦🇺", balance: "$3,660.00", vol: "$12,691.00" },
                    { name: "Harmony Flow", country: "United States", flag: "🇺🇸", balance: "$30,930.00", vol: "$294,669.65" },
                ].map((account) => (
                    <div key={account.name} className={`grid grid-cols-4 p-2.5 rounded-lg text-[10px] items-center ${account.active ? "bg-stripe-purple/5 shadow-sm" : ""}`}>
                        <div className="flex items-center gap-2 font-bold text-stripe-dark">
                            <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center text-[8px]">{account.name[0]}</div>
                            {account.name}
                        </div>
                        <span className="text-slate-500 font-medium">{account.country} <span className="ml-1 opacity-60">{account.flag}</span></span>
                        <span className="text-stripe-dark font-bold">{account.balance}</span>
                        <span className="text-stripe-dark font-bold">{account.vol}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-[#ad6bff]/10 via-[#ad6bff]/5 to-transparent blur-3xl" />
    </div>
  );
}


