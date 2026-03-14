"use client";

import { useState } from "react";
import Link from "next/link";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-muted-foreground hover:text-foreground"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-14 border-b border-dashed border-border bg-background p-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/tracks"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Tracks
            </Link>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
