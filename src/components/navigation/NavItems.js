export const navigationItems = [
  { id: "hero", title: "Home" },
  { id: "stats", title: "Stats" },
  { id: "services", title: "Services" },
  { id: "projects", title: "Projects" },
  { id: "pricing", title: "Pricing" },
  { id: "team", title: "Team" },
  { id: "consultation", title: "Contact" },
]

export const getNavigationIds = () => navigationItems.map((item) => item.id)
