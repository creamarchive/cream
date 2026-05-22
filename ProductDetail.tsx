import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useProduct } from "@/hooks/use-shopify";
import { getProductImage, getProductPrice } from "@/lib/shopify";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id: handle } = useParams();
  const { data: product, isLoading } = useProduct(handle);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <SiteHeader />
        <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="aspect-[3/4] w-full" />
          <div className="space-y-4 py-4">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-5 w-1/4" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const images = product.images.edges.map((e) => e.node.url).filter(Boolean);
  const price = getProductPrice(product);
  const soldOut = !product.availableForSale;
  const variants = product.variants?.edges ?? [];
  const options = variants[0]?.node.selectedOptions ?? [];
  const hasMultiple = images.length > 1;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <div className="px-6 py-4">
        <Link
          to="/new-arrivals"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-label text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          Back to shop
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="px-6 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="aspect-[3/4] overflow-hidden bg-white relative group">
            {images.length > 0 && (
              <img
                src={images[currentIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            )}
            {hasMultiple && (
              <>
                <button
                  onClick={() => setCurrentIndex((i) => (i - 1 + images.length) % images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentIndex ? "bg-foreground/80" : "bg-foreground/25"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col justify-center py-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              {product.vendor}
            </p>
            <h1 className="text-xl font-medium text-foreground mb-1">
              {product.title}
            </h1>
            <p className="text-lg tabular-nums text-foreground mb-6">
              ${price}
            </p>

            {product.description && (
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                {product.description}
              </p>
            )}

            {options.length > 0 && (
              <div className="space-y-3 mb-8">
                {options.map((opt) => (
                  <div key={opt.name} className="flex justify-between text-sm border-b border-border pb-3">
                    <span className="text-muted-foreground">{opt.name}</span>
                    <span className="text-foreground">{opt.value}</span>
                  </div>
                ))}
              </div>
            )}

            {soldOut ? (
              <button
                disabled
                className="w-full bg-muted text-muted-foreground py-3.5 text-xs uppercase tracking-label font-medium cursor-not-allowed"
              >
                Sold Out
              </button>
            ) : (
              <button className="w-full bg-primary text-primary-foreground py-3.5 text-xs uppercase tracking-label font-medium hover:opacity-90 transition-opacity">
                Add to Cart
              </button>
            )}

            <p className="text-[11px] text-muted-foreground text-center mt-4">
              Authenticated & verified · Free shipping on orders over $350
            </p>
          </div>
        </div>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default ProductDetail;
