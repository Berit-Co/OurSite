import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"

import "./animation/HeaderBar.css"

function HeaderBar({ isLoading }) {
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
      className="sm:h-26 fixed inset-x-0 top-0 z-40 h-24 border-b border-white/0 transition-colors duration-300 md:h-32"
    >
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="content__container fixed left-20 top-[45px] sm:left-28 sm:top-[68px] md:left-36 md:top-[74px]"
          >
            <p className="content__container__text">[ We ]</p>
            <ul className="content__container__list">
              <li className="content__container__list__item">Design</li>
              <li className="content__container__list__item">Create</li>
              <li className="content__container__list__item">Build</li>
              <li className="content__container__list__item">Transform</li>
              <li className="content__container__list__item">Innovate</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default HeaderBar
