import Link from "next/link";
import Logo from "./Logo";

const WHATSAPP_NUMBER = "2349138473505";

export default function Footer() {
  const quickLinks = [
    { href: "/#iphone", label: "iPhone" },
    { href: "/#samsung", label: "Samsung" },
    { href: "/#consoles", label: "Consoles" },
    { href: "/#audio", label: "Audio" },
    { href: "/#swap", label: "Swap/Trade-In" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/policy", label: "Policies" },
  ];

  return (
    <footer className="py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="logo-glow inline-block mb-6">
              <Logo size={60} />
            </Link>
            <h3 className="text-2xl font-bold mb-3">LOUD GADGETS</h3>
            <p className="text-gray-400">
              Premium tech devices at unbeatable prices. We buy, sell, and swap quality gadgets in
              Enugu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-premium-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-premium-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-premium-gold">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-premium-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-premium-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-premium-gold mt-1"></i>
                <span className="text-gray-400">Rail Way Ogbete, Enugu, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-premium-gold"></i>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-premium-gold transition-colors"
                >
                  +234 915 582 6027
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-premium-gold"></i>
                <a
                  href="tel:+2349138473505"
                  className="text-gray-400 hover:text-premium-gold transition-colors"
                >
                  +234 915 582 6027
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-premium-gold hover:text-deep-black transition-all"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-premium-gold hover:text-deep-black transition-all"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-premium-gold hover:text-deep-black transition-all"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 LOUD GADGETS. All rights reserved. | Premium Tech in Enugu
          </p>
        </div>
      </div>
    </footer>
  );
}
