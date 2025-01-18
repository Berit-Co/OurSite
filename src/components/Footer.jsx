import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

import { navigationItems } from "./navigation/NavItems"

function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Berit-Co" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/your-profile" },
    { icon: <FaTwitter />, url: "https://twitter.com/your-twitter" },
    { icon: <HiMail />, url: "mailto:Bergstrom_sandra@hotmail.com" },
  ]

  const footerLinks = navigationItems.filter((item) =>
    ["services", "projects", "team", "consultation"].includes(item.id)
  )

  const handleSectionClick = (link) => {
    const element = document.getElementById(link.toLowerCase())
    if (element) {
      const offset = element.offsetTop
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="min-h-[40vh] border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">BerIT & Co</h3>
            <p className="max-w-md text-neutral-400">
              Transforming ideas into digital reality. We create innovative
              solutions that drive business growth and user engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#e8d4b4]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <motion.a
                    onClick={() => handleSectionClick(link.id)}
                    className="inline-block cursor-pointer text-neutral-400 transition-colors hover:text-white"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#e8d4b4]">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-neutral-400 hover:text-white"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} BerIT & Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
