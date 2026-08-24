import Image from "next/image";
import type { Product } from "@/lib/data";

function discountPercent(price: number, mrp: number) {
  return Math.round(((mrp - price) / mrp) * 100);
}

export default function ProductCard({
  product,
  locked = false,
}: {
  product: Product;
  locked?: boolean;
}) {
  const off = discountPercent(product.price, product.mrp);

  return (
    <div className="group relative flex flex-col overflow-hidden bg-inkSoft outline outline-1 outline-inkLine transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            locked ? "blur-md scale-105" : ""
          }`}
        />
        <span className="stamp absolute left-3 top-3 border-gold text-gold">
          {off}% off
        </span>
        <span className="price-tag price-tag--dark absolute right-3 top-3 text-[0.6rem]">
          via {product.source}
        </span>

        {locked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/65 text-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              className="text-goldBright"
            >
              <rect
                x="5"
                y="11"
                width="14"
                height="9"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M8 11V7a4 4 0 0 1 8 0v4"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
            <p className="px-4 text-xs font-semibold uppercase tracking-wide text-white">
              Members-only pick
            </p>
          </div>
        )}
      </div>

      <div className="perforated flex flex-1 flex-col gap-2 p-4 pt-5">
        <h3 className="font-body text-sm font-semibold text-paper">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="font-accent text-xl italic text-gold">
            ₹{product.price}
          </span>
          <span className="text-xs text-paper/40 line-through">
            ₹{product.mrp}
          </span>
        </div>

        {locked ? (
          <a
            href="#subscribe"
            className="mt-2 text-center text-xs font-bold uppercase tracking-wide text-gold underline underline-offset-4 focus-ring"
          >
            Unlock to view link
          </a>
        ) : (
          <a
            href={product.href}
            className="mt-2 text-center text-xs font-bold uppercase tracking-wide text-paper/80 underline underline-offset-4 transition-colors hover:text-gold focus-ring"
          >
            Go to {product.source} →
          </a>
        )}
      </div>
    </div>
  );
}
