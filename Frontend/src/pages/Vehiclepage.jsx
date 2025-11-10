import { useState } from "react";
import VehicleCard from "../components/VehicleCard"; 
import Footer from "./Footer";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    type: "economy",
    title: "Economy Cars",
    description: "Perfect for city driving and budget-conscious travelers",
    thumbnail: "/car.png",
    models: [
      { id: "eco-1", name: "Maruti Alto", image: "/MarutiAlto.png", price: "From ₹1,800/day", features: ["Fuel Efficient", "Easy Parking"] },
      { id: "eco-2", name: "Hyundai Santro", image: "/HyundaiSantro.png", price: "From ₹2,640/day", features: ["Compact", "AC"] },
    ],
  },
  {
    type: "luxury",
    title: "Luxury Vehicles",
    description: "Premium comfort and style for special occasions",
    thumbnail: "/luxury-sedan.png",
    models: [
      { id: "lux-1", name: "BMW 5 Series", image: "/BMW5.jpg", price: "From ₹12,000/day", features: ["Leather Seats", "Premium Sound"] },
      { id: "lux-2", name: "Mercedes E-Class", image: "/MercedesE-Class.png", price: "From ₹11,000/day", features: ["Advanced Tech", "Comfort"] },
      { id: "lux-3", name: "Audi A6", image: "/AudiA6.jpeg", price: "From ₹10,000/day", features: ["Executive", "GPS"] },
    ],
  },
  {
    type: "suv",
    title: "SUVs & Trucks",
    description: "Spacious vehicles for families and cargo needs",
    thumbnail: "/suv-truck.jpg",
    models: [
      { id: "suv-1", name: "Hyundai Creta", image: "/HyundaiCreta.png", price: "From ₹3,500/day", features: ["7+ Seats", "4WD Available"] },
      { id: "suv-2", name: "Mahindra Scorpio", image: "/MahindraScorpio.jpg", price: "From ₹4,500/day", features: ["Large Cargo", "Rugged"] },
    ],
  },
  {
    type: "bike",
    title: "Motor Bikes",
    description: "Two-wheelers for daily rides and long drives",
    thumbnail: "/BajajPulsar.jpg",
    models: [
      { id: "bike-1", name: "Honda Shine", image: "/HondaShine.png", price: "From ₹650/day", features: ["Smooth Ride", "Fuel Efficient"] },
      { id: "bike-2", name: "Hero Passion Pro", image: "/HeroPassionPro.jpeg", price: "From ₹525/day", features: ["Stylish", "Reliable"] },
      { id: "bike-3", name: "Bajaj Pulsar", image: "/BajajPulsar.jpg", price: "From ₹800/day", features: ["Sporty Design", "Disc Brake"] },
    ],
  },
  {
    type: "scooty",
    title: "Scooties",
    description: "Easy-to-ride scooters for quick city commutes",
    thumbnail: "/SuzukiAccess.png",
    models: [
      { id: "scooty-1", name: "Honda Activa", image: "/HondaActiva.jpg", price: "From ₹399/day", features: ["Smooth Ride", "Easy Start"] },
      { id: "scooty-2", name: "TVS Jupiter", image: "/tvs-jupiter.jpg", price: "From ₹499/day", features: ["Comfortable Seat", "Good Mileage"] },
      { id: "scooty-3", name: "Suzuki Access", image: "/SuzukiAccess.png", price: "From ₹399/day", features: ["Powerful Engine", "Storage Space"] },
    ],
  },
  {
    type: "electric",
    title: "Electric Bikes",
    description: "Eco-friendly transportation for urban exploration",
    thumbnail: "/electric-bicycle.jpg",
    models: [
      { id: "elec-1", name: "Ather 450", image: "/electric-bicycle.jpg", price: "From ₹3,00/day", features: ["Long Range", "Fast Charge"] },
    ],
  },
];

export function VehiclePage() {
  const [selectedType, setSelectedType] = useState("all");

  const filters = ["all", ...CATEGORIES.map((c) => c.type)];

  const activeCategory = selectedType === "all" ? null : CATEGORIES.find((c) => c.type === selectedType);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Topbar/>
      <div className="text-center">
        <h1 className="text-3xl font-semibold pt-20 pb-3">Our Vehicle Categories</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8 mb-6">
        {filters.map((filter) => {
          const isActive = selectedType === filter;
          const label =
            filter === "all" ? "All" : CATEGORIES.find((c) => c.type === filter)?.title || filter;
          return (
            <button
              key={filter}
              onClick={() => setSelectedType(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                isActive
                  ? "bg-black text-white shadow"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {selectedType === "all" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.type}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={cat.thumbnail}
                  alt={cat.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                  <p className="text-sm text-gray-500">{cat.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedType(cat.type)}
                      className="px-3 py-2 rounded-md bg-black text-white text-sm font-medium"
                    >
                      View Models
                    </button>
                    <span className="text-xs text-gray-400">
                      {cat.models.length} models
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeCategory && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">{activeCategory.title}</h2>
                <p className="text-gray-500">{activeCategory.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedType("all")}
                  className="px-3 py-2 rounded-md border text-sm"
                >
                  ← Back to Categories
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.models.map((m) => (
                <div
                  key={m.id}
                  className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition"
                >
                  <img src={m.image} alt={m.name} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{m.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {m.features.join(" • ")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{m.price}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-3 py-2 rounded-md border text-sm">
                        View
                      </button>
                      <button className="px-3 py-2 rounded-md bg-black text-white text-sm">
                        <Link to='/booking' state={{ vehicle: m }} >Book</Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
