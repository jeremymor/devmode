import { notFound } from "next/navigation";
import { tracks, getTrackBySlug } from "@/lib/tracks";
import { getLevelsByTrack } from "@/lib/content";
import { TrackPath } from "@/components/tracks/TrackPath";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ trackSlug: string }>;
}

export async function generateStaticParams() {
  return tracks.map((t) => ({ trackSlug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { trackSlug } = await params;
  const track = getTrackBySlug(trackSlug);
  if (!track) return {};
  return {
    title: `Track ${track.id}: ${track.name} — DevMode`,
    description: track.description,
  };
}

export default async function TrackPage({ params }: Props) {
  const { trackSlug } = await params;
  const track = getTrackBySlug(trackSlug);
  if (!track) notFound();

  const levels = getLevelsByTrack(track.id);

  return (
    <div>
      <Link
        href="/tracks"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; All Tracks
      </Link>
      <div className="mt-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-sm text-lg font-bold text-white"
          style={{ backgroundColor: track.color }}
        >
          {track.id}
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold">{track.name}</h1>
          <p className="text-sm text-muted-foreground">
            {track.levelCount} levels
            {track.unlockRequirement &&
              ` · Requires ${track.unlockRequirement}`}
          </p>
        </div>
      </div>
      <p className="mt-3 text-muted-foreground">{track.description}</p>

      <TrackPath levels={levels} trackColor={track.color} />
    </div>
  );
}
