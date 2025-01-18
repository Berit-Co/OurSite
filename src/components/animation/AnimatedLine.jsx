import { motion } from "framer-motion"

function AnimatedLine() {
  return (
    <div className="mb-20 w-full overflow-hidden">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  )
}

export default AnimatedLine
