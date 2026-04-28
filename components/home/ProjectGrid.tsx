"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion, Variants } from "framer-motion";
import projectsData from "@/data/projects.json";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function ProjectGrid() {
  const getLayoutClass = (index: number) => {
    if (index === 0) return "md:col-span-12";
    if (index === 1) return "md:col-span-7";
    if (index === 2) return "md:col-span-5";
    return "md:col-span-6";
  };

  return (
    <section id="work" className="w-full max-w-[92rem] mx-auto px-5 md:px-6 py-32">
      <h2 className="font-display font-extrabold text-6xl md:text-8xl mb-4 tracking-tight transition-all duration-1000 starting:opacity-0 starting:translate-y-8">
        Selected Work
      </h2>
      <div className="h-px bg-border mb-12" />
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className={`${getLayoutClass(index)} relative border-t border-border pt-4 md:pt-5`}
          >
            <span className="pointer-events-none absolute -top-4 -left-1 z-0 font-display font-extrabold text-[6rem] md:text-[8rem] leading-none text-card select-none">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Link
              href={`/work/${project.id}`}
              className="cursor-hit group relative z-10 block"
            >
              <span className="absolute top-4 left-4 z-20 text-[11px] px-2 py-1 bg-background/65 font-mono-ui uppercase tracking-[0.1em] text-accent">
                {project.category}
              </span>

              <div
                className={`relative w-full overflow-hidden border border-border ${index === 0 ? "aspect-[16/7]" : "aspect-[16/10]"}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:[filter:saturate(1)_brightness(1)]"
                  style={{ filter: "saturate(0.4) brightness(0.9)", viewTransitionName: `project-img-${project.id}` }}
                />
                <div className="absolute inset-0 bg-[rgba(15,16,20,0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div className="font-mono-ui text-[11px] uppercase tracking-[0.1em] text-accent2">
                      {project.stack.join(" · ")}
                    </div>
                    <span className="text-accent2 text-xl">↗</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 md:pt-5">
                <h3 
                  className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground"
                  style={{ viewTransitionName: `project-title-${project.id}` }}
                >
                  {project.title}
                </h3>
                
                <p className="text-[0.98rem] md:text-lg leading-relaxed text-[color:var(--muted)] line-clamp-2 mt-1">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
