import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paisawasolbro — Fashion That Doesn't Cost Extra",
  description:
    "Hand-picked fashion, fragrance, and accessory finds from Flipkart, Myntra, Meesho, Amazon and Nykaa — curated so you don't have to scroll for hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink text-paper font-body antialiased">
        {children}
      </body>
    </html>
  );
}
