import { useState } from "react";
import { ShoppingCart, MessageCircle } from "lucide-react";
import QuoteModal from "./QuoteModal";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  features: string[];
  category: string;
}

const ProductCard = ({ name, price, image, features, category }: ProductCardProps) => {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <>
      <div className="card-gradient gold-border rounded-lg overflow-hidden transition-all duration-300 hover:gold-border-glow hover:-translate-y-1 group flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 gold-gradient-bg text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {price}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-lg font-bold gold-gradient-text mb-3">{name}</h3>
          <ul className="space-y-1.5 mb-4 flex-1">
            {features.slice(0, 8).map((f, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 mt-auto">
            <a
              href="#pricing"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md gold-gradient-bg text-primary-foreground text-sm font-semibold transition-transform hover:scale-105"
            >
              <ShoppingCart className="h-4 w-4" /> Buy Now
            </a>
            <button
              onClick={() => setShowQuote(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Quote
            </button>
          </div>
        </div>
      </div>

      {showQuote && (
        <QuoteModal
          category={category}
          subcategory={name}
          onClose={() => setShowQuote(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
