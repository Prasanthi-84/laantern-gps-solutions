import { Building2, FileCheck, MapPin, Phone, Mail, Globe } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-3">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            RAMJI — Your trusted partner for government approved GPS tracking & security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img src={logo} alt="Laantern Ramji Logo" className="w-64 h-64 rounded-full object-cover gold-glow" />
          </div>

          <div className="space-y-6">
            <div className="card-gradient gold-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="font-display text-lg font-bold gold-gradient-text">LAANTERN CORPORATE SOLUTIONS PVT LTD</h3>
              </div>
              <div className="space-y-3 text-sm text-foreground/80">
                <p className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-primary shrink-0" />
                  <strong>GST:</strong> 37AAFCL0753R1ZY
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  RAMJI, RAMCHANDRA NAGAR, AKKAYAPALEM, VISAKHAPATNAM
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  <a href="tel:+919182923352" className="hover:text-primary transition-colors">+91 9182923352</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href="mailto:laanterngps@gmail.com" className="hover:text-primary transition-colors">laanterngps@gmail.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary shrink-0" />
                  <a href="https://laantern.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">laantern.com</a>
                </p>
              </div>
            </div>

            <div className="card-gradient gold-border rounded-xl p-6">
              <h4 className="font-display text-base font-bold gold-gradient-text mb-3">Our Services</h4>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  All types of government approved and licensed GPS trackers available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  All Mining GPS + Bike / Car / Lorry / Truck / BUS GPS trackers available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  VLTD Taxi & Mining GPS certification services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  CCTV, Dash Camera & Biometric solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
