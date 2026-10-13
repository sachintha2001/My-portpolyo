"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Code2, Sparkles, Calendar, Building2, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    title: "BSc (Hons) in Software Engineering",
    organization: "CINEC Campus",
    period: "2025 - 2026",
    status: "CURRENTLY ENROLLED",
    description: "Reading for BSc in Software Engineering. Key subjects: Advanced Software Engineering, Artificial Intelligence (AI), Secure Mobile Applications, and High Performance Computing (C, CUDA). Actively conducting academic research as an IoT Systems Developer.",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
    category: "Academic Degree",
    tags: ["Software Architecture", "AI & ML", "CUDA", "IoT Research", "CINEC"],
    badgeColor: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  },
  {
    title: "Full-Stack Software Developer",
    organization: "Freelance / Independent",
    period: "2023 - Present",
    status: "ACTIVE CLIENTS",
    description: "Engineering responsive and scalable web solutions for clients using Next.js, React, and Node.js. Designing clean RESTful APIs, modern databases, and production deployments.",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
    category: "Professional Practice",
    tags: ["Next.js", "React", "Node.js", "Tailwind CSS", "RESTful APIs"],
    badgeColor: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  },
  {
    title: "Technical Software Intern",
    organization: "Sri Lanka Telecom (SLT)",
    period: "2023",
    status: "INTERNSHIP COMPLETED",
    description: "Developed and maintained enterprise-grade software applications leveraging .NET architectures and Oracle databases. Contributed to mission-critical system optimizations and data workflows.",
    icon: <Briefcase className="w-5 h-5 text-violet-400" />,
    category: "Enterprise Internship",
    tags: [".NET", "C#", "Oracle Database", "Enterprise Systems", "SLT"],
    badgeColor: "bg-violet-500/10 border-violet-500/30 text-violet-300",
  },
  {
    title: "Higher National Diploma in Software Engineering",
    organization: "Esoft University (Matara)",
    period: "2022 - 2024",
    status: "GRADUATED",
    description: "Completed comprehensive HND in Software Engineering covering 16 core computing subjects. Successfully engineered and defended a complete Banking Sector Enterprise Final Project.",
    icon: <GraduationCap className="w-5 h-5 text-amber-400" />,
    category: "Higher Education",
    tags: ["OOP", "Data Structures", "Database Management", "Banking System", "HND"],
    badgeColor: "bg-amber-500/10 border-amber-500/30 text-amber-300",
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-slate-950/60">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Career & Academic Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            Professional <span className="text-gradient">Experience & Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            A chronological timeline of industry engineering internships, academic distinctions, and freelance software development.
          </p>
        </motion.div>

        {/* Central High-Tech Glowing Timeline */}
        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Glowing Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-violet-500 to-cyan-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Glowing Center Indicator Node */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-2xl bg-slate-900 border border-white/20 flex items-center justify-center -translate-x-1/2 mt-1.5 z-20 shadow-[0_0_20px_rgba(59,130,246,0.4)] backdrop-blur-xl">
                  {exp.icon}
                </div>

                {/* Content Card with Glass Refraction */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left"
                  }`}
                >
                  <div className="group rounded-3xl p-6 sm:p-7 border border-white/10 bg-slate-900/60 hover:bg-slate-900/85 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 shadow-xl hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)] relative">
                    {/* Top Status & Date Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border ${exp.badgeColor}`}>
                        {exp.status}
                      </span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white group-hover:text-blue-400 transition-colors mb-1">
                      {exp.title}
                    </h3>

                    {/* Organization / Company */}
                    <h4 className="text-sm font-medium text-slate-300 flex items-center gap-1.5 mb-4">
                      <Building2 className="w-4 h-4 text-primary" />
                      {exp.organization}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
