"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

type SortOption = "recommended" | "price-low" | "price-high" | "discount";

function discountOf(p: Product) {
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

export default function PlatformPageClient({
  products,
}: {
  products: Product[];
}) {
  const categorySlugs = Array.from(
    new Set(products.map((p) => p.categorySlug))
  );

  const [checkedCategories, setCheckedCategories] = useState<Set<string>>(
    new Set()
  );
  const [minDiscount, setMinDiscount] = useState<number>(0);
  const [sortBy, setSortBy] = useState<SortOption>("recommended");
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  function toggleCategory(slug: string) {
    setCheckedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function clearAll() {
    setCheckedCategories(new Set());
    setMinDiscount(0);
  }

  const filtered = useMemo(() => {
    let list = products;

    if (checkedCategories.size > 0) {
      list = list.filter((p) => checkedCategories.has(p.categorySlug));
    }

    if (minDiscount > 0) {
      list = list.filter((p) => discountOf(p) >= minDiscount);
    }

    const sorted = [...list];
    if (sortBy === "price-low") sorted.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") sorted.sort((a, b) => b.price - a.price);
    else if (sortBy === "discount")
      sorted.sort((a, b) => discountOf(b) - discountOf(a));

    return sorted;
  }, [products, checkedCategories, minDiscount, sortBy]);

  const activeFilterCount = checkedCategories.size + (minDiscount > 0 ? 1 : 0);

  const categoryCounts = categorySlugs.map((slug) => ({
    slug,
    label: slug[0].toUpperCase() + slug.slice(1),
    count: products.filter((p) => p.categorySlug === slug).length,
  }));

  const DISCOUNT_TIERS = [30, 50, 70];

  return (
    <div className="animate-fadeIn">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-4">
        <p className="text-sm text-paper/60">
          <span className="font-semibold text-paper">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "pick" : "picks"}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFiltersMobile((v) => !v)}
            className="focus-ring rounded-full border border-paper/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-paper/80 md:hidden"
          >
            Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
          </button>

          <label className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wide text-paper/60 md:flex">
            Sort by
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="focus-ring rounded-md border border-paper/20 bg-transparent px-3 py-1.5 text-paper"
            >
              <option value="recommended" className="text-ink">Recommended</option>
              <option value="price-low" className="text-ink">Price: Low to High</option>
              <option value="price-high" className="text-ink">Price: High to Low</option>
              <option value="discount" className="text-ink">Discount: High to Low</option>
            </select>
          </label>
        </div>
      </div>

      <div className="flex gap-8">
        <aside
          className={`w-56 shrink-0 ${
            showFiltersMobile ? "block" : "hidden"
          } md:block`}
        >
          <div className="sticky top-24">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg text-paper">Filters</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAll}
                  className="focus-ring text-xs font-semibold uppercase tracking-wide text-gold hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="mb-6 md:hidden">
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-paper/50">
                Sort by
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="focus-ring w-full rounded-md border border-paper/20 bg-transparent px-3 py-2 text-sm text-paper"
              >
                <option value="recommended" className="text-ink">Recommended</option>
                <option value="price-low" className="text-ink">Price: Low to High</option>
                <option value="price-high" className="text-ink">Price: High to Low</option>
                <option value="discount" className="text-ink">Discount: High to Low</option>
              </select>
            </div>

            <div className="mb-6 border-t border-paper/10 pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-paper/50">
                Category
              </p>
              <div className="flex flex-col gap-2.5">
                {categoryCounts.map((c) => (
                  <label
                    key={c.slug}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-paper/80 hover:text-paper"
                  >
                    <input
                      type="checkbox"
                      checked={checkedCategories.has(c.slug)}
                      onChange={() => toggleCategory(c.slug)}
                      className="h-4 w-4 accent-gold"
                    />
                    {c.label}
                    <span className="text-xs text-paper/40">({c.count})</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-paper/10 pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-paper/50">
                Discount
              </p>
              <div className="flex flex-col gap-2.5">
                {DISCOUNT_TIERS.map((tier) => (
                  <label
                    key={tier}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-paper/80 hover:text-paper"
                  >
                    <input
                      type="radio"
                      name="discount"
                      checked={minDiscount === tier}
                      onChange={() =>
                        setMinDiscount((prev) => (prev === tier ? 0 : tier))
                      }
                      className="h-4 w-4 accent-gold"
                    />
                    {tier}% and above
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          {filtered.length > 0 ? (
            <div
              key={`${sortBy}-${minDiscount}-${checkedCategories.size}`}
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
            >
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <ProductCard product={p} locked={p.exclusive} />
                </div>
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-sm text-paper/50">
              No picks match these filters — try clearing one.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
