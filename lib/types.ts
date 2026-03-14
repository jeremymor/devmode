export interface Resource {
  label: string;
  url: string;
}

export interface Level {
  id: string;
  track: string;
  order: number;
  title: string;
  subtitle: string;
  tech: string;
  xp_reward: number;
  prerequisites: string[];
  concepts: string[];
  build_ideas: string[];
  checklist: string[];
  hints: string[];
  resources: Resource[];
  content: string;
}

export interface Track {
  id: string;
  name: string;
  description: string;
  color: string;
  levelCount: number;
  slug: string;
  unlockRequirement: string | null;
}

export type LevelStatus = "locked" | "unlocked" | "in_progress" | "completed";

export type Rank = "Curious" | "Tinkerer" | "Builder" | "Maker" | "Creator";

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  avatar_url: string | null;
  rank: Rank;
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  last_active_date: string | null;
}

export interface UserProgress {
  id: string;
  user_id: string;
  level_id: string;
  status: LevelStatus;
  checklist_state: Record<string, boolean>;
  submission_url: string | null;
  xp_earned: number;
  started_at: string | null;
  completed_at: string | null;
}
