import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Md Jonaed Joshim | Web Developer & Competitive Programmer",
    template: "%s | Md Jonaed Joshim",
  },
  description:
    "Portfolio of Md Jonaed Joshim, a web developer and competitive programmer focused on building practical applications and solving problems.",
  keywords: [
    "Md Jonaed Joshim",
    "Jonaed Joshim",
    "Web Developer",
    "Competitive Programmer",
    "React Developer",
    "MERN Stack Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Md Jonaed Joshim" }],
  creator: "Md Jonaed Joshim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
