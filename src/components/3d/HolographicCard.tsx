"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Terminal, Cpu, Radio, ShieldCheck } from "lucide-react";

export function HolographicCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values for spring-smoothed 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotational inertia
  const rotateXSpring = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 220,
    damping: 20,
  });
  const rotateYSpring = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 220,
    damping: 20,
  });

  // Dynamic glare coordinates (percentage)
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalized position from -0.5 to 0.5
    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);

    setGlarePos({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return (
    <div className="relative flex justify-center items-center py-6 [perspective:1200px]">
      {/* Outer Glow Aura that responds to hover */}
      <div
        className={`absolute -inset-4 rounded-[40px] bg-gradient-to-r from-blue-600/30 via-violet-600/30 to-cyan-500/30 blur-2xl transition-opacity duration-700 pointer-events-none ${
          isHovered ? "opacity-100 scale-105" : "opacity-40 scale-95"
        }`}
      />

      {/* 3D Tilted Card Body */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
        }}
        className="relative w-72 sm:w-80 md:w-88 lg:w-96 rounded-[32px] p-3 sm:p-4 border border-white/20 dark:border-white/10 bg-gradient-to-b from-white/15 to-white/5 dark:from-slate-900/60 dark:to-slate-950/80 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.2)] cursor-pointer select-none transition-shadow duration-500"
      >
        {/* Sci-Fi HUD Corner Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-violet-400/80 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-violet-400/80 rounded-br-sm pointer-events-none" />

        {/* Dynamic Holographic Specular Glare Sheen */}
        <div
          className="absolute inset-0 rounded-[32px] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.75 : 0.2,
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.4) 0%, rgba(139,92,246,0.2) 30%, transparent 65%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Top Telemetry Header Bar */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="flex items-center justify-between px-3 py-2 mb-2 rounded-xl bg-black/25 border border-white/10 text-[11px] font-mono text-cyan-300 tracking-wider"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ID: SE-CINEC-2026</span>
          </div>
          <div className="flex items-center gap-1 text-slate-300">
            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>99.8% ONLINE</span>
          </div>
        </div>

        {/* Image Frame Container */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative h-[340px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden border border-white/15 bg-slate-950/40"
        >
          {/* Portrait Photo */}
          <img
            src="/me.jpg"
            alt="R.K Sachintha Dhansanka"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
          />

          {/* Vignette & Cyber Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Floating Telemetry Badges in 3D Space */}
          {/* Top-Right Certification Badge */}
          <div
            style={{ transform: "translateZ(45px)" }}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-violet-500/40 text-violet-300 text-xs font-medium shadow-lg"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
            <span>11+ Certs</span>
          </div>

          {/* Bottom Floating Info Card */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-xl border border-white/15 shadow-2xl space-y-2"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                  Sachintha Dhansanka
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </p>
                <p className="text-[11px] text-cyan-400 font-mono">Software Engineer & Architect</p>
              </div>

              {/* Live Status Pill */}
              <div className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase">Open to Work</span>
              </div>
            </div>

            {/* Quick Tech Tag Row */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-white/10 text-[10px] font-mono text-slate-300">
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 flex items-center gap-1 text-cyan-300">
                <Radio className="w-2.5 h-2.5" /> IoT & LoRaWAN
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 flex items-center gap-1 text-violet-300">
                <Cpu className="w-2.5 h-2.5" /> AI & ML
              </span>
              <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 flex items-center gap-1 text-blue-300">
                <Terminal className="w-2.5 h-2.5" /> .NET & Next.js
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Decorative Bar */}
        <div
          style={{ transform: "translateZ(25px)" }}
          className="mt-2.5 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5"
        >
          <span className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-cyan-400 rounded-full" />
            CINEC Campus SE
          </span>
          <span className="text-cyan-400/80">3D PERSPECTIVE: ACTIVE</span>
        </div>
      </motion.div>
    </div>
  );
}
