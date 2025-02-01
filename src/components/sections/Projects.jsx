import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    if (isExpanded) {
      // Scroll till toppen av containern när vi minimerar
      const container = document.querySelector("#projects-section")
      container?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <section
      id="projects-section"
      className="flex min-h-screen items-center justify-center py-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl px-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Your Digital Presence Starts with a Powerful Website
          </h2>

          <motion.div layout className="relative overflow-hidden">
            <motion.div
              layout
              className="space-y-4 text-base text-neutral-400 sm:text-lg md:text-xl"
            >
              <p>
                Over the past few years, there has been a significant increase
                in businesses choosing to focus solely on their social media
                profiles, with many putting less and less effort into their
                websites. It has become a trend to invest time and resources
                into content, posts, and ads on platforms like Instagram,
                Facebook, and LinkedIn. But there&#39;s a risk: not all
                customers use social media. Many prefer to search for
                information directly on a website, where they can find pricing
                details, comprehensive company information, and specific
                services.
              </p>
              <p className={!isExpanded ? "line-clamp-2" : ""}>
                While social media can provide quick visibility, it has its
                limitations. You don&#39;t own your content on these platforms
                and are dependent on their algorithms to be seen. With a
                website, you have full control over your content and how
                it&#39;s presented...
              </p>
            </motion.div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 text-base text-neutral-400 sm:text-lg md:text-xl"
                >
                  <p>
                    While social media can provide quick visibility, it has its
                    limitations. You don&#39;t own your content on these
                    platforms and are dependent on their algorithms to be seen.
                    With a website, you have full control over your content and
                    how it&#39;s presented. Additionally, having your own
                    website improves your chances of appearing on Google and
                    other search engines, making it easier for potential
                    customers to find you.
                  </p>
                  <p>
                    Another key advantage of a website is that it creates a more
                    professional impression and builds trust with customers.
                    Social media profiles can sometimes feel more informal and
                    fleeting, whereas a well-designed website signals that your
                    business is serious and built for the long term. You can
                    also display detailed information, such as pricing and
                    services, in a structured way that&#39;s hard to achieve on
                    social media platforms.
                  </p>
                  <p>
                    Finally, it&#39;s about security. When you have a website,
                    you control your own online presence and can build a stable
                    foundation for your digital marketing—without relying on
                    external platforms that can change their rules or algorithms
                    at any time.
                  </p>
                  <p>
                    Relying solely on social media isn&#39;t enough to build a
                    sustainable and trustworthy online brand. A professional
                    website doesn&#39;t just enhance visibility and
                    credibility—it ensures that customers can find all the
                    information they need, in a place they trust.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className="mt-6 rounded-lg bg-[#e8d4b4]/10 px-6 py-3 text-[#e8d4b4] transition-colors hover:bg-[#e8d4b4]/20"
          >
            {isExpanded ? "Show less" : "Read more"}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
