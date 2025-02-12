"use client";

import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {

  return (
    <section className="bg-gradient-to-b from-white to-beige py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-turquoise rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-4xl font-semibold text-beige mb-6">Get in Touch</h3>
          <p className="text-beige mb-8">
              We would love to hear from you! Contact us via any of the channels below:
            </p>

            <ul className="space-y-5 text-lg">
              {/* Phone */}
              <li className="flex items-center justify-center space-x-3">
                <i className="bx bx-phone text-black text-2xl"></i>
                <a
                  href="tel:+254727407775"
                  className="text-black hover:text-beige transition duration-300"
                >
                  +254 727 407 775
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center justify-center space-x-3">
                <i className="bx bx-envelope text-black text-2xl"></i>
                <a
                  href="mailto:beyond_brdr@yahoo.com"
                  className="text-black hover:text-beige transition duration-300"
                >
                  beyond_brdr@yahoo.com
                </a>
              </li>
            </ul>

            {/* WhatsApp Chat Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/254727407775?text=Hello!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
              >
                <FaWhatsapp className="mr-2" size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        {/* Right Side - FAQs and Testimonials */}
        <div className="space-y-8">
          {/* FAQs */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-4xl font-semibold text-gray-900 mb-6">FAQs</h3>
            <details className="mb-4">
              <summary className="text-lg font-semibold text-gray-700 cursor-pointer">How do I get a quote?</summary>
              <p className="text-gray-600 mt-2">Get in touch with us by clicking either the phone number for a direct call or chat with us via email or whatsapp.</p>
            </details>
            <details className="mb-4">
              <summary className="text-lg font-semibold text-gray-700 cursor-pointer">How much weight can you transport?</summary>
              <p className="text-gray-600 mt-2">The range of weight we can handle per vehicle is between 3 Tonnes to 26 Tonnes.</p>
            </details>
            <details className="mb-4">
              <summary className="text-lg font-semibold text-gray-700 cursor-pointer">Do you offer international shipping?</summary>
              <p className="text-gray-600 mt-2">Yes! We provide logistics solutions across borders.</p>
            </details>
            <details className="mb-4">
              <summary className="text-lg font-semibold text-gray-700 cursor-pointer">What distance is the furthest you can transport to?</summary>
              <p className="text-gray-600 mt-2">We can transport goods anywhere and everywhere.</p>
            </details>
          </div>

          {/* Testimonials
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-4xl font-semibold text-gray-900 mb-6">Client Testimonials</h3>
            <p className="italic text-gray-700">
              Beyond Borders provided an exceptional service. They made our logistics process smooth and hassle-free!  
            </p>
            <p className="text-gray-900 mt-2 font-bold">- Jane Doe, CEO of LogisticsPro</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
