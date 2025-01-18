import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function Logo({ isLoading }) {
  return (
    <AnimatePresence>
      {/* Main container that handles the overall logo positioning and scaling */}
      <motion.div
        layout
        className={`flex items-center z-50 ${
          isLoading
            ? "fixed inset-0 justify-center items-center"
            : "fixed top-4 left-4"
        }`}
        animate={{
          scale: isLoading ? 1 : 0.45,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay: isLoading ? 2.8 : 0,
          ease: "easeInOut",
          layout: { duration: 1.2 },
        }}>
        {/* Container for the "BerIT" text with letter-by-letter animation */}
        <div className="flex mr-3 space-x-1">
          {"BerIT ".split("").map((letter, index) => (
            <motion.span
              layout
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: isLoading ? 0.5 + index * 0.4 : 0,
                ease: "easeInOut",
                layout: { duration: 1.2 },
              }}
              className="text-4xl sm:text-5xl md:text-7xl font-aeonik font-bold text-white tracking-tight">
              {letter}
            </motion.span>
          ))}
        </div>
        {/* Container for the "IT" text with scale animation */}
        <motion.div
          layout
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}>
          {/* IT text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: isLoading ? 2.3 : 0,
            }}
            className="relative text-5xl sm:text-6xl md:text-8xl font-black text-white">
            <motion.span
              animate={{
                textShadow: [
                  "0 0 15px rgba(255,255,255,0.3)",
                  "0 0 25px rgba(255,255,255,0.5)",
                  "0 0 15px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10">
              & Co
            </motion.span>
          </motion.div>
          {/* Permanent subtle glow - visas alltid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{
              duration: 0.3,
              delay: isLoading ? 2.4 : 0,
            }}
            className="absolute inset-0 blur-lg bg-gradient-to-r from-purple-500/10 via-white/20 to-purple-500/10"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

Logo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Logo;
