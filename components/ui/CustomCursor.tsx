"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    const handleHoverCheck = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [role='button'], .cursor-hit");
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHoverCheck);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHoverCheck);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 160ms ease-out",
      }}
    >
      <span
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-accent"
        style={{
          width: isHovering ? 32 : 8,
          height: isHovering ? 32 : 8,
          borderWidth: isHovering ? 1.5 : 0,
          backgroundColor: isHovering ? "transparent" : "var(--accent)",
          opacity: isHovering ? 0.9 : 1,
          transition: "all 180ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      />
    </div>
  );
}
