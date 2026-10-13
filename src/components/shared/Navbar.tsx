"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Command, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "py-3.5 bg-[#070a13]/85 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "py-5 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black font-outfit text-white tracking-tighter">
          R.K.S<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-primary transition-all hover:scale-105"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                ctrlKey: true,
              });
              document.dispatchEvent(event);
            }}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-white/10 hover:border-primary/40 transition-colors shadow-sm"
            title="Command Palette (Ctrl+K)"
          >
            <Command className="w-3.5 h-3.5" />
            <span>Ctrl+K</span>
          </button>
        </nav>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 p-5 flex flex-col space-y-4 md:hidden shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 dark:text-white hover:text-primary p-2 border-b border-slate-100 dark:border-white/5"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
