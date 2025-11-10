import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Book() {
  const location = useLocation();
  const navigate = useNavigate();

  const vehicleFromState = location.state?.vehicle;
  const sampleVehicle = {
    id: "sample-1",
    name: "Honda Shine",
    image: "/HondaShine.png",
    price: "From ₹800/day",
    features: ["Smooth Ride", "Fuel Efficient"],
  };
  const vehicle = vehicleFromState || sampleVehicle;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("upi"); 
  const [upiId, setUpiId] = useState("");

  const [processing, setProcessing] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  function saveBooking(b) {
    try {
      const existing = JSON.parse(localStorage.getItem("vm_bookings") || "[]");
      existing.unshift(b);
      localStorage.setItem("vm_bookings", JSON.stringify(existing));
    } catch (e) {
      console.error("saveBooking error", e);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const paymentDetails =
      paymentMethod === "upi"
        ? { vpa: upiId || "demo@upi" }
        : { note: "Pay at pickup" };

    const booking = {
      id: "b" + Date.now(),
      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      vehiclePrice: vehicle.price,
      customer: { fullName, email, phone },
      pickup: { date: pickupDate, location: pickupLocation },
      dropoff: { date: dropoffDate, location: dropoffLocation },
      paymentMethod,
      paymentDetails,
      createdAt: new Date().toISOString(),
      status: paymentMethod === "cash" ? "pending" : "paid (mock)",
    };

    if (paymentMethod === "upi") {
      setProcessing(true);
      setTimeout(() => {
        saveBooking(booking);
        setProcessing(false);
        setConfirmation(booking);
      }, 800);
    } else {
      saveBooking(booking);
      setConfirmation(booking);
    }
  }

  if (confirmation) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-3">Booking Confirmed</h2>
        <p className="text-gray-600 mb-4">
          Your booking has been recorded locally (frontend demo).
        </p>

        <div className="bg-white p-4 rounded shadow mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{confirmation.vehicleName}</h3>
              <div className="text-sm text-gray-500">
                {confirmation.pickup.date || "—"} → {confirmation.dropoff.date || "—"}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Status</div>
              <div className="font-semibold">{confirmation.status}</div>
            </div>
          </div>

          <hr className="my-3" />

          <div className="text-sm text-gray-700 space-y-1">
            <div>
              <strong>Renter:</strong> {confirmation.customer.fullName} ({confirmation.customer.email})
            </div>
            <div>
              <strong>Phone:</strong> {confirmation.customer.phone}
            </div>
            <div>
              <strong>Pickup:</strong> {confirmation.pickup.date} — {confirmation.pickup.location}
            </div>
            <div>
              <strong>Dropoff:</strong> {confirmation.dropoff.date} — {confirmation.dropoff.location}
            </div>

            <div className="mt-2">
              <strong>Payment:</strong> {confirmation.paymentMethod.toUpperCase()}
            </div>
            {confirmation.paymentMethod === "upi" && (
              <div className="text-xs text-gray-600">
                Paid via UPI ID: {confirmation.paymentDetails.vpa} (mock)
              </div>
            )}
            {confirmation.paymentMethod === "cash" && (
              <div className="text-xs text-gray-600">Pay in cash during pickup</div>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setConfirmation(null)}
            className="px-4 py-2 border rounded"
          >
            Make another booking
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Back to Browse
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Book: {vehicle.name}</h2>
        <p className="text-sm text-gray-500">
          Vehicle details were passed from the card you clicked.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow space-y-4"
        >
          <div>
            <label className="text-sm font-medium">Full name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium">Pick-up date</label>
              <input
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                type="date"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Drop-off date</label>
              <input
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                type="date"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Pick-up location</label>
            <input
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              placeholder="City, landmark or address"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Drop-off location</label>
            <input
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
              placeholder="City, landmark or address"
            />
          </div>

          {/* Payment options */}
          <div>
            <label className="text-sm font-medium">Payment method</label>
            <div className="mt-2 flex gap-2 flex-wrap">
              <label
                className={`px-3 py-2 border rounded cursor-pointer ${
                  paymentMethod === "upi" ? "bg-black text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                  className="mr-2"
                />
                UPI
              </label>

              <label
                className={`px-3 py-2 border rounded cursor-pointer ${
                  paymentMethod === "cash" ? "bg-black text-white" : ""
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="mr-2"
                />
                Cash at Pickup
              </label>
            </div>
          </div>

          {/* Payment Fields */}
          {paymentMethod === "upi" && (
            <div>
              <label className="text-sm font-medium">UPI ID</label>
              <input
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="mt-1 p-2 border rounded w-full"
                placeholder="yourid@upi"
              />
              <div className="text-xs text-gray-500 mt-2">
                Mock payment — this will mark booking as "paid" locally.
              </div>
            </div>
          )}

          {paymentMethod === "cash" && (
            <div className="text-sm text-gray-600">
              You can pay in cash when you pick up the vehicle.
            </div>
          )}

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
              disabled={processing}
            >
              {processing ? "Processing..." : "Confirm Booking"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
          </div>
        </form>

        <aside>
          <div className="bg-white rounded shadow p-4">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="font-semibold mt-3">{vehicle.name}</h3>
            <p className="text-sm text-gray-500">{vehicle.price}</p>
            <p className="text-sm text-gray-600 mt-2">
              {(vehicle.features || []).join(" • ")}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Book;
