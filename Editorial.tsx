import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const stories = [
  {
    id: "archive-essentials",
    title: "The Archive Essentials",
    subtitle: "Five pieces every collector needs",
    description:
      "From the perfect vintage Levi's to a Prada nylon — these are the foundational pieces that anchor any archival wardrobe. Timeless, versatile, and eternally chic.",
    productIds: ["5", "6", "7"],
  },
  {
    id: "the-art-of-margiela",
    title: "The Art of Margiela",
    subtitle: "Deconstructing fashion's most cerebral house",
    description:
      "Martin Margiela didn't design clothes — he posed questions about them. From paint-splattered shorts to deconstructed blazers, these pieces are wearable manifestos.",
    productIds: ["4", "7"],
  },
  {
    id: "forever-pieces",
    title: "Forever Pieces",
    subtitle: "Investment dressing, redefined",
    description:
      "Forget trend cycles. These are the pieces that appreciate in value and in compliments. Curated for women who understand that true luxury is never disposable.",
    productIds: ["1", "8", "6"],
  },
];

const Editorial = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Intro */}
        <section className="px-6 py-16 md:py-20 max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            The Edit
          </p>
          <h1 className="text-2xl md:text-3xl font-light leading-snug text-foreground mb-6">
            LOOKBOOK
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Fashion editorials, styling guides, and the stories behind our most
            extraordinary pieces. For women who don't follow trends — they set them.
          </p>
        </section>

        {/* Stories */}
        {stories.map((story, i) => {
          const storyProducts = story.productIds
            .map((pid) => products.find((p) => p.id === pid))
            .filter(Boolean);

          return (
            <section
              key={story.id}
              className="border-t border-border px-6 py-14 md:py-20"
            >
              <div
                className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {story.subtitle}
                  </p>
                  <h2 className="text-xl md:text-2xl font-light text-foreground mb-5">
                    {story.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                    {story.description}
                  </p>
                  <Link
                    to="/new-arrivals"
                    className="text-xs uppercase tracking-label underline text-foreground hover:opacity-70 transition-opacity"
                  >
                    Shop the edit
                  </Link>
                </div>

                {/* Products */}
                <div
                  className={`grid grid-cols-2 gap-3 ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  {storyProducts.slice(0, 2).map((product) => (
                    <Link
                      key={product!.id}
                      to={`/product/${product!.id}`}
                      className="group"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-accent">
                        <img
                          src={product!.image}
                          alt={product!.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground mt-2">
                        {product!.vendor}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default Editorial;
