"use client";

import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: { text: string; color: string };
}

interface ProductCardProps {
  product: Product;
}

const WHATSAPP_NUMBER = "2349155826027";

function getWhatsAppLink(productName: string): string {
  const message = `Hello Loud Gadgets, I saw the ${productName} on your website and I'd like to place an order.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ProductCard({ product }: ProductCardProps) {
  const badgeColorClasses: Record<string, string> = {
    gold: "bg-premium-gold/20 text-premium-gold",
    green: "bg-green-500/20 text-green-400",
    blue: "bg-blue-500/20 text-blue-400",
    purple: "bg-purple-500/20 text-purple-400",
    orange: "bg-orange-500/20 text-orange-400",
    red: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="product-card bg-gradient-to-b from-gray-900/50 to-deep-black rounded-2xl overflow-hidden border border-gray-800 hover:border-premium-gold/50">
      <div className="relative p-6 bg-gradient-to-br from-gray-800/30 to-transparent">
        <div className="product-image aspect-square flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="drop-shadow-2xl"
            unoptimized
          />
        </div>
        {product.badge && (
          <span
            className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
              badgeColorClasses[product.badge.color] || badgeColorClasses.gold
            }`}
          >
            {product.badge.text}
          </span>
        )}
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold mb-2">{product.name}</h4>
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
        <a
          href={getWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
        >
          <i className="fab fa-whatsapp text-lg"></i>
          WhatsApp Order
        </a>
      </div>
    </div>
  );
}
