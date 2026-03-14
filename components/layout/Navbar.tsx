import Link from "next/link";
import { NavbarMobile } from "./NavbarMobile";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-dashed border-border bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-display text-lg font-bold tracking-tight">
            DevMode
          </Link>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/tracks"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Tracks
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-sm bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign up
          </Link>
        </div>
        <NavbarMobile />
      </div>
    </nav>
  );
}
