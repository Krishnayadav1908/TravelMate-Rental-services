import Topbar from "../components/Topbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Topbar />
      <div className="bg-white">
        <div className="relative bg-gray-50 py-6 px-6 md:px-20">
          <h1 className="text-2xl font-bold text-gray-900">About Us</h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            <span className="hover:text-orange-500 hover:font-bold cursor-pointer">
              <Link to="/">Home</Link>
            </span>{" "}
            / About
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
              alt="TravelMate Vehicles"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
              Who We Are
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Simplifying Rentals, Empowering Journeys
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              TravelMate is your trusted partner for effortless rentals — from
              cars and bikes to bicycles. We make every journey convenient,
              reliable, and safe by offering real-time availability,
              location-based search, role-based dashboards, and secure online
              bookings.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our mission is to transform the traditional rental experience into
              a modern, automated, and customer-friendly journey. With seamless
              management for customers, providers, and drivers, TravelMate
              ensures trust, transparency, and peace of mind.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-orange-500 text-4xl">🚗</div>
                <h3 className="text-2xl font-bold">20+</h3>
                <p className="text-sm text-gray-500">Car Types</p>
              </div>
              <div className="text-center">
                <div className="text-orange-500 text-4xl">🏢</div>
                <h3 className="text-2xl font-bold">85+</h3>
                <p className="text-sm text-gray-500">Rental Outlets</p>
              </div>
              <div className="text-center">
                <div className="text-orange-500 text-4xl">🛠️</div>
                <h3 className="text-2xl font-bold">75+</h3>
                <p className="text-sm text-gray-500">Repair Shops</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 md:px-20 py-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Why Choose TravelMate?
          </h2>
          <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
            We go beyond just rentals — we focus on making your journey smooth,
            safe, and memorable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900">
                🚘 Wide Range of Vehicles
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                From budget-friendly cars to luxury rides, bikes, and bicycles —
                we’ve got something for every traveler.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900">
                🔒 Secure & Reliable
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                With secure authentication and encrypted transactions, your
                safety and trust are always our priority.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-900">
                ⚡ Seamless Experience
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Enjoy real-time availability, easy booking, and hassle-free
                management for a stress-free journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
