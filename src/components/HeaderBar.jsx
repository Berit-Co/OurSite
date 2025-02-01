import { motion, useScroll, useTransform } from "framer-motion"

import "../assets/style/HeaderBar.css"

function HeaderBar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  )

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed inset-x-0 top-0 z-40 h-24 border-b border-white/0 transition-colors
        duration-300 sm:h-24 md:h-32"
    ></motion.header>
  )
}

export default HeaderBar
