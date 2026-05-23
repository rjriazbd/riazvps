import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "বাংলা OTT - বাংলাদেশের সেরা স্ট্রিমিং প্ল্যাটফর্ম",
  description: "বাংলা সিনেমা, নাটক, ওয়েব সিরিজ এবং আরও অনেক কিছু দেখুন বাংলা OTT-তে। বাংলাদেশের নিজস্ব OTT প্ল্যাটফর্ম।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
