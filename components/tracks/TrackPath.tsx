"use client";

import { Level } from "@/lib/types";
import { LevelNode } from "./LevelNode";

interface TrackPathProps {
  levels: Level[];
  trackColor: string;
}

export function TrackPath({ levels, trackColor }: TrackPathProps) {
  return (
    <div className="relative mx-auto max-w-md py-8">
      {/* Connecting line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

      <div className="relative flex flex-col gap-6">
        {levels.map((level, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={level.id}
              className={`flex items-center gap-4 ${
                isEven ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                <div className="text-sm font-medium">{level.title}</div>
                <div className="text-xs text-muted-foreground">
                  {level.subtitle}
                </div>
              </div>
              <LevelNode level={level} color={trackColor} />
              <div className="flex-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
