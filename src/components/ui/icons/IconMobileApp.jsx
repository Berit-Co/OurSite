import { motion } from "framer-motion"

function IconMobileApp() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      whileHover={{ scale: 1.1 }}
    >
      {/* Phone outline */}
      <motion.path
        d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
        fill="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Code brackets */}
      <motion.path
        d="M13 8l-2 2 2 2M11 14l2 2-2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.svg>
  )
}

export default IconMobileApp
