import { AnimatePresence, motion } from "framer-motion"

import AnimatedLine from "../animation/AnimatedLine"
import Logo from "../animation/Logo"
import ScrollArrow from "../animation/ScrollArrow"
import HeaderBar from "../HeaderBar"
import NavCircle from "../navigation/NavCircle"

function Hero({ isLoading, onScrollNext, canScroll }) {
  return (
    <section
      className="mobile-hero-padding relative flex h-screen flex-col items-center justify-center 
        px-4 pt-20 sm:px-6 sm:pt-0 md:px-10"
    >
      <HeaderBar />
      <Logo />
      <NavCircle canScroll={canScroll} />

      <AnimatePresence mode="wait">
        {!isLoading && (
          <>
            <AnimatedLine />

            <div className="mt-16 w-full sm:mt-0 sm:w-3/4 md:w-1/2">
              <div className="flex flex-col gap-2 sm:gap-4">
                <div className="flex flex-col items-start sm:flex-row sm:items-baseline sm:gap-6">
                  <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl">
                    We
                  </h1>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="content-container flex items-baseline"
                  >
                    <ul className="content-container-list">
                      <li className="content-container-list-item text-4xl font-bold sm:text-5xl md:text-7xl">
                        Design
                      </li>
                      <li className="content-container-list-item text-4xl font-bold sm:text-5xl md:text-7xl">
                        Create
                      </li>
                      <li className="content-container-list-item text-4xl font-bold sm:text-5xl md:text-7xl">
                        Build
                      </li>
                      <li className="content-container-list-item text-4xl font-bold sm:text-5xl md:text-7xl">
                        Transform
                      </li>
                      <li className="content-container-list-item text-4xl font-bold sm:text-5xl md:text-7xl">
                        Innovate
                      </li>
                    </ul>
                  </motion.div>
                </div>
                <div className="flex items-baseline gap-3 sm:gap-6">
                  <h1 className="text-4xl font-bold sm:text-5xl md:text-7xl">
                    Digital
                  </h1>
                </div>
                <div className="flex items-baseline">
                  <h1 className="text-5xl font-bold text-[#e8d4b4] sm:text-6xl md:text-8xl">
                    Solutions
                  </h1>
                </div>
              </div>
            </div>

            <ScrollArrow onClick={onScrollNext} />
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
