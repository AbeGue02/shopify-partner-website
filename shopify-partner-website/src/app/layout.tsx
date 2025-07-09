import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappButton from "./components/WhatsappButton";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AG Studio | Shopify Partner",
  description: "Elevate your Shopify store with custom development, theme optimization, and app integrations.",
  openGraph: {
    title: "AG Studio | Shopify Partner",
    description: "Elevate your Shopify store with custom development, theme optimization, and app integrations.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AG Studio Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsappButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
