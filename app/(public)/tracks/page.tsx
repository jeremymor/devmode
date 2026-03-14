import { tracks } from "@/lib/tracks";
import { TrackCard } from "@/components/tracks/TrackCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tracks — DevMode",
  description: "8 tracks, 90 projects. From backend to AI, security to game development.",
};

export default function TracksPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-bold">All Tracks</h1>
      <p className="mt-2 text-muted-foreground">
        8 tracks, 90 projects. Start with Track A and unlock the rest as you progress.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            isStartTrack={track.id === "A"}
          />
        ))}
      </div>
    </div>
  );
}
