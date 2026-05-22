import { useState } from "react";
import { Link } from "react-router-dom";
import type { ShopifyProduct } from "@/lib/shopify";
import { getProductPrice } from "@/lib/shopify";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const price = getProductPrice(product);
  const soldOut = !product.availableForSale;
  const images = product.images.edges.map((e) => e.node.url).filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <Link to={`/product/${product.handle}`} className="group cursor-pointer relative block">
      <div className="aspect-[3/4] overflow-hidden bg-white relative">
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-foreground/80" : "bg-foreground/25"
                  }`}
                />
              ))}
            </div>
          </>
        )}
        {soldOut && (
          <span className="absolute bottom-3 left-3 bg-foreground text-background text-[10px] uppercase tracking-[0.1em] px-3 py-1 font-medium">
            Sold out
          </span>
        )}
      </div>
      <div className="mt-3 space-y-0.5">
        <p className="text-[11px] uppercase tracking-[0.04em] text-foreground leading-snug">
          {product.title}
        </p>
        <p className="text-sm tabular-nums mt-1 text-foreground">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
