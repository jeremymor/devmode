"use server";

import { requireUser } from "@/lib/auth";
import { updateChecklist, startLevel } from "@/lib/supabase/queries";

export async function saveChecklist(
  levelId: string,
  checklistState: Record<string, boolean>
) {
  const user = await requireUser();
  await updateChecklist(user.id, levelId, checklistState);
  return { success: true };
}

export async function beginLevel(levelId: string) {
  const user = await requireUser();
  await startLevel(user.id, levelId);
  return { success: true };
}
