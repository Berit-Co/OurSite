import { motion } from "framer-motion"

function Projects({ projects }) {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="mt-28 max-w-4xl space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="rounded-lg bg-white/5 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-bold">{project.name}</h3>
            <div className="flex gap-3">
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
