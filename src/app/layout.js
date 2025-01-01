import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import "./form.css";
import "@/ContactForm";
import Navbar from "@/Navbar";
import Footer from "@/Footer";
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
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen antialiased bg-cover bg-center`}
        style={{ backgroundImage: "url('./HeroImage.jpg)" }}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
