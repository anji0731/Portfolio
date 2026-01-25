"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  }
);

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Message sent successfully ✅");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="text-white mb-1 block">Your Name <span className="text-red-500">*</span></label>
        <input
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
  placeholder="Your Name"
  className="w-full bg-white/5 border border-white/20 
             text-white placeholder:text-gray-400 
             px-4 py-2 rounded 
             focus:border-cyan-400 focus:outline-none"
/>

      </div>

      <div>
        <label className="text-white mb-1 block">Email <span className="text-red-500">*</span></label>
        <input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  placeholder="Email"
  className="w-full bg-white/5 border border-white/20 
             text-white placeholder:text-gray-400 
             px-4 py-2 rounded 
             focus:border-cyan-400 focus:outline-none"
/>
      </div>

      <div>
        <label className="text-white mb-1 block">Message <span className="text-red-500">*</span></label>
        <textarea
  rows={4}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  required
  placeholder="Message"
  className="w-full bg-white/5 border border-white/20 
             text-white placeholder:text-gray-400 
             px-4 py-2 rounded 
             focus:border-cyan-400 focus:outline-none"
/>

      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600"
      >
        <Send className="mr-2 h-4 w-4" />
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
