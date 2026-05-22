import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";
import pressHero from "@/assets/press-hero.jpg";

const pressItems = [
  {
    outlet: "Vogue",
    year: "2025",
    title: "The Rise of Curated Vintage: How Cream Archive is Redefining Luxury Resale",
    url: "#",
  },
  {
    outlet: "Harper's Bazaar",
    year: "2024",
    title: "Inside the Archive: A New Wave of Fashion Collectors",
    url: "#",
  },
  {
    outlet: "Elle",
    year: "2024",
    title: "10 Vintage Shops Every Fashion Lover Needs to Know",
    url: "#",
  },
  {
    outlet: "WWD",
    year: "2023",
    title: "Cream Archive Launches With a Focus on Rare Designer Pieces",
    url: "#",
  },
  {
    outlet: "Highsnobiety",
    year: "2023",
    title: "Why Archive Fashion Is the Future of Sustainable Luxury",
    url: "#",
  },
  {
    outlet: "Dazed",
    year: "2023",
    title: "The Vintage Dealers Making Fashion History Accessible",
    url: "#",
  },
];

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Title */}
        <section className="px-6 py-14 md:py-20">
          <h1 className="font-script text-3xl md:text-5xl text-foreground font-normal">
            Cream Features!
          </h1>
        </section>

        {/* Hero Image */}
        <section className="px-6 pb-10">
          <div className="aspect-[16/7] w-full overflow-hidden">
            <img
              src={pressHero}
              alt="Press hero"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Press List Table */}
        <section className="border-t border-border">
          {pressItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="grid grid-cols-[1fr_auto_2fr_auto] md:grid-cols-[200px_80px_1fr_100px] items-center gap-4 px-6 py-5 border-b border-border hover:bg-accent/50 transition-colors"
            >
              <span className="text-sm font-medium text-foreground truncate">
                {item.outlet}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {item.year}
              </span>
              <span className="text-sm text-muted-foreground truncate">
                {item.title}
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-foreground border border-foreground px-4 py-2 text-center hover:bg-foreground hover:text-background transition-colors">
                View
              </span>
            </a>
          ))}
        </section>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default Press;
