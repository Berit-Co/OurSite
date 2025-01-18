import { motion } from "framer-motion";

function Services({ services }) {
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className={`absolute ${
          isMobile ? "right-4" : "right-[calc(50%+20rem)]"
        } lg:right-[calc(50%+24rem)] top-1/2 -translate-y-1/2 flex items-center gap-8`}>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "40vh" }}
          transition={{ duration: 0.8 }}
          className="w-[2px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}>
          <h2
            className={`font-bold tracking-widest text-neutral-800 ${
              isMobile ? "text-4xl" : "text-6xl"
            }`}>
            WHAT WE DO
          </h2>
        </motion.div>
      </div>

      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "grid-cols-2"
        } gap-4 md:gap-6 lg:gap-8 
        ${
          isMobile ? "max-w-[90%] mt-24" : isTablet ? "max-w-2xl" : "max-w-4xl"
        }`}>
        {services.map((service) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg cursor-pointer">
            <div className="w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 mb-4 text-[#e8d4b4]">
              <service.icon className="w-full h-full" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {service.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
