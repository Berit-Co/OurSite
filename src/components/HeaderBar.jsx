import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import "./animation/HeaderBar.css";

function HeaderBar({ isLoading }) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(8px)"]
  );

  return (
    <motion.header
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
      className="fixed top-0 left-0 right-0 z-40 h-24 sm:h-26 md:h-32 border-b border-white/0 transition-colors duration-300">
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="content__container fixed top-[45px] sm:top-[68px] md:top-[74px] left-20 sm:left-28 md:left-36">
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
  );
}

export default HeaderBar;
