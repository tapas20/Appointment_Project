import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] rounded-2xl px-6 md:px-10 lg:px-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full bg-white/10"></div>
        <div className="absolute bottom-[-80px] left-[-80px] w-60 h-60 rounded-full bg-white/5"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 rounded-full bg-white/8"></div>
      </div>

      <div className="relative flex flex-col md:flex-row flex-wrap z-10">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[8vw]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight">
            Find & Book <span className="text-[#FFD700]">Top Doctors</span> <br />
            Near You
          </h1>
          
          <p className="text-white/90 text-lg font-light max-w-md">
            Instant appointments with trusted healthcare professionals. 
            Your health is our priority - seamless care at your fingertips.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <a 
              href="#speciality" 
              className="flex items-center gap-2 bg-white px-8 py-4 rounded-full text-[#5f6FFF] font-medium text-sm shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              Book Now 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#how-it-works" 
              className="flex items-center gap-2 border-2 border-white/30 px-6 py-3.5 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
            >
              How it works
            </a>
          </div>
          
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white" src={assets.profile_pic} alt="Patient" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src={assets.profile_pic} alt="Patient" />
              <img className="w-10 h-10 rounded-full border-2 border-white" src={assets.profile_pic} alt="Patient" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                +2.5k
              </div>
            </div>
            <div className="text-white text-sm">
              <p className="font-medium">Trusted by thousands</p>
              <p className="text-white/80 text-xs">4.9/5 (2,458 reviews)</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 relative">
          <img 
            className="w-full md:absolute bottom-0 h-auto max-h-[600px] object-contain rounded-lg transform hover:scale-105 transition-transform duration-500" 
            src={assets.header_img} 
            alt="Doctor smiling" 
          />
          
          {/* Floating badge */}
          <div className="absolute bottom-10 left-10 bg-white rounded-xl shadow-2xl p-4 w-40 hidden md:block animate-float">
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

export default Header;