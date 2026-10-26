import {
  Braces,
  Code2,
  Database,
  Layers3,
  Server,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import skillsData from "@/data/skills.json";

const categoryIcons: Record<string, typeof Code2> = {
  languages: Braces,
  frontend: Layers3,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="container-custom">
        {/* SECTION HEADING */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-accent">
            Technical Toolkit
          </p>

          <h2
            id="skills-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Skills &amp; Technologies
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            Technologies I&apos;ve used while building projects, solving
            problems, and exploring different areas of software development.
          </p>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillsData.categories.map((category) => {
            const Icon = categoryIcons[category.id] ?? Code2;

            return (
              <article
                key={category.id}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/35 sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {category.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-surface-secondary px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}

          {/* CURRENTLY LEARNING */}
          <article className="rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <ArrowUpRight size={23} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
              Currently Learning
            </h3>

            <p className="mt-2 text-sm leading-6 text-muted">
              Areas I&apos;m actively working to improve.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {skillsData.currentlyLearning.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-accent/20 bg-background px-3 py-2 text-xs font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* LEARNING NOTE */}
        <p className="mt-8 flex items-start gap-2 text-sm leading-6 text-muted">
          <Code2
            size={17}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-accent"
          />
          I focus on practical understanding and continuous improvement rather
          than assigning percentage-based proficiency scores.
        </p>
      </div>
    </section>
  );
}
