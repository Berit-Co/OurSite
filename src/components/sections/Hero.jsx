import { AnimatePresence, motion } from "framer-motion"

import AnimatedLine from "../animation/AnimatedLine"
import Logo from "../animation/Logo"
import ScrollArrow from "../animation/ScrollArrow"
import HeaderBar from "../HeaderBar"
import NavCircle from "../navigation/NavCircle"

function Hero({ isLoading, onScrollNext, canScroll }) {
  return (
    <section
      className="relative flex h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6
        md:px-10"
    >
      <HeaderBar />
      <Logo isLoading={isLoading} />
      <NavCircle canScroll={canScroll} />

      <AnimatePresence mode="wait">
        {!isLoading && (
          <>
            <AnimatedLine />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.3,
              }}
              className="mt-20 w-full sm:mt-0 sm:w-3/4 md:w-1/2"
            >
              <div className="flex flex-col gap-2 sm:gap-4">
                <div className="flex flex-col items-start sm:flex-row sm:items-baseline sm:gap-6">
                  <h1 className="text-3xl font-bold sm:text-5xl md:text-7xl">
                    We
                  </h1>
                  <h1 className="text-3xl font-bold sm:text-5xl md:text-7xl">
                    Create
                  </h1>
                </div>
                <div className="flex items-baseline gap-3 sm:gap-6">
                  <h1 className="text-3xl font-bold sm:text-5xl md:text-7xl">
                    Digital
                  </h1>
                </div>
                <div className="flex items-baseline">
                  <h1 className="text-4xl font-bold text-[#e8d4b4] sm:text-6xl md:text-8xl">
                    Solutions
                  </h1>
                </div>
                <p className="mt-4 text-lg text-neutral-400 sm:text-xl md:mt-6 md:text-2xl">
                  Transforming ideas into digital reality
                </p>
              </div>
            </motion.div>

            <ScrollArrow onClick={onScrollNext} />
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
