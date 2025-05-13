import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="py-16 px-4 sm:px-8 bg-gradient-to-b from-white to-[#f8f9ff]" id="speciality">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Find by <span className="text-[#5f6FFF]">Medical Speciality</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Connect with top specialists across various medical fields for personalized care.
          </p>
        </div>

        {/* Speciality Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {specialityData.map((item, index) => (
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="group relative bg-white rounded-xl shadow-md hover:translate-y-[-6px] hover:shadow-xl transition-all duration-300 p-6 text-center cursor-pointer overflow-hidden"
              key={index}
              to={`/doctors/${item.speciality}`}
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5f6FFF]/10 to-[#8B9AFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon container with subtle gradient border */}
              <div className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-full bg-white p-3 shadow-sm border border-gray-100 group-hover:border-[#5f6FFF]/30 transition-all duration-300">
                <img 
                  className="w-full h-full object-contain" 
                  src={item.image} 
                  alt={item.speciality} 
                />
              </div>
              
              <h3 className="relative z-10 font-medium text-gray-800 group-hover:text-[#5f6FFF] transition-colors duration-300">
                {item.speciality}
              </h3>
              
              {/* Subtle animation on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#5f6FFF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/doctors" 
            className="inline-flex items-center px-8 py-3 bg-[#5f6FFF] text-white rounded-full font-medium shadow-md hover:bg-[#4a5bef] hover:shadow-lg transition-all duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            View All Specialities
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialityMenu;