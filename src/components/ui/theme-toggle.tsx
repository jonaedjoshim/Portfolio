"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

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

  // LOADING STATE

  if (!mounted) {
    return (
      <div
        className="h-11 w-11 rounded-lg border border-border bg-surface"
        aria-hidden="true"
      />
    );
  }

  // THEME STATE

  const isDark = resolvedTheme === "dark";

  // RENDER

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-secondary"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
