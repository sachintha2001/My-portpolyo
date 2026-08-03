"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    id: "1",
    title: "The Future of AI in Software Architecture",
    excerpt: "Exploring how artificial intelligence is shaping the way we design and build scalable backend systems.",
    date: "Jun 10, 2026",
    readTime: "5 min read",
    category: "AI Development",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Optimizing IoT Sensor Networks with LoRaWAN",
    excerpt: "A deep dive into building low-power, long-range communication networks for smart agriculture.",
    date: "May 28, 2026",
    readTime: "8 min read",
    category: "IoT Innovations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Why Test-Driven Development Matters",
    excerpt: "How practicing TDD from the start of your engineering journey leads to cleaner, more maintainable code.",
    date: "May 15, 2026",
    readTime: "4 min read",
    category: "Software Engineering Practices",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogSection() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Latest <span className="text-primary">Insights</span></h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors mt-auto">
                  Read Article <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
