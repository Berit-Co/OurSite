import { AnimatePresence, motion } from "framer-motion"

function Logo() {
  return (
    <AnimatePresence>
      {/* Justerade padding och minskade textstorleken */}
      <motion.div layout className="fixed left-6 top-6 z-50 flex items-center">
        {/* Container för "BerIT" texten */}
        <div className="mr-2 flex space-x-1">
          {"BerIT ".split("").map((letter, index) => (
            <motion.span
              layout
              key={index}
              className="font-aeonik text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        {/* Container för "&Co" texten */}
        <motion.div layout className="relative">
          {/* &Co text */}
          <motion.div className="relative text-4xl font-black text-white sm:text-5xl md:text-6xl">
            <motion.span
              animate={{
                textShadow:
                  window.innerWidth >= 640
                    ? [
                        "0 0 15px rgba(255,255,255,0.3)",
                        "0 0 25px rgba(255,255,255,0.5)",
                        "0 0 15px rgba(255,255,255,0.3)",
                      ]
                    : "0 0 15px rgba(255,255,255,0.3)",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              &Co
            </motion.span>
          </motion.div>
          {/* Permanent subtle glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-white/20
              to-purple-500/10 blur-lg"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Logo
