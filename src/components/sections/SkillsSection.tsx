"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SkillCategory = "All" | "Frontend" | "Backend" | "Database" | "Cloud" | "IoT" | "Mobile" | "Design" | "Tools";

const skillsData = [
  { name: "Angular", category: "Frontend", level: 65 },
  { name: "HTML", category: "Frontend", level: 90 },
  { name: "CSS", category: "Frontend", level: 90 },
  { name: "JavaScript", category: "Frontend", level: 85 },
  { name: "TypeScript", category: "Frontend", level: 70 },
  { name: "React", category: "Frontend", level: 85 },
  { name: "Next.js", category: "Frontend", level: 70 },
  { name: "Tailwind CSS", category: "Frontend", level: 65 },
  
  { name: "Node.js", category: "Backend", level: 75 },
  { name: "Express.js", category: "Backend", level: 75 },
  { name: "PHP", category: "Backend", level: 70 },
  { name: "Java", category: "Backend", level: 70 },
  { name: "C#", category: "Backend", level: 80 },
  { name: "Python", category: "Backend", level: 75 },
  { name: "C++", category: "Backend", level: 65 },
  { name: ".NET", category: "Backend", level: 75 },
  { name: "C", category: "Backend", level: 70 },
  { name: "CUDA", category: "Backend", level: 50 },
  
  { name: "MySQL", category: "Database", level: 85 },
  { name: "MongoDB", category: "Database", level: 60 },
  { name: "Firebase", category: "Database", level: 80 },
  { name: "Oracle", category: "Database", level: 70 },
  { name: "SQLite", category: "Database", level: 80 },
  
  { name: "AWS", category: "Cloud", level: 60 },
  { name: "Vercel", category: "Cloud", level: 80 },
  { name: "Serverless", category: "Cloud", level: 65 },
  
  { name: "Arduino", category: "IoT", level: 50 },
  { name: "ESP8266", category: "IoT", level: 50 },
  { name: "LoRaWAN", category: "IoT", level: 50 },
  { name: "Sensors", category: "IoT", level: 50 },
  
  { name: "Git", category: "Tools", level: 85 },
  { name: "GitHub", category: "Tools", level: 85 },
  { name: "VS Code", category: "Tools", level: 99 },
  { name: "Postman", category: "Tools", level: 85 },
  { name: "JetBrains Rider", category: "Tools", level: 80 },

  { name: "Android Studio", category: "Mobile", level: 80 },
  { name: "Cordova", category: "Mobile", level: 75 },
  { name: "Flutter", category: "Mobile", level: 70 },

  { name: "Figma", category: "Design", level: 75 },
  { name: "Adobe XD", category: "Design", level: 70 },
  { name: "Draw.io", category: "Design", level: 80 },
];

const categories: SkillCategory[] = ["All", "Frontend", "Backend", "Database", "Cloud", "IoT", "Mobile", "Design", "Tools"];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, ranging from frontend development to intelligent IoT systems and backend architectures.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-background border border-border text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass p-5 rounded-xl group relative overflow-hidden"
              >
                {/* Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-xs font-mono text-muted-foreground bg-background px-2 py-1 rounded">
                      {skill.category}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30" />
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
