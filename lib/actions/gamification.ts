"use server";

import { requireUser } from "@/lib/auth";
import {
  submitLevel,
  awardXp,
  updateStreak,
  getUserProgress,
} from "@/lib/supabase/queries";
import { getRankForXp } from "@/lib/progression";
import { createClient } from "@/lib/supabase/server";

export async function completeLevel(levelId: string, submissionUrl: string) {
  const user = await requireUser();

  // Mark level as completed
  await submitLevel(user.id, levelId, submissionUrl);

  // Award base XP
  await awardXp(user.id, 100, "level_complete", levelId);

  // Check track milestones (every level that completes a track milestone gets 500 XP)
  const progress = await getUserProgress(user.id);
  const completedInTrack = progress.filter(
    (p) =>
      p.status === "completed" &&
      p.level_id.charAt(0) === levelId.charAt(0)
  ).length;

  // Award milestone bonus for every 5 levels completed in a track
  if (completedInTrack > 0 && completedInTrack % 5 === 0) {
    await awardXp(user.id, 500, "track_milestone", levelId);
  }

  // Update streak
  await updateStreak(user.id);

  // Update rank
  const supabase = await createClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("total_xp")
    .eq("id", user.id)
    .single();

  if (profile) {
    const newRank = getRankForXp(profile.total_xp);
    await supabase
      .from("profiles")
      .update({ rank: newRank })
      .eq("id", user.id);
  }

  return { success: true, xpEarned: 100 };
}

export async function recordDailyActivity() {
  const user = await requireUser();
  await updateStreak(user.id);

  // Award daily streak XP
  await awardXp(user.id, 10, "streak");
}
