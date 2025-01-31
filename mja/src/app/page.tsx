"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/path/to/your-image.jpg)" }}
      />

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 w-full bg-blue-600 p-4 z-50 shadow-md">
      <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {/* About Menu */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 p-3 w-auto min-w-max">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">Get to Know Me!</h3>
                  <p className="text-sm text-gray-600">I'm a passionate IT & HR professional.</p>
                  <Link href="/about" passHref legacyBehavior>
                    <NavigationMenuLink className="block text-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
                      Learn More →
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Services Menu */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 p-3 w-auto min-w-max">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">My Services</h3>
                  <p className="text-sm text-gray-600">Web development, IT solutions, and digital strategy.</p>
                  <Link href="/services" passHref legacyBehavior>
                    <NavigationMenuLink className="block text-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
                      View Services →
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact Menu */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="text-black px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 p-3 w-auto min-w-max">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">Let's Connect!</h3>
                  <p className="text-sm text-gray-600">Get in touch for collaboration and inquiries.</p>
                  <Link href="/contact" passHref legacyBehavior>
                    <NavigationMenuLink className="block text-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
                      Get in Touch →
                    </NavigationMenuLink>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-center bg-white p-8 rounded-lg shadow-xl"
      >
        <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
        <p className="mt-4 text-gray-600">
          I specialize in IT solutions, web development, and digital innovation.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
          <Link href="/about">
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.div>
  

  
      <motion.div
  className="absolute w-96 h-96 bg-blue-400/30 blur-3xl rounded-full"
  animate={{
    x: ["-50%", "30%", "-40%", "50%", "0%"],
    y: ["0%", "-30%", "50%", "-50%", "30%"],
    rotate: [0, 15, -15, 0], // Slight rotation effect
    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" },
  }}
/>

<motion.div
  className="absolute w-80 h-80 bg-purple-400/30 blur-3xl rounded-full"
  animate={{
    x: ["40%", "-30%", "50%", "-50%", "20%"],
    y: ["-50%", "50%", "-40%", "30%", "0%"],
    scale: [1, 1.1, 0.9, 1], // Subtle size change for breathing effect
    transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
  }}
/>

<motion.div
  className="absolute w-96 h-96 bg-pink-400/30 blur-3xl rounded-full"
  animate={{
    x: ["-40%", "50%", "-50%", "30%", "0%"],
    y: ["50%", "-30%", "40%", "-50%", "0%"],
    rotate: [0, -20, 20, 0], // Different rotation pattern
    scale: [1, 1.2, 0.8, 1], // More exaggerated pulsing
    transition: { duration: 22, repeat: Infinity, ease: "easeInOut" },
  }}
/>




    </section>
  );}
