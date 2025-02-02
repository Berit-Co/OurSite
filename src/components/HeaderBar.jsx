import { motion, useScroll, useTransform } from "framer-motion"

import Logo from "./animation/Logo"
import NavCircle from "./navigation/NavCircle"

import "../assets/style/HeaderBar.css"

import Language from "./Language"

function HeaderBar({ canScroll }) {
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
        duration-300"
    >
      <div className="flex h-full items-center justify-between px-4 pt-4 sm:px-8 sm:pt-5 md:px-16 md:pt-6">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          <Language />
          <NavCircle canScroll={canScroll} />
        </div>
      </div>
    </motion.header>
  )
}

export default HeaderBar
