"use client";
import React, { useState, useEffect } from "react";

const destinations = [
  "East Africa",
  "Kisumu",
  "Masaai Mara",
  "Mombasa",
  "Nairobi",
  "Mwanza, Tanzania",
  "Dar, Tanzania",
  "Kigali, Rwanda",
  "Kinshasa, DRC",
  "Kampala, Uganda",
  "Khartoum, Sudan",
  "Juba, Sudan",
  "Central Africa",
  "Chad",
  "Southern Africa",
  "Mozambique",
  "Zambia",
  "Mali",
  
];

const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current destination
      setIsVisible(false);
      setTimeout(() => {
        // Update index and fade in new destination
        setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
        setIsVisible(true);
      }, 500); // Half-second delay for smooth transition
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-40 bg-beige text-black text-4xl font-bold p-6 rounded-lg shadow-lg space-y-4">
      <p className="text-center text-lg md:text-2xl font-medium">
        We connect businesses to opportunities—anywhere, everywhere. Your cargo, our commitment.
      </p>
      <div className="text-center">
        <span
          className={`transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {destinations[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default Destinations;