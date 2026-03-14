import { requireUser } from "@/lib/auth";
import { getProfile, getUserProgress } from "@/lib/supabase/queries";
import { getAllLevels } from "@/lib/content";
import { tracks } from "@/lib/tracks";
import { XpBar } from "@/components/gamification/XpBar";
import { RankBadge } from "@/components/gamification/RankBadge";
import { StreakCounter } from "@/components/gamification/StreakCounter";
import { Rank } from "@/lib/types";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — DevMode",
};

export default async function DashboardPage() {
  const user = await requireUser();
  const profile = await getProfile(user.id);
  const progress = await getUserProgress(user.id);
  const allLevels = getAllLevels();

  if (!profile) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="font-display text-2xl font-bold">Setting up your profile...</h1>
        <p className="mt-2 text-muted-foreground">
          Please refresh the page in a moment.
        </p>
      </div>
    );
  }

  const activeLevels = progress.filter((p) => p.status === "in_progress");
  const completedLevels = progress.filter((p) => p.status === "completed");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RankBadge rank={profile.rank as Rank} size="lg" />
          <div>
            <h1 className="font-display text-2xl font-bold">
              Hey, {profile.display_name || profile.username}
            </h1>
            <StreakCounter streak={profile.current_streak} />
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <XpBar currentXp={profile.total_xp} />

      {/* Active Levels */}
      <section>
        <h2 className="font-display text-lg font-semibold">Active Levels</h2>
        {activeLevels.length === 0 ? (
          <div className="mt-3 rounded-sm border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground">No levels in progress.</p>
            <Link
              href="/tracks"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              Browse tracks to get started
            </Link>
          </div>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {activeLevels.map((p) => {
              const level = allLevels.find((l) => l.id === p.level_id);
              const track = tracks.find((t) => t.id === p.level_id.charAt(0));
              return (
                <Link
                  key={p.level_id}
                  href={`/levels/${p.level_id}`}
                  className="flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-muted-foreground/30"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-sm text-sm font-bold text-white"
                    style={{ backgroundColor: track?.color ?? "#3b82f6" }}
                  >
                    {p.level_id}
                  </div>
                  <div>
                    <div className="font-medium">
                      {level?.title ?? p.level_id}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      In progress
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Completed */}
      {completedLevels.length > 0 && (
        <section>
          <h2 className="font-display text-lg font-semibold">
            Completed ({completedLevels.length})
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {completedLevels.map((p) => {
              const level = allLevels.find((l) => l.id === p.level_id);
              return (
                <div
                  key={p.level_id}
                  className="flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm">
                    {p.level_id}: {level?.title ?? ""}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section>
        <h2 className="font-display text-lg font-semibold">Quick Links</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/tracks"
            className="rounded-sm border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
          >
            Browse Tracks
          </Link>
          <Link
            href="/profile"
            className="rounded-sm border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
          >
            View Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
