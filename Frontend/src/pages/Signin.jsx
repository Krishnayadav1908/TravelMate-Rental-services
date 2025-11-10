import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email) return "Please enter an email.";
    // simple email regex
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) return "Please enter a valid email.";
    if (!password) return "Please enter a password.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError("");
    setLoading(true);

    // FRONTEND ONLY: simulate a request
    setTimeout(() => {
      setLoading(false);
      // in a real app you would call your API here
      // e.g. fetch('/api/signin', { method: 'POST', body: JSON.stringify({ email, password }) })
      console.log("Signed in (simulated)", { email, password });
      alert("Signed in (simulated)\nEmail: " + email);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Sign in</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to your account using your email and password.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-4 py-2 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full pr-10 px-4 py-2 border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
                placeholder="Your password"
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-sm text-gray-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div>
            <button
              type="submit"
              className="w-full inline-flex cursor-pointer items-center justify-center px-4 py-2 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
