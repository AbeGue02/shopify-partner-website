import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

const portfolioData: Record<string, { title: string; img: string; description: string; url: string }> = {
  "best-perfumes-miami": {
    title: "Best Perfumes Miami",
    img: "/BestPerfumesMiami.png",
    description: "Theme customization, POS Implementation, Quickbooks Integration, Product Listing + Inventory Synchronization",
    url: "https://bestperfumesmiami.com"
  },
  "the-nose-knows-perfumes": {
    title: "The Nose Knows Perfumes",
    img: "/TheNoseKnowsPerfumes.png",
    description: "Shopify Store Creation, Product Listings, Marketing Tools Implementation, Instagram & Facebook Shop Integration, Headless Storefronts",
    url: "https://thenoseknowsperfumes.com"
  },
  "neos-perfumes": {
    title: "Neo's Perfumes",
    img: "/NeosPerfumes.jpg",
    description: "Shopify Store Theme Redesign, Quickbooks Integration, Product Synchronization, POS Implementation",
    url: "https://neosperfumes.net"
  }
};

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const project = portfolioData[params.slug];
  if (!project) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-0 py-16 bg-gradient-to-br from-white to-gray-100">
        <div className="w-full max-w-6xl mx-auto text-center bg-transparent rounded-none shadow-none p-0 sm:bg-white sm:rounded-xl sm:shadow-lg sm:p-8">
          <Image src={project.img} alt={project.title} width={500} height={300} className="mx-auto mb-6 rounded-none sm:rounded-lg" />
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white font-medium py-3 px-6 rounded-md hover:bg-gray-800 transition">Visit Website</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
