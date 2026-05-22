import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Section 1 — Online Store Terms",
    body: "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). A breach or violation of any of the Terms will result in an immediate termination of your Services.",
  },
  {
    title: "Section 2 — General Conditions",
    body: "We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information) may be transferred unencrypted and involve (a) transmissions over various networks and (b) changes to conform and adapt to the technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided without express written permission by us.",
  },
  {
    title: "Section 3 — Modifications to the Service and Prices",
    body: "Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third party for any modification, price change, suspension or discontinuance of the Service.",
  },
  {
    title: "Section 4 — Products or Services",
    body: "Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colours and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any colour will be accurate. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations or that any errors in the Service will be corrected.",
  },
  {
    title: "Section 5 — Accuracy of Billing and Account Information",
    body: "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. You agree to provide current, complete and accurate purchase and account information for all purchases made at our store.",
  },
  {
    title: "Section 6 — Prohibited Uses",
    body: "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code; (h) to collect or track the personal information of others; (i) to spam, phish, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service.",
  },
  {
    title: "Section 7 — Indemnification",
    body: "You agree to indemnify, defend and hold harmless Cream Archive and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms of Service or your violation of any law or the rights of a third party.",
  },
  {
    title: "Section 8 — Severability",
    body: "If any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service.",
  },
  {
    title: "Section 9 — Termination",
    body: "The obligations and liabilities of the parties incurred before the termination date shall survive the termination of this agreement for all purposes. These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our services or when you cease using our site.",
  },
  {
    title: "Section 10 — Entire Agreement",
    body: "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitute the entire agreement and understanding between you and us and govern your use of the Service.",
  },
  {
    title: "Section 11 — Changes to Terms of Service",
    body: "You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.",
  },
  {
    title: "Section 12 — Contact Information",
    body: "Questions about the Terms of Service should be sent to us at hello@creamarchive.com.",
  },
];

const Terms = () => {
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
            Terms of Service
          </h1>

          <div className="space-y-4 text-[13px] leading-relaxed text-foreground mb-12">
            <p>
              This website is operated by Cream Archive. The terms "we," "us" and "our" refer to Cream Archive. Cream Archive offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
            </p>
            <p>
              We are not affiliated with any of the brands represented on this website in any way or form.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-border">
            <h2 className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground mb-4">
              Purchasing Conditions
            </h2>
            <div className="space-y-4 text-[13px] leading-relaxed text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Availability:</span> All orders are subject to availability and in this regard, in the event of supply difficulties or because products are no longer in stock, we reserve the right to refund any monies that you might have paid.
              </p>
              <p>
                <span className="text-foreground font-medium">Payment:</span> The price of products shall be the one quoted on our Website except where there is an error. If we discover an error in the price of any product(s) you have ordered, we may cancel the order and you will receive a full refund. The total cost of an order is the price of the product(s) ordered plus the delivery charge and sales taxes (if applicable). Prices are subject to change at any time. All prices are in the currency indicated at checkout.
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      <SiteFooter />
    </div>
  );
};

export default Terms;
