import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/home/ProjectGrid";
import { AboutSection } from "@/components/home/AboutSection";
import homeData from "@/data/home.json";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero content={homeData} />
      <ProjectGrid />
      <AboutSection />
    </div>
  );
}
