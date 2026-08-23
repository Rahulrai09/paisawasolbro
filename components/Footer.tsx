export default function Footer() {
  return (
    <footer className="border-t border-paper/10 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-paper/50 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Paisawasolbro. Product links go to
          Flipkart, Myntra, Meesho, Amazon and Nykaa — we may earn a
          commission on purchases at no extra cost to you.
        </p>
        <div className="flex gap-5 font-semibold uppercase tracking-wide">
          <a href="#" className="hover:text-gold focus-ring">
            Instagram
          </a>
          <a href="#" className="hover:text-gold focus-ring">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
