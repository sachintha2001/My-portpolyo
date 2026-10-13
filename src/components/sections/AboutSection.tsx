"use client";

import { motion } from "framer-motion";
import { 
  Server, 
  BrainCircuit, 
  Radio, 
  Code2, 
  Sparkles, 
  Terminal, 
  Compass, 
  Award, 
  FolderGit2, 
  Layers,
  CheckCircle2
} from "lucide-react";
import { AboutGlobe3D } from "@/components/3d/AboutGlobe3D";

export function AboutSection() {
  const stats = [
    { label: "Projects Built", value: "20+", icon: FolderGit2, color: "text-blue-400", border: "border-blue-500/30" },
    { label: "Tech Mastered", value: "15+", icon: Layers, color: "text-cyan-400", border: "border-cyan-500/30" },
    { label: "Research Activities", value: "3+", icon: Compass, color: "text-violet-400", border: "border-violet-500/30" },
    { label: "Certifications", value: "11+", icon: Award, color: "text-amber-400", border: "border-amber-500/30" },
  ];

  const pillars = [
    {
      title: "Scalable Software Architecture",
      description: "Designing resilient backend architectures, clean microservices, and high-performance serverless endpoints using C# / .NET and Python.",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      tag: "SYSTEMS DESIGN",
      skills: [".NET", "Microservices", "Scalability"],
    },
    {
      title: "Artificial Intelligence & ML",
      description: "Exploring predictive machine learning workflows, healthcare AI diagnostics, and AI-driven static code analysis for automated optimization.",
      icon: <BrainCircuit className="w-6 h-6 text-violet-400" />,
      tag: "INTELLIGENT SYSTEMS",
      skills: ["Python", "Predictive ML", "Data Science"],
    },
    {
      title: "IoT & LoRaWAN Edge Networks",
      description: "Engineering long-range, ultra-low-power sensor networks connecting embedded hardware to cloud analytics dashboards via AWS IoT.",
      icon: <Radio className="w-6 h-6 text-emerald-400" />,
      tag: "HARDWARE & SENSORS",
      skills: ["LoRaWAN", "ESP8266", "AWS IoT Core"],
    },
    {
      title: "Clean Code & Test-Driven Development",
      description: "Adhering strictly to industrial engineering principles, test coverage, TDD, design patterns, and maintainable enterprise software standards.",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      tag: "CRAFTSMANSHIP",
      skills: ["TDD", "SOLID", "CI/CD"],
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-slate-950/50">
      {/* Cyber Ambient Atmosphere */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[130px] pointer-events-none -z-10" />

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
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Philosophy & Persona
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            About <span className="text-gradient">My Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            Software Engineering undergraduate at CINEC Campus with an unwavering commitment to writing high-performance code, building distributed systems, and mastering next-generation computing.
          </p>
        </motion.div>

        {/* Top Bento Grid: Bio Terminal + 3D Globe + Telemetry Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 max-w-7xl mx-auto">
          
          {/* Left Column: Bio & Interactive Terminal (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative space-y-6"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  SE UNDERGRADUATE • CINEC CAMPUS
                </span>
                <span className="text-xs font-mono text-slate-400">TARGET: SOFTWARE ARCHITECT</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit mb-4 leading-snug">
                Pioneering the Intersection of AI, Embedded IoT, and Scalable Architectures
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                I am a dedicated Software Engineering student driven by solving complex real-world challenges through data-driven engineering. My focus ranges from developing <span className="text-cyan-400 font-semibold">IoT precision irrigation platforms using LoRaWAN</span> to crafting machine learning models that predict disease patterns from clinical datasets.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Armed with professional toolchains like JetBrains Rider, Postman, AWS, and modern AI engineering workflows, I build clean, modular architectures that scale seamlessly. My goal is to become an industry-leading <span className="text-blue-400 font-semibold">Software Architect</span> steering groundbreaking software transformations.
              </p>
            </div>

            {/* Interactive Sci-Fi Code Console */}
            <div className="rounded-2xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-slate-300 space-y-1 shadow-inner">
              <div className="flex items-center justify-between text-slate-500 pb-2 mb-2 border-b border-white/5 text-[11px]">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>architect-profile.ts</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <p><span className="text-violet-400">const</span> <span className="text-blue-400">engineer</span> = &#123;</p>
              <p className="pl-4"><span className="text-cyan-300">name</span>: <span className="text-emerald-300">&quot;R.K Sachintha Dhansanka&quot;</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">institution</span>: <span className="text-emerald-300">&quot;CINEC Campus Faculty of IT&quot;</span>,</p>
              <p className="pl-4"><span className="text-cyan-300">coreDisciplines</span>: [<span className="text-emerald-300">&quot;Software Architecture&quot;</span>, <span className="text-emerald-300">&quot;AI/ML&quot;</span>, <span className="text-emerald-300">&quot;LoRaWAN IoT&quot;</span>],</p>
              <p className="pl-4"><span className="text-cyan-300">designPatterns</span>: [<span className="text-emerald-300">&quot;Clean Architecture&quot;</span>, <span className="text-emerald-300">&quot;TDD&quot;</span>, <span className="text-emerald-300">&quot;Microservices&quot;</span>],</p>
              <p className="pl-4"><span className="text-cyan-300">status</span>: <span className="text-amber-300">&quot;Ready for Next Engineering Challenge&quot;</span></p>
              <p>&#125;;</p>
            </div>
          </motion.div>

          {/* Right Column: 3D Globe + 4 Telemetry Stats (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* 3D Global Tech Network Canvas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AboutGlobe3D />
            </motion.div>

            {/* 4 Telemetry Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className={`p-4 sm:p-5 rounded-2xl border ${stat.border} bg-slate-900/50 backdrop-blur-xl hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 shadow-xl group`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-xl bg-white/5 ${stat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">Verified</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-outfit text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground mt-0.5">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Engineering Pillars (4 Interactive 3D Cards) */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-foreground mb-2">
              Core Engineering Pillars
            </h3>
            <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              Four cornerstones of my technical execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl p-6 border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 shadow-xl hover:shadow-[0_15px_30px_rgba(59,130,246,0.18)] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-outfit text-white mb-2.5 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {pillar.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
