"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    // INITIALIZE AFTER HYDRATION
    timeoutId = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main h2, main article, main [data-reveal]",
        ),
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target as HTMLElement;

            element.classList.add("reveal-visible");
            observer?.unobserve(element);
          });
        },
        {
          rootMargin: "0px 0px -35px 0px",
          threshold: 0.08,
        },
      );

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // SKIP ALREADY VISIBLE CONTENT
        if (rect.top < window.innerHeight) {
          return;
        }

        element.classList.add("reveal-ready");
        observer?.observe(element);
      });
    }, 150);

    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      observer?.disconnect();

      document
        .querySelectorAll<HTMLElement>(".reveal-ready, .reveal-visible")
        .forEach((element) => {
          element.classList.remove("reveal-ready", "reveal-visible");
        });
    };
  }, [pathname]);

  return null;
}
