"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 🔴 Validation: empty fields
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    // 🔴 Validation: email format
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully ✅");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Server not reachable. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="text-white mb-1 block">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full bg-white/5 border border-white/20
                     text-white placeholder:text-gray-400
                     px-4 py-2 rounded
                     focus:border-cyan-400 focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-white mb-1 block">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full bg-white/5 border border-white/20
                     text-white placeholder:text-gray-400
                     px-4 py-2 rounded
                     focus:border-cyan-400 focus:outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="text-white mb-1 block">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="w-full bg-white/5 border border-white/20
                     text-white placeholder:text-gray-400
                     px-4 py-2 rounded
                     focus:border-cyan-400 focus:outline-none"
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 disabled:opacity-50"
      >
        <Send className="mr-2 h-4 w-4" />
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
