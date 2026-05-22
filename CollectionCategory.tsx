import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import { useCollection } from "@/hooks/use-shopify";
import { Skeleton } from "@/components/ui/skeleton";

const CollectionCategory = () => {
  const { category } = useParams<{ category: string }>();
  const { data: collection, isLoading } = useCollection(category);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <SiteHeader />
        <div className="px-6 py-10">
          <Skeleton className="h-4 w-1/4 mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="aspect-[3/4] w-full" />
                <Skeleton className="h-4 w-2/3 mt-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Collection not found</p>
      </div>
    );
  }

  const products = collection.products?.edges.map((e) => e.node) ?? [];

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <div className="px-6 py-4">
        <Link
          to="/collections"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-label text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} />
          All Collections
        </Link>
      </div>

      <section className="px-6 py-6 pb-16">
        <h1 className="text-sm uppercase tracking-label font-medium text-foreground mb-8">
          {collection.title}
        </h1>
        {products.length === 0 ? (
          <p className="text-sm text-muted-foreground">Coming soon</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
};

export default CollectionCategory;
