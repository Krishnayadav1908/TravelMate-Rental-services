import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ name, role, image, review }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition">
      <div className="flex text-orange-500">
        {[...Array(5)].map((_, idx) => (
          <Star key={idx} size={18} fill="currentColor" />
        ))}
      </div>

      <p className="text-gray-600 text-sm leading-relaxed relative">
        <Quote className="w-6 h-6 text-gray-300 inline-block mr-1" />
        {review}
      </p>

      <hr className="border-gray-200" />

      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
