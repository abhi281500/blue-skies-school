"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/gallery/student-boy-1.jpg.png", alt: "Student Boy - Blue Skies School" },
  { src: "/images/gallery/student-girl-1.jpg.png", alt: "Student Girl - Blue Skies School" },
  { src: "/images/gallery/Study.jpg", alt: "Classroom Study" },
  { src: "/images/gallery/Labroateries.jpg", alt: "School Laboratories" },
  { src: "/images/gallery/Game.jpg", alt: "Students Playing Games" },
  { src: "/images/gallery/Yoga.jpg", alt: "Yoga Activity at School" },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">
        School Gallery
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Moments of learning, activities and growth at Blue Skies School
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img.src)}
            className="group overflow-hidden rounded-lg shadow hover:shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={350}
              className="w-full h-72 object-contain bg-gray-100 transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4 animate-zoomIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-400"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
