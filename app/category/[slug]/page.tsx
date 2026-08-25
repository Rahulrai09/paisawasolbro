import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CategoryPageClient from "@/components/CategoryPageClient";
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <main>
      <Nav />

      <section className="relative h-[38vh] min-h-[260px] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10">
          <Link
            href="/"
            className="eyebrow mb-3 inline-block price-tag price-tag--dark tilt-l focus-ring"
          >
            ← Back home
          </Link>
          <h1 className="font-display text-5xl text-white md:text-7xl">
            {category.name.toUpperCase()}
          </h1>
          <p className="mt-2 max-w-md text-sm text-white/80">
            {category.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <Suspense fallback={null}>
          <CategoryPageClient category={category} products={products} />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}