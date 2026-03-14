import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-dashed border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">DevMode</span>
          <span className="text-sm text-muted-foreground">
            Learn engineering by building
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/tracks"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Tracks
          </Link>
        </div>
      </div>
    </footer>
  );
}
