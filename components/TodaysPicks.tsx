"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

const PLATFORMS = [
  { name: "Myntra", h: "h-28", hd: "md:h-44" },
  { name: "Flipkart", h: "h-40", hd: "md:h-60" },
  { name: "Amazon", h: "h-32", hd: "md:h-52" },
  { name: "Nykaa", h: "h-36", hd: "md:h-56" },
  { name: "Meesho", h: "h-28", hd: "md:h-44" },
];

export default function TodaysPicks() {
  const [active, setActive] = useState<string | null>(null);
  const free = useMemo(() => products.filter((p) => !p.exclusive), []);
  const visible = active
    ? free.filter((p) => p.source.toLowerCase() === active.toLowerCase())
    : free;

  return (
    <section
      id="today"
      className="border-t border-paper/10 bg-inkSoft/40 px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="shrink-0">
            <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
              Updated daily
            </span>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              TODAY&apos;S PICKS
            </h2>
          </div>

          <div className="flex items-end gap-3 overflow-x-auto pb-1 md:gap-4 md:overflow-visible md:pb-0">
            {PLATFORMS.map((p) => {
              const isActive = active === p.name;
              return (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setActive(isActive ? null : p.name)}
                  className={`group relative ${p.h} ${p.hd} w-14 shrink-0 -skew-x-6 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 md:w-20 ${
                    isActive
                      ? "bg-gold"
                      : "bg-rust/10 hover:bg-rust/20"
                  }`}
                >
                  <span
                    className={`absolute inset-0 flex skew-x-6 items-center justify-center px-1 text-center text-[0.6rem] font-bold uppercase leading-tight tracking-wide md:text-xs ${
                      isActive ? "text-white" : "text-paper/70"
                    }`}
                  >
                    {p.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {active && (
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-paper/50">
            Showing {active} only —{" "}
            <button
              type="button"
              onClick={() => setActive(null)}
              className="text-gold hover:text-goldBright focus-ring"
            >
              clear filter
            </button>
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
