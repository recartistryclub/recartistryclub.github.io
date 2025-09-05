import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  year: string;
  domain: string;
  photo?: string; // optional photo path
}

interface TeamSection {
  title: string;
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
      { name: "Sanjay K", year: "IV", domain: "Member", photo: "/team/sanjay.jpg" },
      { name: "Vidhya Subramanian", year: "III", domain: "Member", photo: "/team/vidhya.jpg" },
      { name: "Harishbhuvan", year: "III", domain: "Member", photo: "/team/harishbhuvan.jpg" },
      { name: "Kalpana", year: "II", domain: "Member", photo: "/team/kalpana.jpg" },
      { name: "Neha L Sewin", year: "II", domain: "Member", photo: "/team/neha.jpg" },
      { name: "Doneshwaran", year: "III", domain: "Member", photo: "/team/donesh.jpg" },
      { name: "Arish R", year: "IV", domain: "Member", photo: "/team/arish.jpg" },
    ],
  },
  {
    title: "Event Management Team",
    members: [
      { name: "Veronica Regina Paul", year: "III", domain: "Member", photo: "/team/veronica.jpg" },
      { name: "Agnes Sharmi G M", year: "III", domain: "Member", photo: "/team/agnes.jpg" },
      { name: "Shanmuga Priya", year: "III", domain: "Member", photo: "/team/priya.jpg" },
      { name: "Samyuktha K L", year: "II", domain: "Member", photo: "/team/samyuktha.jpg" },
      { name: "Vaishnavi M", year: "II", domain: "Member", photo: "/team/vaishnavi.jpg" },
      { name: "Hariprasad", year: "II", domain: "Member", photo: "/team/hariprasad.jpg" },
      { name: "Aiswarya Lakshmi", year: "II", domain: "Member", photo: "/team/aiswarya.jpg" },
      { name: "Roshan", year: "II", domain: "Member", photo: "/team/roshan.jpg" },
    ],
  },
  {
    title: "Technical Team",
    members: [
      { name: "Dinesh N", year: "IV", domain: "Member", photo: "/team/dinesh.jpg" },
      { name: "Vishnupriya I", year: "III", domain: "Member", photo: "/team/vishnupriya.jpg" },
      { name: "Harini A", year: "II", domain: "Member", photo: "/team/harini_a.jpg" },
    ],
  },
  {
    title: "Design Team",
    members: [
      { name: "Dharshini V", year: "II", domain: "Member", photo: "/team/dharshini.jpg" },
      { name: "Jovitha Sheethal B", year: "II", domain: "Member", photo: "/team/jovitha.jpg" },
      { name: "Harini M", year: "II", domain: "Member", photo: "/team/harini_m.jpg" },
      { name: "Gayathri Dheivy P B", year: "II", domain: "Member", photo: "/team/gayathri.jpg" },
      { name: "Indhumathy K", year: "II", domain: "Member", photo: "/team/indhumathy.jpg" },
    ],
  },
  {
    title: "Editorial Team",
    members: [
      { name: "Ramanan K R", year: "IV", domain: "Member", photo: "/team/ramanan.jpg" },
      { name: "Karishma A", year: "III", domain: "Member", photo: "/team/karishma.jpg" },
      { name: "Tharun S", year: "II", domain: "Member", photo: "/team/tharun.jpg" },
      { name: "Poojasri", year: "II", domain: "Member", photo: "/team/pooja.jpg" },
    ],
  },
  {
    title: "Data Mining Team",
    members: [
      { name: "Pradyumna Sagar T", year: "IV", domain: "Member", photo: "/team/pradyumna.jpg" },
    ],
  },
];

const OurTeam = () => {
  return (
    <div
      id="our-team"  // ✅ added for navbar scroll
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
                  <p className="text-sm opacity-70">{member.domain}</p>
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
