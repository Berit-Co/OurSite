export const navigationItems = [
  { id: "hero", title: "Home" },
  { id: "stats", title: "Stats" },
  { id: "about", title: "About" },
  { id: "services", title: "Services" },
  { id: "projects", title: "Projects" },
  { id: "pricing", title: "Pricing" },
  { id: "faq", title: "FAQ" },
  { id: "team", title: "Team" },
  { id: "consultation", title: "Contact" },
]

export const getNavigationIds = () => navigationItems.map((item) => item.id)
