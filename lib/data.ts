// This file is the single source of truth for site content today.
// It's structured to mirror what a database query would return, so
// swapping in Postgres/Supabase later means changing the fetch layer,
// not the shape every component already expects.

export type Source = "Flipkart" | "Myntra" | "Meesho" | "Amazon" | "Nykaa";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  source: Source;
  categorySlug: string;
  image: string;
  exclusive?: boolean;
  href: string;
};

export const categories: Category[] = [
  {
    slug: "clothing",
    name: "Clothing",
    tagline: "Fits that don't fake the price tag",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "footwear",
    name: "Footwear",
    tagline: "Soles worth the scroll",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "fragrance",
    name: "Fragrance",
    tagline: "Smells expensive. Isn't.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "The finishing touch, minus the markup",
    image:
      "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?q=80&w=800&auto=format&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Oversized Cotton Tee — Washed Black",
    price: 449,
    mrp: 999,
    source: "Myntra",
    categorySlug: "clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p2",
    name: "Chunky Retro Sneakers",
    price: 1299,
    mrp: 2999,
    source: "Flipkart",
    categorySlug: "footwear",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p3",
    name: "Wood & Amber EDP, 100ml",
    price: 699,
    mrp: 1495,
    source: "Nykaa",
    categorySlug: "fragrance",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
  {
    id: "p4",
    name: "Minimal Leather Wallet",
    price: 349,
    mrp: 799,
    source: "Meesho",
    categorySlug: "accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p5",
    name: "Relaxed Fit Cargo Pants",
    price: 899,
    mrp: 1799,
    source: "Amazon",
    categorySlug: "clothing",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
  {
    id: "p6",
    name: "Aviator Sunglasses — UV400",
    price: 299,
    mrp: 899,
    source: "Flipkart",
    categorySlug: "accessories",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
];

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}
