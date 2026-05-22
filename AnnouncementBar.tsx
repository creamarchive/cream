const messages = [
  "10% Off Your First Order",
  "Free Shipping Over $350",
];

const AnnouncementBar = () => {
  const marqueeContent = messages.map((m) => m).join("   •   ");

  return (
    <div className="bg-foreground text-background py-2.5 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[11px] uppercase tracking-[0.15em] font-medium mx-8"
          >
            {marqueeContent}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
