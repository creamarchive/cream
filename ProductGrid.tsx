import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProducts } from "@/hooks/use-shopify";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductGridProps {
  limit?: number;
}

const ProductGrid = ({ limit }: ProductGridProps) => {
  const { data: products, isLoading } = useProducts(limit ?? 20);

  return (
    <section className="px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-script md:text-4xl text-foreground text-xl">
          Current Drop
        </h2>
        <Link
          to="/new-arrivals"
          className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground hover:opacity-60 transition-opacity">
          VIEW ALL →

        </Link>
      </div>

      {isLoading ?
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {Array.from({ length: limit ?? 6 }).map((_, i) =>
        <div key={i}>
              <Skeleton className="aspect-[3/4] w-full" />
              <Skeleton className="h-4 w-2/3 mt-3" />
              <Skeleton className="h-4 w-1/2 mt-1" />
            </div>
        )}
        </div> :

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
          {(products ?? []).map((product) =>
        <ProductCard key={product.id} product={product} />
        )}
        </div>
      }
    </section>);

};

export default ProductGrid;