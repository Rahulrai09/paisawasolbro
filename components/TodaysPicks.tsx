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
    <div className="mb-10 last:mb-0">
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
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
              Updated daily
            </span>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              TODAY&apos;S PICKS
            </h2>
          </div>
          <p className="eyebrow hidden max-w-xs text-right text-base text-paper/60 md:block">
            Everyone sees these. Click through free, no subscription needed.
          </p>
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
