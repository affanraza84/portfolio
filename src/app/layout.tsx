import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://affanraza.dev"),
  title: {
    default: "Affan | Full-Stack Developer",
    template: "%s | Affan",
  },
  description:
    "Affan — Full-Stack Developer specializing in high-performance web applications, scalable backend systems, real-time engines, and polished digital experiences.",
  keywords: [
    "Affan",
    "Affan Raza",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Backend",
    "TypeScript",
    "WebSockets",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Affan" }],
  creator: "Affan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affanraza.dev",
    title: "Affan | Full-Stack Developer",
    description:
      "Building digital products that are fast, scalable, and built to last. Full-Stack Developer specializing in modern web applications, scalable backend systems, and real-time architectures.",
    siteName: "Affan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affan | Full-Stack Developer",
    description:
      "Building digital products that are fast, scalable, and built to last. Next.js, Node.js, TypeScript, Distributed Systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Affan",
    alternateName: "Affan Raza",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer focused on building modern web applications, scalable backend systems, and polished digital experiences.",
    url: "https://affanraza.dev",
    sameAs: [
      "https://github.com/affanraza84",
      "https://linkedin.com/in/affanraza84",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "WebSockets",
      "Docker",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#09090b] text-[#f8fafc] flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
