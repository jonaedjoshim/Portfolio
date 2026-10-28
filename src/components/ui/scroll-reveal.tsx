"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // ACCESSIBILITY
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observedElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main h2, main article, main [data-reveal]",
      ),
    );

    // INTERSECTION OBSERVER
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;

          element.animate(
            [
              {
                opacity: 0,
                transform: "translateY(18px)",
              },
              {
                opacity: 1,
                transform: "translateY(0)",
              },
            ],
            {
              duration: 650,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "none",
            },
          );

          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -35px 0px",
        threshold: 0.08,
      },
    );

    // OBSERVE BELOW-VIEWPORT ELEMENTS
    observedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top >= window.innerHeight) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
