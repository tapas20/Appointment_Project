import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaUserMd } from "react-icons/fa";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] rounded-2xl px-6 sm:px-10 md:px-14 lg:px-16 my-20 mx-4 md:mx-10 shadow-xl">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-[-80px] left-[-80px] w-60 h-60 rounded-full bg-white/5"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Content */}
        <div className="flex-1 py-10 md:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Book Appointment With <br />
            <span className="text-[#FFD700]">100+ Trusted Doctors</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="flex items-center text-white/90">
              <FaUserMd className="mr-2 text-xl text-[#FFD700]" />
              <span className="text-sm sm:text-base">Verified Specialists</span>
            </div>
            <div className="flex items-center text-white/90">
              <FaCalendarAlt className="mr-2 text-xl text-[#FFD700]" />
              <span className="text-sm sm:text-base">Instant Appointments</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={() => {
                navigate("/login");
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center bg-white text-[#5f6FFF] px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Create Free Account
              <FaArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => {
                navigate("/doctors");
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Browse Doctors
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 lg:w-[40%] relative">
          <img
            className="w-full h-auto max-w-lg object-contain transform hover:scale-105 transition-transform duration-500"
            src={assets.appointment_img}
            alt="Doctor consultation"
          />
          
          {/* Floating badge */}
          <div className="absolute bottom-10 left-10 bg-white rounded-xl shadow-2xl p-4 w-40 hidden lg:block animate-float">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Available</p>
                <p className="font-bold text-sm text-[#5f6FFF]">24/7 Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;