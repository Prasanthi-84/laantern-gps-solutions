import { useState, useEffect } from "react";
import { Check, Send, MessageCircle } from "lucide-react";

const tiers = [
  {
    title: "GPS Trackers",
    items: [
      { name: "G17H Wired GPS", price: "₹3,600" },
      { name: "G17H Wireless GPS", price: "₹5,000" },
      { name: "G17S Wired (Voice+Track)", price: "₹5,000" },
      { name: "G17S Wireless (Voice+Track)", price: "₹6,000" },
      { name: "Wireless GPS G60 Magnet", price: "₹5,000" },
      { name: "VLTD AIS140 Taxi Board", price: "₹11,999" },
    ],
  },
  {
    title: "Dash Cameras",
    items: [
      { name: "Memory Card Based", price: "₹7,500" },
      { name: "Bluetooth Version", price: "₹7,500" },
      { name: "Live SIM Based", price: "₹16,000" },
    ],
  },
  {
    title: "CC Cameras",
    items: [
      { name: "IP Cameras", price: "Contact Us" },
      { name: "WiFi Smart Cameras", price: "Contact Us" },
      { name: "ColourVu Cameras", price: "Contact Us" },
    ],
  },
  {
    title: "Biometrics",
    items: [
      { name: "Aadhar Base Biometric", price: "₹32,000" },
      { name: "ESSL Face & Fingerprint", price: "Contact Us" },
      { name: "Cloud Based Biometric", price: "Contact Us" },
    ],
  },
  {
    title: "Certification",
    items: [
      { name: "VLTD AIS140 Taxi RTO Cert + GPS", price: "₹11,600" },
      { name: "Mining AIS140 GPS Cert", price: "₹7,500" },
    ],
  },
];

const allCategories = tiers.map((t) => t.title);

const PricingSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");

  const subcategories = tiers.find((t) => t.title === category)?.items.map((i) => i.name) || [];

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail) {
        setCategory(detail.category || "");
        setSubcategory(detail.name || "");
      }
    };
    window.addEventListener("select-product", handler);
    return () => window.removeEventListener("select-product", handler);
  }, []);

  // Reset subcategory when category changes manually
  const handleCategoryChange = (val: string) => {
    setCategory(val);
    setSubcategory("");
  };

  const isValid = name && email && category && subcategory;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I'm ${name} (${email}). I'm interested in ${subcategory} under ${category}. Please share details.`
    );
    window.open(`https://wa.me/919182923352?text=${msg}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Enquiry - ${subcategory}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCategory: ${category}\nProduct: ${subcategory}\n\nPlease share details and pricing for the above product.`
    );
    window.open(`mailto:laanterngps@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-3">Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Transparent pricing for all our products & services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier) => (
            <div key={tier.title} className="card-gradient gold-border rounded-xl p-6 hover:gold-border-glow transition-all">
              <h3 className="font-display text-xl font-bold gold-gradient-text mb-5">{tier.title}</h3>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-3">
                    <span className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {item.name}
                    </span>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        <div className="max-w-lg mx-auto card-gradient gold-border-glow rounded-xl p-8">
          <h3 className="font-display text-2xl font-bold gold-gradient-text mb-6 text-center">Enquire Now</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Category</label>
              <select
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select category</option>
                {allCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Product</label>
              <select
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select product</option>
                {subcategories.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleWhatsApp}
                disabled={!isValid}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md bg-green-600 text-foreground text-sm font-semibold hover:bg-green-700 transition-colors disabled:opacity-40"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </button>
              <button
                onClick={handleEmail}
                disabled={!isValid}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md gold-gradient-bg text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Send className="h-4 w-4" /> Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
