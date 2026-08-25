"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900&auto=format&fit=crop",
    bg: "#D32F2F",
  },
  {
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
    bg: "#1C1310",
  },
  {
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=900&auto=format&fit=crop",
    bg: "#8B2E2E",
  },
  {
    src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=900&auto=format&fit=crop",
    bg: "#3D3130",
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new window.Image();
      img.src = s.src;
    });
  }, []);

  function navigate(dir: "next" | "prev") {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      dir === "next" ? (prev + 1) % SLIDES.length : (prev + 3) % SLIDES.length
    );
    setTimeout(() => setIsAnimating(false), 650);
  }

  const center = activeIndex;
  const left = (activeIndex + 3) % SLIDES.length;
  const right = (activeIndex + 1) % SLIDES.length;
  const back = (activeIndex + 2) % SLIDES.length;

  const roleFor = (i: number) =>
    i === center ? "center" : i === left ? "left" : i === right ? "right" : "back";

  const roleStyle = (role: string): React.CSSProperties => {
    switch (role) {
      case "center":
        return {
          left: "50%",
          transform: `translateX(-50%) scale(${isMobile ? 1.1 : 1.25})`,
          filter: "blur(0px)",
          opacity: 1,
          zIndex: 20,
          height: isMobile ? "62%" : "88%",
          bottom: isMobile ? "10%" : 0,
        };
      case "left":
        return {
          left: isMobile ? "18%" : "27%",
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2px)",
          opacity: 0.85,
          zIndex: 10,
          height: isMobile ? "34%" : "58%",
          bottom: isMobile ? "12%" : "6%",
        };
      case "right":
        return {
          left: isMobile ? "82%" : "73%",
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2px)",
          opacity: 0.85,
          zIndex: 10,
          height: isMobile ? "34%" : "58%",
          bottom: isMobile ? "12%" : "6%",
        };
      default:
        return {
          left: "50%",
          transform: "translateX(-50%) scale(1)",
          filter: "blur(4px)",
          opacity: 0.5,
          zIndex: 5,
          height: isMobile ? "28%" : "48%",
          bottom: isMobile ? "12%" : "6%",
        };
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden transition-colors duration-[650ms]"
      style={{ backgroundColor: SLIDES[activeIndex].bg }}
    >
      <div className="relative mx-auto aspect-[1898/780] w-full max-w-[1898px]">
        {/* Top-left brand label */}
        <span className="eyebrow absolute left-4 top-5 z-[60] text-xs font-bold uppercase tracking-[0.18em] text-white/90 sm:left-8 sm:top-7">
          Paisawasolbro
        </span>

        {/* Giant ghost text */}
        <div className="pointer-events-none absolute inset-x-0 top-[16%] z-[2] flex select-none items-center justify-center">
          <span
            className="font-display uppercase leading-none text-white"
            style={{
              fontSize: "clamp(60px, 16vw, 220px)",
              letterSpacing: "-0.02em",
            }}
          >
            PAISA WASOL
          </span>
        </div>

        {/* Carousel */}
        <div className="absolute inset-0 z-[3]">
          {SLIDES.map((s, i) => {
            const role = roleFor(i);
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  aspectRatio: "0.72 / 1",
                  transition:
                    "transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1)",
                  willChange: "transform, filter, opacity",
                  ...roleStyle(role),
                }}
              >
                <img
                  src={s.src}
                  alt="Fashion look"
                  className="h-full w-full rounded-lg object-cover shadow-2xl grayscale"
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-left text + nav */}
        <div
          className="absolute bottom-5 left-4 z-[60] sm:bottom-10 sm:left-8"
          style={{ maxWidth: 320 }}
        >
          <p className="eyebrow mb-2 text-base font-bold uppercase tracking-wide text-white/95 sm:mb-3 sm:text-xl">
            Today&apos;s picks
          </p>
          <p className="mb-4 hidden text-xs text-white/85 sm:mb-5 sm:block sm:text-sm">
            Trendy, quality fashion under budget shouldn&apos;t take all day
            to find. We hunt through Flipkart, Myntra, Meesho, Amazon and
            Nykaa so you don&apos;t have to — just pick what you like.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate("prev")}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white transition-transform hover:scale-105 hover:bg-white/10 focus-ring sm:h-14 sm:w-14"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => navigate("next")}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white transition-transform hover:scale-105 hover:bg-white/10 focus-ring sm:h-14 sm:w-14"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Bottom-right link */}
        <a
          href="#today"
          className="font-display absolute bottom-5 right-4 z-[60] flex items-center gap-2 uppercase leading-none text-white/90 transition-colors hover:text-white sm:bottom-10 sm:right-8"
          style={{ fontSize: "clamp(16px, 3vw, 40px)", letterSpacing: "-0.02em" }}
        >
          See today&apos;s picks
          <ArrowIcon direction="right" />
        </a>
      </div>
    </section>
  );
}
