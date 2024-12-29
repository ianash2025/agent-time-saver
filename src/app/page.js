"use client"; // Required for stateful logic

import { useState } from "react";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-sky-400 text-center mb-6">Welcome to Our Service</h1>
      <p className="text-lg text-center text-sky-400 mb-8">Enter your email to download your free audio file.</p>
      {!showDownload ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
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
          <h2 className="text-2xl text-sky-400 font-bold mb-4">Thank you!</h2>
          <p className="mb-4 text-sky-400">Your audio file is ready to download.</p>
          <a
            href="/downloads/sample-audio.mp3"
            download
            className="block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Download Audio File
          </a>
        </div>
      )}
    </div>
  );
}
