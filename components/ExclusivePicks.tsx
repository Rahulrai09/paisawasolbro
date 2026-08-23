import { products } from "@/lib/data";
import ProductCard from "./ProductCard";

export default function ExclusivePicks() {
  const exclusive = products.filter((p) => p.exclusive);

  return (
    <section
      id="subscribe"
      className="border-t border-paper/10 px-5 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 border border-inkLine bg-inkSoft p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <span className="eyebrow price-tag price-tag--rust tilt-l mb-3">
              Members only
            </span>
            <h2 className="font-display text-3xl text-paper md:text-5xl">
              EXCLUSIVE PICKS
            </h2>
            <p className="mt-2 max-w-md text-sm text-paper/70">
              The finds we don&apos;t put on the free feed â€” better margins on
              quality, checked twice before they&apos;re posted.
            </p>
          </div>
          <a
            href="#"
            className="price-tag price-tag--gold w-fit shrink-0 px-6 py-3 text-sm focus-ring transition-transform hover:-translate-y-0.5 hover:rotate-1"
          >
            Subscribe â€” â‚¹99/month
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {exclusive.map((p) => (
            <ProductCard key={p.id} product={p} locked />
          ))}
        </div>
      </div>
    </section>
  );
}

