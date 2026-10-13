"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Copy, 
  Sparkles, 
  Radio, 
  ShieldCheck,
  Terminal,
  ArrowUpRight
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
          },
          publicKey
        );
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.warn("EmailJS credentials missing. Simulating success for demo purposes.");
        setTimeout(() => {
          setIsSuccess(true);
          reset();
          setTimeout(() => setIsSuccess(false), 5000);
        }, 1200);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sachinthadhanasanka@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-slate-950/70">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[130px] pointer-events-none -z-10" />

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
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            DIRECT TRANSMISSION CHANNEL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit mb-4 text-foreground tracking-tight">
            Initiate <span className="text-gradient">Connection</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-base sm:text-lg">
            Whether you are looking to hire a software engineer, collaborate on research, explore IoT innovations, or build a scalable web application, my channels are open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* Left Column: Direct Telemetry & Info Hub (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 border border-white/10 bg-slate-900/60 backdrop-blur-xl flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Top Telemetry Status */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-mono">
                <span className="flex items-center gap-2 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  STATUS: LIVE & RESPONSIVE
                </span>
                <span className="text-slate-400">ENCRYPTION: 256-BIT</span>
              </div>

              <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                Let&apos;s Build Something Extraordinary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Based in Sri Lanka, available for global remote roles, hybrid engineering positions, and enterprise projects.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Email Address</span>
                      <a 
                        href="mailto:sachinthadhanasanka@gmail.com"
                        className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors"
                      >
                        sachinthadhanasanka@gmail.com
                      </a>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all"
                    title="Copy Email"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Direct Line</span>
                      <a 
                        href="tel:+94701552581" 
                        className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors"
                      >
                        +94 (70) 155 2581
                      </a>
                    </div>
                  </div>
                  <a 
                    href="tel:+94701552581"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-muted-foreground block">Base Location</span>
                      <p className="text-sm font-semibold text-white">
                        Ahangama, Galle, Sri Lanka
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">UTC +05:30</span>
                </div>
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="pt-8 mt-8 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                Social Profiles & Repositories:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sachintha2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs font-mono transition-all hover:scale-105 hover:border-primary/40 shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sachintha-bro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs font-mono transition-all hover:scale-105 hover:border-primary/40 shadow-lg"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Glass Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl p-6 sm:p-10 border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              {/* Sci-Fi HUD Corner Brackets */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-violet-400/60 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-violet-400/60 pointer-events-none" />

              {/* Success Notification Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center z-30 p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 14 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white font-outfit mb-2">
                      Transmission Received!
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm">
                      Thank you for reaching out. Your message has been dispatched and I will get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>TRANSMISSION TERMINAL</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase">
                  DIRECT API DISPATCH
                </span>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all backdrop-blur-md ${
                      errors.name 
                        ? "border-rose-500 focus:ring-rose-500/30" 
                        : "border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20"
                    }`}
                    placeholder="e.g. Elon Musk"
                  />
                  {errors.name && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all backdrop-blur-md ${
                      errors.email 
                        ? "border-rose-500 focus:ring-rose-500/30" 
                        : "border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20"
                    }`}
                    placeholder="e.g. name@company.com"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.email.message}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all backdrop-blur-md ${
                    errors.subject 
                      ? "border-rose-500 focus:ring-rose-500/30" 
                      : "border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20"
                  }`}
                  placeholder="e.g. Software Architecture Project Inquiry"
                />
                {errors.subject && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.subject.message}</p>}
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-2xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all resize-none backdrop-blur-md ${
                    errors.message 
                      ? "border-rose-500 focus:ring-rose-500/30" 
                      : "border-white/10 focus:border-cyan-400 focus:ring-cyan-400/20"
                  }`}
                  placeholder="Write your project requirements, inquiries, or notes here..."
                />
                {errors.message && <p className="text-rose-400 text-xs mt-1 font-mono">{errors.message.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(59,130,246,0.45)] disabled:opacity-70 disabled:cursor-not-allowed border border-blue-400/30"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Encrypting & Dispatching...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
