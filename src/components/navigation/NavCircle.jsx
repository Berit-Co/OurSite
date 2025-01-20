import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { navigationItems } from "./NavItems"

function NavCircle({ canScroll }) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = navigationItems
    .map((item) => ({
      title: item.title,
      href: `#${item.id}`,
    }))
    .filter(
      (item) =>
        item.title !== "About" &&
        item.title !== "FAQ" &&
        item.title !== "Stats" &&
        item.title !== "Team"
    )

  return (
    <>
      <motion.button
        className={`fixed right-4 top-4 z-[60] flex size-12 items-center justify-center rounded-full
          bg-white/5 backdrop-blur-sm ${
            canScroll
              ? "cursor-pointer hover:bg-white/10"
              : "cursor-not-allowed opacity-50"
          } transition-colors`}
        whileHover={{ scale: canScroll ? 1.1 : 1 }}
        whileTap={{ scale: canScroll ? 0.9 : 1 }}
        onClick={() => canScroll && setIsOpen(!isOpen)}
        disabled={!canScroll}
      >
        <motion.div className="flex w-6 flex-col items-center justify-center gap-1.5">
          <motion.span
            className="h-0.5 w-6 origin-center rounded-full bg-white"
            animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="h-0.5 w-6 origin-center rounded-full bg-white"
            animate={
              isOpen
                ? {
                    rotate: -45,
                    y: -2,
                    scaleX: 1,
                  }
                : {
                    rotate: 0,
                    y: 0,
                    scaleX: 0.75,
                  }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && canScroll && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 5%)" }}
            animate={{ clipPath: "circle(150% at 95% 5%)" }}
            exit={{ clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-md"
          >
            <nav className="flex h-full items-center justify-center">
              <motion.ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <a
                      href={item.href}
                      className="text-4xl font-bold text-white transition-colors hover:text-[#e8d4b4]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavCircle
