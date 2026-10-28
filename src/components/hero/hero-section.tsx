import Link from "next/link";

import {
  ArrowUpRight,
  Download,
  ExternalLink,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from "lucide-react";

import InteractiveBackground from "./interactive-background";
import TypingRole from "./typing-role";
import ThemePortrait from "./theme-portrait";

const resumeUrl = "/resume/md-jonaed-joshim-resume.pdf";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/jonaedjoshim",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonaed-joshim/",
    icon: BriefcaseBusiness,
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden"
    >
      {/* INTERACTIVE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <InteractiveBackground />
      </div>

      {/* HERO CONTENT */}
      <div className="container-custom relative z-10 flex flex-1 items-center py-12 sm:py-16 md:py-14 lg:py-24">
        <div className="grid w-full items-center gap-12 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:gap-20">
          {/* INTRODUCTION */}
          <div className="min-w-0 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/85 px-4 py-2 text-xs font-medium tracking-wide text-muted backdrop-blur-sm sm:text-sm md:mb-5 lg:mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </div>

            <p className="mb-3 font-mono text-sm tracking-wide text-accent sm:text-base lg:mb-4">
              Hello, I&apos;m
            </p>

            <h1
              id="hero-heading"
              className="hero-name-reveal text-[clamp(2.7rem,8vw,5rem)] leading-[1.08] font-bold tracking-[-0.055em] text-foreground md:text-[clamp(2.5rem,4.8vw,4rem)] lg:text-[clamp(3.5rem,6.5vw,6.5rem)]"
            >
              Md Jonaed
              <br />
              <span className="text-accent">Joshim.</span>
            </h1>

            {/* DYNAMIC ROLE */}
            <h2 className="mt-5 min-h-8 max-w-2xl text-lg leading-snug font-medium tracking-tight text-foreground sm:text-2xl md:mt-4 md:text-xl lg:mt-6 lg:text-[1.7rem]">
              <TypingRole />
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8 md:mt-4 md:text-sm md:leading-6 lg:mt-6 lg:text-lg lg:leading-8">
              I build thoughtful web experiences and sharpen my problem-solving
              skills through algorithms and competitive programming. I enjoy
              turning ideas into practical, user-focused applications.
            </p>

            {/* PRIMARY ACTIONS */}
            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-6 lg:mt-9">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-6"
              >
                Explore My Work
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface/85 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-6"
              >
                View Resume
                <ExternalLink size={17} aria-hidden="true" />
              </a>

              <a
                href={resumeUrl}
                download="Md-Jonaed-Joshim-Resume.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface/85 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-6"
              >
                Download Resume
                <Download size={17} aria-hidden="true" />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4 md:mt-6 lg:mt-9 lg:gap-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    <Icon size={19} aria-hidden="true" />
                    {social.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                );
              })}

              <a
                href="mailto:mdjonaedjoshim@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <Mail size={19} aria-hidden="true" />
                Email Me
              </a>
            </div>
          </div>

          {/* PROFILE VISUAL */}
          <div className="relative mx-auto w-full max-w-75 sm:max-w-85 md:max-w-full lg:max-w-105">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface-secondary">
              <ThemePortrait />

              {/* CORNER DETAILS */}
              <span className="pointer-events-none absolute top-5 left-5 h-7 w-7 border-t border-l border-accent/50" />

              <span className="pointer-events-none absolute right-5 bottom-5 h-7 w-7 border-r border-b border-accent/50" />
            </div>

            {/* LOCATION BADGE */}
            <div className="absolute -right-3 -bottom-5 flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 shadow-sm sm:-right-6">
              <MapPin size={16} className="text-accent" aria-hidden="true" />

              <span className="text-xs font-medium text-foreground sm:text-sm">
                Bangladesh
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="container-custom relative z-10 flex justify-center pb-7 sm:pb-9">
        <a
          href="#featured-projects"
          aria-label="Scroll to the next section"
          className="group inline-flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
            Scroll to explore
          </span>
        </a>
      </div>
    </section>
  );
}
