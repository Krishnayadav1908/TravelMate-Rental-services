import { Phone, Mail, Car } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const ScroolTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-center py-14 px-6">
        <h2 className="text-3xl font-bold text-white">
          Ready to Start Your Journey?
        </h2>
        <p className="text-white/90 mt-2 max-w-2xl mx-auto">
          Book your perfect vehicle today and experience the freedom of
          convenient, reliable transportation.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold flex items-center gap-2 hover:bg-orange-600 transition">
            Book Now →
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-teal-700 transition">
            View All Vehicles
          </button>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
          <div className="flex items-center gap-2">
            <Phone size={18} /> Call: (555) 123-4567
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} /> Email: info@travelmate.com
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 sm:gap-8 gap-5 text-gray-700">
          <div className="col-span-3 sm:col-span-1">
            <div className="flex items-center gap-2">
              <Car className="text-teal-600" size={24} />
              <h3 className="text-lg font-bold">TravelMate</h3>
            </div>
            <p className="text-sm text-orange-500">Rental service</p>
            <p className="mt-2 text-sm">
              Your trusted partner for convenient and reliable vehicle rentals.
              Explore the world at your own pace.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="hover:text-orange-600 font-bold"
                  to="/"
                  onClick={ScroolTop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-orange-600 font-bold"
                  to="/about"
                  onClick={ScroolTop}
                >
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-600 font-bold" to="/">
                  Vehicle Models
                </Link>
              </li>
              <li>
                <Link className="hover:text-orange-600 font-bold" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-orange-600 font-bold" href="#">
                  Car Rental
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600 font-bold" href="#">
                  Bike Rental
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600 font-bold" href="#">
                  Bicycle Rental
                </a>
              </li>
              <li>
                <a className="hover:text-orange-600 font-bold" href="#">
                  Long-term Rental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Main Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@travelmate.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
