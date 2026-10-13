"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  ArrowDown, 
  Cpu, 
  Terminal, 
  Radio, 
  Layers, 
  ChevronRight,
  Code2
} from "lucide-react";
import Link from "next/link";
import { HeroScene } from "@/components/3d/HeroScene";
import { HolographicCard } from "@/components/3d/HolographicCard";

export function HeroSection() {
  const roles = [
    { title: "Software Engineering Student", icon: <Terminal className="w-4 h-4 text-primary" /> },
    { title: "Full-Stack Software Engineer", icon: <Code2 className="w-4 h-4 text-cyan-400" /> },
    { title: "AI & Machine Learning Enthusiast", icon: <Cpu className="w-4 h-4 text-violet-400" /> },
    { title: "IoT Innovator (LoRaWAN & Cloud)", icon: <Radio className="w-4 h-4 text-emerald-400" /> },
    { title: "Future Software Architect", icon: <Layers className="w-4 h-4 text-amber-400" /> },
  ];

  const quickStats = [
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Tech Mastered" },
    { value: "11+", label: "Certifications" },
    { value: "CINEC", label: "SE Undergraduate" },
  ];

  const techBadges = [
    { name: "Next.js", color: "border-sky-500/40 text-sky-300 bg-sky-500/15" },
    { name: "Python / AI", color: "border-violet-500/40 text-violet-300 bg-violet-500/15" },
    { name: ".NET / C#", color: "border-purple-500/40 text-purple-300 bg-purple-500/15" },
    { name: "IoT & LoRaWAN", color: "border-emerald-500/40 text-emerald-300 bg-emerald-500/15" },
    { name: "Three.js / 3D", color: "border-amber-500/40 text-amber-300 bg-amber-500/15" },
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-12 bg-[#070a13] text-white"
    >
      {/* 3D Interactive Three.js WebGL Canvas Background */}
      <HeroScene />

      {/* Ambient Radial Lighting & Cyber Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill with Solid High-Contrast Colors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-xl shadow-[0_0_15px_rgba(16,185,129,0.25)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-300">
                Available for New Engineering Roles
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            </motion.div>

            {/* Giant Display Name with Bold White 'Hi, I'm' */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-xs sm:text-sm font-mono tracking-widest text-slate-400 font-bold uppercase flex items-center justify-center lg:justify-start gap-2">
                <span>WELCOME TO MY UNIVERSE</span>
                <span className="w-8 h-px bg-primary/60" />
              </h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight font-outfit leading-[1.1] text-white">
                <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Hi, I&apos;m </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_35px_rgba(59,130,246,0.45)]">
                  Sachintha Dhansanka
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role Rotator with High-Contrast Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-14 flex items-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/90 border border-white/15 backdrop-blur-md shadow-xl"
                >
                  <div className="p-1.5 rounded-lg bg-primary/20 border border-primary/30">
                    {roles[currentRoleIndex].icon}
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-outfit">
                    {roles[currentRoleIndex].title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bio Paragraph - High-Contrast and Crystal Clear */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans"
            >
              Dedicated{" "}
              <span className="text-white font-bold underline decoration-blue-500/50 underline-offset-4">
                Software Engineering
              </span>{" "}
              student at CINEC Campus crafting scalable software architectures. Passionate about{" "}
              <span className="text-cyan-400 font-semibold">
                IoT Innovation (LoRaWAN & AWS)
              </span>
              ,{" "}
              <span className="text-violet-400 font-semibold">
                AI Machine Learning Systems
              </span>
              , and high-performance Web Applications.
            </motion.p>

            {/* Quick Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1"
            >
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-sm ${badge.color}`}
                >
                  {badge.name}
                </span>
              ))}
            </motion.div>

            {/* High-Impact CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto pt-2"
            >
              <Link 
                href="#projects" 
                className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-400/40"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              
              <a 
                href="https://drive.google.com/file/d/1JCOlZGCoZLTd1zQjylk1CpQhNFzmuf4A/view?usp=share_link/" 
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border border-white/20 bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-xl text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300 text-cyan-400" />
              </a>

              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-7 py-4 text-center rounded-2xl font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>

            {/* Quick Live Telemetry Counters with High Contrast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 border-t border-white/10"
            >
              {quickStats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-sm text-center lg:text-left shadow-lg"
                >
                  <div className="text-xl sm:text-2xl font-black font-outfit text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: 3D Holographic Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <HolographicCard />
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator positioned safely below with no overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 flex flex-col items-center justify-center gap-2 text-slate-400"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-semibold text-cyan-400/90">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md shadow-md"
          >
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
