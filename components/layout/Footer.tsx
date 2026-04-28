"use client";

import { useLenis } from "lenis/react";
import { MoveUp } from "lucide-react";

export function Footer() {
  const lenis = useLenis();

  return (
    <footer id="contact" className="w-full border-t border-border mt-24 py-12 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm font-mono-ui tracking-wide text-[color:var(--muted)]">
            © {new Date().getFullYear()} Adi Haditya Nursyam. All rights reserved.
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono-ui uppercase tracking-[0.18em] border border-accent/40 rounded-full px-3 py-1 text-accent w-fit">
            <span className="w-1 h-1 rounded-full bg-accent animate-[pulseDot_1.4s_ease-in-out_infinite]" />
            Currently open to work
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <a
            href="mailto:soezyxst@gmail.com"
            className="text-sm font-mono-ui transition-colors text-[color:var(--muted)] hover:text-accent2 relative group"
          >
            Email
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/adihnursyam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono-ui transition-colors text-[color:var(--muted)] hover:text-accent2 relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <a
            href="https://www.instagram.com/adihnursyam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono-ui transition-colors text-[color:var(--muted)] hover:text-accent2 relative group"
          >
            Instagram
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
          <button
            onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
            className="flex items-center gap-2 text-sm font-mono-ui uppercase tracking-wider text-[color:var(--muted)] hover:text-accent2 transition-colors group"
          >
            Back to top
            <MoveUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}
