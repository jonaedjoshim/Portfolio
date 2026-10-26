"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

import ProjectCard from "./project-card";
import type { Project } from "@/data/projects";

type ProjectsExplorerProps = {
  projects: Project[];
};

const categories = [
  "All Projects",
  "Full-Stack Web Application",
  "Frontend Application",
];

export default function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Projects");

  // FILTER PROJECTS
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const searchableText = [
        project.name,
        project.category,
        project.description,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projects, searchQuery, activeCategory]);

  const hasActiveFilters =
    searchQuery.trim() !== "" || activeCategory !== "All Projects";

  // EVENT HANDLERS
  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All Projects");
  };

  return (
    <div>
      {/* SEARCH AND FILTERS */}
      <div className="mb-10 space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* SEARCH INPUT */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={19}
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects or technologies..."
              aria-label="Search projects"
              className="h-12 w-full rounded-xl border border-border bg-surface pr-11 pl-12 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute top-1/2 right-3 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-secondary hover:text-foreground"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* PROJECT COUNT */}
          <p aria-live="polite" className="shrink-0 text-sm text-muted">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            of {projects.length} projects
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center gap-2">
          <SlidersHorizontal
            size={17}
            aria-hidden="true"
            className="mr-2 text-muted"
          />

          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="ml-1 inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              <X size={15} aria-hidden="true" />
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* PROJECT RESULTS */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-12 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-secondary text-muted">
            <Search size={25} aria-hidden="true" />
          </div>

          <h2 className="text-lg font-semibold text-foreground">
            No projects found
          </h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
            Try a different keyword or category to find what you&apos;re looking
            for.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
