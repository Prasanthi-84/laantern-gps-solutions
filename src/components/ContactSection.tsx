import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:laanterngps@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hi, I'm ${name} (${email}). ${message}`);
    window.open(`https://wa.me/919182923352?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-3">Contact Us</h2>
          <p className="text-muted-foreground">Get in touch for queries, quotes, or support.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <form onSubmit={handleEmail} className="card-gradient gold-border rounded-xl p-6 space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Your Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your name"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your email"
                maxLength={255}
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Message</label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Your message..."
                maxLength={1000}
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md gold-gradient-bg text-primary-foreground font-semibold text-sm">
                <Send className="h-4 w-4" /> Send Email
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md bg-green-600 text-foreground font-semibold text-sm hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="card-gradient gold-border rounded-xl p-6 space-y-4">
              <h3 className="font-display text-lg font-bold gold-gradient-text">Get In Touch</h3>
              <div className="space-y-3 text-sm text-foreground/80">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:+919182923352" className="hover:text-primary">+91 9182923352</a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:laanterngps@gmail.com" className="hover:text-primary">laanterngps@gmail.com</a>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  RAMJI, RAMCHANDRA NAGAR, AKKAYAPALEM, VISAKHAPATNAM
                </p>
              </div>
            </div>

            <div className="card-gradient gold-border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold gold-gradient-text mb-2">Business Hours</h3>
              <p className="text-sm text-foreground/80">Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p className="text-sm text-foreground/80">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
