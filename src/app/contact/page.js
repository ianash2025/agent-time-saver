"use client";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create email subject from name
    const subject = encodeURIComponent(`New message from ${formData.name}`);

    // Create email body with formatted message including sender's details
    const body = encodeURIComponent(`${formData.message}`);

    // Generate mailto link
    const mailtoLink = `mailto:agenttimesaver1@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you maximize your real estate business potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-600" />
                  <span className="text-gray-600">agenttimesaver1@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-brand-600" />
                  <span className="text-gray-600">(414) 801-7602</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
