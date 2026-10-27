"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    // SCROLL PROGRESS
    const updateProgress = () => {
      const scrollableHeight = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );

      const progress =
        scrollableHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
          : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-border/40"
      style={{ height: "3px", bottom: 0, left: 0, right: 0 }}
    >
      <div
        ref={progressRef}
        className="h-full w-full origin-left bg-accent"
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "left",
          transform: "scaleX(0)",
          backgroundColor: "var(--accent)",
        }}
      />
    </div>
  );
}
