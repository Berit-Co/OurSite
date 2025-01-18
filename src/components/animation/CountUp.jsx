import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

function CountUp({ end, duration = 2000, suffix = "", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (isInView && typeof end === "number" && !isNaN(end)) {
      setCount(0);
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(Math.round(current));
      }, duration / steps);
    }

    return () => {
      if (timer) clearInterval(timer);
      if (!isInView) setCount(0);
    };
  }, [isInView, end, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {isNaN(count) ? 0 : count}
      {suffix}
    </motion.span>
  );
}

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  suffix: PropTypes.string,
  className: PropTypes.string,
};

export default CountUp;
