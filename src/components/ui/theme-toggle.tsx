"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";

// HYDRATION SAFETY

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const isTransitioning = useRef(false);

  // EVENT HANDLERS

  const handleThemeChange = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (isTransitioning.current) return;

    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // FALLBACK
    if (!document.startViewTransition || reducedMotion) {
      setTheme(nextTheme);
      return;
    }

    isTransitioning.current = true;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    try {
      // CAPTURE NEW THEME
      const transition = document.startViewTransition(() => {
        document.documentElement.classList.toggle("dark", nextTheme === "dark");

        document.documentElement.style.colorScheme = nextTheme;

        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      await transition.ready;

      // CIRCULAR REVEAL
      await document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 750,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      ).finished;
    } catch (error) {
      console.error("Theme transition failed:", error);
      setTheme(nextTheme);
    } finally {
      isTransitioning.current = false;
    }
  };

  // LOADING STATE

  if (!mounted) {
    return (
      <div
        className="h-11 w-11 rounded-lg border border-border bg-surface"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-secondary"
    >
      {isDark ? (
        <Sun size={20} aria-hidden="true" />
      ) : (
        <Moon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
