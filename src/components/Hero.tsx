import React from "react";
import BackgroundVideo from "./BackGroundVideo";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <BackgroundVideo src="/videos/artistry-portrait.mp4" />


      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
      
      </div>
    </section>
  );
};

export default Hero;
