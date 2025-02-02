import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import Footer from "../components/Footer"
import NavDots from "../components/navigation/NavDots"
import { getNavigationIds } from "../components/navigation/NavItems"
import {
  About,
  Consultation,
  FAQ,
  Hero,
  Pricing,
  Projects,
  Services,
  Stats,
} from "../components/sections"
import infoData from "../utils/infoData"

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [canScroll, setCanScroll] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState(0)

  // Loading effect - UPPDATERAD MED KORTARE TIDER
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Ändrad från 4000 till 1000

    const textTimer = setTimeout(() => {
      setCanScroll(true)
    }, 1500) // Ändrad från 7000 till 1500

    return () => {
      clearTimeout(timer)
      clearTimeout(textTimer)
    }
  }, [])

  // Prevent scroll when loading or text animating
  useEffect(() => {
    const preventScroll = (e) => {
      if (!canScroll) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    if (!canScroll) {
      document.addEventListener("wheel", preventScroll, { passive: false })
      document.addEventListener("touchmove", preventScroll, { passive: false })
    }

    return () => {
      document.removeEventListener("wheel", preventScroll)
      document.removeEventListener("touchmove", preventScroll)
    }
  }, [canScroll])

  // Mouse move handler
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  // Scroll section handler
  const scrollToSection = (index) => {
    const sectionIds = getNavigationIds()
    const sectionId = sectionIds[index]
    const element = document.getElementById(sectionId)

    if (element) {
      const offset = element.offsetTop
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
  }

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = Array.from(
        document.querySelectorAll("section[id]")
      ).filter((section) => section.id !== "footer")

      const scrollPosition = window.scrollY + window.innerHeight / 2
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition + viewportHeight >= documentHeight) {
        setActiveSection(sections.length - 1)
        return
      }

      let activeIndex = 0
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          activeIndex = index
        }
      })

      setActiveSection(activeIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Data for sections
  const sections = infoData

  const statsData = sections[0].stats.map((stat) => {
    const number = parseInt(stat.number.replace(/[%+]/g, ""))
    const suffix = stat.number.match(/[%+]/g)?.[0] || ""

    return {
      number,
      label: stat.label,
      suffix,
    }
  })

  return (
    <div
      onMouseMove={handleMouseMove}
      className="overflow-x-hidden bg-black text-white"
    >
      {/* Floating Gradient Orb */}
      <motion.div
        className="pointer-events-none fixed size-[500px] rounded-full blur-[100px]"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", damping: 30 }}
        style={{
          background:
            "radial-gradient(circle, rgba(232,212,180,0.1) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="min-h-screen overflow-x-hidden">
        <section id="hero">
          <Hero
            isLoading={isLoading}
            onScrollNext={scrollToNextSection}
            canScroll={canScroll}
          />
        </section>
        <section id="projects">
          <Projects projects={sections[3].projects} />
        </section>
        <section id="stats">
          <Stats stats={statsData} />
        </section>

        <section id="services">
          <Services services={sections[2].services} />
        </section>
        <section id="pricing">
          <Pricing plans={sections[4].plans} />
        </section>
        <section id="consultation">
          <Consultation />
        </section>
        <section id="about">
          <About about={sections[1].about} />
        </section>
        <section id="faq">
          <FAQ faqs={sections[5].faqs} />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>

      <NavDots
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </div>
  )
}

export default LandingPage
