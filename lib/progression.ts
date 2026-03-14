import { Level, Rank } from "./types";
import { tracks } from "./tracks";

const RANK_THRESHOLDS: { min: number; max: number; rank: Rank }[] = [
  { min: 0, max: 499, rank: "Curious" },
  { min: 500, max: 1999, rank: "Tinkerer" },
  { min: 2000, max: 4999, rank: "Builder" },
  { min: 5000, max: 9999, rank: "Maker" },
  { min: 10000, max: Infinity, rank: "Creator" },
];

export function getRankForXp(xp: number): Rank {
  const tier = RANK_THRESHOLDS.find((t) => xp >= t.min && xp <= t.max);
  return tier?.rank ?? "Curious";
}

export function getXpForNextRank(currentXp: number): {
  current: number;
  next: number;
  label: string;
} {
  const currentTier = RANK_THRESHOLDS.find(
    (t) => currentXp >= t.min && currentXp <= t.max
  )!;
  const nextIndex = RANK_THRESHOLDS.indexOf(currentTier) + 1;

  if (nextIndex >= RANK_THRESHOLDS.length) {
    return { current: currentXp, next: currentXp, label: "Creator" };
  }

  const nextTier = RANK_THRESHOLDS[nextIndex];
  return {
    current: currentXp - currentTier.min,
    next: nextTier.min - currentTier.min,
    label: nextTier.rank,
  };
}

export function isTrackUnlocked(
  trackId: string,
  completedLevels: string[]
): boolean {
  const track = tracks.find((t) => t.id === trackId);
  if (!track) return false;
  if (!track.unlockRequirement) return true;
  return completedLevels.includes(track.unlockRequirement);
}

export function getUnlockedLevels(
  trackId: string,
  completedLevels: string[],
  allLevels: Level[]
): string[] {
  const trackLevels = allLevels
    .filter((l) => l.track === trackId)
    .sort((a, b) => a.order - b.order);

  if (!isTrackUnlocked(trackId, completedLevels)) return [];

  const unlocked: string[] = [];
  for (const level of trackLevels) {
    const prereqsMet = level.prerequisites.every((p) =>
      completedLevels.includes(p)
    );
    if (prereqsMet) {
      unlocked.push(level.id);
    }
  }
  return unlocked;
}

export function getNextLevel(
  trackId: string,
  completedLevels: string[],
  allLevels: Level[]
): Level | null {
  const trackLevels = allLevels
    .filter((l) => l.track === trackId)
    .sort((a, b) => a.order - b.order);

  for (const level of trackLevels) {
    if (completedLevels.includes(level.id)) continue;
    const prereqsMet = level.prerequisites.every((p) =>
      completedLevels.includes(p)
    );
    if (prereqsMet) return level;
  }
  return null;
}
