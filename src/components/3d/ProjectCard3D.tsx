"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Sparkles, Radio, Cpu, Code2, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
};

interface ProjectCard3DProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export function ProjectCard3D({ project, index, onSelect }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values for smooth 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for tilt inertia
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 260,
    damping: 22,
  });

  // Dynamic specular light reflection coordinates
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const normX = (e.clientX - rect.left) / width - 0.5;
    const normY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);

    setGlarePos({
      x: ((e.clientX - rect.left) / width) * 100,
      y: ((e.clientY - rect.top) / height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    setGlarePos({ x: 50, y: 50 });
  };

  // Determine tech category badge icon
  const isIoT = project.tags.some((t) => ["LoRaWAN", "IoT", "ESP8266", "Arduino"].includes(t));
  const isAI = project.tags.some((t) => ["Machine Learning", "AI", "Python", "Data Science"].includes(t));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.08, 0.4) }}
      className={`[perspective:1000px] ${project.featured ? "md:col-span-2 lg:col-span-3" : ""}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(project)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative group rounded-3xl cursor-pointer overflow-hidden border border-white/10 dark:border-white/10 bg-gradient-to-b from-white/10 to-white/5 dark:from-slate-900/70 dark:to-slate-950/80 backdrop-blur-xl shadow-xl transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] select-none ${
          project.featured ? "lg:flex lg:items-stretch" : ""
        }`}
      >
        {/* Dynamic Holographic Glare Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.65 : 0,
            background: `radial-gradient(circle 320px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.25) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)`,
            mixBlendMode: "overlay",
          }}
        />

        {/* Ambient Outer Border Glow on Hover */}
        <div
          className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-cyan-500/30 transition-opacity duration-500 pointer-events-none -z-10 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Media / Image Container with Depth */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className={`relative overflow-hidden shrink-0 ${
            project.featured
              ? "h-64 sm:h-72 lg:h-auto lg:w-[48%] min-h-[300px]"
              : "h-52 w-full"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          {/* Subtle Cyber Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Floating Badges inside Image Area */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20">
            {project.featured && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-lg shadow-blue-500/30 border border-blue-400/40">
                <Sparkles className="w-3 h-3 text-amber-300" />
                Featured Innovation
              </span>
            )}
            {isIoT && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-[11px] font-mono border border-emerald-500/40">
                <Radio className="w-3 h-3 animate-pulse" />
                IoT / LoRaWAN
              </span>
            )}
            {isAI && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-violet-500/20 backdrop-blur-md text-violet-300 text-[11px] font-mono border border-violet-500/40">
                <Cpu className="w-3 h-3" />
                AI / ML
              </span>
            )}
          </div>

          {/* Corner Quick Action Button */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="absolute bottom-4 right-4 z-20"
          >
            <div className="p-2.5 rounded-full bg-white/10 dark:bg-slate-900/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45 transition-all duration-300 shadow-lg">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content Section with High-Depth Layers */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className={`p-6 sm:p-7 flex flex-col justify-between ${
            project.featured ? "lg:w-[52%] lg:p-10" : ""
          }`}
        >
          <div>
            {/* Category / Subtitle */}
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5" />
                {project.featured ? "Full-Scale Solution" : "Engineered Project"}
              </span>
              <span className="text-muted-foreground/60 text-[11px]">
                3D TILT
              </span>
            </div>

            {/* Title with Pop-out Depth */}
            <h3
              style={{ transform: "translateZ(15px)" }}
              className={`font-bold font-outfit text-foreground group-hover:text-blue-400 transition-colors duration-300 leading-snug mb-3 ${
                project.featured ? "text-2xl sm:text-3xl" : "text-xl"
              }`}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Tags with 3D Float */}
            <div
              style={{ transform: "translateZ(20px)" }}
              className="flex flex-wrap gap-1.5 mb-6"
            >
              {project.tags.slice(0, project.featured ? 6 : 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 dark:bg-slate-800/60 border border-white/10 text-slate-300 hover:border-primary/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > (project.featured ? 6 : 4) && (
                <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-muted-foreground">
                  +{project.tags.length - (project.featured ? 6 : 4)}
                </span>
              )}
            </div>
          </div>

          {/* Bottom Card Controls & Quick Links */}
          <div
            style={{ transform: "translateZ(25px)" }}
            className="flex items-center justify-between pt-4 border-t border-white/10"
          >
            <span className="text-sm font-semibold text-primary group-hover:underline flex items-center gap-1.5">
              Explore Architecture <ArrowUpRight className="w-3.5 h-3.5" />
            </span>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 dark:hover:bg-slate-800 text-slate-300 hover:text-white transition-all hover:scale-110"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary-foreground transition-all hover:scale-110"
                  title="Live Demo / Video"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
