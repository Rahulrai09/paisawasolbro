import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
        <span className="eyebrow price-tag price-tag--rust tilt-l mb-4">
          Get in touch
        </span>
        <h1 className="font-display text-4xl text-paper md:text-6xl">
          CONTACT US
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-paper/75 md:text-base">
          <p>
            Got a question about an order, a product we posted, or want to
            suggest something we should be covering? Reach out below.
          </p>
          <div className="mt-2 flex flex-col gap-3">
            <a
              href="mailto:hello@paisawasolbro.com"
              className="price-tag price-tag--dark w-fit focus-ring transition-transform hover:-translate-y-0.5"
            >
              hello@paisawasolbro.com
            </a>
            <a
              href="#"
              className="price-tag price-tag--gold w-fit focus-ring transition-transform hover:-translate-y-0.5"
            >
              DM us on Instagram
            </a>
          </div>
          <p className="text-xs text-paper/50">
            We typically reply within 1–2 business days.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
