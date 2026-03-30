export const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },

  {
    name: "Industries",
    children: [
      { name: "Fintech", href: "/industries/fintech" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Security", href: "/industries/security" },
      
    ]
  },

  {
    name: "Resources",
    children: [
      { name: "Blog", href: "/resources/blog" },
      // { name: "Case Studies", href: "/resources/case-studies" }
    ]
  }
];