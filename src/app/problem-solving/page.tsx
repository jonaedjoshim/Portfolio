import type { Metadata } from "next";

import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  Target,
} from "lucide-react";

import PlatformCard from "@/components/problem-solving/plaform-card";
import problemSolving from "@/data/problem-solving.json";

export const metadata: Metadata = {
  title: "Problem Solving | Md Jonaed Joshim",
  description:
    "Explore Md Jonaed Joshim's competitive programming journey, coding profiles, and problem-solving interests.",
};

export default function ProblemSolvingPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-16 sm:py-20 lg:py-24">
          <p className="mb-4 font-mono text-sm text-accent">
            Competitive Programming
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Problem Solving
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {problemSolving.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://codeforces.com/profile/Md_Jonaed_Joshim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Codeforces Profile
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <a
              href="https://www.codechef.com/users/jonaed_joshim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
            >
              CodeChef Profile
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* PROGRAMMING JOURNEY */}
      <section className="py-20 sm:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-3 font-mono text-sm text-accent">The Mindset</p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learning to think
                <br />
                more clearly
              </h2>

              <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BrainCircuit size={25} aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              <p>{problemSolving.journey}</p>

              <p>{problemSolving.approach}</p>

              <p>
                I see competitive programming as a way to strengthen
                fundamentals that also help outside contests: breaking down
                problems, comparing approaches, and writing clearer solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CODING PLATFORMS */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-sm text-accent">
              Where I Practice
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Coding Platforms
            </h2>

            <p className="mt-4 text-base leading-7 text-muted">
              My profiles across competitive programming and algorithm practice
              platforms.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {problemSolving.platforms.map((platform) => (
              <PlatformCard key={platform.name} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 sm:py-24">
        <div className="container-custom">
          <div className="mb-10">
            <p className="mb-3 font-mono text-sm text-accent">
              Building Foundations
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I Focus On
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {problemSolving.focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {index % 2 === 0 ? (
                    <Code2 size={21} aria-hidden="true" />
                  ) : (
                    <Target size={21} aria-hidden="true" />
                  )}
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
