"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, User, Briefcase, FileText, Mail, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!isOpen) return null;

  const actions = [
    { id: "home", name: "Home", icon: <User className="w-4 h-4" />, action: () => router.push("/") },
    { id: "about", name: "About", icon: <User className="w-4 h-4" />, action: () => { router.push("/#about"); setIsOpen(false); } },
    { id: "projects", name: "Projects", icon: <Briefcase className="w-4 h-4" />, action: () => { router.push("/#projects"); setIsOpen(false); } },
    { id: "resume", name: "Download Resume", icon: <FileText className="w-4 h-4" />, action: () => { window.open("/resume.pdf", "_blank"); setIsOpen(false); } },
    { id: "contact", name: "Contact", icon: <Mail className="w-4 h-4" />, action: () => { router.push("/#contact"); setIsOpen(false); } },
    { id: "theme-light", name: "Light Mode", icon: <Sun className="w-4 h-4" />, action: () => { setTheme("light"); setIsOpen(false); } },
    { id: "theme-dark", name: "Dark Mode", icon: <Moon className="w-4 h-4" />, action: () => { setTheme("dark"); setIsOpen(false); } },
    { id: "theme-system", name: "System Theme", icon: <Monitor className="w-4 h-4" />, action: () => { setTheme("system"); setIsOpen(false); } },
  ];

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] p-4 animate-in fade-in duration-200">
      <div 
        className="bg-background border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground mr-3" />
          <input
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-muted-foreground text-lg"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <kbd className="hidden sm:inline-flex bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-mono">
            ESC
          </kbd>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <div className="p-4 text-center text-muted-foreground">No results found.</div>
          ) : (
            <div className="flex flex-col gap-1">
              <div className="text-xs font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wider">
                Suggestions
              </div>
              {filteredActions.map((action) => (
                <button
                  key={action.id}
                  className="flex items-center w-full px-3 py-2 text-left rounded-md hover:bg-muted text-foreground transition-colors cursor-pointer"
                  onClick={action.action}
                >
                  <span className="mr-3 text-muted-foreground">{action.icon}</span>
                  <span>{action.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Background click handler */}
      <div className="absolute inset-0 z-[-1]" onClick={() => setIsOpen(false)} />
    </div>
  );
}
