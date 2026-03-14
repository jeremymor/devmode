import Link from "next/link";
import { Track } from "@/lib/types";

interface TrackCardProps {
  track: Track;
  isStartTrack?: boolean;
}

export function TrackCard({ track, isStartTrack }: TrackCardProps) {
  return (
    <Link href={`/tracks/${track.slug}`}>
      <div className="group relative overflow-hidden rounded-sm border border-border bg-card p-5 transition-colors hover:border-muted-foreground/30">
        <div
          className="absolute left-0 top-0 h-full w-1"
          style={{ backgroundColor: track.color }}
        />
        <div className="flex items-start justify-between">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-sm text-sm font-bold text-white"
            style={{ backgroundColor: track.color }}
          >
            {track.id}
          </div>
          {isStartTrack && (
            <span className="rounded-sm bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              Start Here
            </span>
          )}
          {track.unlockRequirement && !isStartTrack && (
            <span className="text-xs text-muted-foreground">
              Complete {track.unlockRequirement} to unlock
            </span>
          )}
        </div>
        <h3 className="mt-3 font-semibold">{track.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {track.description}
        </p>
        <div className="mt-3 text-xs text-muted-foreground">
          {track.levelCount} levels
        </div>
      </div>
    </Link>
  );
}
