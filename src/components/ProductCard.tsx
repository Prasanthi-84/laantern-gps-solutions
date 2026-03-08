import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  features: string[];
  category: string;
}

const ProductCard = ({ name, price, image, features, category }: ProductCardProps) => {
  const handleBuyNow = () => {
    const section = document.getElementById("pricing");
    if (section) section.scrollIntoView({ behavior: "smooth" });
    // Dispatch custom event to auto-fill the pricing form
    window.dispatchEvent(new CustomEvent("select-product", { detail: { category, name } }));
  };

  return (
    <div className="card-gradient gold-border rounded-xl overflow-hidden transition-all duration-300 hover:gold-border-glow hover:-translate-y-1 group flex flex-col min-h-[520px]">
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 gold-gradient-bg text-primary-foreground text-sm font-bold px-4 py-1.5 rounded-full">
          {price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-body text-xl font-bold gold-gradient-text mb-4 tracking-wide">{name}</h3>
        <ul className="space-y-2 mb-5 flex-1">
          {features.slice(0, 8).map((f, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 font-body">
              <span className="text-primary mt-0.5">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleBuyNow}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg gold-gradient-bg text-primary-foreground text-base font-semibold font-body transition-transform hover:scale-105 mt-auto"
        >
          <ShoppingCart className="h-5 w-5" /> Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
