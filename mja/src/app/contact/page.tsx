"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setStatus("Error sending message. Please try again.");
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-rose-600 to-rose-900 p-6">
      
      {/* Floating Background Elements */}
      <motion.div 
        className="absolute w-72 h-72 bg-red-300/30 rounded-full blur-3xl top-10 left-10"
        animate={{ x: ["0%", "20%", "-10%"], y: ["0%", "20%", "-10%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-rose-400/30 rounded-full blur-3xl bottom-10 right-10"
        animate={{ x: ["0%", "-20%", "10%"], y: ["0%", "-20%", "10%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contact Form Container */}
      <div className="max-w-lg w-full bg-white p-8 shadow-lg rounded-lg relative z-10">
        
        {/* FLEX CONTAINER to align text & icon */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="font-serif text-3xl font-bold text-rose-700">Contact Me</h1>
          <a
            href="https://www.linkedin.com/in/michael-anderson-389a0523a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
        </div>

        <p className="font-sans text-gray-600 text-center mt-2">
          Have a question or want to work together? Fill out the form below.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
          ></textarea>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              type="submit"
              className="w-full bg-rose-700 text-white py-3 rounded-md font-bold hover:bg-rose-900 transition"
            >
              Send Message
            </button>
          </motion.div>
        </form>

        {status && <p className="text-center mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </main>
  );
}
