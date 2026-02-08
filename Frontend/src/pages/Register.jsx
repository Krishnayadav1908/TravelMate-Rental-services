import { motion } from "framer-motion";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Registerr() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === errorField) {
      setError("");
      setErrorField("");
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please fill out this field.");
      setErrorField("name");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Please fill out this field.");
      setErrorField("email");
      return false;
    }
    if (!formData.password) {
      setError("Please fill out this field.");
      setErrorField("password");
      return false;
    }
    if (!formData.confirm_password) {
      setError("Please fill out this field.");
      setErrorField("confirm_password");
      return false;
    }
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      setErrorField("confirm_password");
      return false;
    }
    if (!formData.terms) {
      setError("You must agree to the terms and conditions.");
      setErrorField("terms");
      return false;
    }

    setError("");
    setErrorField("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted ✅", formData);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked ✅");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 flex items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center text-gray-800"
        >
          Create an Account
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 mb-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">Sign up with Google</span>
        </motion.button>

        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">or register with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          action="/do-register"
          method="post"
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errorField === "name"
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errorField === "name" && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errorField === "email"
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errorField === "email" && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="number"
              className="block text-gray-700 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errorField === "number"
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errorField === "number" && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errorField === "password"
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errorField === "password" && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirm_password"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errorField === "confirm_password"
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {errorField === "confirm_password" && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline font-medium">
                terms and conditions
              </a>
            </label>
          </div>
          {errorField === "terms" && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </motion.button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-500 hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
