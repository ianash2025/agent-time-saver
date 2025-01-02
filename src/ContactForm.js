"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
const ContactForm = ({ title, minH, width, maxWidth }) => {
  const [showDownload, setShowDownload] = useState(false);

  // useEffect(() => {
  //   const handleClick = () => {
  //     setShowDownload(true);
  //   };
  //   const button = document.getElementById("submit-button");
  //   console.log("🚀 ~ useEffect ~ button:", button);
  //   if (button) {
  //     button.addEventListener("click", handleClick);
  //   }
  //   return () => document.removeEventListener("click", handleClick);
  // });
  return (
    <div className={`${minH ? minH : ""} flex items-center justify-center p-4 ${width ? "w-full" : ""}`}>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" />
      {!showDownload ? (
        <form
          action="https://app.kit.com/forms/7513369/subscriptions"
          className={`${maxWidth ? "max-w-7xl" : "max-w-md"} bg-white p-6 rounded-lg shadow-md w-full `}
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
          <div data-element="header">
            <h2 className="form-title">{title ? title : "Contact Us"}</h2>
          </div>

          <div className="form-subheader" data-element="subheader">
            <p className="p-4">
              Receive a FREE training audio on best MLS/Square Footage practices when you sign up for our email list!
            </p>
            <p>This information can save you thousands of dollars.</p>
          </div>

          <ul className="formkit-alert formkit-alert-error text-red-600" data-element="errors" data-group="alert"></ul>

          <div data-element="fields" data-stacked="true" className="fields-container">
            <div>
              <input
                className="form-input"
                aria-label="First Name"
                name="fields[first_name]"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div>
              <input
                className="form-input"
                name="email_address"
                aria-label="Email Address"
                placeholder="Email Address"
                required
                type="email"
              />
            </div>
            <button id="submit-button" data-element="submit" className="primary-button">
              <span>Subscribe</span>
            </button>
          </div>
          <div className="formkit-guarantee" data-element="guarantee">
            <p>We won't send you spam. Unsubscribe at any time.</p>
          </div>
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
    </div>
  );
};

export default ContactForm;
