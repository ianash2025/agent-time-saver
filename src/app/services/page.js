import ContactForm from "@/ContactForm";
import Link from "next/link";
import { ArrowRight, CheckCircle, Package, Crown, Ruler } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-10 flex-col bg-gray-50">
      <div className="max-w-7xl w-full mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6 text-center">Our Services</h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          Choose the perfect plan for your needs. Get started today with our risk-free service packages.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Standard Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">Standard</h3>
              <p className="text-gray-600 mb-6">
                Perfect for individual agents looking to streamline their listing process.
              </p>
              <ul className="space-y-3 mb-8">
                {["Simple MLS-ready forms", "Lifetime access", "One-time payment", "Basic support"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 mt-auto">
              <button className="w-full px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Deluxe Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-brand-600 hover:shadow-xl transition-shadow relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-brand-100 text-brand-600 text-sm font-medium rounded-full">
                Most Popular
              </span>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">Deluxe</h3>
              <p className="text-gray-600 mb-6">Advanced features and M-Suite integration for growing businesses.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "All Standard features",
                  "M-Suite platform access",
                  "Automatic regulation updates",
                  "Priority support",
                  "Form customization",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 mt-auto">
              <button className="w-full px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 group font-medium">
                Upgrade to Deluxe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Ruler className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-900 mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">Full-service solution with on-site measurement services.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "All Deluxe features",
                  "On-site measurements",
                  "Professional contractors",
                  "Subscriber discounts",
                  "Coverage area service",
                  "Premium support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 mt-auto">
              <button className="w-full px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 group">
                Contact for Premium
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl w-full">
        <ContactForm title="Get Started Today" width="w-full" maxWidth="max-w-7xl" />
      </div> */}
    </div>
  );
}
