import type { Metadata } from "next";

import ProjectsExplorer from "@/components/projects/projects-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Md Jonaed Joshim",
  description:
    "Explore web development projects by Md Jonaed Joshim, including GradePilot, ZapShift, NoxCodec, and Tuition Finder.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100svh-4.5rem)]">
      {/* PAGE INTRODUCTION */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-16 sm:py-20 lg:py-24">
          <p className="mb-4 font-mono text-sm text-accent">My Work</p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Projects
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            A collection of applications I&apos;ve built while exploring
            frontend development, full-stack systems, and practical
            problem-solving.
          </p>
        </div>
      </section>

      {/* PROJECT EXPLORER */}
      <section aria-label="Browse projects" className="py-14 sm:py-20">
        <div className="container-custom">
          <ProjectsExplorer projects={projects} />
        </div>
      </section>
    </main>
  );
}
