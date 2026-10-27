import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

import CertificateCard from "./certificate-card";
import certificates from "@/data/certificates.json";

export default function CredentialsPreview() {
  const featuredCertificates = certificates
    .filter((certificate) => certificate.featured)
    .slice(0, 3);

  return (
    <section
      id="credentials"
      aria-labelledby="credentials-heading"
      className="scroll-mt-24 border-t border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="container-custom">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm text-accent">
              Learning Milestones
            </p>

            <h2
              id="credentials-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Selected Credentials
            </h2>

            <p className="mt-4 text-base leading-7 text-muted">
              A few relevant skill assessments and course credentials from my
              learning journey.
            </p>
          </div>

          <Link
            href="/credentials"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            View All Credentials
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* FEATURED CREDENTIALS */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>

        <p className="mt-7 flex items-start gap-2 text-xs leading-6 text-muted">
          <Award
            size={16}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-accent"
          />
          These credentials represent learning activities and skill assessments,
          not professional licensing or employment experience.
        </p>
      </div>
    </section>
  );
}
