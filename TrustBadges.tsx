const badges = [
  {
    title: "AUTHENTICATED",
    description:
      "Each piece is verified by our in-house experts and third-party authentication team where necessary; Authenticity is always guaranteed at CREAM",
  },
  {
    title: "CAREFULLY SOURCED",
    description:
      "Curated from collections worldwide, we hand select each piece that moves through our archive and assist with sourcing items for special events (or just because!)",
  },
  {
    title: "SUSTAINABLE SLOW FASHION",
    description:
      "Helping our customers build timeless gorgeous closets by exclusively listing excellent to pristine pre-owned luxury garments, accessories and shoes",
  },
  {
    title: "GLOBAL SHIPPING",
    description:
      "While we currently offer shipping throughout the U.S. via our website, we'd love to work with international buyers - shoot us an email or message us on instagram to chat <3",
  },
];

const TrustBadges = () => {
  return (
    <section className="px-6 py-14 border-t border-border">
      <h2 className="font-script text-2xl md:text-3xl text-foreground mb-8">
        The Cream Standard
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {badges.map((badge) => (
          <div key={badge.title}>
            <h3 className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2">
              {badge.title}
            </h3>
            <p className="text-[12px] leading-relaxed text-muted-foreground">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;
