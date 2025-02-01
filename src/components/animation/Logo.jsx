import { AnimatePresence, motion } from "framer-motion"

function Logo() {
  return (
    <AnimatePresence>
      {/* Main container with fixed header positioning */}
      <motion.div layout className="fixed left-4 top-4 z-50 flex items-center">
        {/* Container for the "BerIT" text */}
        <div className="mr-3 flex space-x-1">
          {"BerIT ".split("").map((letter, index) => (
            <motion.span
              layout
              key={index}
              className="font-aeonik text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        {/* Container for the "&Co" text */}
        <motion.div layout className="relative">
          {/* &Co text */}
          <motion.div className="relative text-5xl font-black text-white sm:text-6xl md:text-8xl">
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
