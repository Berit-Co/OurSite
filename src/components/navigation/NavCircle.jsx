import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navigationItems } from "./NavItems";

function NavCircle({ canScroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = navigationItems.map((item) => ({
    title: item.title,
    href: `#${item.id}`,
  }));

  return (
    <>
      <motion.button
        className={`fixed top-4 right-4 z-[60] w-12 h-12 bg-white/5 rounded-full backdrop-blur-sm 
                   flex items-center justify-center ${
                     canScroll
                       ? "cursor-pointer hover:bg-white/10"
                       : "cursor-not-allowed opacity-50"
                   } transition-colors`}
        whileHover={{ scale: canScroll ? 1.1 : 1 }}
        whileTap={{ scale: canScroll ? 0.9 : 1 }}
        onClick={() => canScroll && setIsOpen(!isOpen)}
        disabled={!canScroll}>
        <motion.div className="flex flex-col gap-1.5 items-center justify-center w-6">
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full origin-center"
            animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white rounded-full origin-center"
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[55]">
            <nav className="h-full flex items-center justify-center">
              <motion.ul className="space-y-8">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center">
                    <a
                      href={item.href}
                      className="text-4xl font-bold text-white hover:text-[#e8d4b4] transition-colors"
                      onClick={() => setIsOpen(false)}>
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
  );
}

export default NavCircle;
