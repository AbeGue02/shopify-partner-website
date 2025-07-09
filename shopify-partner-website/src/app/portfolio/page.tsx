import PortfolioCard from "../components/PortfolioCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-5xl mx-auto mt-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
          <p className="text-gray-700 mb-12">A few examples of how I&apos;ve helped Shopify merchants succeed.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <PortfolioCard
              href="/portfolio/best-perfumes-miami"
              img="/BestPerfumesMiami.png"
              alt="Best Perfumes Miami"
              title="Best Perfumes Miami"
              description="Theme customization, POS Implementation, Quickbooks Integration, Product Listing + Inventory Synchronization"
            />
            <PortfolioCard
              href="/portfolio/the-nose-knows-perfumes"
              img="/TheNoseKnowsPerfumes.png"
              alt="The Nose Knows Perfumes"
              title="The Nose Knows Perfumes"
              description="Shopify Store Creation, Product Listings, Marketing Tools Implementation, Instagram & Facebook Shop Integration, Headless Storefronts"
            />
            <PortfolioCard
              href="/portfolio/neos-perfumes"
              img="/NeosPerfumes.jpg"
              alt="Neo&apos;s Perfumes"
              title="Neo&apos;s Perfumes"
              description="Shopify Store Theme Redesign, Quickbooks Integration, Product Synchronization, POS Implementation"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
