import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Creative Community",
      description: "Connect with like-minded artists and creators from all backgrounds and skill levels.",
      icon: "🎨"
    },
    {
      title: "Digital Arts",
      description: "Explore cutting-edge digital art techniques and tools in our modern workshops.",
      icon: "💻"
    },
    {
      title: "Traditional Media",
      description: "Master classic art forms with guidance from experienced traditional artists.",
      icon: "🖌️"
    },
    {
      title: "Exhibitions",
      description: "Showcase your work in our regular exhibitions and community events.",
      icon: "🖼️"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            About Our Club
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Artistry Club is a vibrant community where creativity knows no bounds. We bring together artists, designers, and creative minds to explore, learn, and create together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card text-center hover-lift group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-4xl mx-auto p-8">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To foster a supportive environment where artists of all levels can grow, collaborate, and push the boundaries of creative expression. We believe that art has the power to transform not just the artist, but the entire community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;