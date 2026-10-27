import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { Award, BookOpen } from "lucide-react";

import CredentialsExplorer from "@/components/credentials/credentials-explorer";
import certificates from "@/data/certificates.json";

export const metadata: Metadata = {
  title: pageSeo.credentials.title,
  description: pageSeo.credentials.description,
  alternates: {
    canonical: pageSeo.credentials.path,
  },
  openGraph: {
    title: pageSeo.credentials.title,
    description: pageSeo.credentials.description,
    url: pageSeo.credentials.path,
  },
};

export default function CredentialsPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-16 sm:py-20 lg:py-24">
          <p className="mb-4 font-mono text-sm text-accent">
            Continuous Learning
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Credentials
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            A collection of learning credentials, skill assessments, and course
            certificates that reflect my curiosity and continued exploration of
            technology.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
              <Award size={16} className="text-accent" />
              {certificates.length} Credentials
            </span>

            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
              <BookOpen size={16} className="text-accent" />
              Ongoing Learning
            </span>
          </div>
        </div>
      </section>

      {/* CREDENTIALS GALLERY */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <CredentialsExplorer certificates={certificates} />
        </div>
      </section>
    </main>
  );
}
