import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    title: "Investiture Ceremony 2024",
    description:
      "A prestigious event where leadership roles are handed over to deserving students, marking a new beginning of responsibility and service.",
    images: ["/images/invest1.jpg", "/images/invest2.jpg"],
  },
  {
    title: "Artistry Cultural Fest",
    description:
      "An explosion of creativity, talent, and performances by our vibrant student community.",
    images: ["/images/cultural1.jpg", "/images/cultural2.jpg"],
  },
];

const UpcomingEvents = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* ✨ Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-black to-pink-700/20 blur-3xl" />
      </div>

      {/* 🌟 Page Content */}
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          Upcoming Events
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20"
            >
              <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
              <p className="text-sm opacity-80 mb-4">{event.description}</p>

              {/* Images */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${event.title}-${i}`}
                    className="rounded-xl object-cover h-32 w-full"
                  />
                ))}
              </div>

              {/* Link */}
              <Link
                to={`/events/${encodeURIComponent(event.title)}`}
                className="inline-block mt-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
