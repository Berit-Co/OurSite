import {
  IconCloudSolutions,
  IconMobileApp,
  IconUiUx,
  IconWebDevelopment,
} from "@/components/ui/icons"

//import { angeleImg, debbieImg, kimImg, sandraImg } from "@/assets/img"

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
      title: "Our Journey, Vision, And Values",
      description: [
        "We are a family-owned business that puts the customer at the center. With our personal approach and dedication to quality, we build long-term partnerships.",
        "Our strength lies in combining technical expertise with a genuine understanding of our customers needs, making every project a shared journey towards success.",
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
      // TO DEBBAN
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
]

export default sections
