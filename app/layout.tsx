import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/site-header";

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robin Urban — Bridging the Gap",
  description:
    "Author Robin Urban. Bridging the Gap: Between Who God Says You Are and How You Live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
