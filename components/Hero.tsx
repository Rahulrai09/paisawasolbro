"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/hero/rahul-1.png", bg: "#D32F2F" },
  { src: "/hero/rahul-2.png", bg: "#1C1310" },
  { src: "/hero/rahul-3.png", bg: "#8B2E2E" },
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
      dir === "next" ? (prev + 1) % SLIDES.length : (prev + 2) % SLIDES.length
    );
    setTimeout(() => setIsAnimating(false), 650);
  }

  const center = activeIndex;
  const right = (activeIndex + 1) % SLIDES.length;
  const left = (activeIndex + 2) % SLIDES.length;

  const roleFor = (i: number) =>
    i === center ? "center" : i === right ? "right" : "left";

  const roleStyle = (role: string): React.CSSProperties => {
    switch (role) {
      case "center":
        return {
          left: "50%",
          transform: `translateX(-50%) scale(${isMobile ? 1.15 : 1.5}) `,
          filter: "blur(0px)",
          opacity: 1,
          zIndex: 20,
          height: isMobile ? "58%" : "92%",
          bottom: isMobile ? "18%" : 0,
        };
      case "left":
        return {
          left: isMobile ? "16%" : "26%",
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2px)",
          opacity: 0.8,
          zIndex: 10,
          height: isMobile ? "26%" : "42%",
          bottom: isMobile ? "20%" : "8%",
        };
      default:
        return {
          left: isMobile ? "84%" : "74%",
          transform: "translateX(-50%) scale(1)",
          filter: "blur(2px)",
          opacity: 0.8,
          zIndex: 10,
          height: isMobile ? "26%" : "42%",
          bottom: isMobile ? "20%" : "8%",
        };
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden transition-colors duration-[650ms]"
      style={{ backgroundColor: SLIDES[activeIndex].bg }}
    >
      <div className="relative mx-auto aspect-[1898/780] w-full max-w-[1898px]">
        <span className="eyebrow absolute left-4 top-5 z-[60] text-xs font-bold uppercase tracking-[0.18em] text-white/90 sm:left-8 sm:top-7">
          Paisawasolbro
        </span>

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

        <div className="absolute inset-0 z-[3]">
          {SLIDES.map((s, i) => {
            const role = roleFor(i);
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  aspectRatio: "0.6 / 1",
                  transition:
                    "transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1)",
                  willChange: "transform, filter, opacity",
                  ...roleStyle(role),
                }}
              >
                <img
                  src={s.src}
                  alt="Rahul wearing featured look"
                  className="h-full w-full object-contain"
                  style={{ objectPosition: "bottom center" }}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>

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
