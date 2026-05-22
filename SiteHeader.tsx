import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import CartDrawer from "./CartDrawer";
import creamLogo from "@/assets/cream-logo.png";

const navLinks = [
  { label: "SHOP ALL", to: "/new-arrivals" },
  { label: "DESIGNERS", to: "/designers" },
  { label: "SOURCE", to: "/source" },
  { label: "LOOKBOOKS", to: "/editorial" },
  { label: "ABOUT", to: "/about" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blush/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground hover:opacity-60 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground hover:opacity-70 transition-opacity"
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Center logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={creamLogo} alt="Cream" className="h-24 md:h-28" />
        </a>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:opacity-70 transition-opacity" aria-label="Search">
            <Search size={18} />
          </button>
          <CartDrawer />
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border px-6 py-6 bg-background">
          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] uppercase tracking-[0.15em] font-medium text-foreground hover:opacity-60 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
