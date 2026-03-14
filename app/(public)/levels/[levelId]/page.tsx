import { notFound } from "next/navigation";
import { getLevel, getAllLevels } from "@/lib/content";
import { getTrackById } from "@/lib/tracks";
import { BuildIdeaRotator } from "@/components/levels/BuildIdeaRotator";
import { ResourceList } from "@/components/levels/ResourceList";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{ levelId: string }>;
}

export async function generateStaticParams() {
  const levels = getAllLevels();
  return levels.map((l) => ({ levelId: l.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { levelId } = await params;
  const level = getLevel(levelId);
  if (!level) return {};
  return {
    title: `${level.id}: ${level.title} — DevMode`,
    description: `${level.subtitle}. Learn ${level.concepts.slice(0, 3).join(", ")}`,
  };
}

export default async function LevelDetailPage({ params }: Props) {
  const { levelId } = await params;
  const level = getLevel(levelId);
  if (!level) notFound();

  const track = getTrackById(level.track);

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href={track ? `/tracks/${track.slug}` : "/tracks"}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Track {level.track}
        {track ? `: ${track.name}` : ""}
      </Link>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-sm text-sm font-bold text-white"
            style={{ backgroundColor: track?.color ?? "#3b82f6" }}
          >
            {level.id}
          </span>
          <Badge variant="secondary">{level.tech}</Badge>
        </div>
        <h1 className="font-display mt-3 text-3xl font-bold">{level.title}</h1>
        <p className="mt-1 text-lg text-muted-foreground">{level.subtitle}</p>
      </div>

      {/* Brief */}
      {level.content && (
        <div className="mt-6 rounded-sm border border-border bg-card p-5">
          <h2 className="font-display mb-2 text-sm font-medium text-muted-foreground">
            The Brief
          </h2>
          {level.content
            .split("\n")
            .filter((line) => line.trim() && !line.startsWith("#"))
            .map((p, i) => (
              <p key={i} className="mt-2 text-sm leading-relaxed">
                {p}
              </p>
            ))}
        </div>
      )}

      {/* Prerequisites */}
      {level.prerequisites.length > 0 && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Prerequisites:</span>
          {level.prerequisites.map((p) => (
            <Link key={p} href={`/levels/${p}`}>
              <Badge variant="outline">{p}</Badge>
            </Link>
          ))}
        </div>
      )}

      {/* Concepts */}
      {level.concepts.length > 0 && (
        <div className="mt-6">
          <h2 className="font-display text-sm font-medium text-muted-foreground">
            What you&apos;ll learn
          </h2>
          <ul className="mt-2 space-y-1.5">
            {level.concepts.map((concept) => (
              <li key={concept} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-sm bg-muted-foreground" />
                {concept}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Build Ideas */}
      {level.build_ideas.length > 0 && (
        <div className="mt-6">
          <BuildIdeaRotator ideas={level.build_ideas} />
        </div>
      )}

      {/* Resources */}
      {level.resources.length > 0 && (
        <div className="mt-6">
          <ResourceList resources={level.resources} />
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 flex gap-3">
        <Link
          href={`/workspace/${level.id}`}
          className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start this level
        </Link>
      </div>
    </div>
  );
}
