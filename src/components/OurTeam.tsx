import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  year: string;
  domain?: string; // domain will be optional (President, Mentor, etc.)
  photo?: string;
}

interface TeamSection {
  title: string; // Team Name (e.g., "Media Team")
  members: TeamMember[];
}

const teamData: TeamSection[] = [
  {
    title: "Board",
    members: [
      { name: "Nandha Kumar P", year: "IV", domain: "Mentor", photo: "/images/team/nandha.JPG" },
      { name: "Lakshanya D", year: "IV", domain: "President", photo: "/images/team/lakshanya.jpg" },
      { name: "Tarun A D", year: "III", domain: "Vice President", photo: "/images/team/tarunad.jpg" },
      { name: "Jaiya Janani K K", year: "IV", domain: "Secretary", photo: "/images/team/jaiyajanani.jpg" },
      { name: "Abinaya V", year: "III", domain: "PRO", photo: "/images/team/abinaiya.jpg" },
      { name: "Dhiraviya Chandran", year: "IV", domain: "Event Lead", photo: "/images/team/dhiraviyachandran.jpg" },
      { name: "Karthikeyan A", year: "II", domain: "Junior Executive", photo: "/images/team/kathikeyan.jpg" },
    ],
  },
  {
    title: "Media Team",
    members: [
      { name: "Sanjay K", year: "IV", photo: "/team/sanjay.jpg" },
      { name: "Vidhya Subramanian", year: "III", photo: "/team/vidhya.jpg" },
      { name: "Harishbhuvan", year: "III", photo: "/team/harishbhuvan.jpg" },
      { name: "Kalpana", year: "II", photo: "/team/kalpana.jpg" },
      { name: "Neha L Sewin", year: "II", photo: "/team/neha.jpg" },
      { name: "Doneshwaran", year: "III", photo: "/team/donesh.jpg" },
      { name: "Arish R", year: "IV", photo: "/team/arish.jpg" },
    ],
  },
  {
    title: "Event Management Team",
    members: [
      { name: "Veronica Regina Paul", year: "III", photo: "/team/veronica.jpg" },
      { name: "Agnes Sharmi G M", year: "III", photo: "/team/agnes.jpg" },
      { name: "Shanmuga Priya", year: "III", photo: "/team/priya.jpg" },
      { name: "Samyuktha K L", year: "II", photo: "/team/samyuktha.jpg" },
      { name: "Vaishnavi M", year: "II", photo: "/team/vaishnavi.jpg" },
      { name: "Hariprasad", year: "II", photo: "/team/hariprasad.jpg" },
      { name: "Aiswarya Lakshmi", year: "II", photo: "/team/aiswarya.jpg" },
      { name: "Roshan", year: "II", photo: "/team/roshan.jpg" },
    ],
  },
  {
    title: "Technical Team",
    members: [
      { name: "Dinesh N", year: "IV", photo: "/images/team/dinesh.jpg" },
      { name: "Vishnupriya I", year: "III", photo: "/images/team/vishnupriya.jpg" },
      { name: "Harini A", year: "II", photo: "/images/team/harini_a.jpg" },
    ],
  },
  {
    title: "Design Team",
    members: [
      { name: "Dharshini V", year: "II", photo: "/team/dharshini.jpg" },
      { name: "Jovitha Sheethal B", year: "II", photo: "/team/jovitha.jpg" },
      { name: "Harini M", year: "II", photo: "/team/harini_m.jpg" },
      { name: "Gayathri Dheivy P B", year: "II", photo: "/team/gayathri.jpg" },
      { name: "Indhumathy K", year: "II", photo: "/team/indhumathy.jpg" },
    ],
  },
  {
    title: "Editorial Team",
    members: [
      { name: "Ramanan K R", year: "IV", photo: "/team/ramanan.jpg" },
      { name: "Karishma A", year: "III", photo: "/team/karishma.jpg" },
      { name: "Tharun S", year: "II", photo: "/team/tharun.jpg" },
      { name: "Poojasri", year: "II", photo: "/team/pooja.jpg" },
    ],
  },
  {
    title: "Data Mining Team",
    members: [
      { name: "Pradyumna Sagar T", year: "IV", photo: "/team/pradyumna.jpg" },
    ],
  },
];

const OurTeam = () => {
  return (
    <div
      id="our-team"
      className="min-h-screen bg-background text-foreground py-16 px-6"
    >
      <h1 className="text-5xl font-extrabold text-center mb-12 gradient-text">
        Our Team
      </h1>

      <div className="space-y-16">
        {teamData.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-pink-500">
              {section.title}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.members.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
                >
                  {member.photo && (
                    <motion.img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-pink-400 shadow-md"
                      whileHover={{ rotate: 3, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  )}
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  {/* ✅ Show role if available, otherwise show team name */}
                  <p className="text-sm opacity-70">
                    {member.domain || section.title}
                  </p>
                  <p className="text-sm font-medium mt-1">Year: {member.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
