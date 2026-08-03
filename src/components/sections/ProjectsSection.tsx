"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, X } from "lucide-react";
import { Github } from "@/components/icons";
import Image from "next/image";

type Project = {
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

const projectsData: Project[] = [
  {
    id: "iot-irrigation",
    title: "IoT-Enabled Precision Irrigation Management Using LoRaWAN",
    description: "A smart irrigation system monitoring soil conditions using IoT sensors and LoRaWAN to optimize water usage.",
    longDescription: "Developed an intelligent irrigation system designed to improve agricultural efficiency through IoT technologies. The system integrates smart sensors and embedded systems to monitor environmental conditions and support data-driven irrigation decisions. It utilizes LoRaWAN for long-range, low-power communication, sending real-time sensor data to a cloud dashboard.",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c36?auto=format&fit=crop&q=80&w=800",
    tags: ["ESP8266", "AWS", "LoRaWAN", "Machine Learning", "Arduino", "Cloud Dashboard"],
    github: "https://github.com/sachintha2001/FlowPilot-Web.git",
    demo: "https://youtu.be/NtfjQ5Z6b2k?si=b066UP715DNP5pBh",
    featured: true,
  },
  {
    id: "grifindo-toy-pos",
    title: "Grifindo Toy POS System",
    description: "A Point of Sale (POS) system tailored for Grifindo Toy shops to manage inventory and sales.",
    longDescription: "Developed a comprehensive POS and inventory management system for Grifindo Toys using .NET. Features include tracking stock levels, generating sales reports, and a user-friendly interface for cashiers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "C#", "POS", "Inventory Management"],
    github: "#",
    demo: "#",
  },
  {
    id: "ai-heart-disease",
    title: "AI Heart Disease Prediction System",
    description: "A machine learning model to predict the likelihood of heart disease based on patient data.",
    longDescription: "Built a predictive model using Python and machine learning libraries to analyze clinical parameters and accurately assess heart disease risks, providing an early warning tool for healthcare professionals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Machine Learning", "Data Science", "Healthcare AI"],
    github: "#",
    demo: "#",
  },
  {
    id: "dahampasal-management",
    title: "Dahampasal Student Management System",
    description: "An application to manage student records, attendance, and grading for Dahampasal (Sunday Schools).",
    longDescription: "A centralized .NET-based management system designed specifically for Dahampasal. It streamlines student enrollment, tracks attendance, and manages exam results efficiently.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "C#", "Student Management", "Education"],
    github: "https://www.linkedin.com/posts/sachintha-bro-365b20282_the-siri-vajiragnna-damma-school-student-activity-7304809350676520961-zPP1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdh_0BHEyqpa9GW7GAtDOuzM9SREhclo4",
    demo: "#",
  },
  {
    id: "slt-seat-reservation",
    title: "SLT Seat Reservation System",
    description: "A web-based seat booking and reservation platform developed for SLT.",
    longDescription: "Designed and implemented a responsive seat reservation system. The frontend utilizes HTML, CSS, and JavaScript for an intuitive booking experience, while the backend is powered by Python and MySQL for secure data handling.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    github: "https://github.com/sachintha2001/DotNetTask.git",
    demo: "#",
  },
  {
    id: "quite-attic-films",
    title: "Quite Attic Films Portal",
    description: "A dedicated portal for Quite Attic Films to manage movie catalogs and scheduling.",
    longDescription: "Developed a robust backend using .NET and MySQL to handle film catalogs, production schedules, and crew management for Quite Attic Films.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "MySQL", "C#", "Web Portal"],
    github: "#",
    demo: "#",
  },
  {
    id: "bus-reservation",
    title: "Bus Reservation System",
    description: "A Java-based application for booking bus tickets, managing routes, and scheduling.",
    longDescription: "Created a comprehensive desktop application in Java for bus ticket reservations. It features route management, seat availability checking, and dynamic scheduling for transport operators.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    tags: ["Java", "Desktop App", "Transport", "Ticketing"],
    github: "#",
    demo: "#",
  },
  {
    id: "2d-run-game",
    title: "2D Infinite Runner Game",
    description: "An engaging 2D endless runner game with dynamic obstacles and score tracking.",
    longDescription: "Designed and developed a fun 2D infinite runner game featuring parallax scrolling, procedurally generated obstacles, and engaging gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["Game Development", "2D Graphics", "C#", "Unity"],
    github: "https://github.com/sachintha2001/2D-Run-games.git",
    demo: "#",
  },
  {
    id: "slt-project-invoice",
    title: "SLT Project & Invoice Management System",
    description: "An enterprise-level system for managing projects, billing, and invoices for SLT.",
    longDescription: "Engineered a secure and scalable .NET application integrated with an Oracle database to track project lifecycles, generate invoices, and manage client billing for enterprise operations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "Oracle DB", "Enterprise", "Invoicing"],
    github: "#",
    demo: "#",
  },
  {
    id: "blugger-app",
    title: "Blugger Mobile App",
    description: "A native Android application tailored for bloggers to manage and publish content on the go.",
    longDescription: "Developed 'Blugger' using Android Studio. It provides a rich text editor, offline draft saving, and seamless synchronization with the main blogging platform for content creators.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tags: ["Android Studio", "Java", "Mobile App", "Blogging"],
    github: "https://github.com/sachintha2001/blog_app_java.git",
    demo: "#",
  },
  {
    id: "return-cpe-portal",
    title: "Return CPE Management Portal",
    description: "A portal to manage the return logistics of Customer Premises Equipment (CPE).",
    longDescription: "Built a management dashboard to track, process, and manage the returns of networking hardware (CPE). The system improves reverse logistics efficiency and inventory reconciliation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["Logistics", "Management Portal", "Inventory", "Web App"],
    github: "https://github.com/sachintha2001/CRP-System.git",
    demo: "#",
  }
];

export function ProjectsSection() {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-border rounded-full leading-5 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all sm:text-sm"
            placeholder="Search projects or technologies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-card rounded-2xl overflow-hidden group cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-3 lg:flex" : ""
                  }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative overflow-hidden shrink-0 ${project.featured ? "h-64 lg:h-auto lg:w-1/2" : "h-48"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className={`p-6 flex flex-col justify-between ${project.featured ? "lg:w-1/2 lg:p-10" : ""}`}>
                  <div>
                    {project.featured && (
                      <span className="text-primary text-xs font-bold tracking-wider uppercase mb-2 block">
                        Featured Project
                      </span>
                    )}
                    <h3 className={`font-bold mb-3 ${project.featured ? "text-2xl lg:text-3xl" : "text-xl"}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    >
                      Case Study <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-y-auto hide-scrollbar z-10"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-96 object-cover"
                />
                <div className="p-6 sm:p-10">
                  <h3 className="text-2xl sm:text-4xl font-bold mb-4">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-sm font-mono bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="prose prose-invert max-w-none mb-10">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-foreground/90 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Source
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-border hover:bg-muted font-medium rounded-full transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ArrowRight icon component since it wasn't imported from lucide-react above
function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
