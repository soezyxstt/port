"use client";

import Image from "next/image";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import projectsData from "@/data/projects.json";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function ProjectGrid() {
  return (
    <section id="work" className="w-full max-w-[90rem] mx-auto px-6 py-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight transition-all duration-1000 starting:opacity-0 starting:translate-y-8">
        Selected Work
      </h2>
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
          >
            <Link
              href={`/work/${project.id}`}
              className="group flex flex-col gap-6 p-4 -m-4 rounded-xl transition-colors duration-500 hover:bg-[#8E8D7A]/10"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--foreground)]/5 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ viewTransitionName: `project-img-${project.id}` }}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 px-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold tracking-widest uppercase opacity-60">
                  <span>{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                  <div className="flex gap-2">
                    {project.stack.join(" · ")}
                  </div>
                </div>
                
                <h3 
                  className="text-3xl font-bold tracking-tight text-[#2D2926] dark:text-[#F5F5F0]"
                  style={{ viewTransitionName: `project-title-${project.id}` }}
                >
                  {project.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-[var(--foreground)]/80 line-clamp-2 mt-1">
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
