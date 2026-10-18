"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ExternalLink, Play, Layers, Radio, Cpu, Sparkles, Filter } from "lucide-react";
import { Github } from "@/components/icons";
import { ProjectCard3D, Project } from "@/components/3d/ProjectCard3D";
import { generateProjectWebImage } from "@/lib/projectImageGenerator";

const initialProjects: Project[] = [
  {
    id: "iot-irrigation",
    title: "IoT-Enabled Precision Irrigation Management Using LoRaWAN",
    description: "A smart irrigation system monitoring soil conditions using IoT sensors and LoRaWAN to optimize water usage in real-time.",
    longDescription: "Developed an intelligent irrigation system designed to improve agricultural efficiency through IoT technologies. The system integrates smart sensors and embedded systems to monitor environmental conditions and support data-driven irrigation decisions. It utilizes LoRaWAN for long-range, low-power communication, sending real-time sensor data to a cloud dashboard.",
    image: "/projects/iot-irrigation.jpg",
    tags: ["LoRaWAN", "ESP8266", "AWS", "Machine Learning", "Arduino", "Cloud Dashboard"],
    github: "https://github.com/sachintha2001/FlowPilot-Web.git",
    demo: "https://youtu.be/NtfjQ5Z6b2k?si=b066UP715DNP5pBh",
    featured: true,
  },
  {
    id: "ai-heart-disease",
    title: "AI Heart Disease Prediction System",
    description: "A machine learning model to predict the likelihood of heart disease based on patient clinical health data.",
    longDescription: "Built a predictive model using Python and machine learning libraries to analyze clinical parameters and accurately assess heart disease risks, providing an early warning tool for healthcare professionals.",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Machine Learning", "Data Science", "Healthcare AI"],
    github: "#",
    demo: "#",
  },
  {
    id: "grifindo-toy-pos",
    title: "Grifindo Toy POS & Inventory Management",
    description: "A comprehensive Point of Sale (POS) system tailored for Grifindo Toy shops to manage stock and revenue.",
    longDescription: "Developed a comprehensive POS and inventory management system for Grifindo Toys using .NET. Features include tracking stock levels, generating sales reports, and a user-friendly interface for cashiers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "C#", "POS", "Inventory Management"],
    github: "#",
    demo: "#",
  },
  {
    id: "dahampasal-management",
    title: "Dahampasal Student Management System",
    description: "An application to manage student records, attendance, and grading for religious Sunday schools.",
    longDescription: "A centralized .NET-based management system designed specifically for Dahampasal. It streamlines student enrollment, tracks attendance, and manages exam results efficiently.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "C#", "Student Management", "Education"],
    github: "https://www.linkedin.com/posts/sachintha-bro-365b20282_the-siri-vajiragnna-damma-school-student-activity-7304809350676520961-zPP1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdh_0BHEyqpa9GW7GAtDOuzM9SREhclo4",
    demo: "#",
  },
  {
    id: "slt-seat-reservation",
    title: "SLT Seat Reservation System",
    description: "A web-based seat booking and reservation platform developed for Sri Lanka Telecom operations.",
    longDescription: "Designed and implemented a responsive seat reservation system. The frontend utilizes HTML, CSS, and JavaScript for an intuitive booking experience, while the backend is powered by Python and MySQL for secure data handling.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    github: "https://github.com/sachintha2001/DotNetTask.git",
    demo: "#",
  },
  {
    id: "quite-attic-films",
    title: "Quite Attic Films Portal",
    description: "A dedicated digital portal for Quite Attic Films to manage movie catalogs and production scheduling.",
    longDescription: "Developed a robust backend using .NET and MySQL to handle film catalogs, production schedules, and crew management for Quite Attic Films.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "MySQL", "C#", "Web Portal"],
    github: "#",
    demo: "#",
  },
  {
    id: "bus-reservation",
    title: "Bus Fleet & Seat Ticketing System",
    description: "A Java-based application for booking bus tickets, managing routes, and scheduling fleets.",
    longDescription: "Created a comprehensive desktop application in Java for bus ticket reservations. It features route management, seat availability checking, and dynamic scheduling for transport operators.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    tags: ["Java", "Desktop App", "Transport", "Ticketing"],
    github: "#",
    demo: "#",
  },
  {
    id: "2d-run-game",
    title: "2D Infinite Runner Game",
    description: "An engaging 2D endless runner game with dynamic obstacles, physics, and live score tracking.",
    longDescription: "Designed and developed a fun 2D infinite runner game featuring parallax scrolling, procedurally generated obstacles, and engaging gameplay mechanics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    tags: ["Unity", "C#", "Game Development", "2D Graphics"],
    github: "https://github.com/sachintha2001/2D-Run-games.git",
    demo: "#",
  },
  {
    id: "slt-project-invoice",
    title: "SLT Project & Invoice Management System",
    description: "An enterprise-level system for managing projects, billing, and invoices integrated with Oracle DB.",
    longDescription: "Engineered a secure and scalable .NET application integrated with an Oracle database to track project lifecycles, generate invoices, and manage client billing for enterprise operations.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    tags: [".NET", "Oracle DB", "Enterprise", "Invoicing"],
    github: "#",
    demo: "#",
  },
  {
    id: "blugger-app",
    title: "Blugger Native Mobile App",
    description: "A native Android application tailored for bloggers to manage and publish content seamlessly.",
    longDescription: "Developed 'Blugger' using Android Studio. It provides a rich text editor, offline draft saving, and seamless synchronization with the main blogging platform for content creators.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    tags: ["Android Studio", "Java", "Mobile App", "Blogging"],
    github: "https://github.com/sachintha2001/blog_app_java.git",
    demo: "#",
  },
  {
    id: "return-cpe-portal",
    title: "Return CPE Hardware Portal",
    description: "A portal to streamline return logistics of Customer Premises Equipment (CPE).",
    longDescription: "Built a management dashboard to track, process, and manage the returns of networking hardware (CPE). The system improves reverse logistics efficiency and inventory reconciliation.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["Logistics", "Management Portal", "Inventory", "Web App"],
    github: "https://github.com/sachintha2001/CRP-System.git",
    demo: "#",
  }
];

