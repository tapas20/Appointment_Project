import React from "react";
import { assets } from "../assets/assets";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f8f9ff] pt-20 pb-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <img className="w-40" src={assets.logo} alt="Company Logo" />
            <p className="text-gray-600 leading-relaxed">
              Connecting patients with trusted healthcare professionals. Our mission is to make quality healthcare accessible to everyone.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-white p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white p-3 rounded-full text-[#5f6FFF] hover:bg-[#5f6FFF] hover:text-white transition-colors duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Find a Doctor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Online Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Emergency Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Health Checkup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Medicine Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5f6FFF] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#5f6FFF] rounded-full"></span>
                  Specialist Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <FaPhone className="text-[#5f6FFF] mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 7848009613</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#5f6FFF] mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>tapasjyoti@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#5f6FFF] mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>123 Medical Plaza, Health City, IN 123456</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Newsletter */}
        <div className="border-t border-gray-200 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MedConnect. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f6FFF] focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5f6FFF] text-white p-2 rounded-full hover:bg-[#4a5bef] transition-colors">
                  <FaArrowRight />
                </button>
              </div>
              <button className="bg-[#5f6FFF] text-white px-6 py-3 rounded-full hover:bg-[#4a5bef] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;