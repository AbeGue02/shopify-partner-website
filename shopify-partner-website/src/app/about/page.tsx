import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-8 py-16 bg-gradient-to-br from-white to-gray-100">
        <section className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">About Abraham</h1>
          <p className="text-lg text-gray-700 mb-8">Welcome! I&apos;m Abraham, a Shopify expert passionate about helping businesses thrive online. Here you can learn more about my background, values, and approach to eCommerce success.</p>
        </section>
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-2">My Story</h2>
          <p className="text-gray-700 mb-6">
            I am a Computer Science student with a passion for eCommerce and technology. My journey into the world of Shopify began when I realized the potential of online businesses to reach global audiences. Since then, I&apos;ve dedicated myself to mastering Shopify development and helping merchants succeed. Starting with my family&apos;s business
          </p>
        </section>
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-2">My Approach</h2>
          <p className="text-gray-700 mb-6">I believe in a collaborative approach, working closely with my clients to understand their unique needs and goals. My focus is on delivering tailored solutions that drive results and provide ongoing support to ensure long-term success.</p>
          <p className="text-gray-700 mb-6">What sets my service apart is my commitment to transparency and communication. I keep my clients informed at every stage of the project, ensuring that we’re always aligned and working towards the same vision.</p>
        </section>
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-2">Skills & Expertise</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Shopify Theme Development</li>
            <li>App Integrations & Automation</li>
            <li>Performance Optimization</li>
            <li>B2B & B2C Solutions</li>
            <li>Mobile Application Development</li>
            <li>API Development & Integration</li>
            <li>E-commerce Strategy Consulting</li>
          </ul>
        </section>
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-2">Fun Facts</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>I mostly program within the MERN stack (MongoDB, Express.js, React, Node.js).</li>
            <li>I speak English and Spanish fluently, but I can speak Italian conversationally, and I am also learning German.</li>
            <li>I love traveling and exploring new cultures.</li>
            <li>In my free time, I enjoy reading about technology and eCommerce trends.</li>
            <li>I am an avid gamer and enjoy playing video games on weekends.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
