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

          {/* Dekorativ linje */}
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute -bottom-8 left-0 h-24 w-full"
          >
            <svg className="size-full">
              <motion.path
                d="M 0 0 L 200 0 L 200 80 L 195 75 M 200 80 L 205 75"
                fill="transparent"
                stroke="#e8d4b4"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Stack text med glow effekt */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-6xl font-bold tracking-tight md:text-7xl"
          >
            <span className="bg-gradient-to-r from-white to-[#e8d4b4] bg-clip-text text-transparent">
              Stack
            </span>
          </motion.h2>
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
