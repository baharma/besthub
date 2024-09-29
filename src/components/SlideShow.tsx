'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const images = [
  '/image/WhatsApp-Image-2023-07-06-154122.jpg',
  '/image/besthub-view2.jpeg',
  '/image/besthub-view4.jpeg',
  '/image/besthub-view5.jpeg',
  '/image/besthub-view6.jpeg',
  '/image/img-3610.jpg',
  '/image/WhatsApp-Image-2023-07-06-153733.jpg',
];

const Facilities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 3
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 3
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-48">
      <div className="flex overflow-hidden">
        {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
          <div
            key={currentIndex + index}
            className="w-1/3 h-80 px-2 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${currentIndex + index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none"
      >
        <IconChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none"
      >
        <IconChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default Facilities;
