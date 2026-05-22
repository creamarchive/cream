import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <section className="px-6 py-14 md:py-20 max-w-3xl">
          <h1 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-10">
            Contact
          </h1>

          <div className="space-y-6 text-[13px] leading-relaxed text-foreground uppercase tracking-wide">
            <p>
              Contact us for any help, assistance or order needs! We will message you back within 24 hours.
            </p>

            <p>{"\n"}</p>

            <div className="space-y-2 pt-2">
              <p>
                General:{" "}
                <a
                  href="mailto:hello@creamarchive.com"
                  className="underline hover:opacity-70 transition-opacity"
                >
                  hello@creamarchive.com
                </a>
              </p>
              <p>
                Partnerships:{" "}
                <a
                  href="mailto:press@creamarchive.com"
                  className="underline hover:opacity-70 transition-opacity"
                >
                  press@creamarchive.com
                </a>
              </p>
              <p>
                HQ:{" "}
                <a
                  href="mailto:corporate@creamarchive.com"
                  className="underline hover:opacity-70 transition-opacity"
                >
                  corporate@creamarchive.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default Contact;
