import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
        <span className="eyebrow price-tag price-tag--gold tilt-l mb-4">
          Who we are
        </span>
        <h1 className="font-display text-4xl text-paper md:text-6xl">
          ABOUT PAISAWASOLBRO
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-paper/75 md:text-base">
          <p>
            Paisawasolbro started with one simple idea — good-looking,
            good-quality fashion shouldn&apos;t need a big budget. We spend
            our time scrolling through Flipkart, Myntra, Meesho, Amazon and
            Nykaa so you don&apos;t have to, and only post the finds that
            actually look and feel worth it.
          </p>
          <p>
            Every product on this site is checked for quality and value
            before it makes the page — no random dropshipping junk, no
            "trust me bro" picks. If it&apos;s here, it&apos;s because it
            passed the paisa wasool test.
          </p>
          <p>
            We&apos;re an affiliate site — when you buy through our links, we
            may earn a small commission from the store, at no extra cost to
            you. That&apos;s what keeps the daily picks coming.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
