import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"

function FAQItem({ question, answer, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="overflow-hidden rounded-lg"
    >
      <motion.div
        animate={{
          background: isOpen
            ? "linear-gradient(to right, rgba(232, 212, 180, 0.1), rgba(232, 212, 180, 0.05), transparent)"
            : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ duration: 0.3 }}
        className="backdrop-blur-sm"
      >
        <button
          onClick={() => onToggle(index)}
          className="flex w-full items-center justify-between p-4 text-left"
        >
          <span className="flex items-center gap-4">
            <span className="text-sm text-[#e8d4b4]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base font-medium sm:text-xl md:text-xl">
              {question}
            </span>
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="text-[#e8d4b4]"
          >
            <IoIosArrowDown className="text-2xl text-white/50 transition-colors hover:text-[#e8d4b4] sm:text-3xl md:text-4xl" />
          </motion.span>
        </button>
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="px-4 pb-4">
                <p className="pl-8 text-neutral-400">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="flex min-h-screen items-center justify-center py-24">
      <div className="w-full max-w-4xl space-y-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold"
        >
          FAQ
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
