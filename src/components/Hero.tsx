"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-premium-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-premium-gold/3 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full text-premium-gold text-sm font-semibold mb-6">
            <i className="fas fa-bolt mr-2"></i>PREMIUM TECH STORE
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up delay-200">
          <span className="text-white">DAILY DEAL ALERT! </span>
          <span className="fire-emoji">🔥</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up delay-400">
          Premium Tech in <span className="text-premium-gold font-semibold">Enugu</span>
        </p>

        <p className="text-lg text-gray-400 mb-10 animate-fade-in-up delay-400">
          We Buy, Sell, and Swap — Quality Guaranteed
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-600">
          <a
            href="#products"
            className="px-8 py-4 bg-premium-gold text-deep-black font-bold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-premium-gold/30"
          >
            <i className="fas fa-shopping-bag mr-2"></i>Shop Now
          </a>
          <a
            href="#swap"
            className="px-8 py-4 border-2 border-premium-gold text-premium-gold font-bold rounded-full hover:bg-premium-gold hover:text-deep-black transition-all duration-300"
          >
            <i className="fas fa-exchange-alt mr-2"></i>Swap Device
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 animate-fade-in-up delay-600">
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-premium-gold"></i>
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-truck text-premium-gold"></i>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-headset text-premium-gold"></i>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-premium-gold text-2xl"></i>
      </div>
    </section>
  );
}
