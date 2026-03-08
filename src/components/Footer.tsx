import { Phone, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Laantern Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-sm font-bold gold-gradient-text">LAANTERN CORPORATE SOLUTIONS PVT LTD</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for government approved GPS tracking, CCTV, dash cameras, biometrics & certification services across India.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold gold-gradient-text mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["Home", "Products", "Pricing", "About", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold gold-gradient-text mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 9182923352</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> laanterngps@gmail.com</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> laantern.com</p>
              <p className="flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> RAMJI, RAMCHANDRA NAGAR, AKKAYAPALEM, VISAKHAPATNAM</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} LAANTERN CORPORATE SOLUTIONS PVT LTD. All rights reserved. | GST: 37AAFCL0753R1ZY
        </div>
      </div>
    </footer>
  );
};

export default Footer;
