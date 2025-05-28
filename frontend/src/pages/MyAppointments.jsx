import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserMd,
  FaMoneyBillWave,
  FaTimes,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  // Sample appointment data
  const appointments = doctors.slice(0, 3).map((doctor) => ({
    ...doctor,
    date: "25 July 2025",
    time: "9:30 PM",
    status: "Upcoming", // Can be "Upcoming", "Completed", or "Cancelled"
    paymentStatus: "Pending", // Can be "Pending" or "Paid"
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <MdHealthAndSafety className="text-[#5f6FFF] text-3xl" />
          <h1 className="text-2xl font-bold text-gray-800">My Appointments</h1>
        </div>
        <div className="bg-[#5f6FFF]/10 text-[#5f6FFF] px-4 py-1 rounded-full text-sm font-medium">
          {appointments.length} Scheduled
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-6">
        {appointments.map((appointment, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 flex flex-col md:flex-row gap-6">
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <img
                  className="w-24 h-24 rounded-lg object-cover border-2 border-[#5f6FFF]/20"
                  src={appointment.image}
                  alt={appointment.name}
                />
              </div>

              {/* Appointment Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      <FaUserMd className="text-[#5f6FFF]" />
                      {appointment.name}
                    </h2>
                    <p className="text-[#5f6FFF] font-medium">
                      {appointment.speciality}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === "Upcoming"
                        ? "bg-blue-100 text-blue-800"
                        : appointment.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {appointment.status}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-3">
                    <FaCalendarAlt className="text-[#5f6FFF] mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">Date</p>
                      <p className="text-gray-800">{appointment.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-[#5f6FFF] mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">Time</p>
                      <p className="text-gray-800">{appointment.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:col-span-2">
                    <FaMapMarkerAlt className="text-[#5f6FFF] mt-1" />
                    <div>
                      <p className="text-gray-500 text-sm">Location</p>
                      <p className="text-gray-800">
                        {appointment.address.line1}
                      </p>
                      <p className="text-gray-800">
                        {appointment.address.line2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-200">
              <button className="flex items-center justify-center gap-2 px-6 py-2 bg-[#5f6FFF] text-white rounded-lg font-medium hover:bg-[#4a5bef] transition-colors">
                <FaMoneyBillWave />{" "}
                {appointment.paymentStatus === "Paid"
                  ? "View Receipt"
                  : "Pay Online"}
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-2 border border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors">
                <FaTimes /> Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (commented out but available if needed) */}
      {appointments.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCalendarAlt className="text-[#5f6FFF] text-2xl" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No Appointments Scheduled
          </h3>
          <p className="text-gray-500 mb-4">
            You don't have any upcoming appointments
          </p>
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="text-[#5f6FFF] font-medium hover:underline"
          >
            Book an Appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
