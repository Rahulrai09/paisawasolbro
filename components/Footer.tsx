import Link from "next/link";
import { categories } from "@/lib/data";
import SearchBar from "./SearchBar";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect
        x="2.5"
        y="5.5"
        width="19"
        height="13"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.5 9.3c.2-.6.6-.6 1-.6h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.5.5c-.2.2-.2.4-.1.6.4.7 1.3 1.6 2 2 .2.1.4.1.6-.1l.5-.5c.1-.1.3-.2.5-.1l1.7.7c.3.1.4.3.4.5v.5c0 .4 0 .8-.6 1-1.1.4-2.6.1-4.4-1.2-1.5-1-2.6-2.1-3.4-3.7-.6-1.1-.7-2-.3-2.7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-inkLine bg-inkSoft/40 px-5 pt-14 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-3 border-b border-inkLine pb-10">
          <h3 className="font-body text-xs font-bold uppercase tracking-wide text-paper">
            Search picks
          </h3>
          <SearchBar />
        </div>

        <div className="grid grid-cols-2 gap-10 pb-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-display text-xl tracking-wide text-paper focus-ring"
            >
              PAISAWASOL<span className="text-gold">BRO</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-paper/60">
              Budget fashion that doesn&apos;t look budget. Real finds,
              checked before they reach you.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-inkLine text-paper/70 transition-colors hover:border-gold hover:text-gold focus-ring"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-inkLine text-paper/70 transition-colors hover:border-gold hover:text-gold focus-ring"
              >
                <YoutubeIcon />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-inkLine text-paper/70 transition-colors hover:border-gold hover:text-gold focus-ring"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-wide text-paper">
              Shop
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-paper/60">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="transition-colors hover:text-gold focus-ring"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-wide text-paper">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-paper/60">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-gold focus-ring"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-gold focus-ring"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#subscribe"
                  className="transition-colors hover:text-gold focus-ring"
                >
                  Membership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-bold uppercase tracking-wide text-paper">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-paper/60">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-gold focus-ring"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-gold focus-ring"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="perforated flex flex-col gap-3 border-t border-inkLine py-6 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Paisawasolbro. All rights reserved.</p>
          <p className="max-w-lg md:text-right">
            Product links go to Flipkart, Myntra, Meesho, Amazon and Nykaa —
            we may earn a commission on purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
