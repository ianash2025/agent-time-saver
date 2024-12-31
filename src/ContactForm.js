"use-client";
import React from "react";
import Script from "next/script";
// import "./form.css";
const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" />
      <form
        action="https://app.kit.com/forms/7513369/subscriptions"
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        data-sv-form="7513369"
        data-uid="e21b9c7e49"
        data-format="inline"
        data-version="5"
        data-options='{
        "settings": {
          "after_subscribe": {
            "action": "message",
            "success_message": "Success! Now check your email to confirm your subscription.",
            "redirect_url": ""
          },
          "modal": {
            "trigger": "timer",
            "timer": 5,
            "devices": "all",
            "show_once_every": 15
          },
          "powered_by": {
            "show": false
          }
        },
        "version": "5"
      }'
      >
        {/* Header */}
        <div data-element="header">
          <h2 className="text-2xl text-black font-bold mb-4">Contact Us(USE THIS ONE)</h2>
        </div>

        {/* Subheader */}
        <div className="text-black mb-4" data-element="subheader">
          <p>Receive a FREE training audio on best MLS/Square Footage practices when you sign up for our email list!</p>
          <p>This information can save you thousands of dollars.</p>
        </div>

        {/* Error messages */}
        <ul className="formkit-alert formkit-alert-error text-red-600" data-element="errors" data-group="alert"></ul>

        {/* Fields */}
        <div data-element="fields" data-stacked="true" className="space-y-4">
          <div style={{ paddingBottom: "1.5rem" }}>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="First Name"
              name="fields[first_name]"
              placeholder="First Name"
              type="text"
            />
          </div>
          <div style={{ paddingBottom: "1.5rem" }}>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required
              type="email"
            />
          </div>
          <button
            data-element="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none mb-4"
          >
            <span>Subscribe</span>
          </button>
        </div>

        {/* Guarantee */}
        <div className="formkit-guarantee text-black text-sm mt-4" data-element="guarantee">
          <p>We won't send you spam. Unsubscribe at any time.</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
