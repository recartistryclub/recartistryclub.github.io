import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InteractiveCanvas from "./InteractiveCanvas"; // ✅ new particle canvas

// ✅ event details with description + images
const eventData: Record<
  string,
  { description: string; images: string[] }
> = {
  "Draw with Comali": {
    description:
      "An exciting art competition where creativity meets fun! Participants bring humor and art together to create unique masterpieces.",
    images: ["/images/draw1.jpg", "/images/draw2.jpg", "/images/draw3.jpg"],
  },
  "ARTSY’24": {
    description:
      "Artsy’24’s Art Exhibition, a Signature Event transformed the Basketball Court and Hut Café into a vibrant hub of creativity on September 14th, from 9:00 AM to 1:20 PM. The event buzzed with energy as students, artists, and visitors explored an impressive display of artistic talent, featuring mandalas, intricate lettering, song sketches, anime art, origami, and frame portraits.Special exhibits, including Madras Day-themed artwork and meticulously crafted portraits,added depth to the showcase. A key moment of the exhibition was the visit from Principal Dr.S.N. Murugesan and Dean of Academics Dr. V. Murali Bhaskaran, who engaged with the artists and appreciated the creativity on display.",
    images: [
      "/images/artsy/1696268059098.jpg",
      "/images/artsy/IMG_0417-01.jpeg",
      "/images/artsy/1697872567065.jpg",
    ],
  },
  "INVESTITURE CEREMONY": {
    description:
      "A prestigious event where leadership roles are handed over to deserving students, marking a new beginning of responsibility and service.",
    images: ["/images/invest1.jpg", "/images/invest2.jpg"],
  },
};

const EventDetail = () => {
  const { title } = useParams<{ title: string }>();
  const decodedTitle = decodeURIComponent(title || "");
  const event = eventData[decodedTitle];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-scroll every 4s
  useEffect(() => {
    if (!event) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % event.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [event]);

  if (!event) {
    return (
      <section className="py-20 container mx-auto px-6 relative">
        <InteractiveCanvas /> {/* ✅ particle effect also in "no event" state */}
        <h1 className="text-4xl font-bold mb-8 relative z-20">{decodedTitle}</h1>
        <p className="text-lg text-muted-foreground relative z-20">
          No details available for this event.
        </p>
      </section>
    );
  }

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % event.images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + event.images.length) % event.images.length
    );

  return (
    <section className="py-20 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
      {/* ✅ Particle Cursor/Canvas */}
      <InteractiveCanvas />

      {/* LEFT SIDE - EVENT DETAILS */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20"
      >
        <h1 className="text-5xl font-extrabold mb-6 gradient-text">
          {decodedTitle}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed glass-card p-6 rounded-xl hover-lift transition">
          {event.description}
        </p>
      </motion.div>

      {/* RIGHT SIDE - IMAGE GALLERY */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] overflow-hidden rounded-2xl z-20"
      >
        {event.images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`${decodedTitle} ${i + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl glass-card"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === currentIndex ? 1 : 0,
              scale: i === currentIndex ? 1 : 1.05,
            }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }} // ✅ hover effect
          />
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>
    </section>
  );
};

export default EventDetail;
