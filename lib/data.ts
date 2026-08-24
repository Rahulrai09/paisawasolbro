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
  subcategories: string[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  source: Source;
  categorySlug: string;
  subcategory: string;
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
    subcategories: [
      "Shirts",
      "T-Shirts",
      "Henleys",
      "Hoodies",
      "Jeans",
      "Cargo Pants",
      "Joggers",
    ],
  },
  {
    slug: "footwear",
    name: "Footwear",
    tagline: "Soles worth the scroll",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      "Sneakers",
      "Casual Shoes",
      "Formal Shoes",
      "Sandals",
      "Sports Shoes",
      "Boots",
    ],
  },
  {
    slug: "fragrance",
    name: "Fragrance",
    tagline: "Smells expensive. Isn't.",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      "EDP / EDT",
      "Deodorants",
      "Attars",
      "Gift Sets",
      "Body Mists",
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "The finishing touch, minus the markup",
    image:
      "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?q=80&w=800&auto=format&fit=crop",
    subcategories: [
      "Wallets",
      "Belts",
      "Sunglasses",
      "Watches",
      "Caps",
      "Backpacks",
    ],
  },
];

export const products: Product[] = [
  // ---- Clothing ----
  {
    id: "p1",
    name: "Oversized Cotton Tee — Washed Black",
    price: 449,
    mrp: 999,
    source: "Myntra",
    categorySlug: "clothing",
    subcategory: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p5",
    name: "Relaxed Fit Cargo Pants",
    price: 899,
    mrp: 1799,
    source: "Amazon",
    categorySlug: "clothing",
    subcategory: "Cargo Pants",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
  {
    id: "p7",
    name: "Full Sleeve Checked Shirt",
    price: 599,
    mrp: 1299,
    source: "Flipkart",
    categorySlug: "clothing",
    subcategory: "Shirts",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p8",
    name: "Waffle Knit Henley",
    price: 549,
    mrp: 1099,
    source: "Myntra",
    categorySlug: "clothing",
    subcategory: "Henleys",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p9",
    name: "Fleece Pullover Hoodie",
    price: 799,
    mrp: 1699,
    source: "Meesho",
    categorySlug: "clothing",
    subcategory: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p10",
    name: "Slim Fit Stretch Jeans",
    price: 999,
    mrp: 2199,
    source: "Myntra",
    categorySlug: "clothing",
    subcategory: "Jeans",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
  {
    id: "p11",
    name: "Track Joggers — Charcoal",
    price: 649,
    mrp: 1399,
    source: "Amazon",
    categorySlug: "clothing",
    subcategory: "Joggers",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },

  // ---- Footwear ----
  {
    id: "p2",
    name: "Chunky Retro Sneakers",
    price: 1299,
    mrp: 2999,
    source: "Flipkart",
    categorySlug: "footwear",
    subcategory: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p12",
    name: "Everyday Canvas Casuals",
    price: 799,
    mrp: 1599,
    source: "Meesho",
    categorySlug: "footwear",
    subcategory: "Casual Shoes",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p13",
    name: "Formal Leather Loafers",
    price: 1499,
    mrp: 2799,
    source: "Myntra",
    categorySlug: "footwear",
    subcategory: "Formal Shoes",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
  {
    id: "p14",
    name: "Lightweight Running Shoes",
    price: 1099,
    mrp: 2299,
    source: "Amazon",
    categorySlug: "footwear",
    subcategory: "Sports Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },

  // ---- Fragrance ----
  {
    id: "p3",
    name: "Wood & Amber EDP, 100ml",
    price: 699,
    mrp: 1495,
    source: "Nykaa",
    categorySlug: "fragrance",
    subcategory: "EDP / EDT",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
  {
    id: "p15",
    name: "Citrus Fresh Deo, 150ml",
    price: 199,
    mrp: 399,
    source: "Flipkart",
    categorySlug: "fragrance",
    subcategory: "Deodorants",
    image:
      "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p16",
    name: "3-in-1 Fragrance Gift Set",
    price: 899,
    mrp: 1999,
    source: "Nykaa",
    categorySlug: "fragrance",
    subcategory: "Gift Sets",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },

  // ---- Accessories ----
  {
    id: "p4",
    name: "Minimal Leather Wallet",
    price: 349,
    mrp: 799,
    source: "Meesho",
    categorySlug: "accessories",
    subcategory: "Wallets",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p6",
    name: "Aviator Sunglasses — UV400",
    price: 299,
    mrp: 899,
    source: "Flipkart",
    categorySlug: "accessories",
    subcategory: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p17",
    name: "Reversible Formal Belt",
    price: 399,
    mrp: 899,
    source: "Amazon",
    categorySlug: "accessories",
    subcategory: "Belts",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=800&auto=format&fit=crop",
    href: "#",
  },
  {
    id: "p18",
    name: "Minimalist Analog Watch",
    price: 899,
    mrp: 2199,
    source: "Myntra",
    categorySlug: "accessories",
    subcategory: "Watches",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop",
    href: "#",
    exclusive: true,
  },
];

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.categorySlug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
