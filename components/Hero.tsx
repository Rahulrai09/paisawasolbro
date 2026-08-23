import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper/10">
      <div className="grain-overlay z-10" />

      <div className="relative h-[78vh] min-h-[520px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop"
          alt="Street-style fashion editorial"
          fill
          priority
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

        <span className="eyebrow price-tag price-tag--rust tilt-l absolute left-5 top-6 md:left-10 md:top-8">
          Est. curated, not cloned
        </span>

        {/* Oversized overlapping headline */}
        <div className="absolute inset-x-0 top-[18%] flex flex-col items-start px-5 leading-[0.85] md:px-10">
          <span className="font-display text-[16vw] text-white md:text-[8.5vw]">
            PAISA
          </span>
          <span className="font-display -mt-2 text-[16vw] text-goldBright md:-mt-4 md:text-[8.5vw]">
            WASOL
          </span>
          <span className="eyebrow mt-3 pl-1 text-lg text-white/80 md:text-2xl">
            hojayega bro, agar tune ye leli toh.
          </span>
        </div>

        <div className="absolute bottom-8 left-5 right-5 flex flex-col gap-5 md:bottom-12 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm font-body text-sm text-white/85 md:text-base">
            Real finds from Flipkart, Myntra, Meesho, Amazon and Nykaa â€”
            checked for quality before they ever reach this page. You click,
            you save, the store still gets your order.
          </p>
          <a
            href="#today"
            className="price-tag price-tag--gold tilt-r w-fit focus-ring transition-transform hover:-translate-y-0.5 hover:rotate-0"
          >
            See today&apos;s picks
          </a>
        </div>
      </div>
    </section>
  );
}

