"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function Nav() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-paper focus-ring"
          onClick={() => setOpenSlug(null)}
        >
          PAISAWASOL<span className="text-gold">BRO</span>
        </Link>

        <nav className="hidden gap-8 font-body text-sm font-semibold uppercase tracking-wide text-paper/80 md:flex">
          {categories.map((c) => {
            const isOpen = openSlug === c.slug;
            return (
              <div
                key={c.slug}
                className="relative"
                onMouseEnter={() => setOpenSlug(c.slug)}
                onMouseLeave={() => setOpenSlug(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenSlug((prev) => (prev === c.slug ? null : c.slug))
                  }
                  className="flex items-center gap-1 transition-colors hover:text-gold focus-ring"
                >
                  {c.name}
                  <span
                    className={`text-[0.6rem] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                    <div className="animate-fadeInUp rounded-md border border-inkLine bg-ink shadow-xl">
                      <Link
                        href={`/category/${c.slug}`}
                        onClick={() => setOpenSlug(null)}
                        className="block border-b border-inkLine px-4 py-2.5 text-xs font-bold text-gold hover:bg-inkSoft focus-ring"
                      >
                        View all {c.name}
                      </Link>
                      <div className="grid max-h-72 grid-cols-2 gap-x-2 overflow-y-auto p-2">
                        {c.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            href={`/category/${c.slug}?sub=${encodeURIComponent(
                              sub
                            )}`}
                            onClick={() => setOpenSlug(null)}
                            className="rounded px-2 py-1.5 text-xs font-medium normal-case tracking-normal text-paper/75 hover:bg-inkSoft hover:text-gold focus-ring"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <a
          href="#subscribe"
          className="price-tag price-tag--gold focus-ring transition-transform hover:-translate-y-0.5"
        >
          Unlock ₹99/mo
        </a>
      </div>

      {/* Mobile: horizontal scroll of category chips, tap opens the full category page */}
      <div className="flex gap-3 overflow-x-auto border-t border-paper/10 px-5 py-2.5 font-body text-xs font-semibold uppercase tracking-wide text-paper/80 md:hidden">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="shrink-0 rounded-full border border-inkLine px-3 py-1 focus-ring"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
