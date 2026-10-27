"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import CertificateCard, { type Certificate } from "./certificate-card";

type CredentialsExplorerProps = {
  certificates: Certificate[];
};

const categories = [
  "All",
  "Programming",
  "Web Development",
  "Database",
  "Cybersecurity",
  "AI & Tools",
];

export default function CredentialsExplorer({
  certificates,
}: CredentialsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // FILTER CERTIFICATES
  const filteredCertificates = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return certificates.filter((certificate) => {
      const matchesCategory =
        activeCategory === "All" || certificate.category === activeCategory;

      const searchableText = [
        certificate.title,
        certificate.issuer,
        certificate.category,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [certificates, searchQuery, activeCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" || activeCategory !== "All";

  return (
    <div>
      {/* SEARCH */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
          />

          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search certificates or issuers..."
            aria-label="Search credentials"
            className="h-12 w-full rounded-xl border border-border bg-surface pr-11 pl-12 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/15"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-muted hover:text-foreground"
            >
              <X size={16} aria-hidden="true" />
            </button>
          )}
        </div>

        <p aria-live="polite" className="text-sm text-muted">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {filteredCertificates.length}
          </span>{" "}
          of {certificates.length} credentials
        </p>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-surface text-muted hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="ml-1 inline-flex items-center gap-1.5 px-2 py-2 text-sm font-medium text-muted hover:text-accent"
          >
            <X size={15} aria-hidden="true" />
            Clear All
          </button>
        )}
      </div>

      {/* CERTIFICATE GRID */}
      {filteredCertificates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCertificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
          <h2 className="text-lg font-semibold text-foreground">
            No credentials found
          </h2>

          <p className="mt-2 text-sm text-muted">
            Try another keyword or category.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent-hover"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
