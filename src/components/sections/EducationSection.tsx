"use client";

import { useEffect, useId, useRef } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Trophy,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ShieldCheck,
} from "lucide-react";

const otherEducationData = [
  {
    id: "esoft-hnd",
    title: "Software Engineering HND",
    institution: "Esoft University (Matara)",
    period: "2023 - 2024",
    badge: "Graduated with Distinction",
    location: "Matara, Sri Lanka",
    details: [
      {
        heading: "15 Subjects Covered",
        items: [
          "Database",
          "Programming",
          "WEB",
          "DSA",
          "Networking",
          "Security",
          "PCP",
          "SDLC",
          "Business Process Support",
          "SAD",
          "UEID",
          "DDM",
          "AAPDP",
        ],
      },
    ],
  },
  {
    id: "esoft-dit",
    title: "Diploma in Information Technology",
    institution: "Esoft Metro Campus",
    period: "2022",
    badge: "Completed",
    location: "Sri Lanka",
    details: [
      {
        heading: "Subjects",
        items: ["ITC", "MS Office", "Computer Hardware", "NT", "GM", "Python", "C#"],
      },
    ],
  },
  {
    id: "sse-english-dip",
    title: "English Diploma",
    institution: "SSE Academy",
    period: "2025",
    badge: "Completed",
    location: "Sri Lanka",
    details: [],
  },
  {
    id: "esoft-english-cert",
    title: "English Certificate",
    institution: "Esoft Metro Campus",
    period: "Completed",
    badge: "Completed",
    location: "Sri Lanka",
    details: [],
  },
  {
    id: "al-exam",
    title: "G.C.E. Advanced Level",
    institution: "Sri Rathanapala Pirivena",
    period: "Completed",
    badge: "Completed",
    location: "Matara, Sri Lanka",
    details: [
      {
        heading: "Results",
        items: [
          "Buddhism (Grade B)",
          "Sinhala (Grade C)",
          "Pali (Grade S)",
          "General English (Grade F)",
        ],
      },
    ],
  },
];

