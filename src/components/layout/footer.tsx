import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
import MyLogo from "../ui/my-logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Problem Solving", href: "/problem-solving" },
  { label: "Credentials", href: "/credentials" },
  { label: "Contact", href: "/#contact" },
];

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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-custom">
        {/* MAIN FOOTER */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:py-16">
          {/* BRAND */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground"
              aria-label="Md Jonaed Joshim — Home"
            >
              <MyLogo size={40} />

              <span>Jonaed Joshim</span>
            </Link>

            <p className="mt-4 text-sm font-medium text-accent">
              Web Developer & Competitive Programmer
            </p>

            <p className="mt-3 text-sm leading-7 text-muted">
              Building thoughtful web experiences, exploring software
              engineering, and sharpening problem-solving skills through
              competitive programming.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} aria-hidden="true" />

              <span>Sirajganj, Bangladesh</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-sm font-semibold text-foreground">Explore</h2>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex text-sm text-muted transition-colors hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CONNECT */}
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Get in Touch
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted">
              Open to internships, junior developer opportunities, and
              meaningful collaborations.
            </p>

            <a
              href="mailto:mdjonaedjoshim@gmail.com"
              className="mt-5 inline-flex items-center gap-2 break-all text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              <Mail size={16} className="shrink-0" aria-hidden="true" />
              mdjonaedjoshim@gmail.com
            </a>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon size={16} aria-hidden="true" />

                    {social.label}

                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col gap-3 border-t border-border py-6 text-center text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Md Jonaed Joshim. All rights reserved.</p>

          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
