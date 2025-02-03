"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    const services = [
        { title: "IT Consulting & Collaboration", description: "Enhancing business efficiency with IT solutions." },
        { title: "Website Development", description: "Building modern, responsive, and high-performing websites." },
        { title: "Digital Strategy & Optimization", description: "Improving SEO, performance, and user experience." },
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-rose-600 to-rose-900 p-8">
            
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

            <h1 className="text-4xl font-bold text-white font-serif mb-6">Our Services</h1>

            <p className="text-lg text-white max-w-xl text-center mb-8 font-sans">
                Explore our IT solutions, web development, and digital strategy services tailored to your needs.
            </p>

            {/* Open Dialog Button */}
            <Dialog>
                <DialogTrigger asChild>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Button className="font-sans bg-rose-700 text-white px-6 py-3 rounded-md hover:bg-rose-900 transition">
                            View Details
                        </Button>
                    </motion.div>
                </DialogTrigger>

                {/* Dialog Content - Glassmorphic Style */}
                <DialogContent className="p-8 w-[90vw] md:w-[60vw] max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl">
                    
                    {/* Title */}
                    <DialogTitle className="text-2xl font-bold font-serif text-white">Our Services</DialogTitle>

                    {/* Carousel with Defined Services */}
                    <Carousel orientation="horizontal" className="w-full max-w-lg mx-auto">
                        <CarouselContent className="-mt-1">
                            {services.map((service, index) => (
                                <CarouselItem key={index} className="pt-1 md:basis-full">
                                    <div className="p-2">
                                        <Card className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg">
                                            <CardContent className="flex flex-col items-center justify-center w-full p-6 text-center">
                                                <h3 className="text-xl font-semibold text-white font-serif">{service.title}</h3>
                                                <p className="text-gray-300 mt-2 font-sans">{service.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    {/* Contact Button */}
                    <div className="mt-6 flex justify-center">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link href="/contact">
                                <Button className="font-sans bg-rose-700 text-white px-6 py-3 rounded-md hover:bg-rose-900 transition">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
