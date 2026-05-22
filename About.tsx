import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        
        {/* Hero */}
        <section className="px-6 py-16 md:py-24 max-w-2xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Our Story
          </p>
          <h1 className="text-2xl md:text-3xl font-light leading-snug text-foreground mb-8">
            4 the pieces you want to wear over and over {"<3"}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            CREAM is a meticulously curated archive of gorgeous luxury pieces across eras. We source rare, high-quality garments, shoes and accessories and honor our bodies and the planet in the process, building and purchasing from one sustainable wardrobe at a time. Every piece in our archive has a life before you, and a life ahead. Past, present, future - always CREAM.
          </p>
        </section>

        {/* Values Grid */}
        <section className="px-6 py-14 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground mb-4">
                Curation
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-left">
                Every piece in our collection is hand-selected by our team of fashion and art connoisseurs. We source from trusted sellers across platforms worldwide, never compromising on quality and condition.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground mb-4 text-center">
                Authentication
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-center">
                Authenticity is non-negotiable. Our in-house specialists examine every
                stitch, label, and hardware detail. If needed, we work with third-party authenticators to ensure authentication. Each piece ships with a certificate
                of authenticity and our unconditional guarantee.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground mb-4 text-right">
                Sustainability
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-right">
                The most sustainable garment is the one that already exists. By giving
                luxury vintage and archival fashion new life, we offer an alternative to fast fashion —
                without sacrificing the joy of owning luxurious designer items.
              </p>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="px-6 py-16 md:py-20 border-t border-border">
          <blockquote className="max-w-xl mx-auto text-center">
            <p className="text-lg md:text-xl font-light italic text-foreground leading-relaxed mb-6">"I like my $$$ right where I can see it! Hanging in my closet"

            </p>
            <cite className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground not-italic">— CARRIE BRADSHAW

            </cite>
          </blockquote>
        </section>

        {/* Process */}
        <section className="px-6 py-14 border-t border-border">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground mb-10 text-center">
              Our Process
            </h2>
            <div className="space-y-8">
              {[
              {
                step: "01",
                title: "Source",
                text: "We build relationships with collectors and private sellers across the globe to find the most exceptional vintage designer pieces"
              },
              {
                step: "02",
                title: "Authenticate",
                text: "Every piece undergoes rigorous multi-point authentication by our specialists, examining materials, construction, labels, and provenance"
              },
              {
                step: "03",
                title: "Restore",
                text: "When needed, pieces are professionally cleaned and carefully restored to preserve their original character, ensuring they're ready to wear"
              },
              {
                step: "04",
                title: "Present",
                text: "Each item is photographed, documented with detailed condition notes, and presented with the care and context it deserves"
              }].

              map((item) =>
              <div key={item.step} className="flex gap-6">
                  <span className="text-xs tabular-nums text-muted-foreground mt-0.5 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </motion.div>

      <SiteFooter />
    </div>);

};

export default About;