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
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Error sending message. Please try again.");
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 via-rose-600 to-rose-900 p-4 sm:p-6">
      <motion.div 
        className="absolute w-40 sm:w-72 h-40 sm:h-72 bg-red-300/30 rounded-full blur-3xl top-5 sm:top-10 left-5 sm:left-10"
        animate={{ x: ["0%", "20%", "-10%"], y: ["0%", "20%", "-10%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-60 sm:w-96 h-60 sm:h-96 bg-rose-400/30 rounded-full blur-3xl bottom-5 sm:bottom-10 right-5 sm:right-10"
        animate={{ x: ["0%", "-20%", "10%"], y: ["0%", "-20%", "10%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full max-w-sm sm:max-w-lg bg-white p-6 sm:p-8 shadow-lg rounded-lg relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-rose-700">Contact Me</h1>
          <a href="https://www.linkedin.com/in/michael-anderson-389a0523a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl sm:text-3xl" />
          </a>
        </div>

        <p className="font-sans text-gray-600 text-center mt-2 text-sm sm:text-base">Have a question or want to work together? Fill out the form below.</p>

        <form onSubmit={handleSubmit} className="mt-6 w-full space-y-4">
          <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 text-sm sm:text-base" />
          <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 text-sm sm:text-base" />
          <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 text-sm sm:text-base"></textarea>

          <motion.div whileHover={{ scale: 1.05 }}>
            <button type="submit" className="w-full bg-rose-700 text-white py-3 rounded-md font-bold hover:bg-rose-900 transition text-sm sm:text-base">Send Message</button>
          </motion.div>
        </form>

        {status && <p className="text-center mt-4 text-sm sm:text-base text-gray-700">{status}</p>}
      </div>
    </main>
  );
}
