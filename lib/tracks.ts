import { Track } from "./types";

export const tracks: Track[] = [
  {
    id: "A",
    name: "Backend & Web",
    description:
      "From zero to platform engineer. The core path every learner follows — 24 levels covering Git, databases, auth, APIs, AI, payments, microservices, and more.",
    color: "#3b82f6",
    levelCount: 24,
    slug: "backend-web",
    unlockRequirement: null,
  },
  {
    id: "B",
    name: "Algorithms & Data Structures",
    description:
      "Build algorithmic thinking through real projects — arrays, trees, graphs, dynamic programming, and building your own database engine.",
    color: "#a855f7",
    levelCount: 6,
    slug: "algorithms",
    unlockRequirement: "A0",
  },
  {
    id: "C",
    name: "Security & Compliance",
    description:
      "Think like an attacker, build like a defender. From vulnerable apps to encryption, CTF challenges, and compliance.",
    color: "#ef4444",
    levelCount: 8,
    slug: "security",
    unlockRequirement: "A3",
  },
  {
    id: "D",
    name: "Hardware & Robotics",
    description:
      "From blinking LEDs to autonomous robots. Arduino, ESP32, motor control, computer vision, and home automation.",
    color: "#f97316",
    levelCount: 7,
    slug: "hardware",
    unlockRequirement: "A2",
  },
  {
    id: "E",
    name: "Architectures & Platforms",
    description:
      "Same backend skills, radically different shapes. CMS, SPA, serverless, mobile, desktop, browser extensions, and more.",
    color: "#14b8a6",
    levelCount: 24,
    slug: "architectures",
    unlockRequirement: "A2",
  },
  {
    id: "F",
    name: "AI & Machine Learning",
    description:
      "From API calls to building intelligent systems. RAG, agents, embeddings, fine-tuning, computer vision, and ML pipelines.",
    color: "#22c55e",
    levelCount: 8,
    slug: "ai-ml",
    unlockRequirement: "A7",
  },
  {
    id: "G",
    name: "Systems & Low-Level",
    description:
      "Understand what's happening under the hood. Build a shell, HTTP server, database, interpreter, and OS concepts from scratch.",
    color: "#f59e0b",
    levelCount: 7,
    slug: "systems",
    unlockRequirement: "A0",
  },
  {
    id: "H",
    name: "Game Development",
    description:
      "Unique engineering patterns you won't learn anywhere else. Terminal games, 2D/3D browser games, multiplayer, and physics engines.",
    color: "#ec4899",
    levelCount: 6,
    slug: "games",
    unlockRequirement: "A0",
  },
];

export function getTrackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export function getTrackById(id: string): Track | undefined {
  return tracks.find((t) => t.id === id);
}
