import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      date: "2024-03-15",
      title: "Digital Art Workshop",
      description: "Learn advanced digital painting techniques with industry professionals.",
      type: "Workshop",
      status: "upcoming"
    },
    {
      date: "2024-03-08",
      title: "Spring Art Exhibition",
      description: "Showcase of member artworks celebrating the arrival of spring.",
      type: "Exhibition",
      status: "featured"
    },
    {
      date: "2024-02-28",
      title: "Collaborative Mural Project",
      description: "Community mural painting in downtown arts district.",
      type: "Community",
      status: "completed"
    },
    {
      date: "2024-02-20",
      title: "Artist Talk Series",
      description: "Guest speaker discussing contemporary art movements.",
      type: "Talk",
      status: "completed"
    },
    {
      date: "2024-04-05",
      title: "Mixed Media Masterclass",
      description: "Explore combining traditional and digital art techniques.",
      type: "Masterclass",
      status: "upcoming"
    }
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
            Upcoming Events
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
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card hover-lift"
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