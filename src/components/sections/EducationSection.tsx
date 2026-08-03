"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";

const educationData = [
  {
    id: "cinec-bsc",
    title: "BSc (Hons) in Software Engineering",
    institution: "CINEC Campus",
    period: "2025 - 2026",
    location: "Sri Lanka",
    expected: "Expected Graduation: 2026",
    details: [
      {
        heading: "Relevant Coursework",
        items: ["Advanced Software Engineering", "Artificial Intelligence (AI)", "Secure Mobile Application", "High Performance Computing (C, CUDA)"]
      }
    ]
  },
  {
    id: "esoft-hnd",
    title: "Software Engineering HND",
    institution: "Esoft University (Matara)",
    period: "2023 - 2024",
    location: "Matara, Sri Lanka",
    details: [
      {
        heading: "15 Subjects Covered",
        items: ["Database", "Programming", "WEB", "DSA", "Networking", "Security", "PCP", "SDLC", "Business Process Support", "SAD", "UEID", "DDM", "AAPDP"]
      }
    ]
  },
  {
    id: "esoft-dit",
    title: "Diploma in Information Technology",
    institution: "Esoft Metro Campus",
    period: "2022",
    location: "Sri Lanka",
    details: [
      {
        heading: "Subjects",
        items: ["ITC", "MS Office", "Computer Hardware", "NT", "GM", "Python", "C#"]
      }
    ]
  },
  {
    id: "sse-english-dip",
    title: "English Diploma",
    institution: "SSE Academy",
    period: "2025",
    location: "Sri Lanka",
    details: []
  },
  {
    id: "esoft-english-cert",
    title: "English Certificate",
    institution: "Esoft Metro Campus",
    period: "Completed",
    location: "Sri Lanka",
    details: []
  },
  {
    id: "al-exam",
    title: "G.C.E. Advanced Level",
    institution: "Sri Rathanapala Pirivena",
    period: "Completed",
    location: "Matara, Sri Lanka",
    details: [
      {
        heading: "Results",
        items: ["Buddhism (Grade B)", "Sinhala (Grade C)", "Pali (Grade S)", "General English (Grade F)"]
      }
    ]
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Education & <span className="text-primary">Background</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-10 rounded-3xl relative overflow-hidden group"
            >
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/20 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{edu.title}</h3>
                    </div>
                    <h4 className="text-md text-muted-foreground font-medium pl-11">{edu.institution}</h4>
                  </div>
                  <div className="flex flex-col gap-2 pl-11 md:pl-0">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.expected || edu.period}</span>
                    </div>
                    {edu.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {edu.details && edu.details.length > 0 && (
                  <div className="grid grid-cols-1 gap-6 pl-0 md:pl-11 border-t border-border/50 pt-6 mt-4">
                    {edu.details.map((detail, idx) => (
                      <div key={idx}>
                        <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                          <BookOpen className="w-4 h-4 text-accent" /> {detail.heading}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {detail.items.map(item => (
                            <span key={item} className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
