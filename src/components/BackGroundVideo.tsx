import React from "react";

interface BackgroundVideoProps {
  src: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover -z-10"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
