"use client";

import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "Competitive Programmer",
];

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(roles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];
  const displayedRole = currentRole.slice(0, characterCount);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && characterCount === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && characterCount === 0) {
      timeout = setTimeout(() => {
        setRoleIndex((previous) => (previous + 1) % roles.length);
        setIsDeleting(false);
      }, 350);
    } else {
      timeout = setTimeout(
        () => {
          setCharacterCount((previous) => previous + (isDeleting ? -1 : 1));
        },
        isDeleting ? 45 : 85,
      );
    }

    return () => clearTimeout(timeout);
  }, [characterCount, currentRole, isDeleting]);

  return (
    <span className="inline-flex items-center" aria-label={currentRole}>
      <span>{displayedRole}</span>

      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-accent motion-reduce:animate-none"
      />
    </span>
  );
}
