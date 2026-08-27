import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({
  product,
  locked = false,
}: {
  product: Product;
  locked?: boolean;
}) {
  return (
    <div className="group flex flex-col rounded-2xl border border-inkLine bg-ink p-2.5 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-inkSoft">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
            locked ? "blur-md scale-105" : ""
          }`}
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
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

      <div className="flex flex-1 flex-col gap-3 px-2 pb-1 pt-4">
        <div>
          <h3 className="font-roman text-base font-bold text-paper">
            {product.name}
          </h3>
          <p className="mt-0.5 text-xs text-paper/50">{product.subcategory}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-1.5 pt-1 md:gap-2">
          <div className="flex shrink-0 items-baseline gap-1 rounded-full bg-inkSoft px-2 py-1 md:gap-1.5 md:px-3 md:py-1.5">
            <span className="font-roman text-xs font-bold text-paper md:text-base">
              ₹{product.price}
            </span>
            <span className="font-roman text-[0.6rem] text-paper/40 line-through md:text-[0.7rem]">
              ₹{product.mrp}
            </span>
          </div>

          {locked ? (
            <a
              href="#subscribe"
              className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-gold px-2.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-wide text-white transition-colors hover:bg-goldBright focus-ring md:gap-1.5 md:px-4 md:py-2 md:text-xs"
            >
              Unlock
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-2.5 w-2.5 shrink-0 md:h-3 md:w-3"
              >
                <rect
                  x="5"
                  y="11"
                  width="14"
                  height="9"
                  rx="1.5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
                <path
                  d="M8 11V7a4 4 0 0 1 8 0v4"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
              </svg>
            </a>
          ) : (
            <a
              href={product.href}
              className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-paper px-2.5 py-1.5 text-[0.6rem] font-bold uppercase tracking-wide text-white transition-colors hover:bg-gold focus-ring md:gap-1.5 md:px-4 md:py-2 md:text-xs"
            >
              Go
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-2.5 w-2.5 shrink-0 md:h-3 md:w-3"
              >
                <path
                  d="M7 17L17 7M17 7H9M17 7v8"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
