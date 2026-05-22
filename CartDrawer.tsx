import { useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-foreground hover:opacity-70 transition-opacity relative"
        aria-label="Cart"
      >
        <ShoppingBag size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <h2 className="text-sm uppercase tracking-label font-medium">Your Cart</h2>
                <button onClick={() => setOpen(false)} className="text-foreground hover:opacity-70">
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center px-6">
                <div className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">Your cart is empty</p>
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="text-xs uppercase tracking-label underline text-foreground hover:opacity-70"
                  >
                    Continue shopping
                  </a>
                </div>
              </div>
              <div className="px-6 py-5 border-t border-border">
                <div className="flex justify-between mb-4">
                  <span className="text-sm uppercase tracking-label">Estimated total</span>
                  <span className="text-sm tabular-nums">$0.00 USD</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 text-xs uppercase tracking-label font-medium hover:opacity-90 transition-opacity">
                  Check out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
