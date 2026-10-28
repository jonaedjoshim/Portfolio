import Image from "next/image";

export default function ThemePortrait() {
  const imageSizes =
    "(max-width: 639px) 300px, (max-width: 767px) 340px, (max-width: 1023px) 38vw, 420px";

  return (
    <div className="theme-portrait relative h-full w-full overflow-hidden">
      {/* LIGHT THEME PORTRAIT */}
      <Image
        src="/images/profile-light.webp"
        alt="Professional portrait of Md Jonaed Joshim"
        fill
        priority
        sizes={imageSizes}
        className="object-cover object-center"
      />

      {/* DARK THEME PORTRAIT */}
      <Image
        src="/images/profile-dark.webp"
        alt=""
        fill
        priority
        sizes={imageSizes}
        className="theme-portrait-overlay object-cover object-center"
      />
    </div>
  );
}
