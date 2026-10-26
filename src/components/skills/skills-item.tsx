import Image from "next/image";
import { Code2 } from "lucide-react";

import type { Skill } from "@/data/skills";

type SkillItemProps = {
  skill: Skill;
};

const darkIconBackgrounds = ["nextjs", "express", "github", "vercel"];

export default function SkillItem({ skill }: SkillItemProps) {
  const needsLightBackground =
    skill.icon && darkIconBackgrounds.includes(skill.icon);

  return (
    <div className="group inline-flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3.5 py-2.5 transition-colors hover:border-accent/40 hover:bg-surface-secondary">
      {skill.icon ? (
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
            needsLightBackground ? "bg-white p-0.5" : ""
          }`}
        >
          <Image
            src={`/icons/${skill.icon}.svg`}
            alt=""
            width={22}
            height={22}
            className="h-5.5 w-5.5 object-contain"
          />
        </span>
      ) : (
        <Code2 size={21} aria-hidden="true" className="shrink-0 text-accent" />
      )}

      <span className="whitespace-nowrap text-sm font-medium text-foreground">
        {skill.name}
      </span>
    </div>
  );
}
