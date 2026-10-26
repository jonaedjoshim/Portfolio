import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
      {/* PROJECT SCREENSHOT */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.name} details`}
        className="relative block aspect-16/10 overflow-hidden border-b border-border bg-surface-secondary"
      >
        <Image
          src={project.image}
          alt={`${project.name} application screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/95 text-foreground shadow-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight size={17} aria-hidden="true" />
        </span>
      </Link>

      {/* PROJECT CONTENT */}
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs font-medium tracking-wide text-accent">
          {project.category}
        </p>

        <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
          {project.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border bg-surface-secondary px-2.5 py-1.5 text-xs font-medium text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* PROJECT ACTIONS */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            View Details
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} GitHub repository (opens in new tab)`}
              className="text-muted transition-colors hover:text-accent"
            >
              <Code2 size={19} aria-hidden="true" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live website (opens in new tab)`}
              className="text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
