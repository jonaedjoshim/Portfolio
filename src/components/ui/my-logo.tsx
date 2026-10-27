"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

type MyLogoProps = {
  size?: number;
  className?: string;
};

// HYDRATION-SAFE MOUNT CHECK
const subscribe = () => () => {};

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export default function MyLogo({
  size = 40,
  className = "",
}: MyLogoProps) {
  const { resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/logo/logo-dark.svg"
      : "/logo/logo-light.svg";

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={logoSrc}
        alt=""
        fill
        sizes={`${size}px`}
        className="object-contain"
      />
    </span>
  );
}
