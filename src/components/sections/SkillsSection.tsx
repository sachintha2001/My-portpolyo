"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Radio, 
  Terminal, 
  Layers, 
  Database, 
  Cloud, 
  Smartphone, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  Code2
} from "lucide-react";
import { SkillsSphere3D } from "@/components/3d/SkillsSphere3D";

type SkillCategory = "All" | "Frontend" | "Backend" | "Database" | "Cloud" | "IoT" | "Mobile" | "Tools";

const skillsData = [
  // Frontend
  { name: "React", category: "Frontend", level: 85, icon: "⚛️" },
  { name: "Next.js", category: "Frontend", level: 80, icon: "▲" },
  { name: "TypeScript", category: "Frontend", level: 75, icon: "TS" },
  { name: "JavaScript", category: "Frontend", level: 88, icon: "JS" },
  { name: "Three.js / WebGL", category: "Frontend", level: 70, icon: "🌐" },
  { name: "Tailwind CSS", category: "Frontend", level: 85, icon: "🎨" },
  { name: "HTML / CSS", category: "Frontend", level: 92, icon: "📐" },
  { name: "Angular", category: "Frontend", level: 65, icon: "🅰️" },

  // Backend
  { name: "C# / .NET", category: "Backend", level: 82, icon: "🔷" },
  { name: "Python", category: "Backend", level: 80, icon: "🐍" },
  { name: "Java", category: "Backend", level: 75, icon: "☕" },
  { name: "Node.js", category: "Backend", level: 78, icon: "🟢" },
  { name: "Express.js", category: "Backend", level: 75, icon: "⚡" },
  { name: "PHP", category: "Backend", level: 70, icon: "🐘" },
  { name: "C / C++", category: "Backend", level: 72, icon: "⚙️" },
  { name: "CUDA", category: "Backend", level: 55, icon: "🧠" },

  // Database
  { name: "MySQL", category: "Database", level: 85, icon: "🐬" },
  { name: "Firebase", category: "Database", level: 80, icon: "🔥" },
  { name: "SQLite", category: "Database", level: 80, icon: "🗄️" },
  { name: "Oracle DB", category: "Database", level: 72, icon: "🏛️" },
  { name: "MongoDB", category: "Database", level: 65, icon: "🍃" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud", level: 65, icon: "☁️" },
  { name: "Vercel", category: "Cloud", level: 85, icon: "🚀" },
  { name: "Serverless", category: "Cloud", level: 70, icon: "⚡" },

  // IoT & Embedded
  { name: "LoRaWAN", category: "IoT", level: 78, icon: "📡" },
  { name: "ESP8266 / ESP32", category: "IoT", level: 82, icon: "📟" },
  { name: "Arduino", category: "IoT", level: 85, icon: "🔌" },
  { name: "Sensor Telemetry", category: "IoT", level: 80, icon: "📊" },

  // Mobile
  { name: "Android Studio", category: "Mobile", level: 80, icon: "🤖" },
  { name: "Flutter", category: "Mobile", level: 72, icon: "💙" },
  { name: "Cordova", category: "Mobile", level: 70, icon: "📱" },

  // Tools
  { name: "Git & GitHub", category: "Tools", level: 88, icon: "🐙" },
  { name: "VS Code", category: "Tools", level: 98, icon: "💻" },
  { name: "JetBrains Rider", category: "Tools", level: 85, icon: "🐎" },
  { name: "Postman", category: "Tools", level: 85, icon: "📫" },
];

const categories: SkillCategory[] = ["All", "Frontend", "Backend", "Database", "Cloud", "IoT", "Mobile", "Tools"];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-slate-950/60">
      {/* Ambient Sci-Fi Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engineering Stack & Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            Technical <span className="text-gradient">Proficiency & Labs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            A comprehensive matrix of technologies I deploy across low-level IoT systems, high-throughput .NET backends, AI machine learning pipelines, and modern WebGL web experiences.
          </p>
        </motion.div>

        {/* 3D Bento Showcase Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 max-w-7xl mx-auto items-stretch">
          
          {/* Bento Card 1: Live Interactive 3D WebGL Orbit Cloud (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <SkillsSphere3D />
          </div>

          {/* Bento Card 2: IoT & Embedded Systems Lab Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            {/* Top Corner Signal Radar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Radio className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg font-outfit">IoT & Hardware Lab</h3>
                  <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LoRaWAN Active Mesh
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                868/915 MHz
              </span>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 py-6">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-mono text-muted-foreground">Range Topology</div>
                <div className="text-xl font-bold text-white font-outfit mt-1">15km+ LoRa</div>
                <div className="text-[10px] text-cyan-400 font-mono mt-0.5">Low-Power Wide Area</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-xs font-mono text-muted-foreground">Cloud Sync</div>
                <div className="text-xl font-bold text-white font-outfit mt-1">AWS Core</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">MQTT Telemetry</div>
              </div>
            </div>

            {/* Hardware Stack Chips */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Embedded Toolchains:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "ESP8266 / ESP32",
                  "LoRaWAN Gateways",
                  "Soil NPK Sensors",
                  "Arduino C++",
                  "Analog ADC Arrays",
                  "MQTT Protocol"
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Telemetry Waveform Graphic */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                Packet Telemetry: Normal
              </span>
              <span className="text-emerald-400 font-semibold">99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105 border border-blue-400/30"
                  : "bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Skills Cards Matrix */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                className="group relative p-4 rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-primary/40 shadow-lg hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)] cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl p-1.5 rounded-lg bg-white/5 border border-white/5">
                      {skill.icon}
                    </span>
                    <span className="font-bold text-foreground text-sm font-outfit group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                    {skill.category}
                  </span>
                </div>

                {/* Progress Bar with Glowing Head */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
