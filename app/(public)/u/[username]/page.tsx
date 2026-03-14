import { notFound } from "next/navigation";
import { getProfileByUsername, getUserProgress } from "@/lib/supabase/queries";
import { GameProfile } from "@/components/profile/GameProfile";
import { Metadata } from "next";

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username} — DevMode`,
    description: `${username}'s DevMode profile`,
  };
}

export default async function PublicProfilePage({ params }: Props) {
  const { username } = await params;
  const profile = await getProfileByUsername(username);
  if (!profile) notFound();

  const progress = await getUserProgress(profile.id);

  return (
    <div className="mx-auto max-w-lg">
      <GameProfile profile={profile} progress={progress} />
    </div>
  );
}
