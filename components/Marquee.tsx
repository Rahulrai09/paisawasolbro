const ITEMS = [
  "#PAISAWASOOL",
  "FLIPKART",
  "MYNTRA",
  "MEESHO",
  "AMAZON",
  "NYKAA",
  "#BUDGETFASHION",
  "CHECKED BEFORE POSTED",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-inkLine bg-inkSoft py-3">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-4 font-body text-xs font-bold uppercase tracking-[0.15em] text-paper/50"
          >
            {item}
            <span className="text-gold">âœ¦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

