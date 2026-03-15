"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/#iphone", label: "iPhone", icon: "fab fa-apple" },
    { href: "/#samsung", label: "Samsung", icon: "fas fa-mobile-alt" },
    { href: "/#consoles", label: "Consoles", icon: "fas fa-gamepad" },
    { href: "/#audio", label: "Audio", icon: "fas fa-headphones" },
  ];

  return (
    <nav className={`glass fixed top-0 left-0 right-0 z-50 ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="logo-glow flex-shrink-0">
            <Logo size={50} />
          </Link>

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
              href="/#swap"
              className="px-5 py-2 border-2 border-premium-gold text-premium-gold rounded-full hover:bg-premium-gold hover:text-deep-black transition-all duration-300 font-semibold"
            >
              Swap
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 md:hidden transition-transform duration-300 ease-out border-l border-premium-gold/30 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <span className="text-premium-gold font-bold text-lg">Menu</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl text-white"></i>
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-900 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center group-hover:bg-premium-gold/20 transition-colors">
                <i className={`${link.icon} text-premium-gold`}></i>
              </div>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}

          {/* Divider */}
          <div className="my-3 border-t border-gray-800" />

          {/* Swap Button */}
          <a
            href="/#swap"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 px-4 py-4 rounded-xl bg-gradient-to-r from-premium-gold to-gold-light text-black font-bold hover:shadow-lg hover:shadow-premium-gold/30 transition-all duration-300"
          >
            <i className="fas fa-exchange-alt"></i>
            <span>Swap Device</span>
          </a>
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <i className="fas fa-store text-premium-gold"></i>
            <span>Rail Way Ogbete, Enugu</span>
          </div>
        </div>
      </div>
    </nav>
  );
}