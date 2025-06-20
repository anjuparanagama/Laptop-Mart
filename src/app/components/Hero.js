"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const images = [
  '/one.png',
  '/two.png',
  '/three.png',
];

// CSS keyframes for animations will be added inline using Tailwind's @layer directive in globals.css or via style tags.
// For simplicity, I will add inline style tags here for the animations.

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .fade-slide-in {
          animation: fadeSlideIn 1s ease forwards;
        }
        .pulse-scale {
          animation: pulseScale 5s ease-in-out infinite;
        }
        .animated-bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: pulseScale 6s ease-in-out infinite alternate;
          mix-blend-mode: multiply;
        }
      `}</style>
      <section className="relative bg-gradient-to-r from-green-300 via-green-200 to-green-300 overflow-hidden">
        {/* Animated background shapes */}
        <div className="animated-bg-shape bg-green-400 w-72 h-72 top-[-100px] left-[-100px]"></div>
        <div className="animated-bg-shape bg-green-500 w-96 h-96 bottom-[-150px] right-[-150px]"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-20 relative z-10">
          {/* text block */}
          <div className="space-y-6 fade-slide-in">
            <p className="uppercase tracking-wider text-sm font-semibold text-gray-700">
              Featured&nbsp;Products
            </p>
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Laptops for Every Need
            </h1>
            <p className="text-gray-700 text-lg max-w-md mb-[10px]">
              Discover our premium blend of powerful computing solutions with sleek&nbsp;design, enhanced performance, and innovative features for all your technological needs.
            </p>

            <Link href="/category" passHref >
              <button className="px-8 py-2 mt-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 hover:scale-105 transform transition duration-300 ease-in-out shadow-lg">
                See&nbsp;more
              </button>
            </Link>
          </div>

          {/* hero image with fade and scale animation */}
          <div className="hidden md:block justify-self-end object-contain relative w-[450px] h-[300px]">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`laptop ${index + 1}`}
                width={450}
                height={300}
                priority={index === currentIndex}
                className={`absolute top-0 left-0 transition-opacity object-contain duration-1000 ease-in-out w-[450px] h-[300px] ${
                  index === currentIndex
                    ? 'opacity-100 scale-105 pulse-scale z-10'
                    : 'opacity-0 scale-100 z-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* dot indicators */}
        <div className="flex justify-center space-x-3 py-6 relative z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
