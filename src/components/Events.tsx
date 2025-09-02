import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from "react-router-dom"; // ✅ added import

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      date: "2024-08-25",
      title: "Madras Day Art Contest",
      description: "The Madras Day Art Contest celebrated the rich cultural heritage, history, and spirit of Chennai through the creative expressions of young artists. ",
      type: "Event",
      status: "Completed"
    },
    {
      date: "2024-09-14",
      title: "ARTSY’24",
      description: "Artsy’24’s Art Exhibition, a Signature Event transformed the Basketball Court and Hut Café into a vibrant hub of creativity",
      type: "Exhibition",
      status: "Completed"
    },
    {
      date: "2024-09-14",
      title: "INVESTITURE CEREMONY",
      description: "The Badge and Certificate Investiture Ceremony celebrating the Club Core Members, Board Members, and recognizing Old Board Members as Mentors.",
      type: "Community",
      status: "completed"
    },
    {
      date: "2024-10-09",
      title: "World Mental Health Day",
      description: "Organized a vibrant Signature Event at the Lanes of REC to promote mental wellness and self-care.",
      type: "Event",
      status: "completed"
    },
    {
      date: "2024-10-12",
      title: "Inkspire",
      description: "Inkspire, hosted by the REC Artistry Club every October, is a vibrant platform that celebrates creativity and showcases student talent across diverse art forms.",
      type: "Event",
      status: "completed"
    },
    {
      date: "2024-11-07",
      title: "Pictopia",
      description: "Pictopia, an exciting and interactive art-based game that brought together creativity, teamwork, and fun",
      type: "Event",
      status: "completed"
    },
    {
      date: "2024-12-01",
      title: "Art Odyssey Season 1 ",
      description: "The workshop introduced students to the fundamentals of digital art, covering key concepts and techniques.",
      type: "Workshop",
      status: "completed"
    },
    {
      date: "2025-01-26",
      title: "Swarang",
      description: "The Artistry Club, in collaboration with the Leo Club, organized SWARANG, a special event at a children’s home to celebrate the 76th Republic Day.",
      type: "Event",
      status: "completed"
    },
    {
      date: "2025-02-23",
      title: "We Sketch Season 2 Episode 1",
      description: "WeSketch Season 2, Episode 1, at Marina Beach’s Labour Statue, united students and Urban Sketchers Chennai for a lively outdoor sketching experience capturing the essence of the surroundings.",
      type: "Event",
      status: "completed"
    },
    {
      date: "2025-03-08",
      title: "AARADHYA",
      description: "The Artistry Club , in collaboration with the Leo Club , celebrated Women’s Day by honoring the women faculty members for their invaluable contributions",
      type: "Community",
      status: "completed"
    },
    {
      date: "2025-03-13",
      title: "Ethnic Day 2025",
      description: "the students of Rajalakshmi Engineering College celebrated Ethnic Day with great enthusiasm. Dressed in colorful ethnic wear, everyone showcased their traditional outfits, enjoyed the festive atmosphere, and captured memorable moments with friends through lots of pictures. The day was filled with joy, laughter, and a strong sense of cultural pride",
      type: "Community",
      status: "completed"
    },
    {
      date: "2025-03-22",
      title: "Pennoviyam",
      description: "Pennoviyam, organized by the Artistry Club with Yaazh Tamil Mandram, celebrated Women’s Day by showcasing artworks on iconic women from Tamil literature through a vibrant exhibition at the Hut Café.",
      type: "Community",
      status: "completed"
    },
    {
      date: "2025-04-05",
      title: "We Sketch Season 2 Episode 2",
      description: "WeSketch Season 2, Episode 1, held at Marina Beach with Urban Sketchers Chennai, brought students together for a dynamic outdoor sketching experience capturing life in real time.",
      type: "Event",
      status: "completed"
    },

    {
      date: "2025-04-23",
      title: "Solo Shade",
      description: "Soloshade, a signature Artistry Club event, celebrated the power of simplicity by challenging artists to create impactful works using just one color.",
      type: "Event",
      status: "completed"
    },
    {
      date: "2025-04-14",
      title: "Draw with Comali Season 2",
      description: "Draw With Comali was a vibrant and engaging event that seamlessly combined creativity,entertainment, and teamwork",
      type: "Event",
      status: "Completed"
    },

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-primary';
      case 'featured': return 'text-secondary';
      case 'completed': return 'text-muted-foreground';
      default: return 'text-foreground';
    }
  };

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for workshops, exhibitions, and community events that celebrate creativity and artistic expression.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-primary h-full rounded-full hidden lg:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} mb-6 lg:mb-0`}>
                  {/* ✅ Wrap entire card in Link */}
                  <Link to={`/events/${encodeURIComponent(event.title)}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card hover-lift cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-secondary text-secondary-foreground">
                          {event.type}
                        </span>
                        <span className={`text-sm font-medium ${getStatusColor(event.status)}`}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {event.description}
                      </p>
                      <div className="text-primary font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </motion.div>
                  </Link>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 hidden lg:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 rounded-full ${
                      event.status === 'featured' 
                        ? 'bg-gradient-secondary animate-pulse-glow' 
                        : 'bg-gradient-primary'
                    } border-4 border-background`}
                  />
                </div>

                {/* Spacer for alignment */}
                <div className="lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
