import Image from "next/image";
import Link from "next/link";
import { products, type Source } from "@/lib/data";

const PLATFORMS: { name: Source; blurb: string }[] = [
  { name: "Flipkart", blurb: "Endless everyday basics, checked before they're posted." },
  { name: "Myntra", blurb: "Trend-first pieces with sizing you can trust." },
  { name: "Meesho", blurb: "Rock-bottom prices, still worth the click." },
  { name: "Amazon", blurb: "Fast delivery on wardrobe essentials." },
  { name: "Nykaa", blurb: "Fragrance, grooming, and gifting picks." },
];

export default function TodaysPicks() {
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
              CHECK BY PLATFORM
            </h2>
          </div>
          <p className="eyebrow hidden max-w-xs text-right text-base text-paper/60 md:block">
            Five stores, one feed. Pick your platform.
          </p>
        </div>

        <div className="flex h-[420px] gap-1 overflow-hidden rounded-lg md:h-[560px]">
          {PLATFORMS.map((platform, i) => {
            const sample = products.find((p) => p.source === platform.name);
            return (
              <Link
                key={platform.name}
                href={`/category/clothing`}
                className="group relative h-full flex-1 overflow-hidden bg-ink outline outline-1 outline-inkLine transition-[flex-grow] duration-500 ease-out hover:flex-[2.4] focus-ring"
              >
                {sample && (
                  <Image
                    src={sample.image}
                    alt={platform.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/75" />

                <span
                  className="font-display absolute left-4 top-6 whitespace-nowrap text-lg text-white/90 md:left-5 md:top-8 md:text-2xl"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {platform.name}
                </span>

                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-6">
                  <p className="text-xs leading-snug text-white/90 md:text-sm">
                    {platform.blurb}
                  </p>
                  <span className="mt-2 inline-block text-lg text-goldBright">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
