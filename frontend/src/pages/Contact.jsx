import React from "react";
import { assets } from "../assets/assets";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebookF, FaArrowRight } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in <span className="text-[#5f6FFF]">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for inquiries, support, or just to say hello.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Contact Image */}
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-xl shadow-xl"
            src={assets.contact_image}
            alt="Contact our team"
          />
        </div>

        {/* Contact Information */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="bg-[#5f6FFF] w-2 h-8 rounded-full"></span>
              Our Office
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-[#5f6FFF] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    54709 Willms Station <br />
                    Suite 350, Washington, USA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
                  <FaPhone className="text-[#5f6FFF] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">(415) 555‑0132</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
                  <FaEnvelope className="text-[#5f6FFF] text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">greatstackdev@gmail.com</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 pt-4">
                <a href="#" className="bg-gray-100 p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          {/* Careers Section */}
          <div className="bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] rounded-xl shadow-lg p-8 mt-8 text-white">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <MdWorkOutline className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Careers at Prescripto</h2>
                <p className="mb-6 opacity-90">
                  Learn more about our teams and exciting job opportunities.
                </p>
                <button className="bg-white text-[#5f6FFF] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Explore Jobs <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mt-20 border border-gray-100 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Send Us a Message</h2>
        <p className="text-gray-600 text-center mb-8">We'll get back to you within 24 hours</p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF] focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF] focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF] focus:border-transparent"
              placeholder="How can we help?"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF] focus:border-transparent"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;