import { motion } from "framer-motion"
import { IoIosArrowForward } from "react-icons/io"

function About({ about }) {
  return (
    <section className="flex min-h-screen items-center justify-center py-24">
      <div className="mt-28 max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <span className="rounded-full bg-[#e8d4b4]/10 px-4 py-2 text-sm text-[#e8d4b4]">
                {about.badge}
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <IoIosArrowForward className="text-8xl text-[#e8d4b4]" />
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  {about.title}
                </h2>
              </div>

              <p className="text-base text-neutral-400 sm:text-lg md:text-xl">
                {about.description[0]}
                <br />
                {about.description[1]}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("pricing")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-gradient-to-r from-[#e8d4b4] to-[#e8d4b4]/80 
                  px-8 py-3 text-black transition-all hover:shadow-lg"
              >
                {about.cta}
              </motion.button>
            </div>
          </div>

          {/* Right Column - Img */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
