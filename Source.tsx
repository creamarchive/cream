import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const contactOptions = ["Email", "Phone", "Text"];
const conditionOptions = [
  "New / Like New",
  "Excellent",
  "Very Good",
  "Good",
  "Fair — as long as it's authentic",
];

const Source = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredContact: "",
    budget: "",
    condition: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-script text-4xl md:text-5xl text-foreground text-center mb-4">
          Let us source for you!
        </h1>
        <div className="w-full h-px bg-border mb-10" />

        {submitted ? (
          <div className="text-center py-16">
            <h2 className="font-script text-3xl text-foreground mb-4">
              Thank you!
            </h2>
            <p className="text-sm text-muted-foreground">
              We've received your sourcing request and will follow up shortly with options.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-10 text-center">
              <span className="font-semibold text-foreground">
                Looking for something special? Tell us what you're looking for — we'll source it and follow up with options for you!
              </span>{" "}
              (No obligation to buy. Authenticity-first sourcing.)
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="First + Last Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  Phone <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  Preferred Form of Contact <span className="text-destructive">*</span>
                </label>
                <select
                  name="preferredContact"
                  required
                  value={form.preferredContact}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                >
                  <option value="">Select...</option>
                  {contactOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Upload Photo */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-1 block">
                  Upload a photo of the item you're looking for{" "}
                  <span className="text-destructive">*</span>
                </label>
                <p className="text-[11px] text-muted-foreground mb-3">
                  (Screenshot is perfect — from IG, Google, another listing, etc.)
                </p>
                <label className="flex flex-col items-center justify-center border border-dashed border-border py-10 cursor-pointer hover:border-foreground transition-colors">
                  <span className="text-sm text-muted-foreground">
                    Click to choose a file or drag here
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1">
                    Accepts image files · Max 10 MB
                  </span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>

              {/* Budget */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  Budget <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  required
                  placeholder="e.g. $500 – $1,000"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>

              {/* Condition */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  What is the worst condition you would accept?{" "}
                  <span className="text-destructive">*</span>
                </label>
                <select
                  name="condition"
                  required
                  value={form.condition}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                >
                  <option value="">Select...</option>
                  {conditionOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Details */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.15em] font-semibold text-foreground mb-2 block">
                  Item Details <span className="text-destructive">*</span>
                </label>
                <p className="text-[11px] text-muted-foreground mb-3">
                  Include hardware, color, + any dealbreakers if you know them
                </p>
                <textarea
                  name="details"
                  required
                  rows={4}
                  value={form.details}
                  onChange={handleChange}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background py-3.5 text-[11px] uppercase tracking-[0.15em] font-semibold hover:opacity-80 transition-opacity"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </section>

      <SiteFooter />
    </div>
  );
};

export default Source;
