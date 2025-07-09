import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-10">
            Transparent pricing for every stage of your Shopify journey.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 rounded-2xl overflow-hidden bg-white text-left text-sm shadow-lg border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-4 px-6 font-semibold">Service</th>
                  <th className="py-4 px-6 font-semibold">Beginner-Friendly Clients</th>
                  <th className="py-4 px-6 font-semibold">Established Clients</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white transition hover:bg-gray-100">
                  <td className="py-4 px-6">Store Setup</td>
                  <td className="py-4 px-6">$500–$1,500</td>
                  <td className="py-4 px-6">$1,500–$3,000+</td>
                </tr>
                <tr className="bg-gray-50 transition hover:bg-gray-100">
                  <td className="py-4 px-6">Theme Customization</td>
                  <td className="py-4 px-6">$300–$1,200</td>
                  <td className="py-4 px-6">$1,200–$3,000+</td>
                </tr>
                <tr className="bg-white transition hover:bg-gray-100">
                  <td className="py-4 px-6">Full Theme Development</td>
                  <td className="py-4 px-6">$2,000–$5,000+</td>
                  <td className="py-4 px-6">$5,000–$10,000+</td>
                </tr>
                <tr className="bg-gray-50 transition hover:bg-gray-100">
                  <td className="py-4 px-6">Headless Storefront</td>
                  <td className="py-4 px-6">$4,000–$10,000+</td>
                  <td className="py-4 px-6">$10,000–$25,000+</td>
                </tr>
                <tr className="bg-white transition hover:bg-gray-100">
                  <td className="py-4 px-6">API/Automation Work</td>
                  <td className="py-4 px-6">$50–$150/hr</td>
                  <td className="py-4 px-6">$100–$200/hr</td>
                </tr>
                <tr className="bg-gray-50 transition hover:bg-gray-100">
                  <td className="py-4 px-6">Monthly Retainer</td>
                  <td className="py-4 px-6">$500–$2,000/month</td>
                  <td className="py-4 px-6">$2,000–$5,000+/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> The prices listed above are only estimates. Actual project costs will be discussed and finalized with you personally during a free consultation, based on your specific needs and requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-start mt-8 mb-12">
            <div className="max-w-md w-full">
              <h3 className="text-lg font-semibold mb-2">What is a Beginner-Friendly Client?</h3>
              <p className="text-gray-600">A beginner-friendly client is typically a new or small business owner who is just starting out with Shopify or eCommerce. They may have a limited product catalog, simpler requirements, and are looking for cost-effective solutions to launch or grow their online presence. You automatically qualify as a beginner-friendly client if you do not have a Shopify store.</p>
            </div>
            <div className="max-w-md w-full">
              <h3 className="text-lg font-semibold mb-2">What is an Established Client?</h3>
              <p className="text-gray-600">An established client is a business with an existing online presence, larger product catalog, or more complex operational needs. They often require advanced customizations, integrations, and scalable solutions to support ongoing growth and higher sales volume.</p>
            </div>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Service Descriptions</h3>
            <ul className="space-y-6 text-left">
              <li>
                <span className="font-semibold">Store Setup:</span> Complete configuration of your Shopify store, including payment gateways, shipping, taxes, and essential settings to get your business online quickly and correctly.
              </li>
              <li>
                <span className="font-semibold">Theme Customization:</span> Tailoring the look and feel of your store by modifying an existing theme to match your brand, improve user experience, and add custom features as needed.
              </li>
              <li>
                <span className="font-semibold">Full Theme Development:</span> Designing and building a completely custom Shopify theme from scratch, optimized for your unique business needs, branding, and conversion goals.
              </li>
              <li>
                <span className="font-semibold">Headless Storefront:</span> Creating a decoupled front-end (using frameworks like Next.js) that communicates with Shopify via API, enabling advanced performance, design flexibility, and integration with other platforms.
              </li>
              <li>
                <span className="font-semibold">API/Automation Work:</span> Building custom integrations, automations, or workflows using Shopify’s API or third-party services to streamline operations, sync data, or automate repetitive tasks.
              </li>
              <li>
                <span className="font-semibold">Monthly Retainer:</span> Ongoing support, maintenance, and development services for your Shopify store, billed monthly, to ensure your business continues to grow and operate smoothly.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
