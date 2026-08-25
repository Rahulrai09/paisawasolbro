import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
        <span className="eyebrow price-tag price-tag--rust tilt-l mb-4">
          Legal
        </span>
        <h1 className="font-display text-4xl text-paper md:text-6xl">
          TERMS &amp; CONDITIONS
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-paper/75 md:text-base">
          <p className="text-xs text-paper/50">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <p>
            By using Paisawasolbro, you agree to the following terms.
          </p>
          <h2 className="font-display text-xl text-paper">
            Affiliate disclosure
          </h2>
          <p>
            Paisawasolbro is an independent affiliate site. We are not
            affiliated with, endorsed by, or officially connected to
            Flipkart, Myntra, Meesho, Amazon or Nykaa. Clicking a product
            link takes you to the retailer&apos;s own site, where their
            terms, pricing, and return policy apply — not ours.
          </p>
          <h2 className="font-display text-xl text-paper">Membership</h2>
          <p>
            The ₹99/month membership unlocks access to exclusive picks
            posted on this site. Subscriptions renew automatically each
            month unless cancelled. You can cancel anytime from your
            account; access continues until the end of the current billing
            period.
          </p>
          <h2 className="font-display text-xl text-paper">No guarantees</h2>
          <p>
            We try to keep prices and availability accurate, but retailers
            change these without notice. Always confirm price, size, and
            quality details on the retailer&apos;s page before purchasing.
          </p>
          <h2 className="font-display text-xl text-paper">Contact</h2>
          <p>
            Questions about these terms? Reach us at{" "}
            <a href="mailto:hello@paisawasolbro.com" className="text-gold underline">
              hello@paisawasolbro.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
