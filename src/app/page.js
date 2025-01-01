"use client"; // Required for stateful logic

import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/ContactForm";
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
    <div className="min-h-screen m-w-screen flex flex-col items-center overflow-auto">
      <ContactForm title={"Sign Up Now"} minH={"min-h-screen"} />
    </div>
  );
}
