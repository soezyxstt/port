import type { Metadata } from "next";
import { DM_Mono, Syne } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
        className={`${syne.variable} ${dmMono.variable} h-full antialiased`}
      >
      <GoogleTagManager gtmId="G-T7KEWHLD9S" />
        <body className="min-h-full flex flex-col bg-background text-foreground">
          <SmoothScroll>
            <CustomCursor />
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </SmoothScroll>
        </body>
      </html>
    </ViewTransitions>
  );
}
