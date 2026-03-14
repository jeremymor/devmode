"use client";

import { useState, useRef, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { saveChecklist } from "@/lib/actions/checklist";

interface ConceptChecklistProps {
  items: string[];
  initialState: Record<string, boolean>;
  levelId: string;
}

export function ConceptChecklist({
  items,
  initialState,
  levelId,
}: ConceptChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>(initialState);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = useCallback(
    (item: string) => {
      setChecked((prev) => {
        const next = { ...prev, [item]: !prev[item] };

        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          saveChecklist(levelId, next);
        }, 1000);

        return next;
      });
    },
    [levelId]
  );

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="rounded-sm border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">Checklist</h3>
        <span className="text-xs text-muted-foreground">
          {completedCount} / {items.length}
        </span>
      </div>
      <div className="mt-3 space-y-3">
        {items.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-start gap-3"
          >
            <Checkbox
              checked={!!checked[item]}
              onCheckedChange={() => handleToggle(item)}
              className="mt-0.5"
            />
            <span
              className={`text-sm leading-relaxed ${
                checked[item] ? "text-muted-foreground line-through" : ""
              }`}
            >
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
