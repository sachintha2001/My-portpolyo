/**
 * Dynamic Web Image Generator for GitHub Projects
 * Generates high-resolution, context-aware imagery for dynamically loaded GitHub repositories.
 * Supports:
 * 1. Live website screenshots if a valid demo homepage is present.
 * 2. Deep domain detection matching the repository to curated, high-definition tech photography.
 * 3. Deterministic hashing for stable caching across renders.
 */

export interface GitHubRepoContext {
  name: string;
  description?: string | null;
  language?: string | null;
  topics?: string[];
  homepage?: string | null;
}

// Curated high-resolution web images organized by domain
const DOMAIN_IMAGES: Record<string, string[]> = {
  agritech: [
    "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800", // Smart farm IoT sensor
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800", // Smart greenhouse tech
  ],
  ecommerce: [
    "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800", // Online shopping UI & cart
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // E-commerce data analytics
  ],
  ai: [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", // Neural network AI brain
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800", // Deep learning data nodes
  ],
  pos: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", // Modern POS terminal
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", // Clothing store boutique
  ],
  automotive: [
    "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800", // Automotive diagnostics & telemetry
    "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=800", // Modern vehicle service bay
  ],
  support: [
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800", // Customer support dashboard
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800", // Digital ticketing system
  ],
  finance: [
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800", // Fintech mobile screen
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", // Digital banking & charts
  ],
  education: [
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800", // Online examination & learning
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", // Student team collaboration
  ],
  hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", // Luxury modern hotel
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", // Smart hospitality suite
  ],
  library: [
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800", // Modern illuminated library
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800", // Digital book archive
  ],
  task: [
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800", // Agile sprint Kanban board
    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800", // Productivity management
  ],
  inventory: [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800", // Automated smart warehouse
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800", // Logistics stock management
  ],
  ticketing: [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800", // E-ticket & event lighting
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800", // Transit reservation
  ],
  mobile: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", // Smartphone app UI mockup
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", // Mobile app interaction
  ],
  game: [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", // Neon cyberpunk game setup
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800", // Game development console
  ],
  iot: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", // Microprocessor circuit
    "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=800", // Hardware sensor components
  ],
  festive: [
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800", // Celebration & lights
  ],
  general: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", // Cyber developer coding workstation
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // High-contrast IDE code
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", // Cloud network infrastructure
  ],
};

/**
 * Generate a consistent numeric hash from a string.
 */
function getDeterministicHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Identify the most accurate domain for a given repository.
 */
function identifyRepoDomain(text: string): string {
  const t = text.toLowerCase();

  if (t.includes("agri") || t.includes("farm") || t.includes("crop") || t.includes("plant") || t.includes("irrigation")) {
    return "agritech";
  }
  if (t.includes("e-commerce") || t.includes("ecommerce") || t.includes("recommendation") || t.includes("cart") || t.includes("shop")) {
    return "ecommerce";
  }
  if (t.includes("ai-powered") || t.includes("deep-learning") || t.includes("machine-learning") || t.includes("neural") || t.includes("vision") || t.includes("llm")) {
    return "ai";
  }
  if (t.includes("pos") || t.includes("clothing") || t.includes("retail") || t.includes("cashier") || t.includes("billing")) {
    return "pos";
  }
  if (t.includes("autocare") || t.includes("vehicle") || t.includes("car") || t.includes("garage") || t.includes("motor")) {
    return "automotive";
  }
  if (t.includes("pulsedesk") || t.includes("support") || (t.includes("ticket") && t.includes("engine")) || t.includes("helpdesk")) {
    return "support";
  }
  if (t.includes("finance") || t.includes("bank") || t.includes("wallet") || t.includes("budget") || t.includes("swiftui") || t.includes("crypto")) {
    return "finance";
  }
  if (t.includes("exam") || t.includes("student") || t.includes("school") || t.includes("dahampasal") || t.includes("university")) {
    return "education";
  }
  if (t.includes("hotel") || t.includes("resort") || t.includes("hospitality")) {
    return "hotel";
  }
  if (t.includes("library") || t.includes("book") || t.includes("archive") || t.includes("catalog")) {
    return "library";
  }
  if (t.includes("inventory") || t.includes("warehouse") || t.includes("logistics") || t.includes("cpe") || t.includes("stock")) {
    return "inventory";
  }
  if (t.includes("ticket")) {
    return "ticketing";
  }
  if (t.includes("task") || t.includes("bug") || t.includes("kanban") || t.includes("scrum") || t.includes("tracker")) {
    return "task";
  }
  if (t.includes("game") || t.includes("runner") || t.includes("unity") || t.includes("2d-run")) {
    return "game";
  }
  if (t.includes("mobile") || t.includes("android") || t.includes("ios") || t.includes("flutter")) {
    return "mobile";
  }
  if (t.includes("iot") || t.includes("lorawan") || t.includes("esp8266") || t.includes("esp32") || t.includes("arduino") || t.includes("sensor")) {
    return "iot";
  }
  if (t.includes("avurudu") || t.includes("wish") || t.includes("festival")) {
    return "festive";
  }

  return "general";
}

/**
 * Generate a dynamic web image for a GitHub repository.
 * If the repository has a live deployed website, generates a real web screenshot.
 * Otherwise, generates an ultra-relevant, high-resolution thematic web image from Unsplash.
 */
export function generateProjectWebImage(repo: GitHubRepoContext): string {
  // 1. If repo has a live demo homepage (excluding github.com and localhost), generate a live web screenshot!
  if (
    repo.homepage &&
    repo.homepage.trim() !== "" &&
    repo.homepage !== "#" &&
    repo.homepage.startsWith("http") &&
    !repo.homepage.includes("github.com") &&
    !repo.homepage.includes("localhost")
  ) {
    return `https://api.microlink.io?url=${encodeURIComponent(repo.homepage)}&screenshot=true&meta=false&embed=screenshot.url`;
  }

  // 2. Aggregate all textual tokens to identify domain
  const searchableText = [
    repo.name,
    repo.description || "",
    repo.language || "",
    ...(repo.topics || []),
  ].join(" ");

  const domain = identifyRepoDomain(searchableText);
  const imageCollection = DOMAIN_IMAGES[domain] || DOMAIN_IMAGES.general;

  // 3. Select consistent deterministic image from collection
  const hash = getDeterministicHash(repo.name);
  const selectedIndex = hash % imageCollection.length;

  return imageCollection[selectedIndex];
}

/**
 * Default fallback image if any network failure occurs.
 */
export const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800";
