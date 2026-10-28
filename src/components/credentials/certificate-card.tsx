import Image from "next/image";
import { ArrowUpRight, Award, ExternalLink } from "lucide-react";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  verificationUrl: string;
  featured: boolean;
};

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
      {/* CERTIFICATE PREVIEW */}
      <a
        href={certificate.image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${certificate.title} certificate`}
        className="relative block aspect-16/10 overflow-hidden border-b border-border bg-surface-secondary"
      >
        <Image
          src={certificate.image}
          alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
        />

        {/* FEATURED BADGE */}
        {certificate.featured && (
          <span className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md border border-accent/20 bg-surface/95 px-2.5 py-1.5 text-xs font-semibold text-accent">
            <Award size={14} aria-hidden="true" />
            Highlighted
          </span>
        )}
      </a>

      {/* CERTIFICATE INFORMATION */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-xs text-accent">{certificate.category}</p>

        <h3 className="mt-3 text-base leading-6 font-bold text-foreground">
          {certificate.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-muted">
          {certificate.issuer}
        </p>

        <p className="mt-1 text-xs text-muted">Issued: {certificate.date}</p>

        {/* CERTIFICATE ACTIONS */}
        <div className="mt-auto flex flex-wrap gap-4 border-t border-border pt-5">
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            View Certificate
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          {certificate.verificationUrl && (
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              Verify
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
