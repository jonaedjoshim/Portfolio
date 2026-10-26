import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Clock3,
  ExternalLink,
} from "lucide-react";

import { projects } from "@/data/projects";
import projectStories from "@/data/project-stories.json";

type StorySection = {
  heading: string;
  paragraphs: string[];
};

type ProjectStory = {
  title: string;
  subtitle: string;
  readingTime: string;
  sections: StorySection[];
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const stories = projectStories as Record<string, ProjectStory>;

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

  const story = stories[slug];

  if (!project || !story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: `${story.title} | Md Jonaed Joshim`,
    description: story.subtitle,
  };
}

export default async function ProjectStoryPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  const story = stories[slug];

  if (!project || !story) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* STORY HEADER */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-12 sm:py-16 lg:py-20">
          <Link
            href={`/projects/${project.slug}`}
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to {project.name}
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 font-mono text-sm text-accent">
              <BookOpen size={16} aria-hidden="true" />
              Behind the Build
            </span>

            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <Clock3 size={15} aria-hidden="true" />
              {story.readingTime}
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {story.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {story.subtitle}
          </p>

          <div className="mt-9 flex items-center gap-3 border-t border-border pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-bold text-accent">
              MJ
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Md Jonaed Joshim
              </p>

              <p className="text-xs text-muted">
                Web Developer &amp; Competitive Programmer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY CONTENT */}
      <article className="container-custom py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-14">
            {story.sections.map((section, index) => (
              <section
                key={section.heading}
                aria-labelledby={`story-section-${index}`}
              >
                <h2
                  id={`story-section-${index}`}
                  className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  {section.heading}
                </h2>

                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-base leading-8 text-muted sm:text-lg sm:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* STORY FOOTER */}
          <div className="mt-20 rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <p className="font-mono text-xs text-accent">Explore the Project</p>

            <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
              Want to see {project.name} in action?
            </h2>

            <p className="mt-3 text-sm leading-7 text-muted">
              Explore the implementation, technologies, and project links.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Project Details
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
              >
                Live Preview
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Explore More Projects
          </Link>
        </div>
      </article>
    </main>
  );
}
