"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Platform", active: true, href: "#" },
    { name: "Solutions", active: false, href: "#solutions" },
    { name: "Pricing", active: false, href: "#pricing" },
    { name: "Docs", active: false, href: "#" },
    { name: "About", active: false, href: "#about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[100] px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-baseline gap-[2px] text-[22px] font-[800] tracking-[-0.02em] text-black select-none"
            >
              crivo<span className="text-[#534AB7] align-baseline">.</span>legal
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1 text-[15px] font-semibold text-slate-600">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    item.active
                      ? "bg-[#EEEDFE] text-[#534AB7] font-[700]"
                      : "hover:bg-[#EEEDFE]/60 hover:text-[#534AB7]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block px-[18px] py-[8px] rounded-full text-[15px] font-bold text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Sign in
            </button>
            <Link href="#demo" className="hidden md:flex bg-[#534AB7] hover:bg-[#3C3489] text-white px-[18px] py-[8px] rounded-full text-[14px] font-bold items-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(83,74,183,0.39)] hover:shadow-[0_6px_20px_rgba(83,74,183,0.23)]">
              Request demo
            </Link>
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={22} className="text-slate-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[101] lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[350px] bg-white z-[102] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-slate-100">
                <Link
                  href="/"
                  className="flex items-baseline gap-[2px] text-[20px] font-[800] tracking-[-0.02em] text-black select-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  crivo<span className="text-[#534AB7] align-baseline">.</span>legal
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={22} className="text-slate-800" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-2 text-[16px] font-semibold text-slate-700">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      item.active
                        ? "bg-[#EEEDFE] text-[#534AB7] font-[700]"
                        : "hover:bg-slate-50 hover:text-[#534AB7]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="p-5 border-t border-slate-100 flex flex-col gap-3">
                <button className="w-full px-[18px] py-[12px] rounded-xl text-[15px] font-bold text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-all duration-200">
                  Sign in
                </button>
                <Link href="#demo" onClick={() => setMobileMenuOpen(false)} className="w-full bg-[#534AB7] flex hover:bg-[#3C3489] text-white px-[18px] py-[12px] rounded-xl text-[15px] font-bold items-center justify-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(83,74,183,0.39)]">
                  Request demo
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
