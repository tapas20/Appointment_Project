import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  FaMapMarkerAlt,
  FaRegClock,
  FaStar,
  FaStethoscope,
} from "react-icons/fa";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  // Get unique specialties from existing doctors data
  const uniqueSpecialities = [...new Set(doctors.map((doc) => doc.speciality))];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Header */}
      <div className="text-center mb-12 bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] rounded-2xl py-12 px-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find Your Perfect Doctor
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Connect with trusted specialists for personalized healthcare
        </p>
        <div className="mt-6 flex justify-center">
          <FaStethoscope className="text-3xl text-white opacity-80" />
        </div>
      </div>

      {/* Speciality Filter Pills */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Browse by Specialty
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigate("/doctors")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              !speciality
                ? "bg-[#5f6FFF] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Specialties
          </button>

          {uniqueSpecialities.map((spec) => (
            <button
              key={spec}
              onClick={() => navigate(`/doctors/${spec}`)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                speciality === spec
                  ? "bg-[#5f6FFF] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center">
        <p className="text-gray-600 font-medium">
          {speciality ? (
            <>
              <span className="text-[#5f6FFF]">{filterDoc.length}</span>{" "}
              {filterDoc.length === 1 ? "specialist" : "specialists"} in{" "}
              <span className="text-[#5f6FFF]">{speciality}</span>
            </>
          ) : (
            <>
              <span className="text-[#5f6FFF]">{filterDoc.length}</span>{" "}
              {filterDoc.length === 1 ? "doctor" : "doctors"} available
            </>
          )}
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterDoc.map((doctor, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            className="group flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-[#5f6FFF]/50"
          >
            {/* Doctor Image */}
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-50 to-gray-50">
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                src={doctor.image}
                alt={doctor.name}
              />

              {/* Availability Badge */}
              <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs font-medium text-gray-700">
                  Available Today
                </span>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="flex flex-col flex-grow p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#5f6FFF] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-gray-600">{doctor.speciality}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center bg-[#5f6FFF]/10 px-2 py-1 rounded">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-xs font-bold text-gray-700 ml-1">
                    {doctor.rating || "4.8"}
                  </span>
                </div>
              </div>

              {/* Location and Experience */}
              <div className="mt-auto">
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="text-[#5f6FFF] mr-2" />
                    <span className="text-sm">
                      {doctor.location || "City Hospital"}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaRegClock className="text-[#5f6FFF] mr-2" />
                    <span className="text-sm">
                      {doctor.experience || "10+"} years experience
                    </span>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  className="w-full mt-6 py-3 bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/appointment/${doctor._id}`);
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filterDoc.length === 0 && (
        <div className="col-span-full text-center py-16">
          <div className="bg-blue-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <FaStethoscope className="text-[#5f6FFF] text-2xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No doctors found
          </h3>
          <p className="text-gray-500 mb-4">
            {speciality
              ? `We currently don't have ${speciality} specialists`
              : "We currently don't have available doctors"}
          </p>
          <button
            onClick={() => navigate("/doctors")}
            className="text-[#5f6FFF] font-medium hover:underline"
          >
            View all specialties
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
