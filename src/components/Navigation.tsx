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

      {/* Mobile Menu Popup */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Elegant Glassmorphism Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-premium-gold/10 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-40 h-40 bg-premium-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-premium-gold/5 rounded-full blur-3xl" />
          </div>

          {/* Mobile Menu Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] transition-transform duration-300 ease-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Menu Container with glass effect */}
            <div className="h-full bg-gradient-to-b from-gray-900/95 via-black/98 to-black border-l border-premium-gold/20 shadow-2xl shadow-premium-gold/10">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-5 border-b border-premium-gold/20 bg-gradient-to-r from-gray-900/50 to-transparent">
                <div className="flex items-center gap-3">
                  <Logo size={40} />
                  <span className="text-premium-gold font-bold text-lg tracking-wide">Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-premium-gold/20 border border-white/10 hover:border-premium-gold/50 transition-all duration-300 group"
                  aria-label="Close menu"
                >
                  <i className="fas fa-times text-lg text-gray-400 group-hover:text-premium-gold transition-colors"></i>
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-4 flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-200px)]">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-premium-gold/20 group-hover:to-premium-gold/10 border border-gray-800 group-hover:border-premium-gold/30 transition-all duration-300">
                      <i className={`${link.icon} text-premium-gold text-lg`}></i>
                    </div>
                    <span className="font-medium text-lg">{link.label}</span>
                    <i className="fas fa-chevron-right ml-auto text-gray-600 group-hover:text-premium-gold transition-colors"></i>
                  </a>
                ))}

                {/* Divider */}
                <div className="my-4 h-px bg-gradient-to-r from-transparent via-premium-gold/30 to-transparent" />

                {/* Swap Button */}
                <a
                  href="/#swap"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-premium-gold via-gold-light to-premium-gold text-black font-bold text-lg hover:shadow-lg hover:shadow-premium-gold/40 hover:scale-[1.02] transition-all duration-300 mt-2"
                >
                  <i className="fas fa-exchange-alt"></i>
                  <span>Swap Device</span>
                </a>
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/95 to-transparent border-t border-premium-gold/20">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-premium-gold/10 flex items-center justify-center">
                    <i className="fas fa-store text-premium-gold"></i>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-medium">Rail Way Ogbete</span>
                    <span className="text-gray-500 text-xs">Enugu, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}