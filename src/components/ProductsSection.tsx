import { useState } from "react";
import ProductCard from "./ProductCard";
import { products, categories } from "@/data/products";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold gold-gradient-text mb-3">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Government approved GPS trackers, dash cameras, CCTV systems, biometrics & certification services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "gold-gradient-bg text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
                features={product.features}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
