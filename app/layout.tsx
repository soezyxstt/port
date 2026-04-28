import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adi Haditya Nursyam | Portfolio",
  description: "Minimalist Engineering Portfolio of Adi Haditya Nursyam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <GoogleTagManager gtmId="G-T7KEWHLD9S" />
        <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
          <SmoothScroll>
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
