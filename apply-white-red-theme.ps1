# Paisawasolbro — White + Red bright theme update
# Run this from inside your project folder: C:\Users\DELL\Desktop\paisawasolbro
# It overwrites the files below, then commits and pushes.

Write-Host "Updating theme files..." -ForegroundColor Cyan

Write-Host "  - tailwind.config.ts"
@'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FFFFFF",
        inkSoft: "#FFF3F2",
        inkLine: "#F3D9D8",
        gold: "#E01B1B",
        goldBright: "#FF3B30",
        rust: "#A81810",
        paper: "#1C1310",
        paperDim: "#7A6664",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
    },
  },
  plugins: [],
};
export default config;

'@ | Set-Content -Path 'tailwind.config.ts' -Encoding UTF8

Write-Host "  - app/globals.css"
New-Item -ItemType Directory -Force -Path (Split-Path 'app/globals.css') | Out-Null
@'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-display: "Anton", sans-serif;
  --font-body: "Manrope", sans-serif;
  --font-accent: "Fraunces", serif;
}

* {
  scroll-behavior: smooth;
}

/* ---- Signature element: hand-tagged bazaar ticket ----
   A perforated, slightly-rotated price tag with stitched edge —
   references thrift-tag / bazaar price cards rather than a flat
   e-commerce badge. Rotation is per-instance via .tilt-l / .tilt-r. */
.price-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #ffffff;
  color: #1c1310;
  padding: 0.32rem 0.8rem 0.32rem 1rem;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid rgba(28, 19, 16, 0.15);
  box-shadow: 0 2px 0 rgba(28, 19, 16, 0.08);
}

.price-tag::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--tag-hole, #ffffff);
  border: 1px solid rgba(28, 19, 16, 0.25);
}

.price-tag--gold {
  background: #e01b1b;
  color: #ffffff;
  border-color: rgba(28, 19, 16, 0.1);
  --tag-hole: #ffffff;
}

.price-tag--dark {
  background: #1c1310;
  color: #ffffff;
  border-color: rgba(28, 19, 16, 0.1);
  --tag-hole: #ffffff;
}

.price-tag--rust {
  background: #a81810;
  color: #ffffff;
  border-color: rgba(28, 19, 16, 0.1);
  --tag-hole: #ffffff;
}

.tilt-l {
  transform: rotate(-2deg);
}
.tilt-r {
  transform: rotate(2deg);
}

/* Stamped diagonal badge — used for discount callouts, reads like an ink stamp */
.stamp {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid currentColor;
  border-radius: 9999px;
  padding: 0.3rem 0.7rem;
  font-family: var(--font-accent);
  font-style: italic;
  font-weight: 600;
  letter-spacing: 0.02em;
  transform: rotate(-8deg);
}

/* Eyebrow labels in the editorial serif, small caps energy without the cream/serif cliche */
.eyebrow {
  font-family: var(--font-accent);
  font-style: italic;
  font-weight: 500;
}

/* Perforated divider — evokes a tear-off receipt / ticket stub */
.perforated {
  border-top: 1px dashed rgba(28, 19, 16, 0.18);
  position: relative;
}
.perforated::before,
.perforated::after {
  content: "";
  position: absolute;
  top: -7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(28, 19, 16, 0.12);
}
.perforated::before {
  left: -7px;
}
.perforated::after {
  right: -7px;
}

/* Marquee ticker */
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Subtle grain overlay for the hero, keeps the flat colors from feeling too digital */
.grain-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.07;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.focus-ring:focus-visible {
  outline: 2px solid #e01b1b;
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

'@ | Set-Content -Path 'app/globals.css' -Encoding UTF8

Write-Host "  - app/layout.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'app/layout.tsx') | Out-Null
@'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paisawasolbro — Fashion That Doesn't Cost Extra",
  description:
    "Hand-picked fashion, fragrance, and accessory finds from Flipkart, Myntra, Meesho, Amazon and Nykaa — curated so you don't have to scroll for hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-paper font-body antialiased">
        {children}
      </body>
    </html>
  );
}

'@ | Set-Content -Path 'app/layout.tsx' -Encoding UTF8

