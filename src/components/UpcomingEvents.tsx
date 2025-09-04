import { motion } from "framer-motion";

const upcomingEvents = [
  {
    title: "Artsy`25",
    description: `✨ Artsy’25 is here to welcome a new wave of creativity and talent!
🎨 A grand showcase of art, imagination, and innovation awaits you.
📍 From sketches to origami, mandalas to modern art – your canvas has no limits.
🌟 Step in, express yourself, and let your artistry inspire the community.
💫 Join us as Artsy’25 becomes the stage for your unique talent and vision!`,
    image: "/images/upcommingevents/artsy25.jpg", // ✅ Correct path (public/images)
    formLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScLxdqSlBe5-rMlo_4JnBgL9hZN212rwFwdQCwmXifmEGItjQ/viewform?usp=dialog",
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
        <h1 className="md:text-5xl font-extrabold mb-12 text-center text-5xl gradient-text">
          Upcoming Events
        </h1>

        <div className="space-y-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="grid md:grid-cols-2 items-center gap-10 p-6 bg-white/10 rounded-2xl shadow-lg backdrop-blur-lg border border-white/20"
            >
              {/* Left Side - Content */}
              <div>
                <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
                <p className="text-sm opacity-80 mb-6">{event.description}</p>

                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
                >
                  Register
                </a>
              </div>

              {/* Right Side - Instagram Sized Image */}
              <div className="flex justify-center">
                <img
                  src={event.image}
                  alt={event.title}
                  className="rounded-xl object-cover w-[350px] h-[350px] md:w-[400px] md:h-[400px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
