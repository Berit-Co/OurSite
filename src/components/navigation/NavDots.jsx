import { motion } from "framer-motion"

function NavDots({ activeSection, scrollToSection }) {
  const sections = Array.from(document.querySelectorAll("section[id]")).filter(
    (section) => section.id !== "footer"
  )

  return (
    <div className="fixed right-4 top-1/2 z-[70] -translate-y-1/2">
      {sections.map((_, index) => (
        <motion.div
          key={index}
          onClick={() => scrollToSection(index)}
          className={`mb-2 size-2 cursor-pointer rounded-full ${
            activeSection === index ? "bg-[#e8d4b4]" : "bg-white/30"
          }`}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  )
}

export default NavDots
