import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { getLevel } from "@/lib/content";
import { getUserProgressForLevel, startLevel } from "@/lib/supabase/queries";
import { LevelWorkspace } from "@/components/levels/LevelWorkspace";
import { Metadata } from "next";

interface Props {
  params: Promise<{ levelId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { levelId } = await params;
  const level = getLevel(levelId);
  if (!level) return {};
  return { title: `${level.id}: ${level.title} — DevMode` };
}

export default async function LevelWorkspacePage({ params }: Props) {
  const { levelId } = await params;
  const user = await requireUser();
  const level = getLevel(levelId);
  if (!level) notFound();

  // Start level if not already started
  let progress = await getUserProgressForLevel(user.id, levelId);
  if (!progress) {
    progress = await startLevel(user.id, levelId);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <LevelWorkspace
        level={level}
        checklistState={progress?.checklist_state ?? {}}
      />
    </div>
  );
}
