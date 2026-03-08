import { Check } from "lucide-react";

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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-3">Pricing</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Transparent pricing for all our products & services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <a
                href="https://wa.me/919182923352?text=Hi%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block text-center py-3 rounded-md gold-gradient-bg text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
