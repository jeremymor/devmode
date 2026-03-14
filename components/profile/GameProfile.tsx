import { Profile, UserProgress } from "@/lib/types";
import { tracks } from "@/lib/tracks";
import { RankBadge } from "@/components/gamification/RankBadge";
import { XpBar } from "@/components/gamification/XpBar";
import { StreakCounter } from "@/components/gamification/StreakCounter";
import { Rank } from "@/lib/types";

interface GameProfileProps {
  profile: Profile;
  progress: UserProgress[];
}

export function GameProfile({ profile, progress }: GameProfileProps) {
  const completedLevels = progress.filter((p) => p.status === "completed");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <RankBadge rank={profile.rank as Rank} size="lg" />
        <div>
          <h1 className="text-xl font-bold">
            {profile.display_name || profile.username}
          </h1>
          <p className="text-sm text-muted-foreground">@{profile.username}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-sm border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold text-[var(--xp-gold)]">
            {profile.total_xp.toLocaleString()}
          </div>
          <div className="text-xs text-muted-foreground">Total XP</div>
        </div>
        <div className="rounded-sm border border-border bg-card p-4 text-center">
          <div className="text-2xl font-bold">{completedLevels.length}</div>
          <div className="text-xs text-muted-foreground">Levels Done</div>
        </div>
        <div className="rounded-sm border border-border bg-card p-4 text-center">
          <StreakCounter streak={profile.current_streak} />
          <div className="mt-1 text-xs text-muted-foreground">Streak</div>
        </div>
      </div>

      {/* XP Progress */}
      <XpBar currentXp={profile.total_xp} />

      {/* Track Progress */}
      <div>
        <h2 className="mb-3 text-sm font-medium text-muted-foreground">
          Track Progress
        </h2>
        <div className="space-y-2">
          {tracks.map((track) => {
            const trackCompleted = completedLevels.filter(
              (p) => p.level_id.charAt(0) === track.id
            ).length;
            const percentage = (trackCompleted / track.levelCount) * 100;

            if (trackCompleted === 0) return null;

            return (
              <div key={track.id} className="flex items-center gap-3">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-sm text-xs font-bold text-white"
                  style={{ backgroundColor: track.color }}
                >
                  {track.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>{track.name}</span>
                    <span className="text-muted-foreground">
                      {trackCompleted}/{track.levelCount}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: track.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completed Levels */}
      {completedLevels.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-medium text-muted-foreground">
            Completed Projects
          </h2>
          <div className="space-y-2">
            {completedLevels.map((p) => (
              <div
                key={p.level_id}
                className="flex items-center justify-between rounded-sm border border-border bg-card px-4 py-2"
              >
                <span className="text-sm font-medium">{p.level_id}</span>
                {p.submission_url && (
                  <a
                    href={p.submission_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    View project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
