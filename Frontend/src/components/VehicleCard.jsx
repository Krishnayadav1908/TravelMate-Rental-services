import { Star } from "lucide-react";

export default function VehicleCard({
  image,
  title,
  description,
  tags,
  price,
  rating,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md h-fit overflow-hidden hover:shadow-xl transition group pb-10 hover:scale-[1.01]">
 
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full pt-4 h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4">

        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center gap-1 text-orange-500 text-sm">
            <Star size={16} fill="currentColor" />
            <span>{rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-1">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-100 rounded-md text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-sm font-semibold text-teal-600">{price}</p>
          <button
            className="bg-gray-50 flex items-center gap-2 text-black px-4 py-2 rounded-lg text-sm outline-1 outline-gray-300 
                       transition duration-300
                       group-hover:bg-green-500 group-hover:text-white   
                       hover:bg-orange-500 hover:text-white"
          >
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
