"use client";

import { useState, useCallback } from "react";

interface BuildIdeaRotatorProps {
  ideas: string[];
}

export function BuildIdeaRotator({ ideas }: BuildIdeaRotatorProps) {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * ideas.length)
  );

  const rotate = useCallback(() => {
    setIndex((prev) => {
      let next = Math.floor(Math.random() * ideas.length);
      while (next === prev && ideas.length > 1) {
        next = Math.floor(Math.random() * ideas.length);
      }
      return next;
    });
  }, [ideas.length]);

  if (ideas.length === 0) return null;

  return (
    <div className="rounded-sm border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">
          Build Idea
        </h3>
        <span className="text-xs text-muted-foreground">
          {index + 1} of {ideas.length}
        </span>
      </div>
      <p className="mt-3 text-base font-medium leading-relaxed">
        {ideas[index]}
      </p>
      {ideas.length > 1 && (
        <button
          onClick={rotate}
          className="mt-4 rounded-sm border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-muted-foreground/50 hover:text-foreground"
        >
          Give me another
        </button>
      )}
    </div>
  );
}
