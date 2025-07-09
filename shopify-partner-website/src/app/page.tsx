import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />

      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        {/* Hero Logo and Promo Text */}
        <section className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 mb-16 px-4">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="AG Shopify Solutions Logo"
              className="w-40 h-40 sm:w-56 sm:h-56 object-contain"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Shopify Solutions That Grow With You
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
              From custom theme development to seamless integrations and ongoing
              support, I help businesses of all sizes launch, scale, and succeed on
              Shopify. Let’s build your next eCommerce success story together!
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Elevate Your Shopify Store
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Custom development, theme optimization, and app integrations to grow
            your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition"
          >
            Get a Free Consultation
          </Link>
        </section>

        <section
          id="services"
          className="w-full py-8 relative overflow-hidden flex flex-col items-center"
        >
          <div className="w-full max-w-5xl grid md:grid-cols-3 gap-12 px-4">
            <ServiceCard
              icon="/theme.png"
              title="Theme Development"
              description="Get a custom Shopify theme designed to perfectly match your brand and maximize conversions. I create visually stunning, mobile-optimized, and lightning-fast storefronts that make your business stand out and keep customers coming back."
              className="bubble-card float-delay-0"
            />
            <ServiceCard
              icon="/performance.png"
              title="Performance Optimization"
              description="Boost your store’s speed and SEO with advanced performance tuning. I analyze and optimize every aspect of your site, from image delivery to code efficiency, ensuring a seamless shopping experience that drives higher sales and better search rankings."
              className="bubble-card float-delay-1"
            />
            <ServiceCard
              icon="/apps.png"
              title="App Integration"
              description="Supercharge your Shopify store by connecting it with powerful apps and automations. I help you integrate tools for marketing, inventory, fulfillment, and more—streamlining your workflow and unlocking new growth opportunities."
              className="bubble-card float-delay-2"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto mt-24 mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-full">
              <p className="text-lg italic mb-4">
                “Abraham made our migration to Shopify seamless and stress-free.
                Our sales and efficiency have never been better!”
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-full">
              <p className="text-lg italic mb-4">
                “The new storefront is beautiful and our team loves the new POS
                setup. Highly recommended for any growing business.”
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center h-full">
              <p className="text-lg italic mb-4">
                “From branding to marketing automation, everything was handled
                with care and expertise. We’re seeing more traffic and engagement
                than ever.”
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-5xl justify-center mx-auto mb-24 text-center content-center">
          <h2 className="text-3xl font-bold mb-6">By the Numbers</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="bg-black text-white rounded-xl p-8 flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">8,000+</span>
              <span className="text-lg">Products Created</span>
            </div>
            <div className="bg-black text-white rounded-xl p-8 flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">$2M+</span>
              <span className="text-lg">Annual Revenue Managed</span>
            </div>
            <div className="bg-black text-white rounded-xl p-8 flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">100%</span>
              <span className="text-lg">Client Satisfaction</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
