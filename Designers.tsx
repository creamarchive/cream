import { useMemo } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

// Add or remove designers here manually
const DESIGNERS: string[] = [
  "Alaia",
  "Amy Shehab",
  "Balenciaga",
  "Blumarine",
  "Bottega Veneta",
  "Burberry",
  "Celine",
  "Chanel",
  "Chloe",
  "Christian Dior",
  "Chrome Hearts",
  "Dolce and Gabbana",
  "Emilio Pucci",
  "Farai London",
  "Fendi",
  "Giuseppe Zanotti",
  "Gucci",
  "Hanifa",
  "Helmut Lang",
  "Jacquemus",
  "Jean Paul Gaultier",
  "John Galliano",
  "La Perla",
  "Loewe",
  "Louis Vuitton",
  "Margiela",
  "Marni",
  "Missoni",
  "Miu Miu",
  "Moschino",
  "Prada",
  "Ralph Lauren",
  "Rick Owens",
  "Roberto Cavalli",
  "Thierry Mugler",
  "Tom Ford",
  "Tory Burch",
  "Valentino",
  "Versace",
  "Vintage",
  "Vivienne Westwood",
  "Yves Saint Laurent",
];

const Designers = () => {
  const grouped = useMemo(() => {
    const sorted = [...DESIGNERS].sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" })
    );
    const map: Record<string, string[]> = {};
    sorted.forEach((v) => {
      const letter = v[0].toUpperCase();
      (map[letter] ??= []).push(v);
    });
    return map;
  }, []);

  const letters = Object.keys(grouped).sort();

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <section className="px-6 py-12 md:py-16 max-w-2xl mx-auto">
          <h1 className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground mb-2 text-center">
            Designers
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-12">
            The houses & labels currently in our archive &lt;3
          </p>

          <ul className="grid grid-cols-3 gap-x-8 gap-y-2.5">
            {letters.flatMap((letter) =>
              grouped[letter].map((vendor) => (
                <li key={vendor} className="text-sm text-muted-foreground">
                  {vendor}
                </li>
              ))
            )}
          </ul>
        </section>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default Designers;
