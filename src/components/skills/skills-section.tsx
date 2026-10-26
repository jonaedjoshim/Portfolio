import { ArrowUpRight, Code2 } from "lucide-react";
import { skillCategories, currentlyLearning } from "@/data/skills";
import SkillItem from "./skills-item";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* SECTION INTRO */}
          <div>
            <p className="mb-3 font-mono text-sm text-accent">
              Technical Toolkit
            </p>

            <h2
              id="skills-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Skills &amp; Technologies
            </h2>

            <p className="mt-5 max-w-md text-base leading-8 text-muted">
              Technologies I&apos;ve used while building applications, solving
              problems, and learning software development.
            </p>

            {/* CURRENTLY LEARNING */}
            <div className="mt-9 rounded-xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex items-center gap-2 text-accent">
                <ArrowUpRight size={19} aria-hidden="true" />

                <h3 className="text-sm font-semibold">Currently Learning</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {currentlyLearning.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </div>
            </div>

            <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-muted">
              <Code2
                size={15}
                aria-hidden="true"
                className="mt-1 shrink-0 text-accent"
              />
              Always learning, building, and improving.
            </p>
          </div>

          {/* SKILL CATEGORIES */}
          <div className="space-y-9">
            {skillCategories.map((category) => (
              <div key={category.id}>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
