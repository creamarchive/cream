import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="w-full">
      {/* Bold headline */}

      {/* Hero image */}
      <div className="px-6 pt-2 pb-4">
        <Link to="/new-arrivals" className="block relative overflow-hidden group">
          <div className="aspect-[16/7] w-full">
            <img
              src={heroBanner}
              alt="New Arrivals"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroBanner;
