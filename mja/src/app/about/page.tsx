"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function AboutPage() {
  const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX"];

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-700 via-rose-600 to-rose-900 p-6">
      
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

      {/* Glassmorphic Card */}
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg shadow-lg text-center border border-white/20 rounded-2xl">
        
        {/* Header Section */}
        <CardHeader className="text-center">
          <h1 className="text-4xl font-bold text-white font-serif">Michael Anderson</h1>
          <p className="text-gray-100 text-lg font-sans">Web Developer | IT & HR Management</p>
        </CardHeader>

        <CardContent className="space-y-6">
          
          {/* About Section */}
          <div className="text-white text-center px-6">
            <p className="leading-relaxed font-sans">
              👋 <span className="font-semibold font-serif">About Me</span>
              <br />
              I hold a <span className="font-sans font-semibold">BBA in IT Management & HR</span> from 
              the University of Wisconsin-Milwaukee. My expertise spans <span className="font-semibold">web 
              development, IT solutions, and business technology</span>.
              <br /><br />
              Passionate about leveraging technology to drive efficiency, I specialize in 
              <span className="font-semibold font-sans"> Next.js, React, Tailwind CSS, and Framer Motion</span>, 
              building innovative solutions for modern businesses.
            </p>
          </div>

          <Separator className="bg-white/20" />

          {/* Skills Section */}
          <div className="text-center">
            <CardTitle className="text-lg text-white mb-4 font-serif">Skills</CardTitle>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  animate={{ y: ["0%", "-10%", "0%"] }} // Floating animation
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                >
                  <Badge variant="outline" className="border-white/50 text-white px-3 py-2 font-sans font-semibold hover:bg-white/10 transition">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <Separator className="bg-white/20" />

          {/* CTA Section */}
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button asChild className="text-sans bg-rose-700 text-white px-6 py-3 font-bold rounded-md hover:bg-rose-900 transition">
                <a href="/contact">LET&apos;S CONNECT</a>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
