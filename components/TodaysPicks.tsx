import Image from "next/image";
import { products } from "@/lib/data";
import type { Product } from "@/lib/data";
import ProductCard from "./ProductCard";

const PLATFORM_CONFIG = [
  { name: "Myntra", mobileH: "h-32", desktopH: "md:h-56" },
  { name: "Flipkart", mobileH: "h-44", desktopH: "md:h-72" },
  { name: "Amazon", mobileH: "h-36", desktopH: "md:h-60" },
  { name: "Nykaa", mobileH: "h-40", desktopH: "md:h-64" },
  { name: "Meesho", mobileH: "h-32", desktopH: "md:h-56" },
];

function PlatformPillar({
  name,
  image,
  mobileH,
  desktopH,
}: {
  name: string;
  image?: string;
  mobileH: string;
  desktopH: string;
}) {
  return (
    <a
      href={`#platform-${name.toLowerCase()}`}
      className={`group relative ${mobileH} ${desktopH} w-16 shrink-0 overflow-hidden rounded-t-2xl outline outline-1 outline-inkLine transition-transform duration-300 ease-out hover:-translate-y-2 md:w-24`}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      ) : (
        <div className="h-full w-full bg-inkSoft" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/25" />
      <span className="absolute inset-x-0 top-2 text-center text-[0.55rem] font-extrabold uppercase tracking-wide text-white drop-shadow md:text-[0.7rem]">
        {name}
      </span>
    </a>
  );
}

function PlatformRow({
  platform,
  items,
}: {
  platform: string;
  items: Product[];
}) {
  if (items.length === 0) return null;

  return (
    <div
      id={`platform-${platform.toLowerCase()}`}
      className="mb-10 scroll-mt-24 last:mb-0"
    >
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

  const platformData = PLATFORM_CONFIG.map((cfg) => {
    const items = free
      .filter((p) => p.source.toLowerCase() === cfg.name.toLowerCase())
      .slice(0, 4);
    return { ...cfg, items, image: items[0]?.image };
  });

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

          <div className="flex items-end gap-2.5 overflow-x-auto pb-1 md:gap-4 md:overflow-visible md:pb-0">
            {platformData.map((p) => (
              <PlatformPillar
                key={p.name}
                name={p.name}
                image={p.image}
                mobileH={p.mobileH}
                desktopH={p.desktopH}
              />
            ))}
          </div>
        </div>

        {platformData.map((p) => (
          <PlatformRow key={p.name} platform={p.name} items={p.items} />
        ))}
      </div>
    </section>
  );
}
