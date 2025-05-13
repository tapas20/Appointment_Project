import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaRegClock, FaStar } from "react-icons/fa";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#5f6FFF]">Related</span> Doctors
          </h1>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {relDocs.slice(0, 5).map((doctor, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${doctor._id}`);
                scrollTo(0, 0);
              }}
              className="group flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-[#5f6FFF]/50 relative"
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden h-60 bg-gradient-to-br from-blue-50 to-gray-50">
                <img
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  src={doctor.image}
                  alt={doctor.name}
                />

                {/* Specialty Badge */}
                <div className="absolute top-4 left-4 bg-[#5f6FFF] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {doctor.speciality}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-bold text-gray-800">
                    {doctor.rating || "4.8"}
                  </span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5f6FFF] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-[#5f6FFF] font-medium text-sm mt-1">
                    {doctor.qualification || "MD, MBBS"}
                  </p>
                </div>

                {/* Doctor Details */}
                <div className="mt-auto space-y-3">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="text-[#5f6FFF] mr-3 min-w-[16px]" />
                    <span className="text-sm">
                      {doctor.location || "City General Hospital"}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaRegClock className="text-[#5f6FFF] mr-3 min-w-[16px]" />
                    <span className="text-sm">
                      {doctor.experience || "10+"} years experience
                    </span>
                  </div>

                  {/* Consultation Fee */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-gray-800 font-medium">
                      <span className="text-xs text-gray-500">From</span> ₹
                      {doctor.fee || "500"}
                    </div>
                    <button
                      className="bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300 shadow-md flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/appointment/${doctor._id}`);
                      }}
                    >
                      Book Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 shadow-lg"
            onClick={() => {
              navigate("/doctors");
              window.scrollTo(0, 0);
            }}
          >
            Explore All Specialists
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedDoctors;
