import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Portfolio & Insights",
  description: "Exploring the intersection of design and engineering.",
};

// Next.js passes the 'params' prop to the layout automatically
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Define as Promise
}) {
  // Logic to determine direction
  const { locale } = await params; // Await it here
  const isAr = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isAr ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {/* Navbar handles its own locale logic internally via useParams() */}
        <Navbar />

        {/* Main content area with padding for fixed header */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Popupsmart Script */}
        <Script
          src="https://cdn.popupsmart.com/bundle.js"
          data-id="1040322"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
