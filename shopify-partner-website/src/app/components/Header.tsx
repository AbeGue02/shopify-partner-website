'use client';
import Image from "next/image";
import Link from "next/link";

export default function Header({ withSpacer = true }: { withSpacer?: boolean }) {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0288d1] text-white py-6 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Desktop: Logo + Title */}
          <div className="hidden sm:flex items-center gap-3 w-1/3">
            <Link href="/" className="flex items-center gap-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={40} height={40} priority className="block" />
              </div>
              <span className="text-2xl font-bold">AG Studio | Shopify Partner</span>
            </Link>
          </div>
          {/* Mobile: Centered Logo */}
          <div className="flex-1 flex justify-center sm:hidden">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={40} height={40} priority />
              </div>
            </Link>
          </div>
          {/* Hamburger Button (Mobile) */}
          <div className="sm:hidden flex items-center justify-center w-10 h-10 ml-auto">
            <input id="menu-toggle" type="checkbox" className="hidden peer" />
            <label htmlFor="menu-toggle" className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer">
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </label>
            {/* Mobile Menu Overlay */}
            <div className="fixed inset-0 bg-[#0288d1] bg-opacity-80 z-50 flex flex-col items-center justify-center sm:hidden transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
              <label htmlFor="menu-toggle" className="absolute top-6 right-8 text-white text-3xl cursor-pointer">&times;</label>
              <Link href="/" className="mb-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={60} height={60} priority />
                </div>
              </Link>
              <nav className="flex flex-col gap-8 text-xl">
                <Link href="/" className="hover:underline" onClick={() => { const el = document.getElementById('menu-toggle') as HTMLInputElement | null; if (el) el.checked = false; }}>Home</Link>
                <Link href="/services" className="hover:underline" onClick={() => { const el = document.getElementById('menu-toggle') as HTMLInputElement | null; if (el) el.checked = false; }}>Services</Link>
                <Link href="/portfolio" className="hover:underline" onClick={() => { const el = document.getElementById('menu-toggle') as HTMLInputElement | null; if (el) el.checked = false; }}>Portfolio</Link>
                <Link href="/contact" className="hover:underline" onClick={() => { const el = document.getElementById('menu-toggle') as HTMLInputElement | null; if (el) el.checked = false; }}>Contact</Link>
              </nav>
            </div>
          </div>
          {/* Desktop Nav */}
          <nav className="space-x-6 text-sm hidden sm:block">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>
      {withSpacer && <div className="h-24 w-full" aria-hidden="true"></div>}
    </>
  );
}
