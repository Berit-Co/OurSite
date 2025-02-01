import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoIosArrowForward } from "react-icons/io"

function About({ about }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="flex min-h-screen items-center justify-center py-24">
      <div className="mt-28 max-w-6xl px-4">
        {/* På stora skärmar: 2 kolumner. På små/medium: 1 kolumn */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Vänster kolumn */}
          <div className="flex flex-col">
            {/* Badge och Rubrik */}
            <div className="mb-8">
              <span className="rounded-full bg-[#e8d4b4]/10 px-4 py-2 text-sm text-[#e8d4b4]">
                {about.badge}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <IoIosArrowForward className="text-8xl text-[#e8d4b4]" />
              <h2 className="flex flex-col text-4xl font-bold leading-tight lg:text-5xl">
                <span>BerIT & Co</span>
                <span>Visions & Values</span>
              </h2>
            </div>

            {/* Bild visas här på små/medium skärmar */}
            <div className="mt-8 lg:hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="https://leadx.org/wp-content/uploads/2019/03/shutterstock_637157317.jpg"
                    alt="Team working together"
                    className="size-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Text content */}
            <div className="mt-8 space-y-6">
              <motion.div layout className="relative overflow-hidden">
                <motion.div
                  layout
                  className="space-y-4 text-base text-neutral-400 sm:text-lg md:text-xl"
                >
                  <p>{about.description[0]}</p>
                  <p className={!isExpanded ? "line-clamp-1" : ""}>
                    {about.description[1]}
                  </p>
                </motion.div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 pt-8 text-base text-neutral-400 sm:text-lg md:text-xl"
                    >
                      <p>{about.description[2]}</p>
                      <p>{about.description[3]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-lg bg-[#e8d4b4]/10 px-6 py-3 text-[#e8d4b4] transition-colors hover:bg-[#e8d4b4]/20"
              >
                {isExpanded ? "Visa mindre" : "Läs mer"}
              </motion.button>
            </div>
          </div>

          {/* Höger kolumn - Bild visas endast på stora skärmar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block lg:self-start lg:pt-[4.5rem]"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://leadx.org/wp-content/uploads/2019/03/shutterstock_637157317.jpg"
                alt="Team working together"
                className="size-full object-cover"
              />
            </div>

            {/* Rating Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-8 left-[40%] -translate-x-1/2 rounded-2xl bg-black/40 p-4 backdrop-blur-md 
                lg:-left-8 lg:translate-x-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#e8d4b4]">{about.rating.starIcon}</span>
                <div>
                  <div className="font-bold text-white">
                    {about.rating.stars}
                  </div>
                  <div className="text-sm text-white/80">
                    {about.rating.text}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
