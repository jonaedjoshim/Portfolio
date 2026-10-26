import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-heading"
      className="scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-custom">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm text-accent">Selected Work</p>

            <h2
              id="featured-projects-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Featured Projects
            </h2>

            <p className="mt-4 text-base leading-7 text-muted">
              A selection of projects that reflect my interest in practical web
              development, thoughtful interfaces, and continuous learning.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-hover sm:self-auto"
          >
            View All Projects
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
