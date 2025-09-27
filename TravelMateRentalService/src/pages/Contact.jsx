import Topbar from "../components/Topbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Topbar />

      {/* Breadcrumb */}
      <div className="relative bg-gray-50 py-6 px-6 md:px-20">
          <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            <span className="hover:text-orange-500 hover:font-bold cursor-pointer">
              <Link to="/">Home</Link>
            </span>
            / Contact
          </p>
        </div>


      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20 py-16 bg-gray-100">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need additional information?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>

          <p className="text-gray-800 font-medium mb-2">
            📞 (123) 456-7869
          </p>
          <p className="text-gray-800 font-medium mb-2">
            ✉️ carrental@xyz.com
          </p>
          <p className="text-gray-800 font-medium">
            📍 Bengaluru, Karnataka
          </p>
        </div>

        {/* Right Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder='E.g: "Joe Shmoe"'
              className="w-full px-4 py-3 border rounded-md  bg-white focus:ring-1 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="w-full px-4 py-3 border rounded-md bg-white focus:ring-1 focus:ring-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tell us about it <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Write here..."
              rows="4"
              className="w-full px-4 py-3 border rounded-md bg-white focus:ring-1 focus:ring-orange-500 outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
