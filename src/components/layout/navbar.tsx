"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, X } from "lucide-react";

import ThemeToggle from "@/components/ui/theme-toggle";
import ScrollProgress from "@/components/ui/scroll-progress";

// NAVIGATION LINKS
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Problem Solving", href: "/problem-solving" },
  { label: "Credentials", href: "/credentials" },
];

// ACTIVE LINK CHECK
function isActiveLink(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

// HYDRATION-SAFE MOUNT CHECK
const subscribe = () => () => {};

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  // MOBILE MENU STATE
  const [menuState, setMenuState] = useState({
    isOpen: false,
    pathname,
  });

  const isMenuOpen = menuState.isOpen && menuState.pathname === pathname;

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logo/logo-dark.svg"
      : "/logo/logo-light.svg";

  // EVENT HANDLERS
  const toggleMenu = () => {
    setMenuState({
      isOpen: !isMenuOpen,
      pathname,
    });
  };

  const closeMenu = () => {
    setMenuState({
      isOpen: false,
      pathname,
    });
  };

  // BODY SCROLL LOCK
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  // ESCAPE KEY SUPPORT
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState({
          isOpen: false,
          pathname,
        });
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="container-custom flex h-18 items-center justify-between gap-4"
      >
        {/* BRAND LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Md Jonaed Joshim — Home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="relative block h-10 w-10">
            <Image
              src={logoSrc}
              alt=""
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </span>

          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            Md Jonaed Joshim
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActiveLink(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-surface-secondary text-accent"
                    : "text-muted hover:bg-surface-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Let&apos;s Talk
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-secondary"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className="mobile-nav-panel absolute inset-x-0 top-full border-b border-border bg-background shadow-lg"
      >
        <div className="mobile-nav-panel-inner">
          <div className="container-custom flex flex-col gap-2 py-5">
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-surface-secondary text-accent"
                      : "text-muted hover:bg-surface-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* MOBILE CONTACT CTA */}
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Let&apos;s Talk
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL PROGRESS */}
      <ScrollProgress />
    </header>
  );
}
