import { motion } from "framer-motion"

function Projects({ projects }) {
  return (
    <section className="flex min-h-screen items-center justify-center py-24">
      <div className="mt-28 max-w-4xl space-y-12">
        <div className="relative mb-24">
          {/* Bakgrundseffekt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -left-4 -top-4 -z-10 size-24 rounded-full bg-[#e8d4b4]/10 blur-2xl"
          />

          {/* Modern Stack presentation */}
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-[#e8d4b4] to-transparent"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="my-8 flex flex-wrap gap-4"
            >
              {["React", "Node.js", "MongoDB", "Django", "Python"].map(
                (tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="group relative cursor-pointer rounded-lg bg-white/5 px-6 py-3 backdrop-blur-sm"
                  >
                    <span className="relative z-10 text-lg font-medium">
                      {tech}
                    </span>
                    <motion.div
                      className="absolute inset-0 -z-10 rounded-lg bg-[#e8d4b4]/10"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  </motion.div>
                )
              )}
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-gradient-to-l from-[#e8d4b4] to-transparent"
            />
          </div>
        </div>

        {/* Project cards med staggered animation */}
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-bold">{project.name}</h3>
            <div className="flex max-w-[280px] flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[#e8d4b4]/10 px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
