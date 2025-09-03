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
  "Madras Day Art Contest": {
    description:
      `The Madras Day Art Contest celebrated the rich cultural heritage, history, and spirit of Chennai through the creative expressions of young artists. Participants from various disciplines showcased their talents by creating artworks that captured the essence of the city — from its iconic landmarks and traditions to its vibrant modern life. The event received an enthusiastic response, reflecting the deep connection people feel toward Chennai and its evolving identity. Every piece submitted highlighted the artists' perspectives, their love for the city, and their ability to translate emotion into visual form`,
    images: ["/images/madras_day_artcontest/mdac1.jpg",
    ],
  },
  "ARTSY’24": {
    description:
      "Artsy’24’s Art Exhibition, a Signature Event transformed the Basketball Court and Hut Café into a vibrant hub of creativity on September 14th, from 9:00 AM to 1:20 PM. The event buzzed with energy as students, artists, and visitors explored an impressive display of artistic talent, featuring mandalas, intricate lettering, song sketches, anime art, origami, and frame portraits.Special exhibits, including Madras Day-themed artwork and meticulously crafted portraits,added depth to the showcase. A key moment of the exhibition was the visit from Principal Dr.S.N. Murugesan and Dean of Academics Dr. V. Murali Bhaskaran, who engaged with the artists and appreciated the creativity on display.",
    images: [
      "/images/artsy24/artsy1.JPG",
      "/images/artsy24/artsy2.JPG",
      "/images/artsy24/artsy3.JPG",
      "/images/artsy24/artsy4.JPG",
      "/images/artsy24/artsy5.JPG",
      "/images/artsy24/artsy6.JPG",
      "/images/artsy24/artsy7.JPG",
      "/images/artsy24/artsy8.JPG",
      "/images/artsy24/artsy9.JPG",
      "/images/artsy24/artsy10.JPG",
    ],
  },
  "INVESTITURE CEREMONY": {
    description:
      `The Badge and Certificate Investiture Ceremony took place on September 14, 2023, at Idea
        Factory KS02 (REC), celebrating the Club Core Members, Board Members, and recognizing Old
        Board Members as Mentors. The event featured Ms. Namitha & Mr. Mohan Krishnan, Chennai
        Coordinators for Urban Sketchers, as chief guests, who shared inspiring insights on creativity
        and community engagement. The ceremony included badge distribution, certificate
        presentations, and a networking session, fostering connections and celebrating contributions.`,
    images: ["/public/images/3.Investiture Ceremony/ic1.JPG",
      "/public/images/3.Investiture Ceremony/ic2.JPG",
      "/public/images/3.Investiture Ceremony/ic3.JPG",
      "/public/images/3.Investiture Ceremony/ic4.JPG",
      "/public/images/3.Investiture Ceremony/ic5.JPG",
      "/public/images/3.Investiture Ceremony/ic6.JPG",
      "/public/images/3.Investiture Ceremony/ic7.JPG",
      "/public/images/3.Investiture Ceremony/ic8.JPG",
      "/public/images/3.Investiture Ceremony/ic9.JPG",
      "/public/images/3.Investiture Ceremony/ic10.JPG"

    ],
  },
  "World Mental Health Day": {
    description:
      `The REC Artistry Club, in collaboration with student counsellor
      Ms. Niveditha Raviselvan, organized a vibrant Signature Event at the Lanes of REC to promote
      mental wellness and self-care. With 2,500 participants, the event featured engaging stalls,
      including a Mental Health Art Display, Awareness Ribbons, Affirmation Stickers, Sensory
      Activities, and Stress-Relieving Games. A Five-Meter Gratitude Banner encouraged students and
      faculty to share thoughts on mental health.`,
    images: ["/public/images/4.World Mental Health Day/IMG_2628.JPG",
      "/public/images/4.World Mental Health Day/IMG_1275.JPG",
      "/public/images/4.World Mental Health Day/IMG_1476.JPG",
      "/public/images/4.World Mental Health Day/IMG_2676.JPG",
      "/public/images/4.World Mental Health Day/IMG_0646.JPG"
    ],
  },
  "Inkspire": {
  description: `Inkspire, hosted annually in the month of October by the REC Artistry Club, is a vibrant celebration of artistic expression and creativity. The event serves as a platform for students across disciplines to showcase their talents through a variety of art forms. From compelling illustrations to thought-provoking designs, Inkspire captures the imagination and emotions of its participants. With engaging themes and enthusiastic participation, the contest fosters a culture of inspiration, inclusivity, and artistic excellence within the college community.`,
  images: ["/public/images/6.Pictopia/DSC_0004.JPG",
    "/public/images/6.Pictopia/DSC_0055.JPG",
    "/public/images/6.Pictopia/NBP_0015.JPG",
    "/public/images/6.Pictopia/NBP_0040.JPG"
  ],
},
  "Pictopia": {
  description: `Pictopia was an exciting and interactive art-based game 
    that brought together creativity, teamwork, and fun. 
    Participants engaged in dynamic challenges where artistic skills 
    and quick thinking went hand in hand, creating an atmosphere 
    filled with energy, laughter, and collaboration.`,
  images: ["/public/images/6.Pictopia/DSC_0004.JPG",
    "/public/images/6.Pictopia/DSC_0055.JPG",
    "/public/images/6.Pictopia/NBP_0015.JPG",
    "/public/images/6.Pictopia/NBP_0040.JPG"
  ],
},

