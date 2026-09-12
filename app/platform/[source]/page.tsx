import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlatformPageClient from "@/components/PlatformPageClient";
import { getProductsBySource, type Source } from "@/lib/data";

const SOURCES: Source[] = ["Flipkart", "Myntra", "Meesho", "Amazon", "Nykaa"];

export function generateStaticParams() {
  return SOURCES.map((s) => ({ source: s.toLowerCase() }));
}

export default function PlatformPage({
  params,
}: {
  params: { source: string };
}) {
  const match = SOURCES.find(
    (s) => s.toLowerCase() === params.source.toLowerCase()
  );
  if (!match) return notFound();

  const products = getProductsBySource(match);

  return (
    <main>
      <Nav />

      <section className="border-b border-paper/10 bg-inkSoft px-5 py-14 md:px-10 md:py-20">
        <Link
          href="/"
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide text-paper/60 hover:text-gold focus-ring"
        >
          Back home
        </Link>
        <h1 className="font-display text-5xl text-paper md:text-7xl">
          {match.toUpperCase()}
        </h1>
        <p className="mt-2 max-w-md text-sm text-paper/70">
          Every Paisawasolbro pick sourced from {match}, in one feed.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <PlatformPageClient products={products} />
      </section>

      <Footer />
    </main>
  );
}
