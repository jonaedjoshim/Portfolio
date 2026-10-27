import Image from "next/image";
import Link from "next/link";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
  ExternalLink,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
} from "lucide-react";

import InteractiveBackground from "./interactive-background";

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
      <div className="container-custom relative z-10 flex flex-1 items-center py-16 sm:py-20 lg:py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] lg:gap-20">
          {/* INTRODUCTION */}
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/85 px-4 py-2 text-xs font-medium tracking-wide text-muted backdrop-blur-sm sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-30 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </div>

            <p className="mb-4 font-mono text-sm tracking-wide text-accent sm:text-base">
              Hello, I&apos;m
            </p>

            <h1
              id="hero-heading"
              className="hero-name-reveal text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.08] font-bold tracking-[-0.055em] text-foreground"
            >
              Md Jonaed
              <br />
              <span className="text-accent">Joshim.</span>
            </h1>

            <h2 className="mt-6 max-w-2xl text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl lg:text-[1.7rem]">
              Web Developer <span className="text-muted">&amp;</span>{" "}
              Competitive Programmer
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              I build thoughtful web experiences and sharpen my problem-solving
              skills through algorithms and competitive programming. I enjoy
              turning ideas into practical, user-focused applications.
            </p>

            {/* PRIMARY ACTIONS */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Explore My Work
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface/85 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                View Resume
                <ExternalLink size={17} aria-hidden="true" />
              </a>

              <a
                href={resumeUrl}
                download="Md-Jonaed-Joshim-Resume.pdf"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface/85 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Download Resume
                <Download size={17} aria-hidden="true" />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
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
          <div className="relative mx-auto w-full max-w-85 sm:max-w-95 lg:max-w-105">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-surface-secondary">
              <Image
                src="/images/profile.webp"
                alt="Professional portrait of Md Jonaed Joshim"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
                className="object-cover object-center"
              />

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

          <ArrowDown
            size={18}
            className="animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}
