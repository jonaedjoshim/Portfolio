export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container-custom flex min-h-screen flex-col justify-center py-20">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-sm tracking-widest text-accent uppercase">
            Web Developer & Competitive Programmer
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Md Jonaed Joshim
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I build thoughtful web applications, solve challenging problems, and
            continuously explore better ways to turn ideas into working
            software.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Explore Projects
            </a>

            <a
              href="https://github.com/jonaedjoshim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted">
            Portfolio Design System — Preview v1.0
          </p>
        </div>
      </section>
    </main>
  );
}
