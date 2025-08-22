import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const artworks = [
    {
      image: gallery1,
      title: "Digital Dreams",
      artist: "Alex Chen",
      medium: "Digital Art",
      year: "2024"
    },
    {
      image: gallery2,
      title: "Golden Flow",
      artist: "Maya Rodriguez",
      medium: "Mixed Media",
      year: "2024"
    },
    {
      image: gallery3,
      title: "Cyber Pulse",
      artist: "Jordan Kim",
      medium: "Digital Art",
      year: "2024"
    },
    {
      image: gallery4,
      title: "Crimson Essence",
      artist: "Sam Taylor",
      medium: "Abstract",
      year: "2024"
    },
    // Duplicate for a fuller gallery
    {
      image: gallery1,
      title: "Neon Visions",
      artist: "Riley Parker",
      medium: "Digital Art",
      year: "2024"
    },
    {
      image: gallery2,
      title: "Warm Embrace",
      artist: "Casey Morgan",
      medium: "Traditional",
      year: "2024"
    }
  ];

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Art Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the incredible works created by our talented community members. Each piece tells a unique story of creativity and passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-3xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl"
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
                />
                
                {/* Content overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                  <h3 className="text-2xl font-bold mb-2">{artwork.title}</h3>
                  <p className="text-lg mb-1">by {artwork.artist}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-80">{artwork.medium}</span>
                    <span className="text-sm opacity-80">{artwork.year}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Glass info card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="glass-card mt-4 hover-lift"
              >
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="text-muted-foreground mb-2">by {artwork.artist}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{artwork.medium}</span>
                  <span>{artwork.year}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-4 text-lg font-semibold hover-lift bg-gradient-primary text-primary-foreground"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;