"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoralBeadDivider from "@/components/CoralBeadDivider";

export default function PolicyPage() {
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

      <section className="min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <span className="inline-block px-4 py-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full text-premium-gold text-sm font-semibold mb-6">
              <i className="fas fa-file-contract mr-2"></i>POLICIES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-premium-gold">Policies</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Last updated: March 2026
            </p>
          </div>

          <CoralBeadDivider />

          {/* Return Policy */}
          <div className="scroll-reveal my-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <i className="fas fa-undo text-premium-gold"></i>
              Return Policy
            </h2>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Devices may be returned within <strong>7 days</strong> of purchase if found to have manufacturing defects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Items must be returned in the same condition as received with all original accessories.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Refunds will be processed within 5-7 business days after inspection.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-coral-bead mt-1"></i>
                  <span>Physical damage, water damage, or user-caused issues are not covered.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Warranty Policy */}
          <div className="scroll-reveal my-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <i className="fas fa-shield-alt text-premium-gold"></i>
              Warranty Policy
            </h2>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>All devices come with a <strong>30-day warranty</strong> covering hardware malfunctions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Premium devices (flagship models) include extended <strong>90-day warranty</strong> options.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Warranty covers screen, battery, charging port, and speaker issues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-times text-coral-bead mt-1"></i>
                  <span>Warranty is void if device is opened, modified, or repaired by unauthorized personnel.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Swap & Trade-In Policy */}
          <div className="scroll-reveal my-12">
            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
              <i className="fas fa-exchange-alt text-premium-gold"></i>
              The Swap & Trade-In Policy
            </h2>
            <p className="text-premium-gold text-xl font-semibold mb-6">Upgrade Without the Stress.</p>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold mb-6">How It Works:</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-premium-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-premium-gold font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Evaluation</h4>
                    <p className="text-gray-400">Bring your current device to our Enugu outlet or send clear photos/videos via WhatsApp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-premium-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-premium-gold font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Valuation</h4>
                    <p className="text-gray-400">We provide a fair, market-competitive trade-in value based on the device condition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-premium-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-premium-gold font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Top-Up</h4>
                    <p className="text-gray-400">Pay the difference and walk away with your new upgrade the same day.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-coral-bead/10 border border-coral-bead/30 rounded-xl">
                <p className="text-gray-300 flex items-start gap-3">
                  <i className="fas fa-exclamation-triangle text-coral-bead mt-1"></i>
                  <span><strong>Note:</strong> All devices brought in for swap must be original and free from iCloud or Google locks. We prioritize transparency and security in every transaction.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Shipping & Delivery */}
          <div className="scroll-reveal my-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <i className="fas fa-truck text-premium-gold"></i>
              Shipping & Delivery
            </h2>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-premium-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shipping-fast text-premium-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Fast Regional Delivery</h4>
                    <p className="text-gray-400">We offer same-day delivery within Enugu and secure, tracked shipping to other regions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-premium-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-store text-premium-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Pick-Up</h4>
                    <p className="text-gray-400">You can always visit us at our physical location: <strong className="text-white">Rail Way Ogbete, Enugu</strong>, to test your device before payment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Policy */}
          <div className="scroll-reveal my-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <i className="fas fa-credit-card text-premium-gold"></i>
              Payment Policy
            </h2>
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>We accept <strong>cash, bank transfer, and mobile money</strong> payments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Full payment is required before device release.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fas fa-check text-premium-gold mt-1"></i>
                  <span>Installment plans available for purchases above ₦200,000 (terms apply).</span>
                </li>
              </ul>
            </div>
          </div>

          <CoralBeadDivider />

          {/* Contact Section */}
          <div className="scroll-reveal my-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-gray-400 mb-6">
              Contact us for clarification on any of our policies.
            </p>
            <a
              href="https://wa.me/2349138473505?text=Hello%20Loud%20Gadgets%2C%20I%20have%20a%20question%20about%20your%20policies."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
