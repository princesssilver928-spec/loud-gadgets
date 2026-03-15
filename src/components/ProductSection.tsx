"use client";

import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: { text: string; color: string };
}

interface ProductSectionProps {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}

export default function ProductSection({ id, title, icon, products }: ProductSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={sectionRef} className="mb-20 scroll-reveal">
      <h3 className="text-2xl font-bold text-premium-gold mb-8 flex items-center">
        <i className={`${icon} mr-3`}></i>
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
