import { motion } from "framer-motion";

function Projects({ projects }) {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="space-y-12 mt-28 max-w-4xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
            <div className="flex gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#e8d4b4]/10 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
