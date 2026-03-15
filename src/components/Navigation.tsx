"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#iphone", label: "iPhone" },
    { href: "#samsung", label: "Samsung" },
    { href: "#consoles", label: "Consoles" },
    { href: "#audio", label: "Audio" },
  ];

  return (
    <nav className={`glass fixed top-0 left-0 right-0 z-50 ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="logo-glow flex-shrink-0">
            <Logo size={50} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-premium-gold transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#swap"
              className="px-5 py-2 border-2 border-premium-gold text-premium-gold rounded-full hover:bg-premium-gold hover:text-deep-black transition-all duration-300 font-semibold"
            >
              Swap
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-64 bg-deep-black/95 backdrop-blur-xl md:hidden ${
          mobileMenuOpen ? "active" : ""
        }`}
      >
        <div className="p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          <div className="mt-12 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-premium-gold transition-colors text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#swap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-3 border-2 border-premium-gold text-premium-gold rounded-full text-center font-semibold"
            >
              Swap
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
