import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charlies-auto-service-website.vercel.app"),
  title: "Charlies Auto Service | Trusted Auto Repair in Lakewood, NJ",
  description:
    "5-star rated auto repair shop in Lakewood, NJ. Expert engine, brake, transmission, and electrical repair. Call (848) 222-1964 for honest, reliable service.",
  keywords:
    "auto repair, Lakewood NJ, mechanic, brake repair, engine repair, transmission, oil change, car repair near me",
  openGraph: {
    title: "Charlies Auto Service | Trusted Auto Repair in Lakewood, NJ",
    description:
      "5-star rated auto repair in Lakewood, NJ. Honest diagnostics, expert repairs. Call (848) 222-1964.",
    type: "website",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
