import { createClient } from "./server";
import { Profile, UserProgress } from "../types";

export async function getProfile(userId: string): Promise<Profile | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  return data;
}

export async function getProfileByUsername(
  username: string
): Promise<Profile | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();
  return data;
}

export async function getUserProgress(
  userId: string
): Promise<UserProgress[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId);
  return data ?? [];
}

export async function getUserProgressForLevel(
  userId: string,
  levelId: string
): Promise<UserProgress | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("level_id", levelId)
    .single();
  return data;
}

export async function startLevel(
  userId: string,
  levelId: string
): Promise<UserProgress | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("user_progress")
    .upsert(
      {
        user_id: userId,
        level_id: levelId,
        status: "in_progress",
        checklist_state: {},
        started_at: new Date().toISOString(),
      },
      { onConflict: "user_id,level_id" }
    )
    .select()
    .single();
  return data;
}

export async function updateChecklist(
  userId: string,
  levelId: string,
  checklistState: Record<string, boolean>
): Promise<void> {
  const supabase = await createClient();
  await supabase
    .from("user_progress")
    .update({ checklist_state: checklistState })
    .eq("user_id", userId)
    .eq("level_id", levelId);
}

export async function submitLevel(
  userId: string,
  levelId: string,
  submissionUrl: string
): Promise<void> {
  const supabase = await createClient();
  await supabase
    .from("user_progress")
    .update({
      status: "completed",
      submission_url: submissionUrl,
      completed_at: new Date().toISOString(),
      xp_earned: 100,
    })
    .eq("user_id", userId)
    .eq("level_id", levelId);
}

export async function awardXp(
  userId: string,
  amount: number,
  eventType: string,
  levelId?: string
): Promise<void> {
  const supabase = await createClient();

  await supabase.from("xp_events").insert({
    user_id: userId,
    event_type: eventType,
    xp_amount: amount,
    level_id: levelId ?? null,
  });

  await supabase.rpc("increment_xp", { user_id_input: userId, amount });
}

export async function updateStreak(userId: string): Promise<void> {
  const supabase = await createClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("current_streak, longest_streak, last_active_date")
    .eq("id", userId)
    .single();

  if (!profile) return;

  const today = new Date().toISOString().split("T")[0];
  const lastActive = profile.last_active_date;

  if (lastActive === today) return;

  const yesterday = new Date(Date.now() - 86400000)
    .toISOString()
    .split("T")[0];
  const newStreak =
    lastActive === yesterday ? profile.current_streak + 1 : 1;
  const longestStreak = Math.max(newStreak, profile.longest_streak);

  await supabase
    .from("profiles")
    .update({
      current_streak: newStreak,
      longest_streak: longestStreak,
      last_active_date: today,
    })
    .eq("id", userId);
}
