export interface Job {
  title: string;
  role: string;
  type: string;
  period: string;
  description: string;
  link: string | null;
}

export const jobs: Job[] = [
  {
    title: 'Freelance',
    role: 'Full-Stack Developer',
    type: 'Self-employed',
    period: 'Jun 2025 - Jul 2025',
    description: 'Built e-commerce solution for women\'s accessories boutique to overcome limited market reach and manual order management. Architected 15+ APIs using Node.js, Express, MongoDB serving 100+ customers with 30% faster response times and JWT security maintaining zero breaches across 50+ orders.',
    link: 'https://mineaccessories.vercel.app/',
  },
  {
    "title": "Information Technology Institute ( ITI )",
    "role": "Software Development Intern",
    "type": "Internship · Remote",
    "period": "Jan 2025 - Feb 2025 ",
    "description": "Completed intensive training in C# backend development and SQL database management as part of ITI's professional development program. Built 5+ practice applications applying OOP principles such as inheritance, encapsulation, and polymorphism to create maintainable code structures. Developed proficiency in SQL by writing 20+ queries involving joins, subqueries, and aggregate functions, and gained hands-on experience with database normalization, CRUD operations, and relational data modeling.",
    link: null,
  },
  {
    "title": "Information Technology Institute ( ITI )",
    "role": "Software Development Intern",
    "type": "Internship · Remote",
    "period": "Jul 2023 - Aug 2023 ",
    link: null,
    "description": "Completed intensive full-stack web development training in the MEAN stack (MongoDB, Express.js, Angular, Node.js) through ITI's summer program. Built 6+ practice web applications implementing RESTful APIs, client-server architecture, and database integration. Developed Node.js/Express.js server-side logic with 15+ API endpoints, designed MongoDB schemas with proper data modeling techniques, and created responsive Angular interfaces using TypeScript and component-based architecture. Gained hands-on experience with full development lifecycle from UI design to database deployment."
  }
  
  
];
