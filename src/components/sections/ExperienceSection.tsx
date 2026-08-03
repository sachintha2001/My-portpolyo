"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap, Microscope, Code } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    title: "BSc (Hons) in Software Engineering",
    organization: "CINEC Campus",
    date: "2025 - 2026",
    description: "Reading for BSc in Software Engineering. Key subjects: Advanced Software Engineering, Artificial Intelligence (AI), Secure Mobile Applications, and High Performance Computing (C, CUDA). Also engaged in Academic Research as an IoT Systems Developer.",
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    category: "Academic",
  },
  {
    title: "Software Engineering Student (HND)",
    organization: "Esoft University (Matara)",
    date: "2022 - 2024",
    description: "Completed Higher National Diploma in Software Engineering covering 16 core subjects. Successfully delivered a comprehensive Banking Sector Final Project.",
    icon: <GraduationCap className="w-5 h-5 text-primary" />,
    category: "Academic",
  },
  {
    title: "Full Stack Developer",
    organization: "Freelance",
    date: "2023 - Present",
    description: "Building responsive and scalable web applications for various clients using React, Next.js, and Node.js. Implementing RESTful APIs and database solutions.",
    icon: <Code className="w-5 h-5 text-secondary" />,
    category: "Freelance",
  },
  {
    title: "Technical Intern",
    organization: "Sri Lanka Telecom (SLT)",
    date: "2023",
    description: "Developed and managed enterprise-level software applications utilizing .NET technologies and Oracle databases. Contributed to system optimization and secure data handling operations.",
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    category: "Internship",
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    // GSAP ScrollTrigger for individual items
    const items = gsap.utils.toArray<HTMLElement>('.timeline-item');
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">My <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-accent to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full glass border border-primary flex items-center justify-center -translate-x-1/2 mt-1 z-10 bg-background">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"
                }`}>
                  <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors relative group">
                    <span className="text-sm font-mono text-primary mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <h4 className="text-md text-muted-foreground font-medium mb-4">{exp.organization}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <span className="absolute top-4 right-4 text-xs font-mono bg-white/5 px-2 py-1 rounded text-muted-foreground group-hover:text-foreground transition-colors">
                      {exp.category}
                    </span>
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
