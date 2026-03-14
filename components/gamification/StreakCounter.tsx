interface StreakCounterProps {
  streak: number;
}

export function StreakCounter({ streak }: StreakCounterProps) {
  return (
    <div className="flex items-center gap-1.5">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className={streak > 0 ? "text-orange-400" : "text-muted-foreground"}
      >
        <path
          d="M12 23c-3.866 0-7-3.134-7-7 0-3.5 2.5-6.5 4-8 .5 2 2 3.5 3 4 1-4.5 4-7.5 4-11 2 2 4 5.5 4 9 0 5.523-3.134 8-5 9-.5-1-1-2.5-1-3-1 1.5-2 3.5-2 7z"
          fill="currentColor"
        />
      </svg>
      <span className={`text-sm font-medium ${streak > 0 ? "text-orange-400" : "text-muted-foreground"}`}>
        {streak} day{streak !== 1 ? "s" : ""}
      </span>
    </div>
  );
}
