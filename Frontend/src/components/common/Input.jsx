import React from "react";

const Input = React.forwardRef(
  ({ label, error, className = "", ...props }, ref) => (
    <div className="mb-3">
      {label && (
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
      )}
      <input
        ref={ref}
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  ),
);

export default Input;
