import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Traveler",
      image: "/avatar1.jpeg",
      review:
        "TravelMate made my business trip so much easier. The car was clean, reliable, and the booking process was seamless. Highly recommended!",
    },
    {
      name: "Mike Chen",
      role: "Tourist",
      image: "/avatar2.jpeg",
      review:
        "Great selection of bikes for exploring the city! The electric bike was perfect for our sightseeing tour. Excellent customer service too.",
    },
    {
      name: "Emily Rodriguez",
      role: "Local Resident",
      image: "/avatar3.jpeg",
      review:
        "I've been using TravelMate for wee        {/* Cards */}kend trips for months now. Always reliable, fair pricing, and the vehicles are well-maintained.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Don’t just take our word for it. Here's what our satisfied customers
          have to say about their experience.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
