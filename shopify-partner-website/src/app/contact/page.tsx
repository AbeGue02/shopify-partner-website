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
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/abrahamdguerrero/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" className="w-10 h-10 hover:opacity-80 transition" />
          </a>
          <a
            href="https://www.instagram.com/abraham_dgf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Instagram" className="w-10 h-10 hover:opacity-80 transition" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