"Art Odyssey EP 1 DIGITAL ART": {
  description: `The first episode of the Art Odyssey series introduced 
    students to the fundamentals of digital art. The workshop 
    covered essential concepts and techniques, providing 
    hands-on experience with digital tools. Participants 
    explored the creative possibilities of blending 
    technology with art, laying the foundation for their 
    future digital creations.`,
  images: ["/images/digital1.jpg", "/images/digital2.jpg"],
},

"Swarang": {
  description: `On the occasion of the 76th Republic Day, the Artistry Club, 
    in collaboration with the Leo Club, organized SWARANG 
    at a children’s home. The event celebrated the spirit of unity 
    and patriotism through art, music, and cultural interaction. 
    Students and children came together to share joy, 
    creativity, and community spirit.`,
  images: ["/public/images/8.Swarang/IMG_5202.JPG",
    "/public/images/8.Swarang/IMG_3998.JPG",
    "/public/images/8.Swarang/IMG_8142.JPG",
    "/public/images/8.Swarang/IMG_8258.JPG",
    "/public/images/8.Swarang/IMG_8343.JPG"
  ],
},

"We Sketch Season 2 Episode 1": {
  description: `WeSketch returned with Season 2, Episode 1, organized by the Artistry Club in collaboration with Urban Sketchers Chennai—a vibrant community that brings together artists from across the city to sketch life as they see it, in real time.
This episode took place at the iconic Labour Statue on Marina Beach, where college students gathered for a unique outdoor sketching experience. Surrounded by the lively energy of the beach and the symbolic presence of the statue, participants observed and illustrated the scenes around them—from the towering monument and beachgoers to the everyday charm of Marina's surroundings.`,
  images: ["/public/images/8.Swarang/IMG_5202.JPG",
    "/public/images/8.Swarang/IMG_3998.JPG",
    "/public/images/8.Swarang/IMG_8142.JPG",
    "/public/images/8.Swarang/IMG_8258.JPG",
    "/public/images/8.Swarang/IMG_8343.JPG"
  ],
},

"AARADHYA": {
  description: `To celebrate Women’s Day, the Artistry Club, in collaboration 
    with the Leo Club, organized 'AARADHYA'. The event honored 
    the women faculty members of Rajalakshmi Engineering College 
    for their invaluable contributions. It was a day of respect, 
    recognition, and celebration of women’s strength and achievements.`,
  images: ["/public/images/10.Aaradhya/IMG_0031.JPG",
    "/public/images/10.Aaradhya/IMG_6284.JPG",
    "/public/images/10.Aaradhya/IMG_6299.JPG",
    "/public/images/10.Aaradhya/IMG_0268.JPG",
  ],
},

