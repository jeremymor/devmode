import Link from "next/link";
import { Level, LevelStatus } from "@/lib/types";

interface LevelNodeProps {
  level: Level;
  color: string;
  status?: LevelStatus;
}

export function LevelNode({ level, color, status = "unlocked" }: LevelNodeProps) {
  const statusStyles: Record<LevelStatus, string> = {
    locked: "border-muted bg-muted/50 text-muted-foreground cursor-not-allowed",
    unlocked: "border-border bg-card text-foreground hover:border-muted-foreground/50",
    in_progress: "border-2 text-white",
    completed: "border-green-500 bg-green-500/20 text-green-400",
  };

  const nodeStyle = statusStyles[status];
  const inProgressStyle = status === "in_progress" ? { borderColor: color } : {};

  return (
    <Link
      href={`/levels/${level.id}`}
      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-sm border transition-colors ${nodeStyle}`}
      style={inProgressStyle}
    >
      {status === "completed" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ) : (
        <span className="text-sm font-bold">{level.id}</span>
      )}
    </Link>
  );
}
