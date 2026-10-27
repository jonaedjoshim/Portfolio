"use client";

import { useSyncExternalStore } from "react";
import { ArrowUp } from "lucide-react";

// SCROLL SUBSCRIPTION

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  window.addEventListener("resize", callback);

  return () => {
    window.removeEventListener("scroll", callback);
    window.removeEventListener("resize", callback);
  };
}

function getScrollSnapshot() {
  return window.scrollY > 500;
}

function getServerSnapshot() {
  return false;
}

export default function BackToTop() {
  const isVisible = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerSnapshot,
  );

  // EVENT HANDLERS

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed right-5 bottom-6 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-foreground shadow-lg shadow-black/5 transition-[opacity,transform,background-color,border-color] duration-200 hover:border-accent/50 hover:bg-surface-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:right-8 sm:bottom-8 motion-reduce:transition-none ${
        isVisible
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={19} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
