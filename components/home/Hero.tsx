import { HeroMotion } from "./HeroMotion";

export type HeroContent = {
  statusText: string;
  badgeText: string;
  firstName: string;
  lastName: string;
  introPrefix: string;
  introSuffix: string;
  rotatingHighlights: string[];
  locationLabel: string;
  timezoneLabel: string;
  ribbonSkills: string[];
};

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      className="flex flex-col justify-start min-h-0 md:min-h-[calc(100svh-4.5rem)] px-5 md:px-6 max-w-7xl mx-auto w-full py-32 overflow-hidden"
    >
      <HeroMotion content={content} />
    </section>
  );
}