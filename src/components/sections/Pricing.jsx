import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Pricing({ plans }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const isDesktop = window.innerWidth >= 1024;

  const handleDragEnd = (event, info) => {
    if (!isDesktop) {
      const swipeThreshold = 50;
      if (info.offset.x > swipeThreshold && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (
        info.offset.x < -swipeThreshold &&
        currentIndex < plans.length - 1
      ) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  if (isDesktop) {
    return (
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 mt-4">
            Our <span className="text-[#e8d4b4]">Offer</span>
          </h2>
          <p className="text-xl text-neutral-400">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="flex gap-8 max-w-6xl">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`w-[320px] p-8 rounded-xl backdrop-blur-sm ${
                plan.highlight
                  ? "bg-[#e8d4b4]/20 border border-[#e8d4b4]/30"
                  : "bg-white/5"
              }`}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">
                  {plan.price === "Project Based"
                    ? plan.price
                    : `$${plan.price}`}
                </span>
                <span className="text-neutral-400 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="text-[#e8d4b4] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`w-full py-3 rounded-lg mt-8 ${
                  plan.highlight
                    ? "bg-[#e8d4b4] text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}>
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Our <span className="text-[#e8d4b4]">Offer</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-neutral-400">
          Choose the plan that fits your needs
        </p>
      </motion.div>

      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-[280px] sm:max-w-sm h-[325px] sm:h-[400px]">
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}>
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
                  className={`absolute top-0 left-0 w-full p-5 sm:p-6 rounded-xl ${
                    plan.highlight
                      ? "bg-[#e8d4b4]/20 border border-[#e8d4b4]/30"
                      : "bg-white/5"
                  }`}>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-end mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-bold">
                      {plan.price === "Project Based"
                        ? plan.price
                        : `$${plan.price}`}
                    </span>
                    <span className="text-neutral-400 ml-1 text-sm sm:text-base">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="text-[#e8d4b4] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`w-full py-2.5 sm:py-3 rounded-lg mt-6 sm:mt-8 text-sm sm:text-base ${
                      plan.highlight
                        ? "bg-[#e8d4b4] text-black"
                        : "bg-white/10 hover:bg-white/20"
                    }`}>
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
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer ${
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
  );
}

export default Pricing;
