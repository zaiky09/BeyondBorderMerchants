import React from "react";
import Image from "next/image";
import Logistics from "../../public/Images/Logistics.jpg";

const BgImage = () => {
  return (
    // Ensure this div has `relative`
    <div className="relative w-full h-[60vh] lg:h-[80vh]">
      <Image 
        src= {Logistics}
        alt="Aerial view of highways" 
        fill
        quality={100} 
        priority
        className="object-cover"
      />
    </div>
  );
};

export default BgImage;
