import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <section className="px-6 py-14 md:py-20 max-w-4xl">
          <h1 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-12">
            Size Guide
          </h1>

          <p className="text-[13px] leading-relaxed text-muted-foreground uppercase tracking-wide mb-14">
            All measurements are in inches. For the best fit, measure yourself and compare to the charts below.
          </p>

          {/* Tops */}
          <div className="mb-14">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-6">
              Tops
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] uppercase tracking-wide text-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Size</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">US</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">EU</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">IT</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Bust</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Waist</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["XS", "0–2", "32–34", "36–38", "31–32", "23–24", "33–34"],
                    ["S", "4–6", "36–38", "40–42", "33–34", "25–26", "35–36"],
                    ["M", "8–10", "40–42", "44–46", "35–36", "27–28", "37–38"],
                    ["L", "12–14", "44–46", "48–50", "37–39", "29–31", "39–41"],
                    ["XL", "16", "48", "52", "40–42", "32–34", "42–44"],
                  ].map(([size, us, eu, it, bust, waist, hips]) => (
                    <tr key={size} className="border-b border-border/50">
                      <td className="py-3 pr-6 font-medium">{size}</td>
                      <td className="py-3 pr-6">{us}</td>
                      <td className="py-3 pr-6">{eu}</td>
                      <td className="py-3 pr-6">{it}</td>
                      <td className="py-3 pr-6">{bust}"</td>
                      <td className="py-3 pr-6">{waist}"</td>
                      <td className="py-3">{hips}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottoms */}
          <div className="mb-14">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-6">
              Bottoms
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] uppercase tracking-wide text-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Size</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">US</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">EU</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">IT</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Waist</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">Hips</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Inseam</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["XS", "0–2 / 24–25", "32–34", "36–38", "23–24", "33–34", "30"],
                    ["S", "4–6 / 26–27", "36–38", "40–42", "25–26", "35–36", "30"],
                    ["M", "8–10 / 28–29", "40–42", "44–46", "27–28", "37–38", "31"],
                    ["L", "12–14 / 30–31", "44–46", "48–50", "29–31", "39–41", "31"],
                    ["XL", "16 / 32–33", "48", "52", "32–34", "42–44", "32"],
                  ].map(([size, us, eu, it, waist, hips, inseam]) => (
                    <tr key={size} className="border-b border-border/50">
                      <td className="py-3 pr-6 font-medium">{size}</td>
                      <td className="py-3 pr-6">{us}</td>
                      <td className="py-3 pr-6">{eu}</td>
                      <td className="py-3 pr-6">{it}</td>
                      <td className="py-3 pr-6">{waist}"</td>
                      <td className="py-3 pr-6">{hips}"</td>
                      <td className="py-3">{inseam}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Shoes */}
          <div className="mb-14">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-6">
              Shoes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] uppercase tracking-wide text-foreground border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">US</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">EU</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">IT</th>
                    <th className="text-left py-3 pr-6 font-medium text-muted-foreground">UK</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Foot Length</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["5", "35", "35", "2.5", "8.5"],
                    ["5.5", "35.5", "35.5", "3", "8.75"],
                    ["6", "36", "36", "3.5", "9"],
                    ["6.5", "37", "37", "4", "9.25"],
                    ["7", "37.5", "37.5", "4.5", "9.375"],
                    ["7.5", "38", "38", "5", "9.5"],
                    ["8", "38.5", "38.5", "5.5", "9.75"],
                    ["8.5", "39", "39", "6", "9.875"],
                    ["9", "40", "40", "6.5", "10"],
                    ["9.5", "40.5", "40.5", "7", "10.25"],
                    ["10", "41", "41", "7.5", "10.375"],
                    ["11", "42", "42", "8.5", "10.75"],
                  ].map(([us, eu, it, uk, length]) => (
                    <tr key={us} className="border-b border-border/50">
                      <td className="py-3 pr-6 font-medium">{us}</td>
                      <td className="py-3 pr-6">{eu}</td>
                      <td className="py-3 pr-6">{it}</td>
                      <td className="py-3 pr-6">{uk}</td>
                      <td className="py-3">{length}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default SizeGuide;
