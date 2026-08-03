"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-outfit text-foreground tracking-tighter inline-block mb-4">
              R.K.S<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Building scalable software solutions, intelligent IoT systems, and immersive digital experiences that solve real-world problems.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/sachintha2001" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-primary hover:border-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:sachinthadhanasanka@gmail.com" className="p-2 glass rounded-full hover:text-primary hover:border-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-primary hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Me</Link></li>
              <li><Link href="#skills" className="hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#experience" className="hover:text-primary transition-colors">Experience</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} R.K Sachintha Dhansanka. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
