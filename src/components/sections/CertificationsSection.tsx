"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python Certificate",
    organization: "University of Moratuwa",
    date: "Completed",
    link: "https://www.linkedin.com/posts/sachintha-bro-365b20282_university-of-moratuwa-python-certificate-activity-7084083963522142208-anzs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdh_0BHEyqpa9GW7GAtDOuzM9SREhclo4",
    status: "Completed"
  },
  {
    title: "HND Certificate",
    organization: "Esoft University",
    date: "Completed",
    link: "#",
    status: "Completed"
  },
  {
    title: "Diploma Certificate",
    organization: "Esoft Metro Campus",
    date: "Completed",
    link: "https://www.linkedin.com/posts/sachintha-bro-365b20282_esoft-metro-campus-activity-7087653187456806912-KSad?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdh_0BHEyqpa9GW7GAtDOuzM9SREhclo4",
    status: "Completed"
  },
  {
    title: "English Certificate",
    organization: "SSE Academy / Esoft",
    date: "Completed",
    link: "#",
    status: "Completed"
  },
  {
    title: "Programming Certifications",
    organization: "Sololearn",
    date: "Completed",
    link: "#",
    status: "Completed"
  },
  {
    title: "Tech & Dev Certifications",
    organization: "Coursera",
    date: "Completed",
    link: "#",
    status: "Completed"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4"><span className="text-primary">Certifications</span> & Awards</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-border group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <span className={`text-xs font-mono px-2 py-1 rounded mb-4 inline-block ${cert.status === "Completed" ? "bg-green-500/10 text-green-500" :
                    cert.status === "In Progress" ? "bg-yellow-500/10 text-yellow-500" :
                      "bg-muted text-muted-foreground"
                  }`}>
                  {cert.status}
                </span>

                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.organization}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs font-medium text-muted-foreground">{cert.date}</span>
                  <a href={cert.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
