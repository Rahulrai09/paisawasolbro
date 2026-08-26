import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-6 pb-16 md:px-10 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="eyebrow price-tag price-tag--gold tilt-l mb-3">
            The rack
          </span>
          <h2 className="font-display text-3xl text-paper md:text-5xl">
            SHOP BY CATEGORY
          </h2>
        </div>
        <p className="eyebrow hidden max-w-xs text-right text-base text-paper/60 md:block">
          Four verticals today. More join the rack as the brand grows.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c, i) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={`group relative aspect-[3/4] overflow-hidden bg-inkSoft outline outline-1 outline-inkLine focus-ring transition-transform duration-300 hover:-translate-y-1 ${
              i % 2 === 0 ? "md:translate-y-3" : ""
            }`}
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-110 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-500 group-hover:from-black/70" />
            <span className="price-tag price-tag--dark tilt-r absolute right-3 top-3 !px-2 !py-1 text-[0.6rem]">
              0{i + 1}
            </span>
            <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-display text-xl text-white md:text-2xl">
                {c.name}
              </h3>
              <p className="eyebrow mt-1 text-xs text-white/80 md:text-sm">
                {c.tagline}
              </p>
              <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-goldBright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Shop now →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
