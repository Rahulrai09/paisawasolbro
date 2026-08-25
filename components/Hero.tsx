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

        {/* Headline on one line */}
        <div className="absolute inset-x-0 top-[18%] flex flex-col items-start px-5 leading-[0.85] md:px-10">
          <span className="font-display text-[13vw] text-white md:text-[7vw]">
            PAISA <span className="text-goldBright">WASOL</span>
          </span>
          <span className="eyebrow mt-3 pl-1 text-lg text-white/80 md:text-2xl">
            hojayega bro, agar tune ye leli toh.
          </span>
        </div>

        <div className="absolute bottom-8 left-5 right-5 flex flex-col gap-5 md:bottom-12 md:left-10 md:right-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm font-body text-sm text-white/85 md:text-base">
            Trendy, quality fashion under budget shouldn&apos;t take all day
            to find. We hunt through Flipkart, Myntra, Meesho, Amazon and
            Nykaa so you don&apos;t have to — just pick what you like.
          </p>
        </div>
      </div>
    </section>
  );
}
