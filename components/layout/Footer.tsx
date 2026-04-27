"use client";

import { useLenis } from "lenis/react";
import { MoveUp } from "lucide-react";

export function Footer() {
  const lenis = useLenis();

  return (
    <footer className="w-full border-t border-[var(--foreground)]/10 mt-32 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} Adi Haditya Nursyam. All rights reserved.
        </div>
        <div className="flex items-center gap-8">
          <a
            href="mailto:contact@example.com"
            className="text-sm transition-colors hover:text-[var(--accent)] relative group"
          >
            Email
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-[var(--accent)] relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
          </a>
          <button
            onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
            className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-[var(--accent)] transition-colors group"
          >
            Back to top
            <MoveUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
