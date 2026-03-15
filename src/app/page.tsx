"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import SwapSection from "@/components/SwapSection";
import Footer from "@/components/Footer";
import CoralBeadDivider from "@/components/CoralBeadDivider";
import { useEffect, useRef } from "react";

const products = {
  iphone: [
    {
      id: "iphone-15-pro-max",
      name: "iPhone 15 Pro Max",
      description: "256GB • Titanium Blue",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop&auto=format",
      badge: { text: "HOT", color: "gold" },
    },
    {
      id: "iphone-14",
      name: "iPhone 14",
      description: "128GB • Midnight",
      image:
        "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: "iphone-se",
      name: "iPhone SE (3rd Gen)",
      description: "64GB • Starlight",
      image:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format",
      badge: { text: "BUDGET", color: "green" },
    },
  ],
  samsung: [
    {
      id: "galaxy-s24-ultra",
      name: "Galaxy S24 Ultra",
      description: "512GB • Titanium Black",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format",
      badge: { text: "NEW", color: "gold" },
    },
    {
      id: "galaxy-z-fold5",
      name: "Galaxy Z Fold5",
      description: "256GB • Phantom Black",
      image:
        "/samsung-galaxy-z-fold-5-blue.jpg",
      badge: { text: "FOLDABLE", color: "purple" },
    },
    {
      id: "galaxy-a54",
      name: "Galaxy A54 5G",
      description: "128GB • Awesome Graphite",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop&auto=format",
      badge: { text: "POPULAR", color: "blue" },
    },
  ],
  consoles: [
    {
      id: "playstation-5",
      name: "PlayStation 5",
      description: "Disc Edition • 825GB SSD",
      image:
        "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop&auto=format",
      badge: { text: "GAMING", color: "blue" },
    },
    {
      id: "xbox-series-x",
      name: "Xbox Series X",
      description: "1TB SSD • Carbon Black",
      image:
        "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop&auto=format",
      badge: { text: "GAMING", color: "green" },
    },
    {
      id: "nintendo-switch-oled",
      name: "Nintendo Switch OLED",
      description: "64GB • White Joy-Cons",
      image:
        "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop&auto=format",
      badge: { text: "PORTABLE", color: "red" },
    },
  ],
  audio: [
    {
      id: "airpods-pro-2",
      name: "AirPods Pro (2nd Gen)",
      description: "Active Noise Cancellation",
      image:
        "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop&auto=format",
      badge: { text: "BESTSELLER", color: "gold" },
    },
    {
      id: "sony-wh-1000xm5",
      name: "Sony WH-1000XM5",
      description: "Wireless ANC Headphones",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop&auto=format",
      badge: { text: "PREMIUM", color: "orange" },
    },
    {
      id: "galaxy-buds2-pro",
      name: "Galaxy Buds2 Pro",
      description: "360 Audio • IPX7",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format",
    },
  ],
};

const sections = [
  { id: "iphone", title: "iPhone", icon: "fab fa-apple", products: products.iphone },
  { id: "samsung", title: "Samsung", icon: "fas fa-mobile-alt", products: products.samsung },
  { id: "consoles", title: "Consoles", icon: "fas fa-gamepad", products: products.consoles },
  { id: "audio", title: "Audio", icon: "fas fa-headphones", products: products.audio },
];

export default function Home() {
  const productsRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <Hero />

      <CoralBeadDivider />

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={productsRef} className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-premium-gold">Premium</span> Collection
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the latest smartphones, consoles, and audio gear at unbeatable prices
            </p>
          </div>

          {sections.map((section) => (
            <ProductSection
              key={section.id}
              id={section.id}
              title={section.title}
              icon={section.icon}
              products={section.products}
            />
          ))}
        </div>
      </section>

      <CoralBeadDivider />

      <SwapSection />

      <CoralBeadDivider />

      <Footer />
    </>
  );
}