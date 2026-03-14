import Link from "next/link";
import { getLevelsByTrack } from "@/lib/content";
import { tracks } from "@/lib/tracks";

export default function LandingPage() {
  const trackALevels = getLevelsByTrack("A").slice(0, 8);

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="pt-20 pb-8">
        <p className="font-mono text-sm text-muted-foreground">
          [Learn engineering by building]
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
          Stop watching tutorials.
          <br />
          Start building.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          90 real projects across 8 tracks. Level up from zero to engineer.
          AI-assisted, project-based learning.
        </p>
        <div className="mt-10 flex gap-3">
          <Link
            href="/levels/A0"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Install DevMode now
          </Link>
          <Link
            href="/tracks"
            className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Explore the tracks
          </Link>
        </div>
      </section>

      {/* What you'll build */}
      <section>
        <h2 className="text-2xl font-bold">What you&apos;ll build</h2>
        <p className="mt-2 text-muted-foreground">
          Each level is a real project. Here&apos;s a taste from Track A.
        </p>
        <div className="mt-8 grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-4">
          {trackALevels.map((level) => (
            <Link
              key={level.id}
              href={`/levels/${level.id}`}
              className="group border border-border bg-background p-4 transition-colors hover:bg-secondary/50"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-[10px] font-bold text-primary-foreground">
                  {level.id}
                </span>
                <span className="text-xs text-muted-foreground">
                  {level.tech}
                </span>
              </div>
              <h3 className="mt-2 font-medium">{level.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {level.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Tracks Preview */}
      <section>
        <h2 className="text-2xl font-bold">8 tracks, 90 projects</h2>
        <p className="mt-2 text-muted-foreground">
          Start with Track A. Unlock the rest as you progress.
        </p>
        <div className="mt-8 grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((track) => (
            <Link
              key={track.id}
              href={`/tracks/${track.slug}`}
              className="flex items-center gap-3 border border-border bg-background p-4 transition-colors hover:bg-secondary/50"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-xs font-bold text-white"
                style={{ backgroundColor: track.color }}
              >
                {track.id}
              </div>
              <div>
                <div className="text-sm font-medium">{track.name}</div>
                <div className="text-xs text-muted-foreground">
                  {track.levelCount} levels
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border pb-16 pt-16">
        <h2 className="text-2xl font-bold">Ready to build?</h2>
        <p className="mt-2 text-muted-foreground">
          Completely free. Start with Git and work your way up.
        </p>
        <Link
          href="/levels/A0"
          className="mt-6 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start Level A0 — Free
        </Link>
      </section>
    </div>
  );
}
