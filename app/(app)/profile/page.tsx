import { requireUser } from "@/lib/auth";
import { getProfile, getUserProgress } from "@/lib/supabase/queries";
import { GameProfile } from "@/components/profile/GameProfile";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile — DevMode",
};

export default async function ProfilePage() {
  const user = await requireUser();
  const profile = await getProfile(user.id);
  if (!profile) redirect("/onboarding");

  const progress = await getUserProgress(user.id);

  return (
    <div className="mx-auto max-w-lg">
      <GameProfile profile={profile} progress={progress} />
    </div>
  );
}
