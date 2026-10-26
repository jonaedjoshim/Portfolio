import HeroSection from "@/components/hero/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* UPCOMING HOMEPAGE SECTIONS */}
      <section
        id="hero-next"
        className="container-custom scroll-mt-24 py-24 sm:py-32"
      >
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-sm text-accent">Selected Work</p>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 leading-7 text-muted">
            A selection of projects that reflect my interest in practical web
            development, thoughtful interfaces, and continuous learning.
          </p>

          <p className="mt-8 text-sm text-muted">
            Project cards are coming in the next commit.
          </p>
        </div>
      </section>
    </main>
  );
}
