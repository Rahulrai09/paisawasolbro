import Link from "next/link";
import { categories } from "@/lib/data";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-paper focus-ring"
        >
          PAISAWASOL<span className="text-gold">BRO</span>
        </Link>

        <nav className="hidden gap-8 font-body text-sm font-semibold uppercase tracking-wide text-paper/80 md:flex">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="transition-colors hover:text-gold focus-ring"
            >
              {c.name}
            </Link>
          ))}
        </nav>

        
          href="#subscribe"
          className="price-tag price-tag--gold focus-ring transition-transform hover:-translate-y-0.5"
        >
          Unlock ₹99/mo
        </a>
      </div>
    </header>
  );
}
