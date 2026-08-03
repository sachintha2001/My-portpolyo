"use client";

import { motion } from "framer-motion";
import { Code, Server, Smartphone, BrainCircuit } from "lucide-react";

export function AboutSection() {
  const stats = [
    { label: "Projects Completed", value: "20+", delay: 0.1 },
    { label: "Technologies Mastered", value: "15+", delay: 0.2 },
    { label: "Research Activities", value: "3+", delay: 0.3 },
    { label: "Certifications", value: "11+", delay: 0.4 },
  ];

  const interests = [
    {
      title: "Software Architecture",
      description: "Designing scalable, maintainable, and resilient backend systems.",
      icon: <Server className="w-6 h-6 text-primary" />,
    },
    {
      title: "Artificial Intelligence",
      description: "Exploring AI-driven static analysis and machine learning workflows.",
      icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    },
    {
      title: "Mobile Applications",
      description: "Developing cross platform mobile applications using Flutter and React Native.",
      icon: <Smartphone className="w-6 h-6 text-secondary" />,
    },
    {
      title: "Clean Code",
      description: "Practicing TDD and adhering to industry-standard coding principles.",
      icon: <Code className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate about building the future
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I actively explore advanced technical domains, including AI-driven static analysis and serverless architecture performance. Recently, I collaborated on an IoT-based smart irrigation project utilizing sensor technologies to solve real-world agricultural challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proficient in industry-standard tools like JetBrains Rider, Postman, Anaconda, and modern AI development assistants, I continuously strive to write clean, efficient, and scalable code. My ultimate goal is to become a leading Software Architect driving innovation in top tech companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="glass-card p-6 text-center rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-outfit">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-10">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border border-border group"
              >
                <div className="w-12 h-12 glass rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {interest.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{interest.title}</h4>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
