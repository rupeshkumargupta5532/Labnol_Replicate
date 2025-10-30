"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50">
      <div className="flex items-start space-x-4">
        <Mail className="text-purple-600 mt-1" size={32} />
        <div className="flex-1">
          <p className="text-gray-700 mb-4">
            Get notified when I publish something new, and unsubscribe at any time.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
