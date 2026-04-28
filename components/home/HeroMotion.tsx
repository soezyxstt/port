"use client";

import type { HeroContent } from "./Hero";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type HeroMotionProps = {
  content: HeroContent;
};

export function HeroMotion({ content }: HeroMotionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [localTime, setLocalTime] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    });

    const updateTime = () => setLocalTime(formatter.format(new Date()));
    updateTime();

    const interval = window.setInterval(updateTime, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768);
    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const shouldAnimate = !prefersReducedMotion;
  const marqueeTags = useMemo(
    () => [
      "Mechanical Engineering",
      "Web Architecture",
      "UI Design",
      "IoT",
      "Student Organizations",
      "Bandung",
    ],
    [],
  );

  return (
    <div className="relative">
      <div className="grain-overlay" />

      <div
        className="fade-up flex justify-between items-center mb-5 md:mb-8 overflow-hidden"
        style={{ animationDelay: "100ms" }}
      >
        <motion.div
          initial={shouldAnimate ? { opacity: 0, x: -20 } : false}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex items-center gap-2 group cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono-ui text-[10px] md:text-xs font-medium tracking-[0.16em] md:tracking-widest uppercase text-[color:var(--muted)] group-hover:text-accent2 transition-colors">
            {content.statusText}
          </span>
        </motion.div>

        <motion.div
          initial={shouldAnimate ? { opacity: 0, x: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="hidden md:block text-[10px] font-mono-ui font-medium tracking-[0.3em] uppercase text-[color:var(--muted)]"
        >
          {content.badgeText}
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 fade-up max-w-full overflow-hidden"
        style={{ animationDelay: "200ms" }}
        animate={
          shouldAnimate && !isMobile
            ? { x: mousePosition.x, y: mousePosition.y * 0.6 }
            : undefined
        }
        transition={{ type: "spring", stiffness: 70, damping: 18, mass: 0.5 }}
      >
        <motion.h1
          initial={shouldAnimate ? { y: 100, opacity: 0 } : false}
          animate={shouldAnimate ? { y: 0, opacity: 1 } : undefined}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[clamp(2.35rem,14vw,4.8rem)] sm:text-[clamp(2.8rem,15vw,6.1rem)] md:text-[clamp(3.5rem,10vw,12rem)] leading-[0.93] mb-4 md:mb-6 wrap-break-word"
        >
          {content.firstName} <br />
          <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--text)] md:[-webkit-text-stroke:2px_var(--text)] whitespace-normal">
            {content.lastName}
          </span>
        </motion.h1>
      </motion.div>

      <div
        className="fade-up mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-10"
        style={{ animationDelay: "300ms" }}
      >
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-full md:max-w-[44rem]"
        >
          <p className="max-w-[19rem] sm:max-w-full text-[clamp(1rem,1.8vw,1.25rem)] text-[color:var(--text)] leading-[1.65]">
            <span className="inline-flex items-center gap-2 mr-2 mb-2 sm:mb-0 px-[14px] py-1 rounded-full border border-accent text-accent font-mono-ui text-[10px] uppercase tracking-[0.15em] glow-pill bg-card">
              pure generalist
            </span>
            <span className="hero-cursor text-[color:var(--muted)]">
              {content.introPrefix} {content.introSuffix}
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={shouldAnimate ? { opacity: 0 } : false}
          animate={shouldAnimate ? { opacity: 1 } : undefined}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-start md:items-end gap-1 mt-0"
        >
          <div className="text-[11px] font-mono-ui font-medium tracking-[0.12em] uppercase text-accent">
            {content.locationLabel}
          </div>
          <div className="text-[10px] font-mono-ui font-medium text-[color:var(--muted)] uppercase tracking-[0.08em]">
            {content.timezoneLabel} {localTime ? `· ${localTime}` : ""}
          </div>
        </motion.div>
      </div>

      <div
        className="fade-up mt-8 md:mt-12 overflow-hidden border-y border-border py-3"
        style={{ animationDelay: "400ms" }}
      >
        <div className="marquee-track flex items-center gap-10 w-max">
          {[...marqueeTags, ...marqueeTags].map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="font-mono-ui text-[11px] tracking-[0.14em] uppercase text-[color:var(--muted)]"
            >
              {tag} {index % 2 === 0 ? "·" : ""}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#work"
        className="fade-up cursor-hit inline-flex items-center gap-2 mt-6 text-[10px] font-mono-ui uppercase tracking-[0.2em] text-[color:var(--muted)] hover:text-accent2 transition-colors"
        style={{ animationDelay: "500ms" }}
      >
        Scroll to work
        <span className="inline-block animate-bounce text-accent2">↓</span>
      </a>
    </div>
  );
}
