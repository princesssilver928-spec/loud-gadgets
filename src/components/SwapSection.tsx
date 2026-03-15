"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "2349155826027";

export default function SwapSection() {
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

  const swapMessage =
    "Hello Loud Gadgets, I am interested in swapping my current device for an upgrade. How do we proceed?";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(swapMessage)}`;

  return (
    <section id="swap" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div
          ref={sectionRef}
          className="relative bg-gradient-to-br from-gray-900 to-deep-black rounded-3xl p-8 md:p-12 border-2 border-premium-gold overflow-hidden scroll-reveal"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-premium-gold/3 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-premium-gold/20 rounded-full flex items-center justify-center">
                <i className="fas fa-exchange-alt text-premium-gold text-xl"></i>
              </div>
              <span className="px-4 py-1 bg-premium-gold/10 border border-premium-gold/30 rounded-full text-premium-gold text-sm font-semibold">
                TRADE-IN PROGRAM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Swap Your <span className="text-premium-gold">Device</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Upgrade to the latest tech without breaking the bank. Trade in your old device and get
              amazing value towards your new purchase. It&apos;s quick, easy, and hassle-free.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-premium-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-mobile-alt text-premium-gold"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Any Condition</h4>
                  <p className="text-gray-400 text-sm">We accept devices in any condition</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-premium-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-dollar-sign text-premium-gold"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Best Value</h4>
                  <p className="text-gray-400 text-sm">Get competitive trade-in prices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-premium-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-bolt text-premium-gold"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instant Quote</h4>
                  <p className="text-gray-400 text-sm">Get your quote in minutes</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 text-lg"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                Start Swap Process
              </a>
              <a
                href="tel:+2349155826027"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <i className="fas fa-phone"></i>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
