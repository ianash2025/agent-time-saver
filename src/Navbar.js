import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex  bg-blue-600 p-4 shadow-md">
      <div className=" w-full container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-bold text-black text-center mb-6">Agent Time Saver</h1>
        </Link>
        <p className="text-lg text-center text-black mb-8">
          Your solution to accurate property measurements and MLS listings
        </p>
        <div className="flex justify-center">
          <Link href="/about">
            <p className="text-white hover:underline text-lg p-4">About Us</p>
          </Link>
          <Link href="/contact" className="text-white hover:underline p-4 text-lg">
            <p>Contact Us</p>
          </Link>
          <Link href="/services" className="text-white hover:underline p-4 text-lg">
            <p>Services</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
