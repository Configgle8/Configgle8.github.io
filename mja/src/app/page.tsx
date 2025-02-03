"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <section className="relative flex flex-col md:flex-row h-screen w-full">
      
      {/* Left Side - Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-6 sm:p-10 bg-white relative z-10">
        
        {/* Navbar */}
        <header className="absolute top-0 left-0 w-full bg-white p-4 shadow-md">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex flex-1 justify-start">
              <NavigationMenuList className="flex gap-6 text-black font-sans">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-rose-700 text-white text-lg font-bold px-4 py-2 rounded-md shadow-md hover:bg-rose-900 transition">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg p-3 w-auto min-w-max">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-gray-800">Get to Know Me!</h3>
                      <p className="font-sans text-sm text-gray-600">I&apos;m a passionate IT & HR professional.</p>
                      <Link href="/about" passHref legacyBehavior>
                        <NavigationMenuLink className="font-sans block text-center px-4 py-2 text-white bg-rose-700 hover:bg-rose-900 rounded-md transition shadow-md">
                          Learn More →
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-rose-700 text-white text-lg font-bold px-4 py-2 rounded-md shadow-md hover:bg-rose-900 transition">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg p-3 w-auto min-w-max">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-gray-800">My Services</h3>
                      <p className="font-sans text-sm text-gray-600">Web development, IT solutions, and digital strategy.</p>
                      <Link href="/services" passHref legacyBehavior>
                        <NavigationMenuLink className="font-sans block text-center px-4 py-2 text-white bg-rose-700 hover:bg-rose-900 rounded-md transition shadow-md">
                          View Services →
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-rose-700 text-white text-lg font-bold px-4 py-2 rounded-md shadow-md hover:bg-rose-900 transition">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg p-3 w-auto min-w-max">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-gray-800">Let&apos;s Connect!</h3>
                      <p className="font-sans text-sm text-gray-600">Get in touch for collaboration and inquiries.</p>
                      <Link href="/contact" passHref legacyBehavior>
                        <NavigationMenuLink className="font-sans block text-center px-4 py-2 text-white bg-rose-700 hover:bg-rose-900 rounded-md transition shadow-md">
                          Get in Touch →
                        </NavigationMenuLink>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu - Custom Implementation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg p-4">
              <div className="flex flex-col space-y-4">
                <Link href="/about" className="text-gray-700 font-semibold hover:text-black" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/services" className="text-gray-700 font-semibold hover:text-black" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/contact" className="text-gray-700 font-semibold hover:text-black" onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-lg mt-20 md:mt-16"
        >
          {/* Logo (Only Visible on Desktop) */}
          <div className=" md:flex justify-center mb-6">
            <Image src="/Name.png" alt="Logo" width={300} height={300} />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-black font-serif">Welcome to My Portfolio</h1>
          <p className="mt-4 text-gray-700 font-bold text-base sm:text-lg">
            I specialize in IT solutions, web development, and digital innovation.
          </p>

          <motion.div whileHover={{ scale: 1.1 }} className="mt-6">
            <Link href="/about">
              <Button className="font-sans text-lg font-bold bg-rose-700 text-white px-6 py-3 rounded-md hover:bg-rose-900 transition">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Background Image (Hidden on Mobile) */}
      <div className="hidden md:block w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('/Background.jpg')" }} />
      
    </section>
  );
}
