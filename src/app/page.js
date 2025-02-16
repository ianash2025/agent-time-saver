"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "@/ContactForm";
import { AudioLines, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-600 rounded-full text-sm font-medium">
              <AudioLines className="w-4 h-4" />
              Free Training Audio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900">
              Master MLS Listings Like a Pro
            </h1>

            <p className="text-xl text-gray-600">
              Get instant access to our expert guide on creating accurate, compliant, and high-converting MLS listings
              that stand out in today's market.
            </p>

            <ul className="space-y-4">
              {[
                "Learn the exact measurements required for MLS compliance",
                "Avoid common mistakes that can cost you time and money",
                "Get our proven templates for faster, more accurate listings",
                "Stay updated with the latest regulations and best practices",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-brand-100 border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-brand-600 text-sm">★</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">
                Joined by <span className="font-semibold">1,000+</span> real estate professionals
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 focus:border-2 focus:border-brand-600">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-brand-900 mb-3">Get Your Free Training Audio</h2>
              <p className="text-gray-600">
                Fill out the form below to receive instant access to our comprehensive MLS listing guide.
              </p>
            </div>

            <ContactForm title="Start Mastering MLS Listings" width="w-full" maxWidth="max-w-none" />

            <p className="text-sm text-gray-500 text-center mt-6">
              Join thousands of successful agents who have transformed their listing process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
