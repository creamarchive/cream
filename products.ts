import gucciLoafers from "@/assets/products/gucci-loafers.jpg";
import vintageTee from "@/assets/products/vintage-tee.jpg";
import balenciagaTee from "@/assets/products/balenciaga-tee.jpg";
import paintShorts from "@/assets/products/paint-shorts.jpg";
import distressedJeans from "@/assets/products/distressed-jeans.jpg";
import pradaBag from "@/assets/products/prada-bag.jpg";
import margielaBlazer from "@/assets/products/margiela-blazer.jpg";
import chromeRing from "@/assets/products/chrome-ring.jpg";

export type ProductCategory = "clothing" | "bags" | "shoes" | "jewelry";

export interface Product {
  id: string;
  vendor: string;
  title: string;
  size: string;
  price: number;
  image: string;
  soldOut: boolean;
  category: ProductCategory;
  description?: string;
  details?: string[];
  era?: string;
  condition?: string;
}

export const products: Product[] = [
  {
    id: "1",
    vendor: "GUCCI",
    title: '"100" Fur Loafers',
    size: "10 (US)",
    price: 200,
    image: gucciLoafers,
    soldOut: true,
    category: "shoes",
    description: "Iconic Gucci fur-lined leather loafers from the Alessandro Michele era. Features signature horsebit detail with kangaroo fur lining.",
    details: ["Leather upper", "Kangaroo fur lining", "Horsebit hardware", "Leather sole"],
    era: "Fall/Winter 2015",
    condition: "Excellent — minimal sole wear",
  },
  {
    id: "2",
    vendor: "VINTAGE",
    title: '"2000" World Series T-Shirt',
    size: "L",
    price: 50,
    image: vintageTee,
    soldOut: true,
    category: "clothing",
    description: "Rare vintage World Series commemorative tee from the 2000 subway series. A collector's piece in perfect faded condition.",
    details: ["100% cotton", "Screen-printed graphic", "Relaxed fit"],
    era: "2000",
    condition: "Good — vintage fade, no holes",
  },
  {
    id: "3",
    vendor: "BALENCIAGA",
    title: '"40 Rue De Sevres" T-Shirt',
    size: "XL",
    price: 200,
    image: balenciagaTee,
    soldOut: true,
    category: "clothing",
    description: "Demna Gvasalia-era Balenciaga oversized tee featuring the 40 Rue de Sèvres atelier address. A modern archive staple.",
    details: ["100% cotton", "Oversized fit", "Made in Portugal"],
    era: "Spring/Summer 2019",
    condition: "Excellent — like new",
  },
  {
    id: "4",
    vendor: "MARGIELA",
    title: "Paint Splatter Shorts",
    size: "M",
    price: 350,
    image: paintShorts,
    soldOut: false,
    category: "clothing",
    description: "Maison Margiela artisanal paint splatter shorts. Each pair is unique with hand-applied paint detail — wearable art.",
    details: ["Cotton-linen blend", "Hand-painted detail", "Relaxed fit", "Side pockets"],
    era: "Spring/Summer 2020",
    condition: "Excellent",
  },
  {
    id: "5",
    vendor: "VINTAGE",
    title: "Distressed 501 Jeans",
    size: "32",
    price: 180,
    image: distressedJeans,
    soldOut: false,
    category: "clothing",
    description: "Authentically distressed Levi's 501 jeans with natural patina. The perfect vintage denim — broken in, not broken down.",
    details: ["100% cotton denim", "Button fly", "Straight leg", "Natural distressing"],
    era: "1990s",
    condition: "Good — intentional distressing",
  },
  {
    id: "6",
    vendor: "PRADA",
    title: "Nylon Crossbody Bag",
    size: "OS",
    price: 450,
    image: pradaBag,
    soldOut: false,
    category: "bags",
    description: "The iconic Prada nylon crossbody in nero. Lightweight, durable, and endlessly chic — the bag that defined minimalist luxury.",
    details: ["Nylon exterior", "Leather trim", "Silver hardware", "Adjustable strap", "Interior zip pocket"],
    era: "Early 2000s",
    condition: "Very good — minor hardware patina",
  },
  {
    id: "7",
    vendor: "MARGIELA",
    title: "Deconstructed Blazer",
    size: "48",
    price: 680,
    image: margielaBlazer,
    soldOut: false,
    category: "clothing",
    description: "Martin Margiela's deconstructed blazer — raw edges, exposed lining, and asymmetric construction. A study in anti-fashion.",
    details: ["Wool blend", "Exposed seams", "Single button closure", "Artisanal line"],
    era: "Fall/Winter 2018",
    condition: "Excellent",
  },
  {
    id: "8",
    vendor: "CHROME HEARTS",
    title: "Heart Cross Ring",
    size: "9",
    price: 1200,
    image: chromeRing,
    soldOut: false,
    category: "jewelry",
    description: "Sterling silver Chrome Hearts cross ring. Hand-crafted in Los Angeles with the brand's signature gothic detailing.",
    details: ["925 sterling silver", "Handcrafted", "Made in USA", "Engraved interior"],
    era: "2010s",
    condition: "Very good — natural patina",
  },
];
