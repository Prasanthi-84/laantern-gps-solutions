import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const handleClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md gold-border border-t-0 border-x-0">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Laantern Corporate Solutions Logo" className="h-10 w-10 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="font-display text-sm font-bold gold-gradient-text">LAANTERN CORPORATE</span>
            <br />
            <span className="font-display text-xs text-muted-foreground">SOLUTIONS PVT LTD</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                active === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="ml-4 flex items-center gap-2 px-5 py-2 rounded-md gold-gradient-bg text-primary-foreground font-semibold text-sm transition-transform hover:scale-105"
          >
            <LogIn className="h-4 w-4" /> Login
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={`block px-4 py-3 rounded-md text-sm font-medium ${
                active === item.href ? "bg-primary/10 text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-md gold-gradient-bg text-primary-foreground font-semibold text-sm"
          >
            <LogIn className="h-4 w-4" /> Login
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
