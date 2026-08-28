"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products, categories } from "@/lib/data";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return { productMatches: [], categoryMatches: [] };

    const productMatches = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q) ||
          p.source.toLowerCase().includes(q)
      )
      .slice(0, 6);

    const categoryMatches = categories
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subcategories.some((sub) => sub.toLowerCase().includes(q))
      )
      .slice(0, 4);

    return { productMatches, categoryMatches };
  }, [query]);

  const hasResults =
    results.productMatches.length > 0 || results.categoryMatches.length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="Search tees, sneakers, Myntra, Nykaa..."
          className="w-full rounded-full border border-inkLine bg-ink px-4 py-2.5 pr-11 text-sm text-paper placeholder:text-paper/40 focus-ring"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-goldBright focus-ring"
        >
          <SearchIcon />
        </button>
      </form>

      {open && query.trim().length >= 2 && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-80 w-full overflow-y-auto rounded-xl border border-inkLine bg-ink shadow-2xl">
          {hasResults ? (
            <>
              {results.categoryMatches.length > 0 && (
                <div className="border-b border-inkLine p-2">
                  <p className="px-2 pb-1 text-[0.65rem] font-bold uppercase tracking-wide text-paper/40">
                    Categories
                  </p>
                  {results.categoryMatches.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/category/${c.slug}`}
                      className="block rounded-lg px-2 py-2 text-sm text-paper/85 hover:bg-inkSoft hover:text-gold focus-ring"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}

              {results.productMatches.length > 0 && (
                <div className="p-2">
                  <p className="px-2 pb-1 text-[0.65rem] font-bold uppercase tracking-wide text-paper/40">
                    Products
                  </p>
                  {results.productMatches.map((p) => (
                    <a
                      key={p.id}
                      href={p.href}
                      className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-paper/85 hover:bg-inkSoft hover:text-gold focus-ring"
                    >
                      <span className="truncate">{p.name}</span>
                      <span className="shrink-0 text-xs text-paper/40">
                        via {p.source}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="p-4 text-center text-sm text-paper/50">
              No matches yet — try a different keyword.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
