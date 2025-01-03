import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex p-4 shadow-md">
      <div className=" w-full container mx-auto">
        <Link href="/">
          <h1 className="nav-title">Agent Time Saver</h1>
        </Link>
        <p className="nav-description">Your solution to accurate property measurements and MLS listings</p>
        <div className="flex justify-center">
          <Link href="/about">
            <p className="nav-links">About Us</p>
          </Link>
          <Link href="/contact" className="nav-links">
            <p>Contact Us</p>
          </Link>
          <Link href="/services" className="nav-links">
            <p>Services</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
