import type { Metadata } from "next";
import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import Loader from "@/components/loader";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "MJA: Portfolio Website",
  description: "Michael Jermaine Anderson's Portfolio",
  icons: { icon: "/M.png" }, // Ensures the favicon appears
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <Loader />
        {children}
      </body>
    </html>
  );
}
