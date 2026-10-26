import Link from "next/link";
import { ArrowRight, Code2, MapPin, Terminal } from "lucide-react";

import about from "@/data/about.json";

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-preview-heading"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="container-custom">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* SECTION INTRO */}
          <div>
            <p className="mb-3 font-mono text-sm text-accent">
              A Little About Me
            </p>

            <h2
              id="about-preview-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Curious by nature.
              <br />
              <span className="text-accent">Developer by choice.</span>
            </h2>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
                <MapPin size={15} className="text-accent" />
                Bangladesh
              </span>

              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
                <Terminal size={15} className="text-accent" />
                Competitive Programming
              </span>
            </div>
          </div>

          {/* ABOUT CONTENT */}
          <div>
            <p className="text-lg leading-9 text-foreground">{about.intro}</p>

            <p className="mt-5 text-base leading-8 text-muted">
              {about.summary}
            </p>

            <p className="mt-5 text-base leading-8 text-muted">{about.focus}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                More About Me
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-accent"
              >
                <Code2 size={17} aria-hidden="true" />
                Explore My Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
