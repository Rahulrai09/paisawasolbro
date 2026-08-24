import { notFound } from "next/navigation";
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

      <section className="relative h-[38vh] min-h-[260px] w-full overflow-hidden border-b border-paper/10">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10">
          <Link href="/" className="mb-3 inline-block text-xs font-semibold uppercase tracking-wide text-paper/60 hover:text-gold focus-ring">
            Back home
          </Link>
          <h1 className="font-display text-5xl text-paper md:text-7xl">
            {category.name.toUpperCase()}
          </h1>
          <p className="mt-2 max-w-md text-sm text-paper/70">
            {category.tagline}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <CategoryPageClient category={category} products={products} />
      </section>

      <Footer />
    </main>
  );
}
