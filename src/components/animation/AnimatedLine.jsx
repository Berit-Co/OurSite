import { motion } from "framer-motion";

function AnimatedLine() {
  return (
    <div className="w-full overflow-hidden mb-20">
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}

export default AnimatedLine;
