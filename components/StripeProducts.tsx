"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  ArrowRightLeft,
  Building2,
  BarChart3,
  Shield,
  Globe,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Online payments infrastructure that handles the complexity of money movement globally.",
    color: "#635bff",
    gradient: "from-[#635bff]/10 to-[#635bff]/5",
    link: "Explore Payments",
  },
  {
    icon: ArrowRightLeft,
    title: "Connect",
    description:
      "Multiparty payments that let you route funds between multiple parties with ease.",
    color: "#00d4aa",
    gradient: "from-[#00d4aa]/10 to-[#00d4aa]/5",
    link: "Explore Connect",
  },
  {
    icon: Building2,
    title: "Billing",
    description:
      "Subscription and invoicing management for recurring revenue businesses of all sizes.",
    color: "#ff6b6b",
    gradient: "from-[#ff6b6b]/10 to-[#ff6b6b]/5",
    link: "Explore Billing",
  },
  {
    icon: BarChart3,
    title: "Revenue Recognition",
    description:
      "Automate and configure revenue reports to simplify compliance with ASC 606 and IFRS 15.",
    color: "#ffba43",
    gradient: "from-[#ffba43]/10 to-[#ffba43]/5",
    link: "Explore Revenue",
  },
  {
    icon: Shield,
    title: "Radar",
    description:
      "Fight fraud with machine learning powered by data across millions of global businesses.",
    color: "#ff5db1",
    gradient: "from-[#ff5db1]/10 to-[#ff5db1]/5",
    link: "Explore Radar",
  },
  {
    icon: Globe,
    title: "Atlas",
    description:
      "Incorporate your company in the US and start accepting payments in minutes, from anywhere.",
    color: "#0ea5e9",
    gradient: "from-[#0ea5e9]/10 to-[#0ea5e9]/5",
    link: "Explore Atlas",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
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
    <section className="relative bg-white py-32 overflow-hidden">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-[720px] mb-20"
        >
          <p className="text-[15px] font-semibold text-stripe-purple tracking-tight mb-4 uppercase">
            What Stripe Offers
          </p>
          <h2 className="text-[48px] md:text-[56px] font-[800] text-stripe-dark leading-[1.08] tracking-[-0.03em] mb-6">
            A fully integrated suite of{" "}
            <span className="text-stripe-purple">financial products</span>
          </h2>
          <p className="text-[19px] text-stripe-slate leading-relaxed">
            Reduce costs, grow revenue, and run your business more efficiently
            with a unified platform. Use Stripe products individually or
            combine them to create something new.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`group relative rounded-2xl border border-slate-100 bg-gradient-to-br ${product.gradient} p-8 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-100/80 cursor-pointer`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${product.color}15` }}
              >
                <product.icon
                  size={24}
                  style={{ color: product.color }}
                  strokeWidth={2}
                />
              </div>

              {/* Content */}
              <h3 className="text-[22px] font-bold text-stripe-dark mb-3 tracking-tight">
                {product.title}
              </h3>
              <p className="text-[15px] text-stripe-slate leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Link */}
              <div
                className="flex items-center gap-1.5 text-[14px] font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: product.color }}
              >
                {product.link}
                <ChevronRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${product.color}20`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
