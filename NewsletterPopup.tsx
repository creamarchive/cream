import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("newsletter-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("newsletter-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("klaviyo-subscribe", {
        body: { email },
      });

      if (error) throw error;

      setSubmitted(true);
      setTimeout(handleClose, 2000);
    } catch (err) {
      console.error("Newsletter signup error:", err);
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
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent className="max-w-md p-8 text-center border-border bg-background">
        <VisuallyHidden>
          <DialogTitle>Newsletter Signup</DialogTitle>
        </VisuallyHidden>
        {submitted ? (
          <div className="py-6">
            <p className="text-sm uppercase tracking-[0.15em] font-medium text-foreground">
              Thank you for subscribing!
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Check your inbox for your discount code.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mt-2">
              <h2 className="text-lg uppercase tracking-[0.2em] font-medium text-foreground">
                CREAM BADDIES UNITE!
              </h2>
              <p className="text-xs leading-relaxed text-muted-foreground tracking-wide">
                Sign up for our newsletter and receive 10% off your first order — plus early access to new arrivals, exclusive drops, and archive updates
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center text-sm border-border bg-background"
              />
              <Button
                type="submit"
                disabled={loading}
                className="w-full uppercase tracking-[0.15em] text-xs"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
