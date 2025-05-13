import React from "react";
import { assets } from "../assets/assets";
import {
  FaHeartbeat,
  FaCalendarAlt,
  FaUserMd,
  FaLightbulb,
  FaHandHoldingHeart,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About <span className="text-[#5f6FFF]">Prescripto</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing healthcare access through technology and compassion
        </p>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-xl shadow-xl"
            src={assets.about_image}
            alt="Healthcare team"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white p-1 rounded-full w-16 mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              At Prescripto, we're transforming healthcare management by making
              it simple, accessible, and personalized. We bridge the gap between
              patients and providers through innovative technology.
            </p>
            <p className="text-lg">
              Founded with a vision to democratize healthcare access, we've
              helped thousands of patients connect with trusted medical
              professionals in their communities.
            </p>
            <div className="flex items-start gap-4 mt-8">
              <FaHeartbeat className="text-[#5f6FFF] text-2xl mt-1" />
              <div>
                <h3 className="font-bold text-gray-800">Health First</h3>
                <p className="text-gray-600">
                  Your wellbeing is at the core of everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why <span className="text-[#5f6FFF]">Choose Prescripto</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          We're redefining what it means to access quality healthcare
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#5f6FFF]/30 group">
            <div className="bg-[#5f6FFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5f6FFF] group-hover:text-white transition-colors duration-300">
              <FaCalendarAlt className="text-[#5f6FFF] text-2xl group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency</h3>
            <p className="text-gray-600">
              Streamlined appointment scheduling that fits seamlessly into your
              busy lifestyle. Book appointments in seconds, not hours.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#5f6FFF]/30 group">
            <div className="bg-[#5f6FFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5f6FFF] group-hover:text-white transition-colors duration-300">
              <FaUserMd className="text-[#5f6FFF] text-2xl group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Convenience
            </h3>
            <p className="text-gray-600">
              Access our network of trusted, verified healthcare professionals
              in your area, available when you need them.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#5f6FFF]/30 group">
            <div className="bg-[#5f6FFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5f6FFF] group-hover:text-white transition-colors duration-300">
              <FaLightbulb className="text-[#5f6FFF] text-2xl group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Personalization
            </h3>
            <p className="text-gray-600">
              Tailored recommendations and smart reminders to help you stay on
              top of your health journey.
            </p>
          </div>

          {/* Additional Cards */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#5f6FFF]/30 group">
            <div className="bg-[#5f6FFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5f6FFF] group-hover:text-white transition-colors duration-300">
              <FaShieldAlt className="text-[#5f6FFF] text-2xl group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
            <p className="text-gray-600">
              Your health data is protected with enterprise-grade security and
              strict privacy controls.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#5f6FFF]/30 group">
            <div className="bg-[#5f6FFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5f6FFF] group-hover:text-white transition-colors duration-300">
              <FaHandHoldingHeart className="text-[#5f6FFF] text-2xl group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Care</h3>
            <p className="text-gray-600">
              Our patient support team is available 24/7 to ensure you have the
              best possible experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#5f6FFF]/30 group">
            <div className="bg-[#5f6FFF]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5f6FFF] group-hover:text-white transition-colors duration-300">
              <FaHeartbeat className="text-[#5f6FFF] text-2xl group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Continuously improving our platform with the latest healthcare
              technology advancements.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] rounded-2xl p-8 md:p-12 text-white mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">10K+</p>
            <p className="text-sm md:text-base">Patients Served</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">500+</p>
            <p className="text-sm md:text-base">Verified Doctors</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">98%</p>
            <p className="text-sm md:text-base">Satisfaction Rate</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold mb-2">24/7</p>
            <p className="text-sm md:text-base">Support Available</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#5f6FFF]">Vision</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Creating a healthier future through accessible healthcare
        </p>
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            We envision a world where quality healthcare is accessible to
            everyone, regardless of location or circumstance. By leveraging
            technology and compassionate care, we're building bridges between
            patients and providers to create healthier communities.
          </p>
          <button className="bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all">
            Join Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
