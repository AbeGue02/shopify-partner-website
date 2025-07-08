import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  href: string;
  img: string;
  alt: string;
  title: string;
  description: string;
}

export default function PortfolioCard({ href, img, alt, title, description }: PortfolioCardProps) {
  // If href is an external URL, open in new tab; if internal, use default behavior
  const isExternal = href.startsWith('http');
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="bg-white shadow-md rounded-lg overflow-hidden block hover:shadow-lg transition-shadow portfolio-card"
    >
      <Image src={img} alt={alt} width={500} height={300} className="portfolio-image" />
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
