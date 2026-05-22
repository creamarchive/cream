import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

const ShippingReturns = () => {
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
            Shipping & Returns
          </h1>

          <div className="space-y-8 text-[13px] leading-relaxed text-foreground uppercase tracking-wide">
            <div>
              <h2 className="font-medium mb-3 text-[13px] uppercase tracking-[0.1em]">Shipping Policy</h2>
              <p>
                UPON COMPLETING YOUR ORDER, AN E-MAIL CONFIRMATION WILL BE SENT TO YOUR ADDRESS ON FILE. THIS E-MAIL WILL SERVE AS AN INVOICE AND INCLUDES YOUR ORDER NUMBER. A STANDARD PROCESSING TIME OF UP TO 3–5 BUSINESS DAYS IS REQUIRED BEFORE YOUR ORDER IS SHIPPED. ONCE YOUR ORDER HAS BEEN SHIPPED, YOU WILL RECEIVE AN E-MAIL WITH YOUR SHIPMENT'S TRACKING INFORMATION, ALLOWING YOU TO KEEP TABS ON THE PROGRESS OF YOUR DELIVERY.
              </p>
            </div>

            <p>
              Orders placed after 11:00 AM (Eastern Time) may be processed the next business day, and orders placed on weekends and holidays will be processed the following business day starting at 8:00 AM (Eastern Time). During peak periods such as holidays, processing times may exceed 5 business days.
            </p>


            <p>
              For more information or help please contact{" "}
              <a href="mailto:hello@creamarchive.com" className="underline hover:opacity-70 transition-opacity">
                hello@creamarchive.com
              </a>
            </p>

            <div className="pt-6 border-t border-border">
              <h2 className="font-medium mb-3 text-[13px] uppercase tracking-[0.1em]">Returns Policy</h2>
              <p>
                All sales are final. Due to the rare and vintage nature of our pieces, we do not accept returns or exchanges. Please review all item details, measurements, and photos carefully before purchasing.
              </p>
            </div>

            <p>
              If you receive a damaged or incorrect item, please contact us within 48 hours of delivery at{" "}
              <a href="mailto:hello@creamarchive.com" className="underline hover:opacity-70 transition-opacity">
                hello@creamarchive.com
              </a>{" "}
              with your order number and photos of the issue. We will work with you to resolve the matter promptly.
            </p>
          </div>
        </section>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default ShippingReturns;
