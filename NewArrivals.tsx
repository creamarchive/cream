import { useState, useMemo } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-shopify";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ShopifyProduct } from "@/lib/shopify";

type SortOption = "featured" | "price-asc" | "price-desc" | "alpha-asc" | "alpha-desc" | "newest";

function sortProducts(products: ShopifyProduct[], sort: SortOption): ShopifyProduct[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount));
    case "price-desc":
      return sorted.sort((a, b) => parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount));
    case "alpha-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "alpha-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sorted;
  }
}

const NewArrivals = () => {
  const [sort, setSort] = useState<SortOption>("featured");
  const { data: products, isLoading } = useProducts(100);

  const sortedProducts = useMemo(
    () => sortProducts(products ?? [], sort),
    [products, sort]
  );

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      <section className="px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-script md:text-4xl text-foreground text-xl">
            New Arrivals
          </h2>
          <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
            <SelectTrigger className="w-[180px] text-xs uppercase tracking-[0.1em] border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="alpha-asc">A – Z</SelectItem>
              <SelectItem value="alpha-desc">Z – A</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-[3/4] w-full" />
                <Skeleton className="h-4 w-2/3 mt-3" />
                <Skeleton className="h-4 w-1/2 mt-1" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
};

export default NewArrivals;
