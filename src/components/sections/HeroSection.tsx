"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  ArrowDown, 
  Sparkles, 
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
    { title: "AI & Machine Learning Enthusiast", icon: <Cpu className="w-4 h-4 text-accent" /> },
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
    { name: "Next.js", color: "border-sky-500/30 text-sky-400 bg-sky-500/10" },
    { name: "Python / AI", color: "border-violet-500/30 text-violet-400 bg-violet-500/10" },
    { name: ".NET / C#", color: "border-purple-500/30 text-purple-400 bg-purple-500/10" },
    { name: "IoT & LoRaWAN", color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" },
    { name: "Three.js / 3D", color: "border-amber-500/30 text-amber-400 bg-amber-500/10" },
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
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 bg-gradient-to-b from-background via-background/95 to-background"
    >
      {/* 3D Interactive Three.js WebGL Canvas Background */}
      <HeroScene />

      {/* Ambient Radial Lighting & Cyber Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-accent/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* High-Tech Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-cyan-300">
                Available for New Engineering Roles
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400/80" />
            </motion.div>

            {/* Giant Display Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="text-sm md:text-base font-mono tracking-widest text-muted-foreground uppercase flex items-center justify-center lg:justify-start gap-2">
                <span>Welcome to my universe</span>
                <span className="w-8 h-px bg-primary/50" />
              </h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight font-outfit leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]">
                  Sachintha Dhansanka
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Role Rotator with High-Tech Badge */}
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
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 dark:bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg"
                >
                  <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                    {roles[currentRoleIndex].icon}
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-outfit">
                    {roles[currentRoleIndex].title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl leading-relaxed font-sans"
            >
              Dedicated <span className="text-foreground font-medium">Software Engineering</span> student at CINEC Campus crafting scalable software architectures. Passionate about <span className="text-cyan-400 font-medium">IoT Innovation (LoRaWAN & AWS)</span>, <span className="text-violet-400 font-medium">AI Machine Learning Systems</span>, and high-performance Web Applications.
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
                  className={`px-3 py-1 text-xs font-mono font-medium rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${badge.color}`}
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
                className="group relative flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:scale-105 shadow-[0_0_30px_rgba(59,130,246,0.45)] border border-blue-400/30"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              
              <a 
                href="https://drive.google.com/file/d/1JCOlZGCoZLTd1zQjylk1CpQhNFzmuf4A/view?usp=share_link/" 
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border border-white/20 bg-white/5 hover:bg-white/10 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 backdrop-blur-xl text-foreground transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300 text-cyan-400" />
              </a>

              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-7 py-4 text-center rounded-2xl font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>

            {/* Quick Live Telemetry Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4 border-t border-white/10"
            >
              {quickStats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-xl bg-white/5 dark:bg-slate-900/40 border border-white/5 backdrop-blur-sm text-center lg:text-left"
                >
                  <div className="text-xl sm:text-2xl font-black font-outfit text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground">
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
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/80 z-20"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-cyan-400/80">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
        >
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
