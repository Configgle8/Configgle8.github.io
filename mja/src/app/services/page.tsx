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
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-rose-600 to-rose-900 p-6 sm:p-8">
            <h1 className="text-4xl font-bold text-white font-serif mb-6">Our Services</h1>
            <p className="text-lg text-white max-w-xl text-center mb-8 font-sans">
                Explore our IT solutions, web development, and digital strategy services tailored to your needs.
            </p>

            {/* Vertical List on Mobile */}
            <div className="sm:hidden w-full max-w-xs mx-auto space-y-4">
                {services.map((service, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg p-4">
                        <CardContent className="text-center">
                            <h3 className="text-lg font-semibold text-white font-serif">{service.title}</h3>
                            <p className="text-gray-300 mt-2 font-sans text-sm">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Dialog with Horizontal Carousel on Desktop */}
            <div className="hidden sm:flex">
                <Dialog>
                    <DialogTrigger asChild>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Button className="font-sans bg-rose-700 text-white px-6 py-3 rounded-md hover:bg-rose-900 transition">
                                View Details
                            </Button>
                        </motion.div>
                    </DialogTrigger>

                    <DialogContent className="w-full max-w-3xl p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl mx-auto overflow-hidden">
                        <DialogTitle className="text-xl font-bold font-serif text-white text-center">Our Services</DialogTitle>

                        {/* Horizontal Carousel */}
                        <Carousel orientation="horizontal" className="w-full max-w-lg mx-auto">
                            <CarouselContent className="-mt-1">
                                {services.map((service, index) => (
                                    <CarouselItem key={index} className="pt-1 md:basis-full">
                                        <div className="p-2">
                                            <Card className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg">
                                                <CardContent className="flex flex-col items-center justify-center w-full p-4 text-center">
                                                    <h3 className="text-lg font-semibold text-white font-serif">{service.title}</h3>
                                                    <p className="text-gray-300 mt-2 font-sans text-sm">{service.description}</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Contact Button */}
            <div className="mt-4 flex justify-center">
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href="/contact">
                        <Button className="font-sans bg-rose-700 text-white px-4 py-2 rounded-md hover:bg-rose-900 transition text-sm">
                            Contact Us
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
