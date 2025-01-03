import ContactForm from "@/ContactForm";
import Link from "next/link";
import Script from "next/script";
export default function Services() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10 flex-col">
      <div className="max-w-7xl bg-white p-10 rounded-lg shadow-md mb-10">
        <div>
          <h2 className="text-5xl text-black mb-7"> Services</h2>
          <p className="text-lg text-black mb-12">
            {" "}
            We offer 3 tiers of service to fit your needs. Please contact us for our best rates!
          </p>
          <ul className="list-none pl-5">
            <li className="text-lg text-black mb-7 before:content-['-'] before:text-black before:mr-2">
              Standard: you receive our simple forms that help you accurately obtain all necessary information for a
              complete and accurate MLS listing. One-time fee, and they are yours to use in perpetuity.
            </li>
            <li className="text-lg text-black mb-7 before:content-['-'] before:text-black before:mr-2">
              Deluxe: you receive our simple forms that help you accurately obtain all necessary information for a
              complete and accurate MLS listing. The forms are yours to use in perpetuity. You also receive a referral
              to M-Suite, the deluxe platform where the forms are hosted and updated for future new changes in
              regulations regarding property measurements.
            </li>
            <li className="text-lg text-black mb-12 before:content-['-'] before:text-black before:mr-2">
              Premium: our independent contractors will come to your property and take all measurements for you. One
              rate for non-subscribers in the coverage area, a lower rate for subscribers in the coverage area!
            </li>
          </ul>
          <p className="text-lg text-black">
            <Link href="/contact"> Contact us</Link> today to learn more about how we can help you achieve your goals.
          </p>
        </div>
      </div>
      <ContactForm title={"Sign Up Now"} width={"w-full"} maxWidth={"max-w-7xl"} />
    </div>
  );
}
