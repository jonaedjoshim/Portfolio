import Link from "next/link";
import { ArrowLeft, Compass, FolderOpen } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        {/* ERROR CODE */}
        <div className="relative mb-6">
          <p className="font-mono text-[100px] leading-none font-bold tracking-[-0.08em] text-accent sm:text-[150px]">
            404
          </p>

          <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface">
            <Compass
              size={26}
              strokeWidth={1.5}
              className="text-accent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* ERROR MESSAGE */}
        <p className="mb-3 font-mono text-xs font-medium tracking-[0.2em] text-accent uppercase">
          Page Not Found
        </p>

        <h1 className="mb-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Looks like you took a wrong turn.
        </h1>

        <p className="mx-auto mb-9 max-w-md text-sm leading-7 text-muted sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist, may have moved,
          or the URL might have a typo.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:w-auto"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary sm:w-auto"
          >
            <FolderOpen size={17} aria-hidden="true" />
            Explore Projects
          </Link>
        </div>

        {/* BOTTOM MESSAGE */}
        <p className="mt-12 font-mono text-xs text-muted">
          {"// This route doesn't exist in my codebase."}
        </p>
      </div>
    </section>
  );
}
