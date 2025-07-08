import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioCard from "./components/PortfolioCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />

      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Elevate Your Shopify Store</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Custom development, theme optimization, and app integrations to grow your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition"
          >
            Get a Free Consultation
          </Link>
        </section>

        <section id="services" className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <Image src="/theme.png" alt="Theme Development" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Theme Development</h3>
            <p className="text-gray-600">Custom themes that match your brand and convert visitors to customers.</p>
          </div>
          <div>
            <Image src="/performance.png" alt="Performance Optimization" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
            <p className="text-gray-600">Faster stores mean better SEO and improved sales. I make that happen.</p>
          </div>
          <div>
            <Image src="/apps.png" alt="App Integration" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">App Integration</h3>
            <p className="text-gray-600">Connect your Shopify store with powerful apps to automate your workflow.</p>
          </div>
        </section>

        <section id="portfolio" className="max-w-5xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">My Work</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">A few examples of how I've helped Shopify merchants succeed.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <PortfolioCard
              href="https://bestperfumesmiami.com"
              img="/BestPerfumesMiami.png"
              alt="Best Perfumes Miami"
              title="Best Perfumes Miami"
              description="Theme customization, POS Implementation, Quickbooks Integration, Product Listing + Inventory Synchronization"
            />
            <PortfolioCard
              href="https://thenoseknowsperfumes.com"
              img="/TheNoseKnowsPerfumes.png"
              alt="The Nose Knows Perfumes"
              title="The Nose Knows Perfumes"
              description="Shopify Store Creation, Product Listings, Marketing Tools Implementation, Instagram & Facebook Shop Integration, Headless Storefronts"
            />
            <PortfolioCard
              href="https://neosperfumes.net"
              img="/NeosPerfumes.jpg"
              alt="Neo's Perfumes"
              title="Neo's Perfumes"
              description="Shopify Store Theme Redesign, Quickbooks Integration, Product Synchronization, POS Implementation"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
