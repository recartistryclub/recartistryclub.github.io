import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import InteractiveCanvas from "./InteractiveCanvas"; // Your interactive canvas component

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Creative Community",
      description:
        "Connect with like-minded artists and creators from all backgrounds and skill levels.",
      icon: "🎨",
    },
    {
      title: "Digital Arts",
      description:
        "Explore cutting-edge digital art techniques and tools in our modern workshops.",
      icon: "💻",
    },
    {
      title: "Traditional Media",
      description:
        "Master classic art forms with guidance from experienced traditional artists.",
      icon: "🖌️",
    },
    {
      title: "Exhibitions",
      description:
        "Showcase your work in our regular exhibitions and community events.",
      icon: "🖼️",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden min-h-screen flex items-center"
    >
      {/* Interactive Canvas for cursor effect */}
      <InteractiveCanvas />


      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10"></div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 container mx-auto px-6 text-white"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-center">About Us</h2>
        <p className="text-xl mb-12 max-w-3xl">
          Artistry Club is a vibrant community where creativity knows no bounds. We
          bring together artists, designers, and creative minds to explore, learn,
          and create together.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-6 rounded-2xl shadow-lg 
                         bg-gradient-to-br from-white/10 to-white/5 
                         backdrop-blur-md hover:from-pink-500/30 hover:to-purple-500/30 
                         transition-all duration-300"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm opacity-80">{feature.description}</p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 
                              group-hover:opacity-100 
                              transition duration-300 
                              bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
