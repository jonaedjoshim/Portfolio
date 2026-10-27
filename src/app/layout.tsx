import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/ui/back-to-top";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Toaster } from "sonner";

import "./globals.css";

// FONTS

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

// SEO METADATA

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

// ROOT LAYOUT

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* SKIP NAVIGATION */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <Footer />

          <BackToTop />

          <ScrollReveal />

          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
