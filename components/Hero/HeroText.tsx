import React from "react";

export const HeroText = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-turquoise/40 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl text-center w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
        Beyond{" "}
        <span className="text-black">Border</span> 
        {" "}Merchants
      </h1>

      {/* Subheading */}
      <p className="text-lg sm:text-2xl md:text-3xl text-beige leading-relaxed mb-6">
      For Your Trucking Solutions.
      </p>
    </div>
  );
};
