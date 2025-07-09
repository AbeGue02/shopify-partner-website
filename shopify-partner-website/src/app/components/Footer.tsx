export default function Footer() {
  return (
    <footer className="bg-[#0288d1] text-white py-10 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
        <p className="mb-2 text-white-300">Ready to grow your Shopify store? Contact us today for a free consultation.</p>
        <div className="mb-4 flex flex-col items-center gap-1">
          <span className="text-white-400">Email: <a href="mailto:abrahamgue02@gmail.com" className="underline hover:text-white">abrahamgue02@gmail.com</a></span>
          <span className="text-white-400">Phone: <a href="tel:+3057419621" className="underline hover:text-white">(305) 741-9621</a></span>
        </div>
        <a
          href="/contact"
          className="inline-block bg-[#0288d1] text-white font-medium py-3 px-6 rounded-md hover:bg-[#0277bd] transition"
        >
          Contact Me
        </a>
        <div className="flex justify-center gap-4 mt-4">
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
      </div>
    </footer>
  );
}
