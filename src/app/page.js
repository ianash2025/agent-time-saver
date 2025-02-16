"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/ContactForm";
import { Construction, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showDownload, setShowDownload] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && email.includes("@")) {
      setShowDownload(true);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full text-center space-y-8 bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto">
          <Construction className="w-8 h-8 text-brand-600" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900">Something Amazing Is Coming</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're working hard to bring you a better experience. In the meantime, leave your contact information and
            we'll notify you when we launch.
          </p>
        </div>

        {/* <div className="w-full max-w-md mx-auto">
          <ContactForm title="Stay Updated" width="w-full" maxWidth="max-w-md" />
        </div> */}

        <div className="pt-8 border-t border-gray-100">
          <p className="text-gray-500">
            Need immediate assistance? Email us at{" "}
            <a href="mailto:agenttimesaver1@gmail.com" className="text-brand-600 hover:text-brand-700 font-medium">
              agenttimesaver1@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Optional: Launch date or progress indicator */}
      <div className="mt-8 flex items-center gap-2 text-gray-500">
        <div className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></div>
        <span>Launching Soon</span>
      </div>
    </div>
  );
}
