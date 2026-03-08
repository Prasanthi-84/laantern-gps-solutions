import { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";

interface QuoteModalProps {
  category: string;
  subcategory: string;
  onClose: () => void;
}

const QuoteModal = ({ category, subcategory, onClose }: QuoteModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi, I'm ${name} (${phone}). I'm interested in ${subcategory} under ${category}. Please share a quote.`
    );
    window.open(`https://wa.me/919182923352?text=${msg}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Quote Request - ${subcategory}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nCategory: ${category}\nProduct: ${subcategory}\n\nPlease share a quote for the above product.`
    );
    window.open(`mailto:laanterngps@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="card-gradient gold-border-glow rounded-xl max-w-md w-full p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-lg font-bold gold-gradient-text">Get a Quote</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Your Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter your name"
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Phone Number</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-input border border-border rounded-md px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Enter phone number"
              maxLength={15}
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Category</label>
            <input value={category} readOnly className="w-full bg-muted border border-border rounded-md px-3 py-2.5 text-sm text-muted-foreground" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Product</label>
            <input value={subcategory} readOnly className="w-full bg-muted border border-border rounded-md px-3 py-2.5 text-sm text-muted-foreground" />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleWhatsApp}
              disabled={!name || !phone}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md bg-green-600 text-foreground text-sm font-semibold hover:bg-green-700 transition-colors disabled:opacity-40"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </button>
            <button
              onClick={handleEmail}
              disabled={!name || !phone}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-md gold-gradient-bg text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-40"
            >
              <Send className="h-4 w-4" /> Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
