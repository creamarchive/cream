import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SiteFooter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("klaviyo-subscribe", {
        body: { email },
      });
      if (error) throw error;
      toast({ title: "You're in!", description: "Check your inbox for your discount code." });
      setEmail("");
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      {/* Newsletter */}
      <div className="px-6 py-12 md:py-16 border-b border-border">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="font-script text-2xl md:text-3xl text-foreground mb-3">
            Join the Archive
          </h3>
          <p className="text-[12px] text-muted-foreground mb-6 tracking-wide">
            Be the first to shop exclusive drops, events, + editorial features &lt;3
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex border border-foreground">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 text-sm bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none" />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-foreground text-background text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-80 transition-opacity shrink-0 disabled:opacity-50">
              {loading ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="px-6 py-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <Link to="/new-arrivals" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Current Drop</Link>
        <Link to="/designers" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Designers</Link>
        <Link to="/about" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Our Story</Link>
        <Link to="/editorial" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">The Edit</Link>
        
        <Link to="/press" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Press</Link>
        <Link to="/shipping-returns" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Shipping &amp; Returns</Link>
        
        <Link to="/contact" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
        <Link to="/size-guide" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Size Guide</Link>
        <a href="#" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
        
        <a href="#" className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors">TikTok</a>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-5 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Cream Archive. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <Link to="/terms" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
