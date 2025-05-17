import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaVenusMars,
  FaBirthdayCake,
  FaEdit,
  FaSave,
} from "react-icons/fa";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Tapas Jyoti",
    image: assets.profile_pic,
    email: "tapas@gmail.com",
    phone: "+91 7848009613",
    address: {
      line1: "51th Nandanvihar, Bhubaneswar",
      line2: "Odisha, India",
    },
    gender: "Male",
    dob: "2004-05-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <div className="relative">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-[#5f6FFF]/20"
            src={userData.image}
            alt="Profile"
          />
          {isEdit && (
            <button className="absolute bottom-0 right-0 bg-[#5f6FFF] text-white p-2 rounded-full shadow-md hover:bg-[#4a5bef] transition-colors">
              <FaEdit size={14} />
            </button>
          )}
        </div>

        <div className="flex-1">
          {isEdit ? (
            <input
              className="text-3xl font-bold text-gray-900 bg-gray-50 p-2 rounded-lg w-full mb-2 focus:ring-2 focus:ring-[#5f6FFF]"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              value={userData.name}
            />
          ) : (
            <h1 className="text-3xl font-bold text-gray-900">
              {userData.name}
            </h1>
          )}
          <p className="text-gray-500">Patient Profile</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaUser className="text-[#5f6FFF]" /> Contact Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
              <FaEnvelope className="text-[#5f6FFF]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <p className="text-gray-900">{userData.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
              <FaPhone className="text-[#5f6FFF]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Phone</p>
              {isEdit ? (
                <input
                  className="text-gray-900 bg-gray-50 p-2 rounded-lg w-full focus:ring-2 focus:ring-[#5f6FFF]"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-900">{userData.phone}</p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-4 md:col-span-2">
            <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
              <FaMapMarkerAlt className="text-[#5f6FFF]" />
            </div>
            <div className="flex-1">
              <p className="text-gray-500 text-sm">Address</p>
              {isEdit ? (
                <>
                  <input
                    className="text-gray-900 bg-gray-50 p-2 rounded-lg w-full mb-2 focus:ring-2 focus:ring-[#5f6FFF]"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="text-gray-900 bg-gray-50 p-2 rounded-lg w-full focus:ring-2 focus:ring-[#5f6FFF]"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </>
              ) : (
                <>
                  <p className="text-gray-900">{userData.address.line1}</p>
                  <p className="text-gray-900">{userData.address.line2}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaUser className="text-[#5f6FFF]" /> Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
              <FaVenusMars className="text-[#5f6FFF]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Gender</p>
              {isEdit ? (
                <select
                  className="text-gray-900 bg-gray-50 p-2 rounded-lg w-full focus:ring-2 focus:ring-[#5f6FFF]"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="text-gray-900">{userData.gender}</p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#5f6FFF]/10 p-3 rounded-full">
              <FaBirthdayCake className="text-[#5f6FFF]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Date of Birth</p>
              {isEdit ? (
                <input
                  type="date"
                  className="text-gray-900 bg-gray-50 p-2 rounded-lg w-full focus:ring-2 focus:ring-[#5f6FFF]"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-900">
                  {new Date(userData.dob).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white shadow-md transition-all ${
            isEdit
              ? "bg-green-500 hover:bg-green-600"
              : "bg-[#5f6FFF] hover:bg-[#4a5bef]"
          }`}
        >
          {isEdit ? (
            <>
              <FaSave /> Save Changes
            </>
          ) : (
            <>
              <FaEdit /> Edit Profile
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
