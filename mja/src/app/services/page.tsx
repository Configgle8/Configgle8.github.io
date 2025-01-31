"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"

  
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>

      <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
        Explore our IT solutions, HR consulting, and web development services tailored to your needs.
      </p>

      {/* Open Dialog Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            View Details
          </Button>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="p-6 w-full l-1/2 ">
          {/* Visually hidden title for accessibility */}
          <DialogTitle>
            Service Details
          </DialogTitle>

          <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center w-full p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
</Carousel>

          <p className="mt-4">
            Contact us to learn how we can help your business thrive.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
