"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Minimize2, Sparkles, User, RefreshCw, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "Tell me about your projects",
  "What are your top skills?",
  "How can I contact you?",
  "Tell me in Sinhala (සිංහල)"
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm Sachintha AI, R.K Sachintha Dhansanka's personal assistant. I can help you with details about his projects, skills, education, and experience. How can I help you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.text || "Sorry, I couldn't generate a response.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Oops! Something went wrong while connecting to my brain. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Chat cleared! How can I help you?"
      }
    ]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -6, 0]
            }}
            transition={{
              scale: { duration: 0.3 },
              opacity: { duration: 0.3 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-1 bg-slate-900/90 border-2 border-cyan-400/60 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] transition-all flex items-center justify-center group backdrop-blur-xl"
            title="Chat with Sachintha AI Robot"
          >
            {/* Glowing Pulse Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping opacity-25 pointer-events-none" />
            
            {/* 3D Robot Avatar Icon */}
            <div className="w-14 h-14 rounded-full overflow-hidden relative z-10 border border-white/20">
              <img 
                src="/robot-avatar.jpg" 
                alt="3D Robot AI Assistant" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Live Online Ping Badge */}
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-950"></span>
            </span>

            {/* Floating Tooltip Pill */}
            <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-white/10 text-xs font-mono font-medium text-cyan-300 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-md hidden sm:block">
              Chat with AI Robot ⚡
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[85vh] bg-slate-950/90 border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.25)] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-slate-900/80 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <img 
                      src="/robot-avatar.jpg" 
                      alt="Sachintha AI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
                </div>
                <div>
                  <h3 className="font-bold text-sm font-outfit text-white flex items-center gap-1.5">
                    Sachintha AI
                    <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      BOT
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Neural Engine
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleClear}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors"
                  title="Clear Chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-cyan-400/50 shadow-sm mt-0.5">
                      <img 
                        src="/robot-avatar.jpg" 
                        alt="AI" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-sm" 
                        : "bg-muted/50 border border-white/5 rounded-tl-sm text-foreground prose-sm prose-invert"
                    }`}
                  >
                    {msg.role === "user" ? (
                      msg.content
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                          ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2" {...props} />,
                          ol: ({node, ...props}) => <ol className="list-decimal pl-4 mb-2" {...props} />,
                          li: ({node, ...props}) => <li className="mb-1" {...props} />,
                          a: ({node, ...props}) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                          code: ({node, className, children, ...props}) => {
                            const match = /language-(\w+)/.exec(className || '')
                            return match ? (
                              <code className="bg-black/30 block p-2 rounded text-xs font-mono mb-2 overflow-x-auto" {...props}>
                                {children}
                              </code>
                            ) : (
                              <code className="bg-black/30 px-1 py-0.5 rounded text-xs font-mono text-primary" {...props}>
                                {children}
                              </code>
                            )
                          }
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 border border-white/10">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted/50 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-muted-foreground animate-pulse">Sachintha AI is typing...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions (only show if no user messages yet) */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-background/50">
              <div className="relative flex items-end gap-2">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder="Ask me anything..."
                  className="w-full max-h-32 min-h-[44px] bg-muted/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none placeholder:text-muted-foreground hide-scrollbar transition-all"
                  rows={1}
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isLoading}
                  className="h-[44px] w-[44px] shrink-0 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-muted-foreground">Powered by Google Gemini API</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
