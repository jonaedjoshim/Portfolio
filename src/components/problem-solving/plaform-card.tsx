import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type Platform = {
  name: string;
  username: string;
  url: string;
  description: string;
  icon: string;
  primary: boolean;
};

type PlatformCardProps = {
  platform: Platform;
};

export default function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${platform.name} profile (opens in new tab)`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-secondary"
    >
      {/* PLATFORM HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-2">
          <Image
            src={`/platform/${platform.icon}`}
            alt=""
            width={34}
            height={34}
            unoptimized
            className="h-8 w-8 object-contain"
          />
        </div>

        <ArrowUpRight
          size={19}
          aria-hidden="true"
          className="text-muted transition-colors group-hover:text-accent"
        />
      </div>

      {/* PLATFORM INFORMATION */}
      <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
        {platform.name}
      </h3>

      <p className="mt-1 break-all font-mono text-xs text-accent">
        @{platform.username}
      </p>

      <p className="mt-4 flex-1 text-sm leading-7 text-muted">
        {platform.description}
      </p>

      <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
        View Profile
        <ExternalLink size={15} aria-hidden="true" />
      </div>
    </a>
  );
}
