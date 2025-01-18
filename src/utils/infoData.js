import {
  IconCloudSolutions,
  IconMobileApp,
  IconUiUx,
  IconWebDevelopment,
} from "@/components/ui/icons"
import angeleImg from "../assets/img/angele.jpeg"
import debbieImg from "../assets/img/debbie.png"
import kimImg from "../assets/img/kim.png"
import sandraImg from "../assets/img/sandra.png"

const sections = [
  {
    stats: [
      { number: "95%", label: "Client Satisfaction" },
      { number: "50+", label: "Projects Completed" },
      { number: "8+", label: "Years Experience" },
    ],
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
        tech: ["React", "Node.js", "MongoDB"],
      },
      { name: "CRM Platforms", tech: ["React", "Node.js", "AWS"] },
      { name: "Mobile Apps", tech: ["React Native", "Firebase"] },
      { name: "Healthcare Portals", tech: ["Next.js", "GraphQL"] },
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
