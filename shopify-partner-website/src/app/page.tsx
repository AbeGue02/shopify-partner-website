import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <header className="bg-[#1c1c1e] text-white py-6 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AG Shopify Solutions</h1>
          <nav className="space-x-6 text-sm">
            <Link href="#services" className="hover:underline">Services</Link>
            <Link href="#portfolio" className="hover:underline">Portfolio</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Elevate Your Shopify Store</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Custom development, theme optimization, and app integrations to grow your business.
          </p>
          <Link
            href="#contact"
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
            <p className="text-gray-600">Faster stores mean better SEO and improved sales. We make that happen.</p>
          </div>
          <div>
            <Image src="/apps.png" alt="App Integration" width={48} height={48} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">App Integration</h3>
            <p className="text-gray-600">Connect your Shopify store with powerful apps to automate your workflow.</p>
          </div>
        </section>

        <section id="portfolio" className="max-w-5xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">My Work</h2>
          <p className="text-gray-700 mb-12">A few examples of how I've helped Shopify merchants succeed.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/store1.jpg" alt="Store Example 1" width={500} height={300} />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Best Perfumes Miami</h4>
                <p className="text-sm text-gray-600">Theme customization, POS Implementation, Quickbooks Integration, Product Listing + Inventory Synchronization</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/store2.jpg" alt="Store Example 2" width={500} height={300} />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">The Nose Knows Perfumes</h4>
                <p className="text-sm text-gray-600">Shopify Store Creation, Product Listings, Marketing Tools Implementation, Instagram & Facebook Shop Integration, Headless Storefronts</p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src="/store3.jpg" alt="Store Example 3" width={500} height={300} />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">Neos Perfumes</h4>
                <p className="text-sm text-gray-600">Shopify Store Theme Redesign, Quickbooks Integration, Product Synchronization, POS Implementation</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#1c1c1e] text-white py-10 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="mb-6 text-gray-300">Ready to grow your Shopify store? Contact us today for a free consultation.</p>
          <a
            href="mailto:hello@shopifypartner.dev"
            className="inline-block bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}
