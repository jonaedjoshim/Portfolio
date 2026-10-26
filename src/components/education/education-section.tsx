import { ArrowUpRight, BookOpen, GraduationCap, Monitor } from "lucide-react";

import educationData from "@/data/education.json";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="container-custom">
        {/* SECTION HEADING */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-accent">
            Academic Background
          </p>

          <h2
            id="education-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Education &amp; Learning
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            My formal education and the technical learning paths I&apos;m
            currently pursuing alongside it.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* FORMAL EDUCATION */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap size={21} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-foreground">
                Formal Education
              </h3>
            </div>

            <div className="space-y-5">
              {educationData.education.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-accent">
                      {item.period}
                    </span>

                    <span className="rounded-full border border-border bg-surface-secondary px-3 py-1 text-xs font-medium text-muted">
                      {item.status}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-accent">
                    {item.field}
                  </p>

                  <p className="mt-4 text-sm font-medium text-foreground">
                    {item.institution}
                  </p>

                  {item.university && (
                    <p className="mt-1 text-sm text-muted">{item.university}</p>
                  )}

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* TECHNICAL LEARNING */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Monitor size={21} aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-foreground">
                Ongoing Technical Learning
              </h3>
            </div>

            <div className="space-y-5">
              {educationData.technicalLearning.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-accent">
                      {item.batch}
                    </span>

                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                      {item.status}
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                    {item.name}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-accent">
                    {item.provider}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.focus}
                  </p>
                </article>
              ))}
            </div>

            {/* LEARNING NOTE */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
              <BookOpen
                size={19}
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-accent"
              />

              <p className="text-sm leading-7 text-muted">
                Both technical programs are currently in progress. I continue
                learning through coursework, documentation, projects, and
                regular programming practice.
              </p>
            </div>
          </div>
        </div>

        {/* CREDENTIALS LINK */}
        <div className="mt-12 border-t border-border pt-7">
          <a
            href="/credentials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Explore Certificates &amp; Credentials
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
