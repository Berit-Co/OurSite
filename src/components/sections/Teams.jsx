import { motion } from "framer-motion"

function Team({ members }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold md:text-6xl">
          Meet <span className="text-[#e8d4b4]">The Team</span>
        </h2>
        <p className="text-sm text-neutral-400 sm:text-lg md:text-xl">
          The creative minds behind BerIT & Co
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 px-4 sm:flex-row sm:px-0">
        {members.map((member) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-[280px] rounded-lg bg-white/10 p-6 backdrop-blur-sm"
          >
            <div className="mx-auto mb-4 size-48 overflow-hidden rounded-full">
              <img
                src={member.img}
                alt={member.name}
                className="size-full object-cover object-center grayscale transition-all duration-300
                  hover:grayscale-0"
              />
            </div>
            <h3 className="mb-2 text-center text-xl font-medium">
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
  )
}

export default Team
