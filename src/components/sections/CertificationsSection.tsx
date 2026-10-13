"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Python Programming Specialization",
    organization: "University of Moratuwa",
    date: "Completed",
    id: "UOM-PY-2023",
    link: "https://www.linkedin.com/posts/sachintha-bro-365b20282_university-of-moratuwa-python-certificate-activity-7084083963522142208-anzs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdh_0BHEyqpa9GW7GAtDOuzM9SREhclo4",
    status: "Verified Credential",
    badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    title: "Higher National Diploma in Software Engineering",
    organization: "Esoft University / Pearson",
    date: "Completed",
    id: "ESOFT-HND-2024",
    link: "#",
    status: "Graduated with Distinction",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
  },
  {
    title: "Diploma in Information Technology (DIT)",
    organization: "Esoft Metro Campus",
    date: "Completed",
    id: "ESOFT-DIT-2022",
    link: "https://www.linkedin.com/posts/sachintha-bro-365b20282_esoft-metro-campus-activity-7087653187456806912-KSad?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdh_0BHEyqpa9GW7GAtDOuzM9SREhclo4",
    status: "Verified Credential",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "Professional English Communication Diploma",
    organization: "SSE Academy / Esoft",
    date: "Completed",
    id: "SSE-ENG-2025",
    link: "#",
    status: "Professional Fluency",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    title: "Advanced Programming Certifications",
    organization: "Sololearn Global",
    date: "Completed",
    id: "SL-DEV-GLOBAL",
    link: "#",
    status: "Skill Endorsement",
    badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "Full-Stack Tech & Cloud Certifications",
    organization: "Coursera / Global Academies",
    date: "Completed",
    id: "COURSERA-ARCH",
    link: "#",
    status: "Verified Credential",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden bg-slate-950/40">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Accreditation & Badges
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            Verified <span className="text-gradient">Certifications & Honors</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            Recognized academic and industry credentials authenticating expertise in Python engineering, enterprise architecture, and computer science.
          </p>
        </motion.div>

        {/* Holographic Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-3xl p-6 sm:p-7 border border-white/10 bg-slate-900/60 hover:bg-slate-900/85 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 shadow-xl hover:shadow-[0_15px_35px_rgba(59,130,246,0.18)] flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Glare Watermark */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/15 transition-colors duration-500 pointer-events-none" />

              <div>
                {/* Header Status Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 text-cyan-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border ${cert.badgeColor}`}>
                    {cert.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold font-outfit text-lg sm:text-xl text-white group-hover:text-primary transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-sm font-medium text-slate-300 mb-6">
                  {cert.organization}
                </p>
              </div>

              {/* Bottom Verification Details & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{cert.id}</span>
                {cert.link && cert.link !== "#" ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors font-semibold group/link"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Archived</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
