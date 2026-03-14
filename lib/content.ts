import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Level } from "./types";

const contentDir = path.join(process.cwd(), "content", "levels");

export function getLevel(id: string): Level | null {
  const filePath = path.join(contentDir, `${id}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    id: data.id,
    track: data.track,
    order: data.order,
    title: data.title,
    subtitle: data.subtitle || "",
    tech: data.tech || "",
    xp_reward: data.xp_reward || 100,
    prerequisites: data.prerequisites || [],
    concepts: data.concepts || [],
    build_ideas: data.build_ideas || [],
    checklist: data.checklist || [],
    hints: data.hints || [],
    resources: data.resources || [],
    content: content.trim(),
  };
}

export function getAllLevels(): Level[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  const levels = files
    .map((f) => getLevel(f.replace(".mdx", "")))
    .filter((l): l is Level => l !== null);

  return levels.sort((a, b) => {
    if (a.track !== b.track) return a.track.localeCompare(b.track);
    return a.order - b.order;
  });
}

export function getLevelsByTrack(trackId: string): Level[] {
  return getAllLevels().filter((l) => l.track === trackId);
}
