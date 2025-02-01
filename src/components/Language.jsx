import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Language() {
  const [language, setLanguage] = useState("sv")
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-wider hover:bg-white/20"
      >
        {language}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-full mt-2 w-32 overflow-hidden rounded-lg bg-black/80 backdrop-blur-sm"
          >
            <div className="flex flex-col">
              <button
                onClick={() => handleLanguageChange("sv")}
                className="px-4 py-3 text-left text-sm hover:bg-white/10"
              >
                Svenska
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className="px-4 py-3 text-left text-sm hover:bg-white/10"
              >
                English
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Language
