import { Rank } from "@/lib/types";

const RANK_ICONS: Record<Rank, string> = {
  Curious: "?",
  Tinkerer: "T",
  Builder: "B",
  Maker: "M",
  Creator: "C",
};

const RANK_COLORS: Record<Rank, string> = {
  Curious: "#71717a",
  Tinkerer: "#3b82f6",
  Builder: "#a855f7",
  Maker: "#f59e0b",
  Creator: "#22c55e",
};

interface RankBadgeProps {
  rank: Rank;
  size?: "sm" | "md" | "lg";
}

export function RankBadge({ rank, size = "md" }: RankBadgeProps) {
  const sizeClasses = {
    sm: "h-6 w-6 text-xs",
    md: "h-8 w-8 text-sm",
    lg: "h-12 w-12 text-lg",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-sm font-bold text-white ${sizeClasses[size]}`}
      style={{ backgroundColor: RANK_COLORS[rank] }}
      title={rank}
    >
      {RANK_ICONS[rank]}
    </div>
  );
}
