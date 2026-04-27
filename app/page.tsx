import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { AboutSection } from "@/components/home/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProjectGrid />
      <AboutSection />
    </div>
  );
}
