import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import creamLogo from "@/assets/cream-logo.png";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("klaviyo-subscribe", {
        body: { email },
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      {/* Logo */}
      <img src={creamLogo} alt="Cream" className="h-40 md:h-52 mb-6" />

      {/* Tagline */}
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
        THE ARCHIVE IS OPENING!
      </p>
      <h1 className="font-display text-3xl md:text-5xl uppercase tracking-[0.15em] text-foreground mb-4">
        APRIL 2026
      </h1>
      <p className="text-[12px] md:text-sm leading-relaxed text-muted-foreground max-w-md mb-10 tracking-wide">
        A meticulously curated archive of luxury pieces across eras — sign up to be the first to shop Drop 1 + receive 10% off your first order {"<3"}
      </p>

      {/* Newsletter signup */}
      {submitted ? (
        <div className="py-4">
          <p className="text-sm uppercase tracking-[0.15em] font-medium text-foreground">
            You're on the list
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            We'll be in touch soon &lt;3
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md border border-foreground"
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 text-sm bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-foreground text-background text-[11px] uppercase tracking-[0.15em] font-medium hover:opacity-80 transition-opacity shrink-0 disabled:opacity-50"
          >
            {loading ? "..." : "Notify Me"}
          </button>
        </form>
      )}

      {/* Social */}
      <div className="mt-12 flex items-center gap-6">
        <a
          href="#"
          className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
        >
          TikTok
        </a>
      </div>

      <p className="mt-10 text-[10px] text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Cream Archive
      </p>
    </div>
  );
};

export default ComingSoon;