Write-Host "  - app/page.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'app/page.tsx') | Out-Null
@'
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CategoryGrid from "@/components/CategoryGrid";
import TodaysPicks from "@/components/TodaysPicks";
import ExclusivePicks from "@/components/ExclusivePicks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <CategoryGrid />
      <TodaysPicks />
      <ExclusivePicks />
      <Footer />
    </main>
  );
}

'@ | Set-Content -Path 'app/page.tsx' -Encoding UTF8

Write-Host "  - components/Marquee.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'components/Marquee.tsx') | Out-Null
@'
const ITEMS = [
  "#PAISAWASOOL",
  "FLIPKART",
  "MYNTRA",
  "MEESHO",
  "AMAZON",
  "NYKAA",
  "#BUDGETFASHION",
  "CHECKED BEFORE POSTED",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-inkLine bg-inkSoft py-3">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 font-body text-xs font-bold uppercase tracking-[0.15em] text-paper/50"
          >
            {item}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

'@ | Set-Content -Path 'components/Marquee.tsx' -Encoding UTF8

Write-Host "  - components/Hero.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'components/Hero.tsx') | Out-Null
@'
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper/10">
      <div className="grain-overlay z-10" />

      <div className="relative h-[78vh] min-h-[520px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
          alt="Street-style fashion editorial"
          fill
          priority
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

        <span className="eyebrow price-tag price-tag--rust tilt-l absolute left-5 top-6 md:left-10 md:top-8">
          Est. curated, not cloned
        </span>

        {/* Oversized overlapping headline */}
        <div className="absolute inset-x-0 top-[18%] flex flex-col items-start px-5 leading-[0.85] md:px-10">
          <span className="font-display text-[16vw] text-white md:text-[8.5vw]">
            PAISA
          </span>
          <span className="font-display -mt-2 text-[16vw] text-goldBright md:-mt-4 md:text-[8.5vw]">
            WASOL
          </span>
          <span className="eyebrow mt-3 pl-1 text-lg text-white/80 md:text-2xl">
            hojayega bro, agar tune ye leli toh.
          </span>
        </div>

        <div className="absolute bottom-8 left-5 right-5 flex flex-col gap-5 md:bottom-12 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm font-body text-sm text-white/85 md:text-base">
            Real finds from Flipkart, Myntra, Meesho, Amazon and Nykaa —
            checked for quality before they ever reach this page. You click,
            you save, the store still gets your order.
          </p>
          <a
            href="#today"
            className="price-tag price-tag--gold tilt-r w-fit focus-ring transition-transform hover:-translate-y-0.5 hover:rotate-0"
          >
            See today&apos;s picks
          </a>
        </div>
      </div>
    </section>
  );
}

'@ | Set-Content -Path 'components/Hero.tsx' -Encoding UTF8

