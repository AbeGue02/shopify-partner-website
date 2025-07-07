import Link from "next/link";
import Header from "../components/Header";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-10">
            We offer a full suite of Shopify services to help your business grow and succeed online.
          </p>
          <ul className="text-left mx-auto max-w-2xl space-y-6">
            <li>
              <span className="font-semibold">Custom Theme Development:</span> Unique, high-converting Shopify themes tailored to your brand.
            </li>
            <li>
              <span className="font-semibold">Performance Optimization:</span> Speed up your store for better SEO and user experience.
            </li>
            <li>
              <span className="font-semibold">App Integration:</span> Connect your store with powerful apps to automate and enhance your workflow.
            </li>
            <li>
              <span className="font-semibold">POS & Inventory Sync:</span> Seamless integration with POS systems and inventory management tools.
            </li>
            <li>
              <span className="font-semibold">Marketing Tools:</span> Implement email, social, and analytics tools to boost your sales.
            </li>
            <li>
              <span className="font-semibold">Headless Storefronts:</span> Modern, fast, and flexible headless Shopify solutions.
            </li>
          </ul>
        </section>
      </main>
      <footer className="bg-[#1c1c1e] text-white py-10 px-8">
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
