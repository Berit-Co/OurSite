import { motion } from "framer-motion";

function Team({ members }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Meet <span className="text-[#e8d4b4]">The Team</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-neutral-400">
          The creative minds behind BerIT & Co
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-8 px-4 sm:px-0">
        {members.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-[280px] bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 mx-auto">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <h3 className="text-xl font-medium text-center mb-2">
              {member.name}
            </h3>
            <p className="text-center text-neutral-400">
              <span className="text-[#e8d4b4]">{member.role[0]}</span>{" "}
              {member.role[1]}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Team;
