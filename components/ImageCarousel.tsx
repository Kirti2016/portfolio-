// components/ImageCarousel.tsx
"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => embla.off("select", onSelect);
  }, [embla]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex overflow-hidden">
        {images.map(({ src, alt }, index) => (
          <div key={index} className="embla__slide min-w-full flex-shrink-0">
            <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg" />
          </div>
        ))}
      </div>
      <div className="embla__dots flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => embla && embla.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
