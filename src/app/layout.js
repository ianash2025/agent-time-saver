import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agent Time Saver",
  description: "Landing page to download free audio file.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center`}
        style={{ backgroundImage: "url('./HeroImage.jpg)" }}
      >
        <Navbar />
        {children}
      </body>
      <Script async data-uid="8edba3355a" src="https://appraiser-time-saver.kit.com/8edba3355a/index.js" />
    </html>
  );
}
