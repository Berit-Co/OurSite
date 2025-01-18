import { motion, AnimatePresence } from "framer-motion";
import AnimatedLine from "../animation/AnimatedLine";
import ScrollArrow from "../animation/ScrollArrow";
import HeaderBar from "../HeaderBar";
import Logo from "../animation/Logo";
import NavCircle from "../navigation/NavCircle";

function Hero({ isLoading, onScrollNext, canScroll }) {
  return (
    <section className="h-screen px-4 sm:px-6 md:px-10 flex flex-col items-center justify-center relative pt-20">
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
              className="w-full sm:w-3/4 md:w-1/2 mt-20 sm:mt-0">
              <div className="flex flex-col gap-2 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:gap-6 items-start sm:items-baseline">
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
                    We
                  </h1>
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
                    Create
                  </h1>
                </div>
                <div className="flex gap-3 sm:gap-6 items-baseline">
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
                    Digital
                  </h1>
                </div>
                <div className="flex items-baseline">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#e8d4b4]">
                    Solutions
                  </h1>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 mt-4 md:mt-6">
                  Transforming ideas into digital reality
                </p>
              </div>
            </motion.div>

            <ScrollArrow onClick={onScrollNext} />
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
