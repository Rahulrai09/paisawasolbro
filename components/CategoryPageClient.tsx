"use client";

import { useMemo, useState } from "react";
import type { Category, Product } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function CategoryPageClient({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return products;
    return products.filter((p) => p.subcategory === active);
  }, [active, products]);

  return (
    <div className="animate-fadeIn">
      <div className="mb-10 flex flex-wrap gap-2">
        {["All", ...category.subcategories].map((sub) => {
          const isActive = active === sub;
          return (
            <button
              key={sub}
              onClick={() => setActive(sub)}
              className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                isActive
                  ? "border-gold bg-gold text-ink"
                  : "border-paper/20 text-paper/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {sub}
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div
          key={active}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <ProductCard product={p} locked={p.exclusive} />
            </div>
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-sm text-paper/50">
          No picks in this filter yet — check back soon.
        </p>
      )}
    </div>
  );
}
