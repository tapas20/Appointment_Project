import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaArrowRight, FaUserShield } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">
            {state === "Sign Up" ? "Create Your Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-500 mt-2">
            {state === "Sign Up" 
              ? "Join us to manage your healthcare appointments" 
              : "Sign in to access your medical services"}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Form Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              type="button"
              onClick={() => setState("Login")}
              className={`flex-1 py-4 font-medium text-center transition-colors ${
                state === "Login" 
                  ? "text-[#5f6FFF] border-b-2 border-[#5f6FFF]" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setState("Sign Up")}
              className={`flex-1 py-4 font-medium text-center transition-colors ${
                state === "Sign Up" 
                  ? "text-[#5f6FFF] border-b-2 border-[#5f6FFF]" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={onSubmitHandler} className="p-6 space-y-6">
            {state === "Sign Up" && (
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5f6FFF] focus:border-[#5f6FFF] transition-colors"
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5f6FFF] focus:border-[#5f6FFF] transition-colors"
                  placeholder="your@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5f6FFF] focus:border-[#5f6FFF] transition-colors"
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>
            </div>

            {state === "Login" && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#5f6FFF] focus:ring-[#5f6FFF] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#5f6FFF] hover:text-[#4a5bef]">
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-[#5f6FFF] to-[#8B9AFF] hover:from-[#4a5bef] hover:to-[#6b7aff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5f6FFF] transition-colors"
            >
              {state === "Sign Up" ? "Create Account" : "Sign In"}
              <FaArrowRight className="ml-2" />
            </button>

            {state === "Login" ? (
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setState("Sign Up")}
                  className="font-medium text-[#5f6FFF] hover:text-[#4a5bef]"
                >
                  Sign up
                </button>
              </p>
            ) : (
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setState("Login")}
                  className="font-medium text-[#5f6FFF] hover:text-[#4a5bef]"
                >
                  Sign in
                </button>
              </p>
            )}

            {/* {state === "Sign Up" && (
              <div className="flex items-center justify-center mt-4">
                <div className="w-full border-t border-gray-300"></div>
                <span className="px-3 bg-white text-sm text-gray-500">or</span>
                <div className="w-full border-t border-gray-300"></div>
              </div>
            )} */}
          </form>

          {/* {state === "Sign Up" && (
            <div className="px-6 pb-6">
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5f6FFF]"
              >
                <FaUserShield className="mr-2 text-[#5f6FFF]" />
                Sign up as a doctor
              </button>
            </div>
          )} */}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>By continuing, you agree to our <a href="#" className="text-[#5f6FFF] hover:underline">Terms of Service</a> and <a href="#" className="text-[#5f6FFF] hover:underline">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;