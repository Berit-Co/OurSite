import { motion } from "framer-motion"

function Services({ services }) {
  const isMobile = window.innerWidth < 640
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-0">
      <div
        className={`absolute ${
          isMobile ? "left-1 top-[55%]" : "right-[calc(50%+20rem)] top-1/2"
        } flex -translate-y-1/2 items-center gap-8 lg:right-[calc(50%+24rem)]`}
      >
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "40vh" }}
          transition={{ duration: 0.8 }}
          className="w-[2px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          <h2
            className={`font-bold tracking-widest text-neutral-800 ${
              isMobile ? "text-5xl" : "text-6xl"
            }`}
          >
            WHAT WE DO
          </h2>
        </motion.div>
      </div>

      <div
        className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4 md:gap-6 lg:gap-8 ${
          isMobile ? "mt-24 max-w-[90%]" : isTablet ? "max-w-2xl" : "max-w-4xl"
        }`}
      >
        {services.map((service) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer rounded-lg bg-white/5 p-4 backdrop-blur-sm md:p-6 lg:p-8"
          >
            <div className="mb-4 size-16 text-[#e8d4b4] md:size-20 lg:size-24">
              <service.icon className="size-full" />
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              {service.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
