import {
  IconCloudSolutions,
  IconMobileApp,
  IconUiUx,
  IconWebDevelopment,
} from "@/components/ui/icons"
import { angeleImg, debbieImg, kimImg, sandraImg } from "@/assets/img"

const sections = [
  {
    stats: [
      { number: "95%", label: "Kundnöjdhet" },
      { number: "50+", label: "Avslutade Projekt" },
      { number: "8+", label: "Års Erfarenhet" },
    ],
  },
  {
    about: {
      badge: "Om oss",
      title: "Vår Resa, Vision och Värderingar",
      description: [
        "Vi är ett familjeägt företag som sätter kunden i centrum. Med vårt personliga tillvägagångssätt och hängivenhet till kvalitet bygger vi långsiktiga partnerskap.",
        "Vår styrka ligger i att kombinera teknisk expertis med en genuin förståelse för våra kunders behov, vilket gör varje projekt till en gemensam resa mot framgång.",
      ],
      rating: {
        stars: "5 Stjärnor",
        starIcon: "★",
        text: "Recensioner",
      },
      cta: "Kom igång",
    },
  },
  {
    services: [
      { name: "Webbutveckling", icon: IconWebDevelopment },
      { name: "Mobilappar", icon: IconMobileApp },
      { name: "UI/UX Design", icon: IconUiUx },
      { name: "Molnlösningar", icon: IconCloudSolutions },
    ],
  },
  {
    projects: [
      {
        name: "E-handelsplattformar",
        tech: ["React", "Node.js", "MongoDB", "Django", "Python"],
      },
      { name: "CRM-plattformar", tech: ["React", "Node.js", "AWS"] },
      { name: "Mobilappar", tech: ["React Native", "Firebase"] },
      { name: "Hälsoportaler", tech: ["Next.js", "GraphQL"] },
      {
        name: "Webbapplikationer",
        tech: ["Flask", "React", "Vanilla JS", "HTML", "CSS", "Python"],
      },
    ],
  },
  {
    plans: [
      {
        name: "Engångsprojekt",
        price: "Projektbaserat",
        period: "",
        features: [
          "Inledande konsultation",
          "Grundläggande support",
          "1 Projekt",
          "3 Revisionsomgångar",
        ],
      },
      {
        name: "Standardprenumeration",
        price: "499",
        period: "/månad",
        highlight: true,
        features: [
          "Prioritetssupport",
          "1 Aktivt Projekt",
          "2 Innehållsuppdateringar / vecka",
          "Månadsvis Prestandarapport",
        ],
      },
      {
        name: "Avancerad",
        price: "799",
        period: "/månad",
        features: [
          "24/7 Support",
          "Flera Projekt",
          "Obegränsade Uppdateringar",
          "Månadsvis Strategimöte",
        ],
      },
    ],
  },
  {
    faqs: [
      {
        question: "Vilka teknologier använder ni?",
        answer:
          "Vi använder moderna teknologier som React, Node.js, MongoDB och mer för att skapa skalbara och effektiva lösningar.",
      },
      {
        question: "Hur ser utvecklingsprocessen ut?",
        answer:
          "Vi följer en agil utvecklingsprocess med regelbundna uppföljningar och iterationer för att säkerställa att projektet uppfyller dina behov.",
      },
      {
        question: "Erbjuder ni support efter lansering?",
        answer:
          "Ja, vi erbjuder kontinuerlig support och underhåll beroende på serviceavtalet.",
      },
      {
        question: "Hur lång tid tar ett typiskt projekt?",
        answer:
          "Projektets varaktighet varierar beroende på omfattning och komplexitet, men vi ger alltid en detaljerad tidsuppskattning i början av varje projekt.",
      },
      {
        question: "Kan ni hjälpa till med befintliga projekt?",
        answer:
          "Ja, vi kan hjälpa till med att vidareutveckla eller underhålla befintliga projekt, oavsett teknisk stack.",
      },
      {
        question: "Hur ser prismodellen ut?",
        answer:
          "Vi erbjuder flexibla prismodeller baserade på projektets omfattning och dina specifika behov. Kontakta oss för en detaljerad offert eller kolla vår Erbjudanden-sektion.",
      },
    ],
  },
  {
    members: [
      {
        img: sandraImg,
        name: "Sandra Bergstrom",
        role: ["UI/UX", "Designer"],
      },
      {
        img: kimImg,
        name: "Kim Bergstrom",
        role: ["Backend", "Developer"],
      },
      {
        img: debbieImg,
        name: "Debbie Bergstrom",
        role: ["Frontend", "Developer"],
      },
      {
        img: angeleImg,
        name: "Angele Perrot",
        role: ["Graphic", "Designer"],
      },
    ],
  },
]

export default sections