Write-Host "  - components/CategoryGrid.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'components/CategoryGrid.tsx') | Out-Null
@'
import Image from "next/image";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
            The rack
          </span>
          <h2 className="font-display text-3xl text-paper md:text-5xl">
            SHOP BY CATEGORY
          </h2>
        </div>
        <p className="eyebrow hidden max-w-xs text-right text-base text-paper/60 md:block">
          Four verticals today. More join the rack as the brand grows.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c, i) => (
          <a
            key={c.slug}
            href={`#${c.slug}`}
            id={c.slug}
            className={`group relative aspect-[3/4] overflow-hidden bg-inkSoft outline outline-1 outline-inkLine focus-ring transition-transform duration-300 hover:-translate-y-1 ${
              i % 2 === 0 ? "md:translate-y-3" : ""
            }`}
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <span className="price-tag price-tag--dark tilt-r absolute right-3 top-3 !px-2 !py-1 text-[0.6rem]">
              0{i + 1}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-display text-xl text-white md:text-2xl">
                {c.name}
              </h3>
              <p className="eyebrow mt-1 text-xs text-white/80 md:text-sm">
                {c.tagline}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

'@ | Set-Content -Path 'components/CategoryGrid.tsx' -Encoding UTF8

Write-Host "  - components/ProductCard.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'components/ProductCard.tsx') | Out-Null
@'
import Image from "next/image";
import type { Product } from "@/lib/data";

function discountPercent(price: number, mrp: number) {
  return Math.round(((mrp - price) / mrp) * 100);
}

export default function ProductCard({
  product,
  locked = false,
}: {
  product: Product;
  locked?: boolean;
}) {
  const off = discountPercent(product.price, product.mrp);

  return (
    <div className="group relative flex flex-col overflow-hidden bg-inkSoft outline outline-1 outline-inkLine transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            locked ? "blur-md scale-105" : ""
          }`}
        />
        <span className="stamp absolute left-3 top-3 border-gold text-gold">
          {off}% off
        </span>
        <span className="price-tag price-tag--dark absolute right-3 top-3 text-[0.6rem]">
          via {product.source}
        </span>

        {locked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/65 text-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="text-goldBright"
            >
              <rect
                x="5"
                y="11"
                width="14"
                height="9"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M8 11V7a4 4 0 0 1 8 0v4"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
            <p className="px-4 text-xs font-semibold uppercase tracking-wide text-white">
              Members-only pick
            </p>
          </div>
        )}
      </div>

      <div className="perforated flex flex-1 flex-col gap-2 p-4 pt-5">
        <h3 className="font-body text-sm font-semibold text-paper">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="font-accent text-xl italic text-gold">
            ₹{product.price}
          </span>
          <span className="text-xs text-paper/40 line-through">
            ₹{product.mrp}
          </span>
        </div>

        {locked ? (
          <a
            href="#subscribe"
            className="mt-2 text-center text-xs font-bold uppercase tracking-wide text-gold underline underline-offset-4 focus-ring"
          >
            Unlock to view link
          </a>
        ) : (
          <a
            href={product.href}
            className="mt-2 text-center text-xs font-bold uppercase tracking-wide text-paper/80 underline underline-offset-4 transition-colors hover:text-gold focus-ring"
          >
            Go to {product.source} →
          </a>
        )}
      </div>
    </div>
  );
}

'@ | Set-Content -Path 'components/ProductCard.tsx' -Encoding UTF8

Write-Host "  - components/ExclusivePicks.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'components/ExclusivePicks.tsx') | Out-Null
@'
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ExclusivePicks() {
  const exclusive = products.filter((p) => p.exclusive);

  return (
    <section
      id="subscribe"
      className="border-t border-paper/10 px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 border border-inkLine bg-inkSoft p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <span className="eyebrow price-tag price-tag--rust tilt-l mb-3">
              Members only
            </span>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              EXCLUSIVE PICKS
            </h2>
            <p className="mt-2 max-w-md text-sm text-paper/70">
              The finds we don&apos;t put on the free feed — better margins on
              quality, checked twice before they&apos;re posted.
            </p>
          </div>
          <a
            href="#"
            className="price-tag price-tag--gold w-fit shrink-0 px-6 py-3 text-sm focus-ring transition-transform hover:-translate-y-0.5 hover:rotate-1"
          >
            Subscribe — ₹99/month
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {exclusive.map((p) => (
            <ProductCard key={p.id} product={p} locked />
          ))}
        </div>
      </div>
    </section>
  );
}

'@ | Set-Content -Path 'components/ExclusivePicks.tsx' -Encoding UTF8

Write-Host "  - components/TodaysPicks.tsx"
New-Item -ItemType Directory -Force -Path (Split-Path 'components/TodaysPicks.tsx') | Out-Null
@'
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function TodaysPicks() {
  return (
    <section
      id="today"
      className="border-t border-paper/10 bg-inkSoft/40 px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
              Updated daily
            </span>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              TODAY&apos;S PICKS
            </h2>
          </div>
          <p className="eyebrow hidden max-w-xs text-right text-base text-paper/60 md:block">
            Everyone sees these. Click through free, no subscription needed.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((p) => !p.exclusive)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </section>
  );
}

'@ | Set-Content -Path 'components/TodaysPicks.tsx' -Encoding UTF8

Write-Host "All files updated." -ForegroundColor Green
Write-Host ""

git add .
git commit -m "Switch to white + red bright theme"
git push

Write-Host ""
Write-Host "Done. Run 'npm run dev' to preview locally." -ForegroundColor Cyan
