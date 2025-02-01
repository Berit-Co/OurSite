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
            Din digitala närvaro börjar med en stark hemsida
          </h2>

          <motion.div layout className="relative overflow-hidden">
            <motion.div
              layout
              className="space-y-4 text-base text-neutral-400 sm:text-lg md:text-xl"
            >
              <p>
                De senaste åren har vi sett en kraftig ökning av företag som
                väljer att enbart fokusera på sina sociala medieprofiler, och
                många har valt att lägga mindre och mindre energi på sina
                hemsidor. Det har blivit en trend att lägga tid och resurser på
                content, inlägg och annonser på plattformar som Instagram,
                Facebook och LinkedIn. Men här finns en risk: alla kunder
                använder inte sociala medier. Många föredrar istället att söka
                efter information direkt via en hemsida, där de kan hitta
                prislistor, detaljerad information om företaget och specifika
                tjänster.
              </p>
              <p className={!isExpanded ? "line-clamp-2" : ""}>
                Även om sociala medier kan ge snabb synlighet, har de sina
                begränsningar. Du äger inte ditt innehåll på dessa plattformar
                och är beroende av deras algoritmer för att synas. På en hemsida
                har du full kontroll över innehållet och hur det presenteras...
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
                    Även om sociala medier kan ge snabb synlighet, har de sina
                    begränsningar. Du äger inte ditt innehåll på dessa
                    plattformar och är beroende av deras algoritmer för att
                    synas. På en hemsida har du full kontroll över innehållet
                    och hur det presenteras. Dessutom, med en egen hemsida får
                    du bättre möjligheter att synas på Google och andra
                    sökmotorer, vilket gör det lättare för kunder att hitta dig.
                  </p>
                  <p>
                    En annan stor fördel med en hemsida är att den ger ett mer
                    professionellt intryck och ger kunderna förtroende. Sociala
                    medieprofiler kan ibland kännas mer informella och
                    transienta, medan en väldesignad hemsida visar att ditt
                    företag är seriöst och långsiktigt. Du kan även lägga upp
                    detaljerad information, som prislistor och tjänster, på ett
                    sätt som är svårt att få fram på sociala plattformar.
                  </p>
                  <p>
                    Slutligen handlar det också om trygghet. När du har en
                    hemsida, har du kontroll över din egen närvaro online och
                    kan skapa en stabil grund för din digitala marknadsföring,
                    utan att vara beroende av externa plattformar som kan ändra
                    sina regler eller algoritmer.
                  </p>
                  <p>
                    Att bara satsa på sociala medier räcker inte för att bygga
                    ett hållbart och pålitligt online-varumärke. En
                    professionell hemsida ger inte bara ökad synlighet och
                    trovärdighet – den gör också att du kan ge kunderna all
                    information de söker, på ett ställe de känner sig trygga
                    med.
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
            {isExpanded ? "Visa mindre" : "Läs mer"}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
