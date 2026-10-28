import Image from "next/image";

export default function ThemePortrait() {
  return (
    <div className="relative h-full w-full">
      {/* LIGHT THEME PORTRAIT */}
      <Image
        src="/images/profile-light.webp"
        alt="Professional portrait of Md Jonaed Joshim"
        fill
        priority
        sizes="(max-width: 639px) 300px, (max-width: 767px) 340px, (max-width: 1023px) 38vw, 420px"
        className="object-cover object-center opacity-100 transition-opacity duration-500 dark:opacity-0"
      />

      {/* DARK THEME PORTRAIT */}
      <Image
        src="/images/profile-dark.webp"
        alt=""
        fill
        sizes="(max-width: 639px) 300px, (max-width: 767px) 340px, (max-width: 1023px) 38vw, 420px"
        className="object-cover object-center opacity-0 transition-opacity duration-500 dark:opacity-100"
      />
    </div>
  );
}
