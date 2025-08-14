export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },

  {
    name: "Areas",
    href: "/industries",
    subMenu: [
      { name: "Real Estate", href: "/industries/realestate" },
      { name: "Family Offices", href: "/industries/familyoffices" },
      { name: "Hospitality", href: "/industries/hospitality" },
      {
        name: "Private Households & Estates",
        href: "/industries/privatehouseholds/householdestatemanagement", 
        clickable: false,
        subMenu: [
          { name: "Domestic Staff", href: "/industries/privatehouseholds/domesticstaff" },
          { name: "HouseHold & Estate Management", href: "/industries/privatehouseholds/householdestatemanagement" },
          { name: "Private Chefs", href: "/industries/privatehouseholds/privatechefs" },
        ],
      },
      { name: "Yachting", href: "/industries/yachting" },
      { name: "Chalets", href: "/industries/chalets" },
      { name: "Private Jets", href: "/industries/privatejets" },
    ],
  },

  {
    name: "Services",
    href: "/services",
    subMenu: [
      { name: "Recruitment Solutions", href: "/services/recruitmentsolutions" },
      { name: "Real Estate Management", href: "/services/realestatemanagement" },
      { name: "Consultancy", href: "/services/consultancy" },
    ],
  },

  { name: "Candidates", href: "/candidates" },
  { name: "Contact", href: "/contact" },
];
