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
import Image from "next/image";


export default function Home() {
  return (
    <section className="relative flex h-screen w-full md:flex-row flex-col">
      
      {/* Left Side - Content (Full Width on Mobile) */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-10 bg-white relative z-10">

       {/* Logo */}
       <Image
          src="/Name.png" // Ensure logo is inside public/
          alt="Logo"
          width={300} // Adjust size
          height={300}
          className=""
        />
        
        {/* Navigation Bar */}
        <header className="absolute top-0 left-0 w-full bg-white p-4 shadow-md">
          <NavigationMenu>
            <NavigationMenuList className=" font-sans flex gap-6 text-black justify-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-rose-700 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 p-3 w-auto min-w-max">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-gray-800">Get to Know Me!</h3>
                    <p className="font-sans text-sm text-gray-600">I'm a passionate IT & HR professional.</p>
                    <Link href="/about" passHref legacyBehavior>
                      <NavigationMenuLink className="font-sans block text-center px-4 py-2 text-white bg-rose-700 hover:bg-rose-900 rounded-md transition shadow-md hover:shadow-lg">
                        Learn More →
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-rose-700 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 p-3 w-auto min-w-max">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-gray-800">My Services</h3>
                    <p className="font-sans text-sm text-gray-600">Web development, IT solutions, and digital strategy.</p>
                    <Link href="/services" passHref legacyBehavior>
                      <NavigationMenuLink className="font-sans block text-center px-4 py-2 text-white bg-rose-700 hover:bg-rose-900 rounded-md transition shadow-md hover:shadow-lg">
                        View Services →
                      </NavigationMenuLink>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-rose-700 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg transition">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-200 p-3 w-auto min-w-max">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-gray-800">Let's Connect!</h3>
                    <p className="font-sans text-sm text-gray-600">Get in touch for collaboration and inquiries.</p>
                    <Link href="/contact" passHref legacyBehavior>
                      <NavigationMenuLink className="font-sans block text-center px-4 py-2 text-white bg-rose-700 hover:bg-rose-900 rounded-md transition shadow-md hover:shadow-lg">
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
          className="text-center max-w-lg mt-16"
        >
          <h1 className="text-4xl font-bold text-black font-serif">Welcome to My Portfolio</h1>
          <p className="mt-4 text-gray-700 font-bold text-lg font-sans">
            I specialize in IT solutions, web development, and digital innovation.
          </p>

          <motion.div whileHover={{ scale: 1.1 }} className="mt-6">
            <Link href="/about">
              <Button className="font-sans bg-rose-700 text-white font-bold px-6 py-3 rounded-md hover:bg-rose-900 transition">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Background Image (Only Visible on Large Screens) */}
      <div
        className="hidden md:block w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Background.jpg')" }} // Ensure this file exists in public/
      />
      
    </section>
  );
}
