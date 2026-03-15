"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoralBeadDivider from "@/components/CoralBeadDivider";

export default function AboutPage() {
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
              <i className="fas fa-info-circle mr-2"></i>ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              The Loud Gadgets <span className="text-premium-gold">Story</span>
            </h1>
            <p className="text-2xl text-premium-gold font-semibold mb-8">
              Premium Tech. Local Trust.
            </p>
          </div>

          <div className="scroll-reveal">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              At LOUD GADGETS COMMUNICATION, we believe that high-end technology should be accessible to everyone in Enugu. Since our founding, we have specialized in providing the latest iPhones, Samsung devices, and premium audio equipment like JBL and Sony.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We aren&apos;t just a gadget store; we are your tech partners. Whether you are looking to buy brand new, find a pristine pre-owned device, or swap your current phone for an upgrade, our team at Rail Way Ogbete is here to ensure you get the best value and authentic quality—guaranteed.
            </p>
          </div>

          <CoralBeadDivider />

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="scroll-reveal bg-black rounded-2xl p-8 border border-gray-800 hover:border-premium-gold/30 transition-all">
              <div className="w-14 h-14 bg-premium-gold/20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-premium-gold text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To provide Enugu with access to premium technology at fair prices, while delivering exceptional
                customer service and building lasting relationships with our community.
              </p>
            </div>

            <div className="scroll-reveal bg-black rounded-2xl p-8 border border-gray-800 hover:border-premium-gold/30 transition-all">
              <div className="w-14 h-14 bg-premium-gold/20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-premium-gold text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To become the most trusted tech retailer in Southeast Nigeria, known for quality products,
                transparent dealings, and innovative trade-in programs.
              </p>
            </div>
          </div>

          <CoralBeadDivider />

          <div className="scroll-reveal my-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Choose <span className="text-premium-gold">Us</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-premium-gold text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Quality Assured</h3>
                <p className="text-gray-400 text-sm">Every device tested and verified</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-hand-holding-usd text-premium-gold text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-400 text-sm">Competitive pricing guaranteed</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-exchange-alt text-premium-gold text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">Easy Trade-In</h3>
                <p className="text-gray-400 text-sm">Swap your old device hassle-free</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-premium-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-premium-gold text-2xl"></i>
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Always here to help you</p>
              </div>
            </div>
          </div>

          <CoralBeadDivider />

          <div className="scroll-reveal my-12 bg-black rounded-3xl p-8 md:p-12 border border-premium-gold/30">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Visit <span className="text-premium-gold">Our Store</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-premium-gold text-2xl mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Rail Way Ogbete, Enugu, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fas fa-clock text-premium-gold text-2xl mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-gray-400">Mon - Sat: 9AM - 7PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fab fa-whatsapp text-premium-gold text-2xl mt-1"></i>
                <div>
                  <h3 className="font-semibold mb-1">Contact</h3>
                  <a
                    href="https://wa.me/2349138473505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-premium-gold transition-colors"
                  >
                    +234 913 847 3505
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
