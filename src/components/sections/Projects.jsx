import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import collage1 from "../../assets/img/collage/collage1.webp"
import collage2 from "../../assets/img/collage/collage2.webp"
import collage3 from "../../assets/img/collage/collage3.webp"
import collage4 from "../../assets/img/collage/collage4.webp"
import collage5 from "../../assets/img/collage/collage5.webp"
import collage6 from "../../assets/img/collage/collage6.webp"
import collage7 from "../../assets/img/collage/collage7.webp"
import collage8 from "../../assets/img/collage/collage8.webp"
import collage9 from "../../assets/img/collage/collage9.webp"
import collage10 from "../../assets/img/collage/collage10.webp"

function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)

  const topImagesDesktop = [collage1, collage3, collage10, collage5, collage8]
  const topImagesMobile = [collage1, collage10, collage8]
  const bottomImagesDesktop = [collage6, collage2, collage4, collage9, collage7]
  const bottomImagesMobile = [collage6, collage5, collage7]

  const handleToggle = () => {
    if (isExpanded) {
      const container = document.querySelector("#projects-section")
      container?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsExpanded(!isExpanded)
  }

  return (
    <section id="projects-section" className="relative min-h-screen py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4">
        {/* Top Images Row */}
        <div className="flex w-full gap-0 overflow-x-auto md:gap-1 md:overflow-x-hidden">
          {topImagesDesktop.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative hidden shrink-0 md:block"
              style={{ flex: "1 1 0" }}
            >
              <div>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="size-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black/40 to-transparent" />
              </div>
            </motion.div>
          ))}
          {topImagesMobile.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative shrink-0 md:hidden"
              style={{ flex: "1 1 0" }}
            >
              <div>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="size-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="mb-1 max-w-4xl">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-0"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
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
                      While social media can provide quick visibility, it has
                      its limitations. You don&#39;t own your content on these
                      platforms and are dependent on their algorithms to be
                      seen. With a website, you have full control over your
                      content and how it&#39;s presented. Additionally, having
                      your own website improves your chances of appearing on
                      Google and other search engines, making it easier for
                      potential customers to find you.
                    </p>
                    <p>
                      Another key advantage of a website is that it creates a
                      more professional impression and builds trust with
                      customers. Social media profiles can sometimes feel more
                      informal and fleeting, whereas a well-designed website
                      signals that your business is serious and built for the
                      long term.
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
        </div>

        {/* Bottom Images Row */}
        <div className="flex w-full gap-0 overflow-x-auto md:gap-1 md:overflow-x-hidden">
          {bottomImagesDesktop.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative hidden shrink-0 md:block"
              style={{ flex: "1 1 0" }}
            >
              <div>
                <img
                  src={image}
                  alt={`Project image ${index + 6}`}
                  className="size-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
            </motion.div>
          ))}
          {bottomImagesMobile.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative shrink-0 md:hidden"
              style={{ flex: "1 1 0" }}
            >
              <div>
                <img
                  src={image}
                  alt={`Project image ${index + 6}`}
                  className="size-full object-cover"
                  style={{ aspectRatio: "21/9" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
