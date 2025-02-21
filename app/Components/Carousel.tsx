"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <>
          Welcome to <br /> Tuning Factory
        </>
      ),
      image: "/carousel-1.jpg", // Replace with your absolute image path
    },
    {
      id: 2,
      content: (
        <>
          Service, repairs <br /> & Performance Upgrades
        </>
      ),
      image: "/carousel-2.jpg", // Replace with your absolute image path
    },
  ];

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    // Reinitialize Embla on component remount
    emblaApi.reInit();

    return () => {
      emblaApi.destroy(); // Clean up to avoid memory leaks
    };
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden z-20">
      {/* Embla Carousel Viewport */}
      <div ref={emblaRef} className="w-full h-full">
        <div className="flex">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center justify-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Blackish Overlay */}
              <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
              {/* Content */}
              <div className="relative z-20 text-white text-center p-6">
                <h1 className="text-2xl md:text-6xl font-bold">{slide.content}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-70 z-30"
        onClick={scrollPrev}
      >
        <GrPrevious className="text-2xl sm:text-3xl md:text-5xl" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 md:p-3 rounded-full hover:bg-opacity-70 z-30"
        onClick={scrollNext}
      >
        <GrNext className="text-2xl sm:text-3xl md:text-5xl" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
