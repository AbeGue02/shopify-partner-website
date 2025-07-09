import Footer from "../components/Footer";
import Header from "../components/Header";
import CalendlyWidget from "../components/CalendlyWidget";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-10">
            Book a free consultation below. Consultations are the best way to get started with your Shopify project. I will help you understand the process, answer your questions, and provide a personalized quote based on your needs.
          </p>
          {/* Calendly Widget */}
          <CalendlyWidget />
        </section>
      </main>
      <Footer />
    </div>
  );
}
