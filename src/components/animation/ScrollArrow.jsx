import { motion } from "framer-motion"
import PropTypes from "prop-types"
import { IoIosArrowDown } from "react-icons/io"

function ScrollArrow({ onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="absolute bottom-24 cursor-pointer sm:bottom-10"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.2 }}
    >
      <IoIosArrowDown className="text-4xl text-white/50 transition-colors hover:text-[#e8d4b4]" />
    </motion.div>
  )
}

ScrollArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ScrollArrow
