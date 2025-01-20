import { motion } from "framer-motion"

function IconWebDevelopment() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      whileHover={{ scale: 1.1 }}
    >
      <motion.path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9.25 12l-2.75-3 2.75-3h1.5l-2.75 3 2.75 3h-1.5zM15 16h-1.5l2.75-3-2.75-3H15l2.75 3L15 16z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.svg>
  )
}

export default IconWebDevelopment