"Ethnic Day 2025": {
  description: `Rajalakshmi Engineering College celebrated Ethnic Day 2025 
    with great enthusiasm. Students dressed in colorful ethnic wear, 
    showcasing diverse traditions and cultures. The campus was filled 
    with joy, laughter, and vibrant festivities as students captured 
    memorable moments through photos and cultural programs. 
The day highlighted pride in cultural heritage and togetherness.`,
  images: ["/public/images/11.Ethnic Day 2025/MNB_0414.jpg",
    "/public/images/11.Ethnic Day 2025/IMG_8384_1.JPG",
    "/public/images/11.Ethnic Day 2025/IMG_8417_1.JPG",
    "/public/images/11.Ethnic Day 2025/MNB_0389.jpg"
  ],
},
"Pennoviyam": {
  description: `The Artistry Club, in collaboration with the Yaazh Tamil Mandram, organized Pennoviyam, an art competition in celebration of International Women’s Day. Centered on iconic women characters from Tamil literature, the event encouraged participants to portray their strength and grace through visual storytelling. On 22nd March, the selected artworks were exhibited at the Hut Cafe, transforming the space into a vibrant gallery. The exhibition drew admiration from students and faculty, celebrating the richness of Tamil culture and the impactful presence of women in literature through art.`,
  images: ["/public/images/11.Ethnic Day 2025/MNB_0414.jpg",
    "/public/images/11.Ethnic Day 2025/IMG_8384_1.JPG",
    "/public/images/11.Ethnic Day 2025/IMG_8417_1.JPG",
    "/public/images/11.Ethnic Day 2025/MNB_0389.jpg"
  ],
},
"We Sketch Season 2 Episode 2": {
  description: `WeSketch Season 2 – Episode 2, organized by the Artistry Club, was a refreshing and creative gathering held at the beautiful Six Senses Garden within our college campus. Surrounded by greenery and calm, students came together with sketchbooks in hand, ready to capture the inspiring views around them.Each participant immersed themselves in the environment, sketching scenes that caught their eye—from vibrant plants and serene pathways to architectural elements and quiet corners of nature. The peaceful setting sparked creativity and allowed everyone to express their unique perspectives through art.`,
  images: ["/public/images/11.Ethnic Day 2025/MNB_0414.jpg",
    "/public/images/11.Ethnic Day 2025/IMG_8384_1.JPG",
    "/public/images/11.Ethnic Day 2025/IMG_8417_1.JPG",
    "/public/images/11.Ethnic Day 2025/MNB_0389.jpg"
  ],
},
"Solo Shade": {
  description: `Soloshade, a signature event by the Artistry Club, returned with a bold twist on traditional art-making—challenging participants to create powerful pieces using just one color. Set in a vibrant and energetic atmosphere, the event sparked excitement as each artist was randomly assigned a single shade, from deep blues and bright yellows to moody purples and earthy greens.With only one color in their toolkit, participants had to think beyond the usual and dive into the nuances of tone, shade, and contrast. Artists filled their canvases and pages with expressions that were bold, emotional, and rich with creativity—each piece telling a unique story through a singular hue. The event celebrated the power of simplicity, proving that even within boundaries, creativity knows no limits.`,
  images: ["/public/images/11.Ethnic Day 2025/MNB_0414.jpg",
    "/public/images/11.Ethnic Day 2025/IMG_8384_1.JPG",
    "/public/images/11.Ethnic Day 2025/IMG_8417_1.JPG",
    "/public/images/11.Ethnic Day 2025/MNB_0389.jpg"
  ],
},

"Draw with Comali Season 2": {
  description: `Draw With Comali2 was a vibrant and engaging event that 
    seamlessly combined creativity, entertainment, and teamwork. 
    Participants took on fun challenges that tested their artistic 
    skills under humorous twists, creating a lively atmosphere 
    of joy, laughter, and innovation.`,
  images: ["/public/images/15.Draw with Comali Season 2/IMG_1473.JPG",
    "/public/images/15.Draw with Comali Season 2/IMG_1522.JPG",
    "/public/images/15.Draw with Comali Season 2/IMG_1539.JPG",
    "/public/images/15.Draw with Comali Season 2/IMG_1565.JPG"
  ],
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
      className="relative w-full max-w-[550px] aspect-square overflow-hidden rounded-2xl z-20" // ✅ square insta style
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
          whileHover={{ scale: 1.03 }}
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
