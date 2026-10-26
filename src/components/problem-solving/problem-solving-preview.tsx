import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Terminal,
} from "lucide-react";

import problemSolving from "@/data/problem-solving.json";

const featuredPlatforms = problemSolving.platforms.filter(
  (platform) => platform.primary,
);

export default function ProblemSolvingPreview() {
  return (
    <section
      id="problem-solving"
      aria-labelledby="problem-solving-heading"
      className="scroll-mt-24 border-t border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="container-custom">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* SECTION INTRO */}
          <div>
            <p className="mb-3 font-mono text-sm text-accent">
              Beyond Development
            </p>

            <h2
              id="problem-solving-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Think.
              <br />
              Solve.
              <br />
              <span className="text-accent">Improve.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-muted">
              {problemSolving.intro}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
                <Braces size={16} className="text-accent" aria-hidden="true" />
                C++
              </span>

              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
                <BrainCircuit
                  size={16}
                  className="text-accent"
                  aria-hidden="true"
                />
                Data Structures &amp; Algorithms
              </span>
            </div>

            <Link
              href="/problem-solving"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Explore Problem Solving
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          {/* PLATFORM LINKS */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-accent">Online Judges</p>

                <h3 className="mt-2 text-xl font-bold text-foreground">
                  My Coding Profiles
                </h3>
              </div>

              <Terminal size={23} className="text-accent" aria-hidden="true" />
            </div>

            <div className="mt-6 divide-y divide-border">
              {featuredPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${platform.name} profile (opens in new tab)`}
                  className="group flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                      {platform.name}
                    </p>

                    <p className="mt-1 truncate font-mono text-xs text-muted">
                      @{platform.username}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="shrink-0 text-muted transition-colors group-hover:text-accent"
                  />
                </a>
              ))}
            </div>

            <Link
              href="/problem-solving"
              className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              View All Platforms
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
