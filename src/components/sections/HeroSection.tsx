"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Cpu, Globe, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// Instead of Points from drei we can write a simple stars component

function Particles() {
  const ref = useRef<any>(null);
  
  // Create 5000 random points in a sphere
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3B82F6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function HeroSection() {
  const roles = [
    "Software Engineering Student",
    "Software Engineer",
    "AI Enthusiast",
    "IoT Innovator",
    "Future Software Architect",
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Particles />
        </Canvas>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-primary"
        >
          <Code2 size={48} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 text-secondary"
        >
          <Cpu size={64} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/3 text-accent"
        >
          <Globe size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide backdrop-blur-md"
            >
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 font-outfit leading-tight text-center lg:text-left"
            >
              Hi, I&apos;m <span className="text-gradient">R.K Sachintha Dhansanka</span>
            </motion.h1>

            <div className="h-12 mb-6">
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl text-muted-foreground font-medium"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground/80 mb-10 max-w-2xl leading-relaxed text-center lg:text-left"
            >
              I am a dedicated Software Engineering student at CINEC Campus with a strong passion for building innovative, tech-driven solutions. My expertise lies at the intersection of modern software architecture, Test-Driven Development, Artificial Intelligence, and IoT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <Link 
                href="#projects" 
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://drive.google.com/file/d/1rm9n2rZJ1GtdsaZlwiGnt_vm8-O7rqfz/view?usp=share_link/" 
                target="_blank"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 glass text-foreground rounded-full font-medium transition-all hover:bg-white/10 hover:scale-105"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-3.5 border border-border text-center text-foreground rounded-full font-medium transition-all hover:bg-muted"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[440px] rounded-3xl overflow-hidden border border-white/10 glass p-3 shadow-2xl hover:scale-[1.02] hover:-rotate-1 transition-all duration-500"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img 
                  src="/me.jpg" 
                  alt="R.K Sachintha Dhansanka" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              
              {/* Floating Active Badge */}
              <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-2xl border border-primary/30 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-foreground font-semibold">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
