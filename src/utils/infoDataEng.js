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
      { number: "95%", label: "Client Satisfaction" },
      { number: "50+", label: "Projects Completed" },
      { number: "8+", label: "Years Experience" },
    ],
  },
  {
    about: {
      badge: "About us",
      title: "BerIT & Company - Visions & Values",
      description: [
        "At BerIT & Company, we're more than just a web development team—we're a family. Each of us brings a unique skill set and a different perspective on web development and design, allowing us to complement each other perfectly.",
        "Our strength lies in this diversity, ensuring that every project receives a well-thought-out and balanced approach. We strive to create inclusive and accessible digital solutions that adhere to the latest standards, such as WCAG 2.2. With the upcoming Digital Accessibility Act, coming into effect on June 28, 2025, it is more important than ever to ensure that websites are accessible to everyone.",
        "While we are at the core of BerIT & Company, we also collaborate with talented consultants when needed, expanding our expertise to meet any challenge. Our vision is to grow into a powerful digital tool with unlimited possibilities—so that nothing is impossible to create.",
        "Let's build something great together!",
      ],
      rating: {
        stars: "5 Star",
        starIcon: "★",
        text: "Reviews",
      },
      cta: "Get Started",
    },
  },
  {
    services: [
      { name: "Web Development", icon: IconWebDevelopment },
      { name: "Mobile Apps", icon: IconMobileApp },
      { name: "UI/UX Design", icon: IconUiUx },
      { name: "Cloud Solutions", icon: IconCloudSolutions },
    ],
  },
  {
    projects: [
      {
        name: "E-commerce Platforms",
        tech: ["React", "Node.js", "MongoDB", "Django", "Python"],
      },
      { name: "CRM Platforms", tech: ["React", "Node.js", "AWS"] },
      { name: "Mobile Apps", tech: ["React Native", "Firebase"] },
      { name: "Healthcare Portals", tech: ["Next.js", "GraphQL"] },
      {
        name: "Web Applications",
        tech: ["Flask", "React", "Vanilla JS", "HTML", "CSS", "Python"],
      },
    ],
  },
  {
    plans: [
      {
        name: "One Time Project",
        price: "Project Based",
        period: "",
        features: [
          "Initial Consultation",
          "Basic Support",
          "1 Project",
          "3 Revision Rounds",
        ],
      },
      {
        name: "Standard Subscription",
        price: "499",
        period: "/month",
        highlight: true,
        features: [
          "Priority Support",
          "1 Active Project",
          "2 Content Updates / week",
          "Monthly Performance Report",
        ],
      },
      {
        name: "Advanced",
        price: "799",
        period: "/month",
        features: [
          "24/7 Support",
          "Multiple Projects",
          "Unlimited Updates",
          "Monthly Strategy Meeting",
        ],
      },
    ],
  },
  {
    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "We use modern technologies such as React, Node.js, MongoDB, and more to create scalable and efficient solutions.",
      },
      {
        question: "What does the development process look like?",
        answer:
          "We follow an agile development process with regular check-ins and iterations to ensure that the project meets your needs.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes, we offer continuous support and maintenance depending on the service level agreement.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "The project duration varies depending on scope and complexity, but we always provide a detailed time estimate at the beginning of each project.",
      },
      {
        question: "Can you help with existing projects?",
        answer:
          "Yes, we can help with further developing or maintaining existing projects, regardless of technical stack.",
      },
      {
        question: "What does the pricing model look like?",
        answer:
          "We offer flexible pricing models based on the project's scope and your specific needs. Contact us for a detailed quote or check our Offers section.",
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
