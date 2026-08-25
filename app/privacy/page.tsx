import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
        <span className="eyebrow price-tag price-tag--gold tilt-l mb-4">
          Legal
        </span>
        <h1 className="font-display text-4xl text-paper md:text-6xl">
          PRIVACY POLICY
        </h1>
        <div className="mt-8 flex flex-col gap-5 text-sm leading-relaxed text-paper/75 md:text-base">
          <p className="text-xs text-paper/50">
            Last updated: {new Date().toLocaleDateString("en-IN")}
          </p>
          <p>
            Paisawasolbro ("we", "us") respects your privacy. This page
            explains what information we collect and how we use it.
          </p>
          <h2 className="font-display text-xl text-paper">
            Information we collect
          </h2>
          <p>
            If you subscribe to our membership, we collect your name, email
            or phone number, and payment details (processed securely by our
            payment partner — we never store your card details ourselves).
            We may also collect basic analytics data like pages visited and
            device type.
          </p>
          <h2 className="font-display text-xl text-paper">
            How we use it
          </h2>
          <p>
            We use your information to manage your subscription, send
            updates about new drops, and improve the site. We do not sell
            your personal information to third parties.
          </p>
          <h2 className="font-display text-xl text-paper">
            Affiliate links
          </h2>
          <p>
            Product links on this site go to Flipkart, Myntra, Meesho,
            Amazon and Nykaa. We may earn a commission on purchases made
            through these links, at no extra cost to you. Those platforms
            have their own privacy policies governing your purchase.
          </p>
          <h2 className="font-display text-xl text-paper">Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
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
