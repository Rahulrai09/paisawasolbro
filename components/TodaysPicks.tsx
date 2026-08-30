import { products } from "@/lib/data";
import type { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

const PLATFORMS = ["Myntra", "Flipkart", "Amazon", "Meesho", "Nykaa"];

function PlatformRow({
  platform,
  items,
}: {
  platform: string;
  items: Product[];
}) {
  if (items.length === 0) return null;

  return (
    <div id={`platform-${platform.toLowerCase()}`} className="mb-10 scroll-mt-24 last:mb-0">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-extrabold uppercase tracking-wide text-paper/70">
          {platform}
        </span>
        <a
          href="#"
          className="text-xs font-extrabold uppercase tracking-wide text-gold hover:text-goldBright focus-ring"
        >
          View all
        </a>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
        {items.map((p) => (
          <div
            key={p.id}
            className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-auto"
          >
            <ProductCard product={p} hideSource />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TodaysPicks() {
  const free = products.filter((p) => !p.exclusive);

  return (
    <section
      id="today"
      className="border-t border-paper/10 bg-inkSoft/40 px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4 overflow-x-auto">
          <div className="shrink-0">
            <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
              Updated daily
            </span>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              TODAY&apos;S PICKS
            </h2>
          </div>

          <div className="hidden shrink-0 items-end gap-3 sm:flex">
            <a
              href="#platform-myntra"
              className="flex h-28 w-16 items-start justify-center rounded-t-2xl bg-rust/10 pt-3 text-[0.65rem] font-bold uppercase tracking-wide text-paper/70 transition-colors hover:bg-rust/20 hover:text-gold focus-ring md:h-40 md:w-20 md:text-xs"
            >
              Myntra
            </a>
            <a
              href="#platform-flipkart"
              className="flex h-44 w-16 items-start justify-center rounded-t-2xl bg-rust/10 pt-3 text-[0.65rem] font-bold uppercase tracking-wide text-paper/70 transition-colors hover:bg-rust/20 hover:text-gold focus-ring md:h-64 md:w-20 md:text-xs"
            >
              Flipkart
            </a>
            <a
              href="#platform-amazon"
              className="flex h-32 w-16 items-start justify-center rounded-t-2xl bg-rust/10 pt-3 text-[0.65rem] font-bold uppercase tracking-wide text-paper/70 transition-colors hover:bg-rust/20 hover:text-gold focus-ring md:h-48 md:w-20 md:text-xs"
            >
              Amazon
            </a>
            <a
              href="#platform-nykaa"
              className="flex h-40 w-16 items-start justify-center rounded-t-2xl bg-rust/10 pt-3 text-[0.65rem] font-bold uppercase tracking-wide text-paper/70 transition-colors hover:bg-rust/20 hover:text-gold focus-ring md:h-60 md:w-20 md:text-xs"
            >
              Nykaa
            </a>
            <a
              href="#platform-meesho"
              className="flex h-36 w-16 items-start justify-center rounded-t-2xl bg-rust/10 pt-3 text-[0.65rem] font-bold uppercase tracking-wide text-paper/70 transition-colors hover:bg-rust/20 hover:text-gold focus-ring md:h-52 md:w-20 md:text-xs"
            >
              Meesho
            </a>
          </div>
        </div>

        {PLATFORMS.map((platform) => (
          <PlatformRow
            key={platform}
            platform={platform}
            items={free
              .filter((p) => p.source.toLowerCase() === platform.toLowerCase())
              .slice(0, 4)}
          />
        ))}
      </div>
    </section>
  );
}
