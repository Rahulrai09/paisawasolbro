import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Search — Paisawasolbro",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams.q ?? "").trim().toLowerCase();

  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.source.toLowerCase().includes(q)
      )
    : [];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mb-10">
          <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
            Search
          </span>
          <h1 className="font-display text-3xl text-paper md:text-5xl">
            {q ? `RESULTS FOR "${searchParams.q}"` : "SEARCH PAISAWASOLBRO"}
          </h1>
          <p className="mt-2 text-sm text-paper/60">
            {q
              ? `${results.length} match${results.length === 1 ? "" : "es"} found.`
              : "Type a product, category, or store name in the search bar."}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} locked={p.exclusive} />
            ))}
          </div>
        ) : (
          q && (
            <p className="py-16 text-center text-sm text-paper/50">
              No picks match that search — try a different keyword.
            </p>
          )
        )}
      </main>
      <Footer />
    </>
  );
}
