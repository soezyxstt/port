 "use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash || "#home");
    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-surface/90 border-border backdrop-blur-xl"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-3">
        <Link href="/" className="relative h-10 w-10">
          <Image
            src="/logo-transparent.png"
            alt="AHN Logo"
            fill
            className="object-contain"
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-8 font-mono-ui text-[12px] tracking-[0.08em] uppercase">
          {["Home", "Work", "About", "Contact"].map((item) => {
            const hash = item === "Home" ? "#home" : `#${item.toLowerCase()}`;
            const isActive = activeHash === hash;
            return (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className={`relative group transition-colors ${
                  isActive ? "text-accent" : "text-[color:var(--muted)] hover:text-accent2"
                } ${
                  item === "Work" ? "hidden min-[380px]:inline" : ""
                } ${item === "About" ? "hidden min-[430px]:inline" : ""} ${
                  item === "Contact" ? "hidden min-[520px]:inline" : ""
                }`}
                onClick={() => setActiveHash(hash)}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
