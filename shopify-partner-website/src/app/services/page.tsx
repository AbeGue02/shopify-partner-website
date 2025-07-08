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
        </section>
      </main>
      <Footer />
    </div>
  );
}
