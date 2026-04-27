import Image from "next/image";
import { Link } from "next-view-transitions";
import { MoveLeft, MoveUpRight } from "lucide-react";
import projectsData from "@/data/projects.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) return notFound();

  return (
    <article className="w-full max-w-7xl mx-auto px-6 py-32 flex flex-col gap-16 min-h-screen">
      <div className="flex flex-col gap-8 transition-all duration-1000 starting:opacity-0 starting:-translate-y-8">
        <Link
          href="/#work"
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-wider opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-opacity w-fit"
        >
          <MoveLeft className="w-4 h-4" />
          Back to Work
        </Link>
        <h1 
          className="text-5xl md:text-7xl font-bold tracking-tight"
          style={{ viewTransitionName: `project-title-${project.id}` }}
        >
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest font-bold opacity-50">Category</span>
            <span className="font-medium">{project.category}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest font-bold opacity-50">Tech Stack</span>
            <div className="flex gap-2">
              {project.stack.map((t) => (
                <span key={t} className="font-medium text-sm border border-[var(--foreground)]/10 px-2 rounded-sm py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="ml-auto">
             <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group border border-[var(--foreground)]/20 px-4 py-2 rounded-full hover:border-[var(--foreground)] transition-colors">
                <span className="text-sm font-bold">Visit Live</span>
                <MoveUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </a>
          </div>
        </div>
      </div>

      <div className="w-full aspect-[16/10] relative bg-[var(--foreground)]/5 overflow-hidden transition-all duration-1000 delay-100 starting:opacity-0 starting:translate-y-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          style={{ viewTransitionName: `project-img-${project.id}` }}
          priority
        />
      </div>

      <div className="max-w-3xl border-t border-[var(--foreground)]/10 pt-16 transition-all duration-1000 delay-300 starting:opacity-0 starting:translate-y-8">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        <p className="text-lg leading-relaxed text-[var(--foreground)]/80">
          {project.description}
        </p>
      </div>
    </article>
  );
}
