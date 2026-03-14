import { getXpForNextRank, getRankForXp } from "@/lib/progression";
import { Progress } from "@/components/ui/progress";

interface XpBarProps {
  currentXp: number;
}

export function XpBar({ currentXp }: XpBarProps) {
  const rank = getRankForXp(currentXp);
  const { current, next, label } = getXpForNextRank(currentXp);
  const percentage = next > 0 ? Math.min((current / next) * 100, 100) : 100;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{rank}</span>
        <span className="text-muted-foreground">
          {currentXp.toLocaleString()} XP
          {next > current && ` / ${(currentXp + (next - current)).toLocaleString()} XP to ${label}`}
        </span>
      </div>
      <Progress value={percentage} className="h-2 [&>div]:bg-[var(--xp-gold)]" />
    </div>
  );
}
