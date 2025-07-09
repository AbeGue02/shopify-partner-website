import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import React from "react";

const portfolioData: Record<string, { title: string; img: string; description: string; url: string }> = {
  "best-perfumes-miami": {
    title: "Best Perfumes Miami – Full Shopify Ecosystem Integration",
    img: "/BestPerfumesMiami.png",
    description: `Theme customization, POS Implementation, Quickbooks Integration, Product Listing + Inventory Synchronization

        Project Scope:
        A complete digital transformation and retail infrastructure overhaul for Best Perfumes Miami, aimed at bridging in-store and online operations while optimizing for both B2B and B2C sales.

        Key Contributions:
        • Mass Product Migration & Syncing: Successfully imported and onboarded over 8,000 products from QuickBooks into Shopify. Implemented ongoing synchronization protocols to ensure real-time updates of inventory and pricing between systems.
        • Customer Segmentation & Sales Insights: Developed advanced customer segmentation to provide detailed sales insights by channel and customer type, enhancing decision-making for marketing and sales strategies.
        • Fraud Prevention Automation: Deployed fraud analysis tools and custom business automations to reduce risk by verifying customer payment methods and identifying suspicious orders before processing.
        • Theme Design & Visual Customization: Designed and customized the store’s theme, including the creation of original graphic assets to match brand identity and elevate user experience.
        • POS Pro Integration & Fulfillment Setup: Integrated Shopify POS Pro to enable seamless in-store transactions and manage inventory fulfillment, bridging the gap between online and physical retail environments.
        • SEO-Optimized Product Descriptions: Authored and implemented optimized descriptions for all 8,000+ products to improve search engine visibility and drive organic traffic.`,
    url: "https://bestperfumesmiami.com"
  },
  "the-nose-knows-perfumes": {
    title: "The Nose Knows Perfumes",
    img: "/TheNoseKnowsPerfumes.png",
    description: `Shopify Store Creation, Product Listings, Marketing Tools Implementation, Instagram & Facebook Shop Integration, Headless Storefronts

        Project Scope:
        A fully self-managed Shopify store and mobile commerce solution built from the ground up, serving as a real-world demonstration of end-to-end eCommerce development, marketing, and operations.

        Key Contributions:
        • Full Store Build: Conceptualized, designed, and launched the Shopify store from scratch, including product architecture, branding, and digital infrastructure.
        • Product Catalog Management: Manually added and curated all product listings with high-quality images, compelling copy, and optimized categorization for seamless navigation.
        • Social Commerce Integration: Connected the store with major social platforms to enable native shopping experiences and boost discoverability through social selling.
        • Email Marketing Implementation: Established and automated email marketing flows for abandoned cart recovery, product announcements, and customer engagement campaigns.
        • Content Marketing & Blogging: Developed and published blog content tailored to fragrance education, product discovery, and brand storytelling to drive organic traffic and customer retention.
        • Mobile App Development: Built a custom storefront using React Native, delivering a dedicated mobile shopping experience for iOS and Android users that syncs with the Shopify backend.
        • Influencer Marketing via Shopify Collabs: Integrated Shopify Collabs to recruit and manage micro-influencers, enabling performance-based marketing and UGC-driven sales.`,
    url: "https://thenoseknowsperfumes.com"
  },
  "neos-perfumes": {
    title: "Neo's Perfumes – Full-Scale Digital Revamp & Multichannel Expansion",
    img: "/NeosPerfumes.jpg",
    description: `Shopify Store Theme Redesign, Quickbooks Integration, Product Synchronization, POS Implementation

        Project Scope:
        A comprehensive Shopify store build and operational upgrade for NeosPerfumes, aimed at streamlining commerce across digital and physical channels while optimizing for customer segmentation and scalability.

        Key Contributions:
        • Mass Product Onboarding & Syncing: Imported and configured over 8,000 products from QuickBooks to Shopify, with automated syncing protocols for real-time inventory and pricing updates, supporting both B2B and B2C pricing structures.
        • Storefront Redesign: Fully redesigned the online store with a sleek, commerce-optimized layout, creating a modern and professional shopping experience that aligns with the brand’s identity.
        • POS Pro Integration & Employee Role Management: Integrated Shopify POS Pro for in-store operations and implemented customized staff permissions to streamline responsibilities and secure access levels for each employee.
        • Customer Segmentation & Analytics: Built segmentation logic that allows store administrators to track performance by customer group and identify key sales drivers across channels.
        • SEO-Optimized Product Descriptions: Wrote and implemented search engine–optimized descriptions for all 8,000+ products to enhance discoverability and increase organic traffic.
        • Social Channel Integration: Connected the Shopify storefront to major social media platforms, enabling sales through additional channels and expanding customer reach.`,
    url: "https://neosperfumes.net"
  }
};

// Remove async, use standard synchronous params for Next.js app directory
export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData[slug];
  if (!project) return notFound();

  function renderDescription(desc: string) {
    // Make words before a colon bold, support **bold** and newlines
    const html = desc
      .replace(/(^|\n)([^\n:]+?):/g, (match, p1, p2) => `${p1}<strong>${p2.trim()}</strong>:`)
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br />');
    return <div className="text-left" dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <Header />
      <main className="flex-1 px-0 py-16 bg-gradient-to-br from-white to-gray-100">
        <div className="w-full max-w-6xl mx-auto text-center bg-transparent rounded-none shadow-none p-0 sm:bg-white sm:rounded-xl sm:shadow-lg sm:p-8">
          <Image src={project.img} alt={project.title} width={500} height={300} className="mx-auto mb-6 rounded-none sm:rounded-lg" />
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="text-gray-700 mb-6">
            {renderDescription(project.description)}
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0288d1] text-white font-medium py-3 px-6 rounded-md hover:bg-[#0277bd] transition">
            Visit Website
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
