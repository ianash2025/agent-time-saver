"use client"; // Required for stateful logic

import { useState } from "react";
import Image from "next/image";
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
      <h1 className="text-4xl font-bold text-black text-center mb-6">Agent Time Saver</h1>
      <p className="text-lg text-center text-black mb-8">
        Your solution to accurate property measurements and MLS listings
      </p>
      {/* <Image
        style={{ paddingBottom: 20 }}
        src="/HeroImage.jpg" // Replace with your image path
        alt="A description of the image"
        width={screen.width} // Desired width
        height={300} // Desired height
        priority // Optional: For lazy-loading optimization
      /> */}
      {/* <div className="my-form flex flex-col h-2/5 items-center w-full justify-end">
        {!showDownload ? (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="email" className="block text-black text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 text-sky-400 focus:ring-blue-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-2xl text-black font-bold mb-4">Thank you!</h2>
            <p className="mb-4 text-black">Your audio file is ready to download.</p>
            <a
              href="/downloads/Agent Time Saver widget.mp3"
              download
              className="block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Download Audio File
            </a>
          </div>
        )}
      </div> */}
    </div>
  );
}
