import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowUpRight,
  BookOpen,
  Brain,
  Code2,
  Compass,
  Gamepad2,
  MapPin,
  Target,
} from "lucide-react";

import about from "@/data/about.json";

export const metadata: Metadata = {
  title: "About | Md Jonaed Joshim",
  description:
    "Learn about Md Jonaed Joshim's programming journey, interests, development approach, and career goals.",
};

const interestIcons = [Code2, Brain, Compass, BookOpen];

export default function AboutPage() {
  return (
    <main>
      {/* PAGE INTRO */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-16 sm:py-20 lg:py-24">
          <p className="mb-4 font-mono text-sm text-accent">Get to Know Me</p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Beyond the Code
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            A little about my journey, the things that keep me curious, and the
            kind of developer I&apos;m working to become.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin size={17} className="text-accent" aria-hidden="true" />
            {about.location}
          </div>
        </div>
      </section>

      {/* MY STORY */}
      <section className="py-20 sm:py-24">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="mb-3 font-mono text-sm text-accent">My Story</p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              How it all started
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-muted sm:text-lg sm:leading-9">
            <p>{about.intro}</p>
            <p>{about.summary}</p>
            <p>{about.focus}</p>
            <p>{about.approach}</p>
          </div>
        </div>
      </section>

      {/* PROGRAMMING JOURNEY */}
      <section className="border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="container-custom">
          <p className="mb-3 font-mono text-sm text-accent">The Journey</p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My path into programming
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
            {about.journey.map((step, index) => (
              <article
                key={step.title}
                className="relative border-l-2 border-border pb-3 pl-7"
              >
                <span className="absolute top-1 -left-1.75 h-3 w-3 rounded-full border-2 border-accent bg-background" />

                <p className="font-mono text-xs font-semibold text-accent">
                  {step.period}
                </p>

                <h3 className="mt-3 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                  {step.description}
                </p>

                <span className="mt-5 block font-mono text-xs text-muted/60">
                  0{index + 1}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="py-20 sm:py-24">
        <div className="container-custom">
          <p className="mb-3 font-mono text-sm text-accent">What Drives Me</p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Areas I&apos;m exploring
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {about.interests.map((interest, index) => {
              const Icon = interestIcons[index];

              return (
                <article
                  key={interest.title}
                  className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {interest.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {interest.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEYOND PROGRAMMING */}
      <section className="border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="container-custom grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Gamepad2 size={23} aria-hidden="true" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Beyond programming
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {about.beyondCode}
          </p>
        </div>
      </section>

      {/* CAREER DIRECTION */}
      <section className="py-20 sm:py-24">
        <div className="container-custom">
          <div className="rounded-2xl border border-border bg-surface p-7 sm:p-10 lg:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Target size={23} aria-hidden="true" />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Where I&apos;m headed
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {about.career}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Explore My Projects
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <a
                href="mailto:mdjonaedjoshim@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
