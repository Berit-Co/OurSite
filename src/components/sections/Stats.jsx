import { motion } from "framer-motion";
import CountUp from "../animation/CountUp";

function Stats({ stats }) {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center">
            <h2 className="text-6xl font-bold text-[#e8d4b4] mb-4">
              <CountUp end={stat.number} suffix={stat.suffix || ""} />
            </h2>
            <p className="text-xl text-neutral-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
