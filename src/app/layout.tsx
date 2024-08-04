import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

const neueMachina = localFont({
  src: [
    {
      path: "./../assets/fonts/PPNeueMachina-PlainRegular.otf",
      weight: "400",
      style: "normal"
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vysobit",
  description: "Business stats tracking and analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(neueMachina.className, "antialiased")}>
        <header>
          <Navbar />
        </header>
          {children}
        <Footer />
      </body>
    </html>
  );
}
