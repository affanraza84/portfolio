# Affan — Full-Stack Developer Portfolio

A production-grade, editorial-inspired personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

Designed as a high-conversion, professional digital identity tailored for clients, startups, recruiters, and engineering collaborators.

---

## ⚡ Key Highlights & Architecture

- **Visual Identity**: Obsidian & deep graphite monochrome palette with refined hairline borders, subtle warm amber accents, and editorial typography.
- **Flagship Case Study**: Deep-dive architectural breakdown of the **Real-Time Chat & Collaboration Engine** (WebSocket lifecycle, Redis volatile store, rate limiting, and security safeguards).
- **Technical Matrix**: Categorized competency matrix across Frontend, Backend Systems, Databases & Caching, DevOps, and Core CS/AI foundations without generic percentage bars.
- **Open Source Credentials**: Highlights for **GSSoC’26** (Top 1% Contributor) and **SSoC’26** (Top 1% Contributor).
- **Experience Timeline**: Documented **5-month Full-Stack Developer Internship** showcasing production impact across UI, APIs, databases, and authentication.
- **High-Conversion Contact**: Instant 1-click email copy, interactive inquiry form with direct mail client routing, and quick-action contact modal.
- **Performance & SEO**: 100% semantic HTML5, structured JSON-LD schemas (`Person`, `WebSite`), Open Graph metadata, and zero layout shift.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Vector Components
- **Animations**: Purposeful micro-interactions with CSS and smooth layout transitions

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

### 4. Code Quality & Linting
```bash
npm run lint
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system tokens, obsidian theme & utilities
│   │   ├── layout.tsx           # Root layout with SEO, OpenGraph & JSON-LD schemas
│   │   └── page.tsx             # Main assembled homepage
│   ├── components/
│   │   ├── Header.tsx           # Sticky navigation with live availability badge
│   │   ├── Hero.tsx             # Editorial hero with credibility indicators
│   │   ├── Positioning.tsx      # Engineering philosophy & core values
│   │   ├── SelectedWork.tsx     # Featured case study cards
│   │   ├── FlagshipCaseStudy.tsx# Real-Time Chatting application deep-dive
│   │   ├── TechnicalMatrix.tsx  # Grouped skill & competency matrix
│   │   ├── OpenSource.tsx       # GSSoC'26 & SSoC'26 Top 1% contribution cards
│   │   ├── ExperienceTimeline.tsx # 5-month internship experience
│   │   ├── ServicesSection.tsx  # "What I Can Build" high-value services
│   │   ├── WhyWorkWithMe.tsx    # Conversion-focused credibility points
│   │   ├── ContactSection.tsx   # Copy-to-clipboard & client inquiry form
│   │   ├── ContactModal.tsx     # Quick action popup dialog
│   │   ├── SocialIcons.tsx      # High-fidelity vector SVG icons
│   │   └── Footer.tsx           # Clean footer with back-to-top
│   ├── data/
│   │   └── portfolio-data.ts    # Authentic portfolio content & data models
│   ├── lib/
│   │   └── utils.ts             # Tailwind class merging utility (cn)
│   └── types/
│       └── index.ts             # TypeScript definitions
├── public/                      # Static assets & favicons
├── package.json
└── README.md
```

---

## 📄 License
MIT © [Affan](https://github.com/affanraza84)
