"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) setActiveLink("home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -40% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );
    const sections = ["home", "features", "about", "contact"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", active: activeLink === "home", href: "#home" },
    { name: "Platform", active: activeLink === "features", href: "#features" },
    { name: "About", active: activeLink === "about", href: "#about" },
    { name: "Contact Us", active: activeLink === "contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-[100] px-5 md:px-0 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-md"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center select-none pt-1">
              <Image
                src="/crivo2.png"
                alt="crivo.legal"
                width={220}
                height={60}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div
              className={`hidden lg:flex items-center gap-1 text-[15px] font-semibold text-primary`}
            >
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    item.active
                      ? "bg-[#1e3a5f] text-white font-[700]"
                      : "hover:bg-[#1e3a5f] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden md:flex bg-[#EBF2FF] text-[#3B5876] px-[18px] py-[8px] rounded-full text-[14px] font-bold items-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(59,88,118,0.39)] hover:shadow-[0_6px_20px_rgba(59,88,118,0.23)]"
            >
              Request demo
            </Link>
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-[#1e3a5f]/10 text-[#1e3a5f]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={22} className="text-[#1e3a5f]" />
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
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[350px] bg-[#1e3a5f/20] z-9999 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 flex items-center justify-between border-b border-white/10">
                <Link
                  href="/"
                  className="flex items-center select-none pt-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/crivo2.png"
                    alt="crivo.legal"
                    width={110}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={22} className="text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-5 flex flex-col gap-2 text-[16px] font-semibold text-white/90">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      item.active
                        ? "bg-white/10 text-white font-[700]"
                        : "hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="p-5 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#EBF2FF] flex hover:bg-chromeDark text-[#3B5876] px-[18px] py-[12px] rounded-xl text-[15px] font-bold items-center justify-center transition-all duration-200 shadow-[0_4px_14px_0_rgba(59,88,118,0.39)]"
                >
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
