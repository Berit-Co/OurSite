import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Pricing({ plans }) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const isDesktop = window.innerWidth >= 1024

  const handleDragEnd = (event, info) => {
    if (!isDesktop) {
      const swipeThreshold = 50
      if (info.offset.x > swipeThreshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      } else if (
        info.offset.x < -swipeThreshold &&
        currentIndex < plans.length - 1
      ) {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }

  if (isDesktop) {
    return (
      <section className="flex h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="my-4 text-4xl font-bold md:text-6xl">
            Our <span className="text-[#e8d4b4]">Offer</span>
          </h2>
          <p className="text-xl text-neutral-400">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="flex max-w-6xl gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`w-[320px] rounded-xl p-8 backdrop-blur-sm ${
                plan.highlight
                  ? "border border-[#e8d4b4]/30 bg-[#e8d4b4]/20"
                  : "bg-white/5"
              }`}
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-6 flex items-end">
                <span className="text-4xl font-bold">
                  {plan.price === "Project Based"
                    ? plan.price
                    : `$${plan.price}`}
                </span>
                <span className="ml-1 text-neutral-400">{plan.period}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="mr-2 text-[#e8d4b4]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`mt-8 w-full rounded-lg py-3 ${
                  plan.highlight
                    ? "bg-[#e8d4b4] text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold md:text-6xl">
          Our <span className="text-[#e8d4b4]">Offer</span>
        </h2>
        <p className="text-sm text-neutral-400 sm:text-lg md:text-xl">
          Choose the plan that fits your needs
        </p>
      </motion.div>

      <div className="flex w-full flex-col items-center">
        <div className="relative h-[325px] w-full max-w-[280px] sm:h-[400px] sm:max-w-sm">
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="popLayout">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: currentIndex === index ? 1 : 0.8,
                    opacity: Math.abs(currentIndex - index) <= 1 ? 1 : 0,
                    x: `${(index - currentIndex) * 100}%`,
                    zIndex: currentIndex === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-0 top-0 w-full rounded-xl p-5 sm:p-6 ${
                    plan.highlight
                      ? "border border-[#e8d4b4]/30 bg-[#e8d4b4]/20"
                      : "bg-white/5"
                  }`}
                >
                  <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
                    {plan.name}
                  </h3>
                  <div className="mb-4 flex items-end sm:mb-6">
                    <span className="text-2xl font-bold sm:text-3xl">
                      {plan.price === "Project Based"
                        ? plan.price
                        : `$${plan.price}`}
                    </span>
                    <span className="ml-1 text-sm text-neutral-400 sm:text-base">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm sm:space-y-3 sm:text-base">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2 text-[#e8d4b4]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`mt-6 w-full rounded-lg py-2.5 text-sm sm:mt-8 sm:py-3 sm:text-base ${
                      plan.highlight
                        ? "bg-[#e8d4b4] text-black"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="flex gap-3">
          {plans.map((_, index) => (
            <motion.div
              key={index}
              className={`size-2 cursor-pointer rounded-full sm:size-2.5 ${
                currentIndex === index ? "bg-[#e8d4b4]" : "bg-white/30"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
