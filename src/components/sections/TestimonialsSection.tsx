"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Sachintha is an exceptional software engineering student. His ability to grasp complex architectural concepts and apply them to real-world IoT projects is truly impressive. He's definitely a future leader in tech.",
    author: "Dr. A. Perera",
    role: "Senior Lecturer, CINEC Campus",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    content: "Working with Sachintha on our freelance project was a breeze. He delivered a high-quality, scalable Next.js application ahead of schedule and maintained excellent communication throughout.",
    author: "Sarah Jenkins",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    content: "During his internship, Sachintha showed a remarkable aptitude for problem-solving. His contributions to our AI analysis tool significantly improved its performance. Highly recommended.",
    author: "Michael Chen",
    role: "Engineering Manager",
    image: "https://i.pravatar.cc/150?img=8"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">What <span className="text-primary">People Say</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors text-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors text-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            className="overflow-hidden relative min-h-[300px] flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="glass-card p-8 md:p-12 rounded-3xl relative">
                  <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
                  
                  <div className="relative z-10 text-center">
                    <p className="text-lg md:text-xl text-foreground font-medium italic mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author}
                        className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary/50"
                      />
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