export function EducationSection() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Fallback for browsers without native <dialog closedby> support
    if (!("closedBy" in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (isDialogContent) return;
        dialog.close();
      };

      dialog.addEventListener("click", handleBackdropClick);
      return () => dialog.removeEventListener("click", handleBackdropClick);
    }
  }, []);

  const openMedalModal = () => {
    dialogRef.current?.showModal();
  };

  const closeMedalModal = () => {
    dialogRef.current?.close();
  };

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-slate-950/50">
      {/* Ambient Gold & Cyber Lighting Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Academic Excellence & Distinctions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            Education & <span className="text-gradient">Academic Honors</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 via-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            Graduated with <span className="text-amber-300 font-semibold">First Class Honours</span> in Software Engineering and honored with the <span className="text-amber-400 font-semibold">Special Award for Best Dissertation</span>.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-10">
          {/* FLAGSHIP DEGREE & BEST DISSERTATION SPECIAL AWARD SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] p-[1px] bg-gradient-to-br from-amber-400/50 via-blue-500/30 to-violet-500/40 shadow-[0_25px_70px_-15px_rgba(245,158,11,0.22)]"
          >
            <div className="rounded-[31px] bg-slate-950/90 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* Ambient Glows inside Flagship Card */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* Left 7 Columns: Degree Details, First Class Classification & Award Highlights */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/50 text-amber-300 text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      First Class Honours
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Special Award: Best Dissertation
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Graduated • Batch 13
                    </span>
                  </div>

                  {/* Degree Title & University */}
                  <div>
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 to-blue-600/20 border border-amber-400/30 text-amber-400 shrink-0 mt-0.5">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black font-outfit text-white leading-tight">
                          BSc (Hons) Computer Science{" "}
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300">
                            (Software Engineering)
                          </span>
                        </h3>
                        <p className="text-base sm:text-lg text-slate-300 font-medium mt-1">
                          CINEC Campus • Affiliated with University of Wolverhampton (UOW), UK
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-400 pl-0 sm:pl-16 mt-3">
                      <span className="flex items-center gap-1.5 text-cyan-300">
                        <Calendar className="w-4 h-4" />
                        2025 – 2026 (Graduated)
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-400" />
                        Malabe, Sri Lanka
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-300">
                        <ShieldCheck className="w-4 h-4" />
                        UOW Top-Up • Batch 13
                      </span>
                    </div>
                  </div>

                  {/* Dual Highlight Cards: First Class + Best Dissertation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900/80 to-slate-900/90 border border-amber-400/30 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                          Degree Classification
                        </span>
                        <Trophy className="w-4 h-4 text-amber-400" />
                      </div>
                      <h4 className="text-lg font-extrabold font-outfit text-white">
                        First Class Honours
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Completed the BSc (Hons) in Computer Science (Software Engineering) with top-tier academic distinction across all core software architecture, AI, and high-performance computing modules.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-600/15 via-slate-900/80 to-slate-900/90 border border-blue-400/30 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                          Special Gold Medal
                        </span>
                        <Award className="w-4 h-4 text-amber-400" />
                      </div>
                      <h4 className="text-lg font-extrabold font-outfit text-white">
                        Best Dissertation Award
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Awarded to <span className="text-amber-300 font-semibold">R.K. Sachintha Dhanasanka</span> (Batch 13) by CINEC Campus &amp; UOW for achieving the highest dissertation excellence in the cohort.
                      </p>
                    </div>
                  </div>

                  {/* Key Modules & Dissertation Research */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <h5 className="font-semibold text-white flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      Core Modules &amp; Dissertation Specialization
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Best Dissertation Research (IoT & LoRaWAN)",
                        "Advanced Software Engineering",
                        "Artificial Intelligence (AI & ML)",
                        "Secure Mobile Applications",
                        "High Performance Computing (C, CUDA)",
                        "Enterprise Architecture",
                      ].map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-slate-200 hover:border-amber-400/40 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Designed & Framed Best Dissertation Gold Medal Showcase */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div
                    onClick={openMedalModal}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openMedalModal();
                      }
                    }}
                    aria-label="Inspect Best Dissertation Gold Medal in full view"
                    className="group relative w-full max-w-sm rounded-3xl p-3.5 bg-gradient-to-b from-amber-500/20 via-blue-950/60 to-slate-950 border border-amber-400/40 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_35px_rgba(245,158,11,0.2)] cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-amber-300"
                  >
                    {/* Gold HUD Corner Brackets */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400/90 rounded-tl-sm pointer-events-none z-20" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400/90 rounded-tr-sm pointer-events-none z-20" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-400/90 rounded-bl-sm pointer-events-none z-20" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400/90 rounded-br-sm pointer-events-none z-20" />

                    {/* Top Medal Header Pill */}
                    <div className="flex items-center justify-between px-3 py-1.5 mb-2.5 rounded-xl bg-black/50 border border-amber-400/25 text-[11px] font-mono text-amber-300">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        SPECIAL AWARD MEDAL
                      </span>
                      <span className="text-cyan-300">BATCH 13 • UOW</span>
                    </div>

                    {/* Framed Medal Image with Aspect Ratio to prevent CLS */}
                    <div className="relative aspect-[455/555] w-full rounded-2xl overflow-hidden border border-amber-400/30 bg-blue-950">
                      <img
                        src="/awards/best-dissertation-medal.jpg"
                        alt="CINEC Campus & University of Wolverhampton Best Dissertation Gold Medal awarded to Renda Kankanamge Sachintha Dhanasanka (Batch 13)"
                        loading="lazy"
                        width={455}
                        height={555}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Subtle Vignette & Luxury Gold/Blue Frame Sheen */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20 pointer-events-none" />

                      {/* Hover Inspect Pill */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:border-amber-400/50 transition-all">
                        <Maximize2 className="w-3 h-3 text-amber-400" />
                        <span>Click to Enlarge</span>
                      </div>

                      {/* Engraved Citation Plaque at Bottom of Image */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/90 backdrop-blur-xl border border-amber-400/35 shadow-xl">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                              CINEC • BEST DISSERTATION
                            </p>
                            <p className="text-[11px] text-slate-200 font-medium truncate">
                              R.K. Sachintha Dhanasanka • Batch 13
                            </p>
                          </div>
                          <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 shrink-0">
                            <Trophy className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* OTHER ACADEMIC QUALIFICATIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherEducationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-3xl p-6 sm:p-7 border border-white/10 bg-slate-900/60 hover:bg-slate-900/85 backdrop-blur-xl relative overflow-hidden group transition-all duration-300 hover:border-primary/40 ${
                  edu.id === "esoft-hnd" ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="p-2.5 bg-primary/20 rounded-xl text-primary border border-primary/20">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold font-outfit text-white">
                          {edu.title}
                        </h3>
                      </div>
                      <h4 className="text-sm text-slate-300 font-medium pl-12">
                        {edu.institution}
                      </h4>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 pl-12 sm:pl-0">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-primary/15 text-cyan-300 border border-cyan-500/30">
                        {edu.badge}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {edu.period}
                        </span>
                        {edu.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                            {edu.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {edu.details && edu.details.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 pl-0 sm:pl-12 border-t border-white/10 pt-4 mt-4">
                      {edu.details.map((detail, idx) => (
                        <div key={idx}>
                          <h5 className="font-semibold text-slate-200 mb-2.5 flex items-center gap-2 text-xs font-mono uppercase tracking-wider">
                            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                            {detail.heading}
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {detail.items.map((item) => (
                              <span
                                key={item}
                                className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300"
                              >
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
      </div>

      {/* Native Accessible Modal Dialog with Light-Dismiss (closedby="any") */}
      <dialog
        ref={dialogRef}
        {...({ closedby: "any" } as any)}
        aria-labelledby={dialogTitleId}
        className="m-auto w-full max-w-3xl rounded-3xl bg-slate-950 text-white border border-amber-400/40 p-0 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(245,158,11,0.25)] overflow-hidden"
      >
        <div className="p-6 sm:p-8 relative">
          <button
            type="button"
            onClick={closeMedalModal}
            aria-label="Close award modal"
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors z-20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6">
              <div className="relative aspect-[455/555] w-full rounded-2xl overflow-hidden border border-amber-400/40 bg-blue-950 shadow-2xl">
                <img
                  src="/awards/best-dissertation-medal.jpg"
                  alt="Best Dissertation Gold Medal — Renda Kankanamge Sachintha Dhanasanka"
                  fetchPriority="low"
                  width={455}
                  height={555}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                Special Academic Award
              </div>

              <h3 id={dialogTitleId} className="text-2xl sm:text-3xl font-black font-outfit text-white leading-tight">
                Best Dissertation Gold Medal &amp; First Class Honours
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Presented in recognition of achieving the highest dissertation distinction in{" "}
                <span className="text-white font-semibold">
                  Bachelor of Science (Honours) Computer Science (Software Engineering)
                </span>{" "}
                at <span className="text-cyan-300 font-semibold">CINEC Campus</span> in affiliation with the{" "}
                <span className="text-cyan-300 font-semibold">University of Wolverhampton (UOW)</span>.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/25 font-mono text-xs space-y-1.5 text-slate-200">
                <div className="text-amber-400 font-bold uppercase tracking-wider mb-1">
                  Medal Engraving Readout
                </div>
                <p><span className="text-slate-400">Award:</span> BEST DISSERTATION</p>
                <p><span className="text-slate-400">Recipient:</span> RENDA KANKANAMGE SACHINTHA DHANASANKA</p>
                <p><span className="text-slate-400">Degree:</span> BSc (Hons) Computer Science (Software Engineering - UOW) Topup</p>
                <p><span className="text-slate-400">Class:</span> First Class Honours</p>
                <p><span className="text-slate-400">Cohort:</span> CINEC Campus • Batch 13</p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
