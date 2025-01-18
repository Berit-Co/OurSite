import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Consultation() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: import.meta.env.VITE_TO_EMAIL,
          from_email: email,
          message: `Consultation request from: ${email}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full px-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            We&lsquo;d Love to Hear From{" "}
            <span className="text-[#e8d4b4]">You.</span>
          </h2>
          <p className="text-xl text-neutral-400">
            Book a free Consultation now!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="relative"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}>
          <div className="relative group">
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-[#e8d4b4] via-purple-500/30 to-[#e8d4b4] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 50%", "100% 50%"]
                  : "0% 50%",
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative flex bg-black rounded-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white/5 rounded-l-lg focus:outline-none focus:ring-0 text-white placeholder-white/50"
                required
              />
              <motion.button
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#e8d4b4] text-black font-bold rounded-r-lg hover:bg-[#e8d4b4]/90 transition-colors">
                Send
              </motion.button>
            </div>
          </div>
          <div>
            <p className="text-neutral-400 mt-2 px-2">
              Or just reach out manually to{" "}
              <span className="font-bold">business@beritco.com</span>
            </p>
          </div>
        </motion.form>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#e8d4b4]/10 rounded-full blur-3xl" />
      </motion.div>

      {status === "sending" && (
        <p className="mt-4 text-neutral-400">Skickar meddelande...</p>
      )}
      {status === "success" && (
        <p className="mt-4 text-green-400">Tack! Vi återkommer inom kort.</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-400">Något gick fel. Försök igen senare.</p>
      )}
    </section>
  );
}

export default Consultation;
