import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  ExternalLink,
  Lightbulb,
  Wrench,
} from "lucide-react";

import { projects } from "@/data/projects";
import projectDetails from "@/data/project-details.json";
import { siteConfig } from "@/lib/seo";

type ProjectDetails = {
  tagline: string;
  overview: string;
  features: string[];
  challenges: string[];
  improvements: string[];
  role: string;
  status: string;
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const details = projectDetails as Record<string, ProjectDetails>;

// STATIC ROUTES
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// SEO METADATA
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);
  const detail = details[slug];

  if (!project || !detail) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.name,
    description: detail.overview,

    alternates: {
      canonical: `/projects/${slug}`,
    },

    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: detail.overview,
      url: `/projects/${slug}`,
      type: "article",
    },
  };
}

// LOADING FALLBACK
function ProjectDetailsLoading() {
  return (
    <div className="container-custom min-h-[60vh] py-16" role="status">
      <span className="sr-only">Loading project details...</span>

      <div
        aria-hidden="true"
        className="animate-pulse motion-reduce:animate-none"
      >
        <div className="h-4 w-32 rounded bg-surface-secondary" />
        <div className="mt-12 h-12 w-64 rounded bg-surface-secondary" />
        <div className="mt-5 h-5 max-w-xl rounded bg-surface-secondary" />
        <div className="mt-10 aspect-video w-full rounded-2xl bg-surface-secondary" />
      </div>
    </div>
  );
}

// PAGE
export default function ProjectDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectDetailsLoading />}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}

// PROJECT CONTENT
async function ProjectDetailsContent({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);
  const detail = details[slug];

  if (!project || !detail) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-12 sm:py-16">
          <Link
            href="/projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to Projects
          </Link>

          <p className="mb-4 font-mono text-sm text-accent">
            {project.category}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.name}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            {detail.tagline}
          </p>

          {/* PROJECT ACTIONS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Live Preview
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
            >
              <Code2 size={17} aria-hidden="true" />
              {project.backendGithubUrl
                ? "Frontend Repository"
                : "GitHub Repository"}
            </a>

            {project.backendGithubUrl && (
              <a
                href={project.backendGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
              >
                <Code2 size={17} aria-hidden="true" />
                Backend Repository
              </a>
            )}
          </div>
        </div>
      </section>

      <div className="container-custom py-12 sm:py-16">
        {/* PROJECT SCREENSHOT */}
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-secondary">
          <Image
            src={project.image}
            alt={`${project.name} application preview`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-top"
          />
        </div>

        {/* PROJECT INFORMATION */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
          <div className="space-y-14">
            {/* OVERVIEW */}
            <section aria-labelledby="overview-heading">
              <h2
                id="overview-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Project Overview
              </h2>

              <p className="mt-5 text-base leading-8 text-muted">
                {detail.overview}
              </p>
            </section>

            {/* PROJECT STORY */}
            <section
              aria-labelledby="project-story-heading"
              className="rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <BookOpen size={21} aria-hidden="true" />
                </div>

                <div>
                  <p className="font-mono text-xs text-accent">
                    Behind the Build
                  </p>

                  <h2
                    id="project-story-heading"
                    className="mt-2 text-xl font-bold tracking-tight text-foreground"
                  >
                    The story behind {project.name}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    Discover the idea, challenges, decisions, and lessons that
                    shaped this project.
                  </p>

                  <Link
                    href={`/projects/${project.slug}/story`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Read Project Story
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            {/* KEY FEATURES */}
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Key Features
              </h2>

              <ul className="mt-6 space-y-4">
                {detail.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-7 text-muted sm:text-base"
                  >
                    <Check
                      size={19}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* CHALLENGES */}
            <section aria-labelledby="challenges-heading">
              <div className="flex items-center gap-3">
                <Wrench size={21} aria-hidden="true" className="text-accent" />

                <h2
                  id="challenges-heading"
                  className="text-2xl font-bold tracking-tight text-foreground"
                >
                  Challenges
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {detail.challenges.map((challenge) => (
                  <p
                    key={challenge}
                    className="rounded-xl border border-border bg-surface p-5 text-sm leading-7 text-muted sm:text-base"
                  >
                    {challenge}
                  </p>
                ))}
              </div>
            </section>

            {/* FUTURE IMPROVEMENTS */}
            <section aria-labelledby="improvements-heading">
              <div className="flex items-center gap-3">
                <Lightbulb
                  size={21}
                  aria-hidden="true"
                  className="text-accent"
                />

                <h2
                  id="improvements-heading"
                  className="text-2xl font-bold tracking-tight text-foreground"
                >
                  Future Improvements
                </h2>
              </div>

              <ul className="mt-6 space-y-4">
                {detail.improvements.map((improvement) => (
                  <li
                    key={improvement}
                    className="flex items-start gap-3 text-sm leading-7 text-muted sm:text-base"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* PROJECT SIDEBAR */}
          <aside className="lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-bold text-foreground">
                Project Information
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    My Role
                  </p>

                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {detail.role}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    Status
                  </p>

                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {detail.status}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    Category
                  </p>

                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* TECH STACK */}
              <div className="mt-7 border-t border-border pt-6">
                <h3 className="text-sm font-semibold text-foreground">
                  Tech Stack
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-border pt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  Visit Live Project
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* BACK NAVIGATION */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Explore More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
