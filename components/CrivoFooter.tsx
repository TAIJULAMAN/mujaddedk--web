"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LinkedinIcon = ({ size = 24, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function CrivoFooter() {
  return (
    <footer className="bg-white pt-10 md:pt-16 pb-10 md:pb-16 relative overflow-hidden font-sans">
      {/* Subtle glow effect top aligned */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-10 md:mb-16">
          {/* Left — Logo & Descriptor */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center select-none pt-1">
              <Image
                src="/crivo.png"
                alt="crivo.legal"
                width={220}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-textSecondary text-[16px] pt-5 leading-relaxed max-w-[340px] font-medium">
              eDiscovery managed services built on transparent pricing and
              honest technology.
            </p>
          </div>

          {/* Middle — Links (Anchor links only) */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              { name: "Platform", href: "#features" },
              { name: "Pricing", href: "#pricing" },
              { name: "About", href: "#about" },
              { name: "Contact Us", href: "mailto:hello@crivo.legal" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-bold text-chromeDark hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right — Social */}
          <div>
            <a
              href="https://linkedin.com/company/crivo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-surfaceSunken flex items-center justify-center text-textSecondary hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <LinkedinIcon size={22} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-divider pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 items-center bg-surfaceSunken px-4 py-2 rounded-full border border-divider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[12px] text-textSecondary font-bold uppercase tracking-wider">
              All systems operational
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* <div className="flex items-center space-x-8">
              <Link
                href="#"
                className="text-[13px] text-textSecondary hover:text-textPrimary font-bold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[13px] text-textSecondary hover:text-textPrimary font-bold transition-colors"
              >
                Terms of Service
              </Link>
            </div> */}

            <p className="text-[13px] text-textTertiary font-medium">
              © 2026 Crivo Legal LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
