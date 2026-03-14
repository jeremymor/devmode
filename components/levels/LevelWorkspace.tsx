"use client";

import { Level } from "@/lib/types";
import { BuildIdeaRotator } from "./BuildIdeaRotator";
import { ConceptChecklist } from "./ConceptChecklist";
import { HintAccordion } from "./HintAccordion";
import { ResourceList } from "./ResourceList";
import Link from "next/link";

interface LevelWorkspaceProps {
  level: Level;
  checklistState: Record<string, boolean>;
}

export function LevelWorkspace({ level, checklistState }: LevelWorkspaceProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Track {level.track}</span>
          <span>/</span>
          <span>Level {level.id}</span>
        </div>
        <h1 className="mt-1 text-2xl font-bold">{level.title}</h1>
        <p className="mt-1 text-muted-foreground">{level.subtitle}</p>
      </div>

      {/* Brief */}
      {level.content && (
        <div className="rounded-sm border border-border bg-card p-5">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">
            The Brief
          </h3>
          <div className="prose prose-invert prose-sm max-w-none">
            {level.content.split("\n").map((p, i) =>
              p.trim() ? (
                <p key={i} className="text-sm leading-relaxed">
                  {p.replace(/^#+\s*/, "").replace(/^The Brief\s*/, "")}
                </p>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* Tech */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Tech:</span>
        <span className="rounded-sm bg-secondary px-2 py-0.5 text-xs">
          {level.tech}
        </span>
      </div>

      {/* Concepts */}
      {level.concepts.length > 0 && (
        <div className="rounded-sm border border-border bg-card p-5">
          <h3 className="mb-3 text-sm font-medium text-muted-foreground">
            What you'll learn
          </h3>
          <ul className="space-y-1.5">
            {level.concepts.map((concept) => (
              <li key={concept} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-sm bg-muted-foreground" />
                {concept}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Build Idea */}
      <BuildIdeaRotator ideas={level.build_ideas} />

      {/* Checklist */}
      {level.checklist.length > 0 && (
        <ConceptChecklist
          items={level.checklist}
          initialState={checklistState}
          levelId={level.id}
        />
      )}

      {/* Hints */}
      <HintAccordion hints={level.hints} />

      {/* Resources */}
      <ResourceList resources={level.resources} />

      {/* Submit */}
      <div className="flex justify-end">
        <Link
          href={`/workspace/${level.id}/submit`}
          className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Submit Project
        </Link>
      </div>
    </div>
  );
}
