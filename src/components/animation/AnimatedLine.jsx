import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function AnimatedLine() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1000) // Linjen kommer att försvinna efter 3 sekunder

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default AnimatedLine
