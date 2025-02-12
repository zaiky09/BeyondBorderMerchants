import React from "react";
import BgImage from "./BgImage";
import { HeroText } from "./HeroText";

export const Hero = () => {
  return (
    <div className="relative h-full" id="home">
      <BgImage />
      <HeroText />
    </div>
  );
};
