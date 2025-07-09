export default function Footer() {
  return (
    <footer className="bg-[#1c1c1e] text-white py-10 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
        <p className="mb-2 text-gray-300">Ready to grow your Shopify store? Contact us today for a free consultation.</p>
        <div className="mb-4 flex flex-col items-center gap-1">
          <span className="text-gray-400">Email: <a href="mailto:abrahamgue02@gmail.com" className="underline hover:text-white">abrahamgue02@gmail.com</a></span>
          <span className="text-gray-400">Phone: <a href="tel:+3057419621" className="underline hover:text-white">(305) 741-9621</a></span>
        </div>
        <a
          href="/contact"
          className="inline-block bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
}
