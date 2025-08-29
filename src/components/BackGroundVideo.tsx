import React, { useEffect, useRef, useState } from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string; // optional fallback image
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play the video after loading metadata
    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        console.warn("Video autoplay blocked, muted required.");
      });
    };

    video.addEventListener("canplaythrough", handleCanPlay);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
