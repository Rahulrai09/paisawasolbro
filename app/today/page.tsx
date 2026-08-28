import TodaysPicks from "@/components/TodaysPicks";

export const metadata = {
  title: "Today's Picks — Paisawasolbro",
  description:
    "Fresh budget fashion finds from Myntra, Flipkart, Amazon, Meesho and Nykaa — updated daily.",
};

export default function TodayPage() {
  return (
    <main>
      <section className="relative w-full overflow-hidden bg-[#1C1310]">
        <div className="relative mx-auto flex aspect-[386/215] w-full max-w-[1898px] items-center justify-center md:aspect-[1898/780]">
          <span
            className="font-display uppercase leading-none text-white/40"
            style={{
              fontSize: "clamp(28px, 6vw, 80px)",
              letterSpacing: "-0.02em",
            }}
          >
            Coming Soon
          </span>
        </div>
      </section>

      <TodaysPicks />
    </main>
  );
}
