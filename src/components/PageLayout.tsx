import React from "react";
import BackgroundVideo from "./BackgroundVideo";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video for other pages */}
      <BackgroundVideo src="/videos/bg.mp4" />

      {/* Page Content */}
      <div className="relative z-10 w-full h-full bg-black/40 flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default PageLayout;
