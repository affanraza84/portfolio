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
    default: "Affan | Full-Stack Systems & Product Engineer",
    template: "%s | Affan",
  },
  description:
    "Affan — Full-Stack Engineer specializing in high-performance web applications, scalable backend systems, real-time distributed architectures, and precision software design.",
  keywords: [
    "Affan",
    "Affan Raza",
    "Full-Stack Engineer",
    "Software Engineer",
    "Next.js",
    "React",
    "Node.js Backend",
    "TypeScript",
    "WebSockets",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Distributed Systems",
    "Precision Engineering",
  ],
  authors: [{ name: "Affan" }],
  creator: "Affan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://affanraza.dev",
    title: "Affan | Full-Stack Systems & Product Engineer",
    description:
      "Building digital products that are fast, scalable, and engineered with precision. Full-Stack Engineer specializing in modern web applications, scalable backend systems, and real-time architectures.",
    siteName: "Affan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affan | Full-Stack Systems & Product Engineer",
    description:
      "High-performance web applications, scalable backend systems, and precision software engineering.",
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
    jobTitle: "Full-Stack Engineer",
    description:
      "Full-Stack Engineer focused on building high-performance web applications, scalable backend systems, and precision software.",
    url: "https://affanraza.dev",
    sameAs: [
      "https://github.com/affanraza84",
      "https://www.linkedin.com/in/mohammad-affan-raza-b6039b288/",
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
      "System Architecture",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#F5F4EF] text-[#171717] flex flex-col selection:bg-[#2457FF]/15 selection:text-[#171717] overflow-x-hidden w-full max-w-full relative">
        {children}
      </body>
    </html>
  );
}
