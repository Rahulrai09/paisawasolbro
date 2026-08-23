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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

        {/* Oversized overlapping headline */}
        <div className="absolute inset-x-0 top-[14%] flex flex-col items-start px-5 leading-[0.85] md:px-10">
          <span className="font-display text-[16vw] text-paper md:text-[8.5vw]">
            PAISA
          </span>
          <span className="font-display -mt-2 text-[16vw] text-gold md:-mt-4 md:text-[8.5vw]">
            WASOL
          </span>
        </div>

        <div className="absolute bottom-8 left-5 right-5 flex flex-col gap-5 md:bottom-12 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm font-body text-sm text-paper/80 md:text-base">
            Real finds from Flipkart, Myntra, Meesho, Amazon and Nykaa —
            checked for quality before they ever reach this page. You click,
            you save, the store still gets your order.
          </p>
          <a
            href="#today"
            className="price-tag price-tag--dark w-fit focus-ring transition-transform hover:-translate-y-0.5"
          >
            See today&apos;s picks
          </a>
        </div>
      </div>
    </section>
  );
}
