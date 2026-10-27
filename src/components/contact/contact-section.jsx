"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { toast } from "sonner";

const email = "mdjonaedjoshim@gmail.com";
const phone = "+8801316323104";

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

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  // EVENT HANDLERS
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      toast.success("Email address copied!");

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("Could not copy email. Please copy it manually.");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border py-24 sm:py-32"
    >
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* CONTACT INTRO */}
          <div>
            <p className="mb-3 font-mono text-sm text-accent">Get In Touch</p>

            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Have something
              <br />
              in mind?
              <span className="text-accent"> Let&apos;s talk.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-muted">
              I&apos;m open to internships, junior developer opportunities,
              meaningful collaborations, and suitable freelance projects. If you
              have an idea or opportunity, feel free to reach out.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin size={17} className="text-accent" aria-hidden="true" />
              Shahzadpur, Sirajganj, Bangladesh
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in new tab)`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon size={17} aria-hidden="true" />
                    {social.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* CONTACT METHODS */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground">
              Contact Details
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              Choose whichever method works best for you.
            </p>

            <div className="mt-7 space-y-5">
              {/* EMAIL */}
              <div className="rounded-xl border border-border bg-background px-4 py-5 sm:px-5 sm:py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Mail size={19} aria-hidden="true" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted">Email</p>

                    <a
                      href={`mailto:${email}`}
                      className="mt-1 block break-all text-sm font-semibold text-foreground transition-colors hover:text-accent sm:text-base"
                    >
                      {email}
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    {copied ? (
                      <Check size={18} aria-hidden="true" />
                    ) : (
                      <Clipboard size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              {/* PHONE */}
              <a
                href={`tel:${phone}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-5 transition-colors hover:border-accent/40 sm:px-5 sm:py-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone size={19} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted">Phone</p>

                  <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                    +880 1316-323104
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="text-muted transition-colors group-hover:text-accent"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/8801316323104"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-5 transition-colors hover:border-accent/40 sm:px-5 sm:py-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MessageCircle size={19} aria-hidden="true" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-muted">WhatsApp</p>

                  <p className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                    Chat on WhatsApp
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="text-muted transition-colors group-hover:text-accent"
                />
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-muted">
              Email is the best way to reach me for professional inquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
