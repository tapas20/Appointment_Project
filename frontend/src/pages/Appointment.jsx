import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  FaRegCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserMd,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaPrint,
} from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Generate sample available slots
  const generateSlots = () => {
    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const daySlots = [];
      let startHour =
        i === 0 ? (today.getHours() < 10 ? 10 : today.getHours() + 1) : 10;

      for (let h = startHour; h < 18; h++) {
        for (let m = 0; m < 60; m += 30) {
          if (h === 17 && m > 0) break; // Don't go past 5:30pm

          const time = new Date(date);
          time.setHours(h, m, 0, 0);

          daySlots.push({
            datetime: time,
            time: time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
        }
      }

      slots.push(daySlots);
    }

    return slots;
  };

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      const doctor = doctors.find((doc) => doc._id === docId);
      setDocInfo(doctor);
      setDocSlots(generateSlots());
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [docId, doctors]);

  const handleBookAppointment = () => {
    if (slotTime) {
      setCurrentStep(2);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#5f6FFF] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading doctor details...</p>
        </div>
      </div>
    );
  }

  if (!docInfo) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <IoMdInformationCircleOutline className="text-red-500 text-2xl" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Doctor Not Found
          </h2>
          <p className="text-gray-600 mt-2">
            The requested doctor profile could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Progress Steps */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <div
            className={`flex flex-col items-center ${
              currentStep >= 1 ? "text-[#5f6FFF]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? "bg-[#5f6FFF] text-white" : "bg-gray-100"
              }`}
            >
              {currentStep > 1 ? <BsCheck2Circle className="text-xl" /> : "1"}
            </div>
            <span className="text-sm mt-2 font-medium">Select Slot</span>
          </div>
          <div
            className={`w-32 h-1 mx-2 ${
              currentStep >= 2 ? "bg-[#5f6FFF]" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`flex flex-col items-center ${
              currentStep >= 2 ? "text-[#5f6FFF]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? "bg-[#5f6FFF] text-white" : "bg-gray-100"
              }`}
            >
              2
            </div>
            <span className="text-sm mt-2 font-medium">Confirm</span>
          </div>
        </div>
      </div>

      {currentStep === 1 ? (
        <>
          {/* Doctor Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-10 border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative bg-gradient-to-br from-blue-50 to-gray-50">
                <img
                  className="w-full h-64 md:h-full object-cover"
                  src={docInfo.image}
                  alt={docInfo.name}
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-bold text-gray-800">
                    {docInfo.rating || "4.8"}
                  </span>
                </div>
              </div>

              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                      {docInfo.name}
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                        <BsCheck2Circle className="mr-1" /> Verified
                      </span>
                    </h1>
                    <p className="text-[#5f6FFF] font-medium mt-1 text-lg">
                      {docInfo.degree} - {docInfo.speciality}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Available Today
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                    <FaMapMarkerAlt className="text-[#5f6FFF] mt-1 mr-3 text-lg" />
                    <div>
                      <p className="text-gray-500 text-sm">Location</p>
                      <p className="font-medium">
                        {docInfo.location || "City General Hospital"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                    <FaRegCalendarAlt className="text-[#5f6FFF] mt-1 mr-3 text-lg" />
                    <div>
                      <p className="text-gray-500 text-sm">Experience</p>
                      <p className="font-medium">
                        {docInfo.experience || "10+"} years
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                    <FaUserMd className="text-[#5f6FFF] mt-1 mr-3 text-lg" />
                    <div>
                      <p className="text-gray-500 text-sm">Specialization</p>
                      <p className="font-medium">{docInfo.speciality}</p>
                    </div>
                  </div>
                  <div className="flex items-start bg-gray-50 p-4 rounded-xl">
                    <div className="text-[#5f6FFF] mt-1 mr-3 w-5 text-center text-lg">
                      ₹
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Consultation Fee</p>
                      <p className="font-medium">
                        {currencySymbol}
                        {docInfo.fees}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                    <IoMdInformationCircleOutline className="text-[#5f6FFF]" />{" "}
                    About Doctor
                  </h3>
                  <p className="text-gray-600">
                    {docInfo.about ||
                      "Dr. " +
                        docInfo.name +
                        " is a highly experienced " +
                        docInfo.speciality +
                        " with " +
                        docInfo.experience +
                        " of practice. Committed to providing the highest quality care to all patients."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Select Appointment Slot
            </h2>

            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center gap-3">
                <FaRegCalendarAlt className="text-[#5f6FFF] text-xl" /> Select
                Date
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-4 px-1">
                {docSlots.length > 0 &&
                  docSlots.map((item, index) => {
                    const date = item[0]?.datetime;
                    if (!date) return null;
                    const isToday =
                      new Date().toDateString() === date.toDateString();

                    return (
                      <div
                        onClick={() => setSlotIndex(index)}
                        className={`flex flex-col items-center justify-center min-w-[90px] p-4 rounded-xl cursor-pointer transition-all border-2 ${
                          slotIndex === index
                            ? "border-[#5f6FFF] bg-blue-50 shadow-sm"
                            : "border-gray-200 hover:border-[#5f6FFF]/50"
                        }`}
                        key={index}
                      >
                        <p className="font-medium text-sm">
                          {daysOfWeek[date.getDay()].substring(0, 3)}
                        </p>
                        <p className="text-2xl font-bold my-1">
                          {date.getDate()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {months[date.getMonth()].substring(0, 3)}
                        </p>
                        {isToday && (
                          <span className="text-xs bg-[#5f6FFF] text-white px-2 py-0.5 rounded-full mt-1">
                            Today
                          </span>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-4 flex items-center gap-3">
                <FaClock className="text-[#5f6FFF] text-xl" /> Available Time
                Slots
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {docSlots.length > 0 &&
                  docSlots[slotIndex].map((item, index) => (
                    <button
                      onClick={() => setSlotTime(item.time)}
                      className={`py-3 rounded-lg text-center transition-all border-2 ${
                        item.time === slotTime
                          ? "border-[#5f6FFF] bg-blue-50 text-[#5f6FFF] font-medium shadow-sm"
                          : "border-gray-200 hover:border-[#5f6FFF]/50 text-gray-700"
                      }`}
                      key={index}
                    >
                      {item.time.toLowerCase()}
                    </button>
                  ))}
              </div>
            </div>

            {/* Book Button */}
            <div className="flex justify-end">
              <button
                onClick={handleBookAppointment}
                disabled={!slotTime}
                className={`flex items-center px-8 py-4 rounded-full font-medium text-white shadow-lg transition-all ${
                  slotTime
                    ? "bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] hover:shadow-xl"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Continue <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Confirmation Step */
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-500 text-5xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Appointment Confirmed!
            </h2>
            <p className="text-gray-600 text-lg">
              Your appointment has been successfully booked
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl p-6 mb-8 bg-gray-50">
            <div className="flex items-start mb-6">
              <img
                className="w-20 h-20 rounded-lg object-cover mr-6 border-2 border-white shadow-sm"
                src={docInfo.image}
                alt={docInfo.name}
              />
              <div>
                <h3 className="text-xl font-bold">{docInfo.name}</h3>
                <p className="text-[#5f6FFF] font-medium">
                  {docInfo.speciality}
                </p>
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="font-medium text-gray-700">
                    {docInfo.rating || "4.8"} (
                    {Math.floor(Math.random() * 100) + 50} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Date & Time</p>
                <p className="font-medium text-lg">
                  {daysOfWeek[docSlots[slotIndex][0].datetime.getDay()]},{" "}
                  {docSlots[slotIndex][0].datetime.getDate()}{" "}
                  {months[docSlots[slotIndex][0].datetime.getMonth()]} •{" "}
                  {slotTime}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Consultation Fee</p>
                <p className="font-medium text-lg">
                  {currencySymbol}
                  {docInfo.fees}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Location</p>
                <p className="font-medium text-lg">
                  {docInfo.location || "City General Hospital"}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-gray-500 text-sm mb-1">Appointment Type</p>
                <p className="font-medium text-lg">In-Person Consultation</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-medium mb-3">Need to make changes?</h4>
              <div className="flex items-center gap-4">
                <button className="text-[#5f6FFF] hover:underline flex items-center">
                  <FaPhone className="mr-2" /> Call Clinic
                </button>
                <button className="text-[#5f6FFF] hover:underline flex items-center">
                  <FaEnvelope className="mr-2" /> Send Message
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-8 py-3 border-2 border-[#5f6FFF] text-[#5f6FFF] rounded-full font-medium hover:bg-[#5f6FFF] hover:text-white transition-colors mr-4"
            >
              Back to Doctor
            </button>
            <button
              onClick={() => window.print()}
              className="px-8 py-3 bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] text-white rounded-full font-medium hover:shadow-lg transition-all flex items-center mx-auto md:mx-0 mt-4 md:mt-0"
            >
              <FaPrint className="mr-2" /> Print Confirmation
            </button>
          </div>
        </div>
      )}

      {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