const categoryFilters = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "iot", label: "IoT & Embedded", icon: Radio },
  { id: "ai", label: "AI & ML", icon: Cpu },
  { id: "dotnet", label: ".NET & Enterprise", icon: Filter },
  { id: "web-mobile", label: "Web & Mobile", icon: Sparkles },
];

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync GitHub repositories dynamically
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/sachintha2001/repos?sort=updated&per_page=100");
        if (!response.ok) throw new Error("Failed to fetch");
        const repos = await response.json();

        const existingUrls = initialProjects.map((p) =>
          p.github.toLowerCase().replace(/\.git$/, "").replace(/\/$/, "")
        );

        const validRepos = repos.filter(
          (repo: any) =>
            !repo.fork &&
            repo.name !== "sachintha2001" &&
            !existingUrls.includes(repo.html_url.toLowerCase().replace(/\/$/, ""))
        );

        const newProjects: Project[] = await Promise.all(
          validRepos.map(async (repo: any) => {
            let tags: string[] = repo.topics && repo.topics.length > 0 ? [...repo.topics] : [];

            try {
              const langRes = await fetch(repo.languages_url);
              if (langRes.ok) {
                const languages = await langRes.json();
                tags = Array.from(new Set([...tags, ...Object.keys(languages)]));
              }
            } catch (err) {
              console.error("Error fetching languages for", repo.name);
            }

            if (tags.length === 0 && repo.language) {
              tags = [repo.language];
            }

            return {
              id: repo.id.toString(),
              title: repo.name.replace(/[-_]/g, " "),
              description: repo.description || "Open source software project repository.",
              longDescription: repo.description || "Comprehensive codebase maintained on GitHub.",
              image: generateProjectWebImage({
                name: repo.name,
                description: repo.description,
                language: repo.language,
                topics: tags,
                homepage: repo.homepage,
              }),
              tags,
              github: repo.html_url,
              demo: repo.homepage && repo.homepage !== "" ? repo.homepage : "#",
              featured: false,
            };
          })
        );

        setProjects([...initialProjects, ...newProjects]);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

      if (!matchesSearch) return false;

      if (activeCategory === "all") return true;
      if (activeCategory === "iot") {
        return project.tags.some((t) => ["LoRaWAN", "IoT", "ESP8266", "Arduino", "Sensors"].includes(t));
      }
      if (activeCategory === "ai") {
        return project.tags.some((t) => ["Machine Learning", "AI", "Healthcare AI", "Data Science", "Python"].includes(t));
      }
      if (activeCategory === "dotnet") {
        return project.tags.some((t) => [".NET", "C#", "Oracle DB", "Enterprise", "Invoicing"].includes(t));
      }
      if (activeCategory === "web-mobile") {
        return project.tags.some((t) => ["Web Portal", "Web App", "Android Studio", "Java", "Mobile App", "HTML", "JavaScript"].includes(t));
      }

      return true;
    });
  }, [projects, search, activeCategory]);

  // Extract YouTube embed ID if demo is a YouTube URL
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-slate-950/40">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            3D Interactive Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            Featured <span className="text-gradient">Innovations & Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            Explore my work spanning IoT hardware ecosystems, Artificial Intelligence models, scalable .NET backends, and full-stack software solutions. Move your cursor to experience the 3D perspective.
          </p>
        </motion.div>

        {/* Filter Tabs & Search Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-14 max-w-6xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/5 dark:bg-slate-900/60 border border-white/10 backdrop-blur-md">
            {categoryFilters.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400/40 -z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box with Sci-Fi Glow */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-foreground">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-2.5 border border-white/10 rounded-2xl bg-white/5 dark:bg-slate-900/60 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all backdrop-blur-md"
              placeholder="Search tech or project..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 3D Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard3D
                key={project.id}
                project={project}
                index={index}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-muted-foreground font-mono">No matching projects found.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover:bg-primary/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* High-Tech 3D Glass Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 [perspective:1400px]">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 12, y: 30 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateX: -10, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-950/90 border border-white/20 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.3)] overflow-y-auto hide-scrollbar z-10 backdrop-blur-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2.5 bg-black/60 hover:bg-black text-white rounded-full transition-all duration-200 z-30 border border-white/10 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Media Showcase: YouTube embed if available, else high-res image */}
                {getYouTubeId(selectedProject.demo) ? (
                  <div className="relative w-full aspect-video bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(selectedProject.demo)}?autoplay=1&mute=0`}
                      title={selectedProject.title}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative h-64 sm:h-96 w-full overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  </div>
                )}

                {/* Modal Content */}
                <div className="p-6 sm:p-10 space-y-6">
                  {/* Status & Title */}
                  <div>
                    {selectedProject.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono border border-blue-400/30 mb-3">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        FLAGSHIP RESEARCH & INNOVATION
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-outfit leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm font-mono bg-white/5 border border-white/10 text-cyan-300 px-3 py-1 rounded-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  <div className="border-y border-white/10 py-6 text-slate-300 text-base sm:text-lg leading-relaxed">
                    {selectedProject.longDescription}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {selectedProject.github && selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {selectedProject.demo && selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-7 py-3.5 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl transition-all hover:scale-105"
                      >
                        {getYouTubeId(selectedProject.demo) ? (
                          <>
                            <Play className="w-4 h-4 text-cyan-400 fill-current" />
                            <span>Watch on YouTube</span>
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4 text-cyan-400" />
                            <span>Live Application</span>
                          </>
                        )}
                      </a>
                    )}
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
