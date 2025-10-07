import fantasyedgeImg from "../assets/fantsyai.jpeg";
import ecommercImg from "../assets/ecommerc.jpeg";
import finflexImg from "../assets/finflex.jpeg";
import medicalrecordsImg from "../assets/medical.png";

export interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "FantasyEdge AI",
    description:
      "AI-powered fantasy football platform combining real-time data processing with predictive analytics. Engineered a .NET 8 API that processes and synchronizes 680+ row insertions and 2,640+ row updates per gameweek. Secured the platform with JWT-based authentication and Identity Framework for role management. Optimized performance through Redis caching, reducing database queries by 28%. Developed a RandomForest Regressor model achieving 97% accuracy in predicting player performance using ensemble learning and feature engineering on historical data.",
    href: "https://fantasy-edge-ai.vercel.app/",
    image: fantasyedgeImg,
    tags: [
      ".NET 8",
      "Python",
      "SQL",
      "React",
      "C#",
      "Entity Framework Core",
      "RESTful API",
      "JWT",
      "RandomForest",
    ],
  },
  {
    title: "E-Commerce API",
    description:
      "Full-featured e-commerce backend with secure payment processing and optimized data management. Led end-to-end API development implementing advanced pagination, sorting, and filtering that improved response times by 18%. Integrated Stripe payment gateway for secure transaction processing and PCI compliance. Built robust authentication system using JWT and Identity Framework for session management. Implemented Redis caching strategy that reduced load times by 25% and boosted API responsiveness by 30%, significantly improving user experience under high traffic.",
    href: "https://github.com/yousefsaad12/Ecommerce",
    image: ecommercImg,
    tags: [
      ".NET",
      "SQL",
      "Redis",
      "Stripe",
      "Entity Framework",
      "JWT",
      "Identity Framework",
      "RESTful API",
      "C#",
    ],
  },
  {
    title: "FinFlex API",
    description:
      "Comprehensive stock portfolio management system with real-time data and social features. Architected a RESTful API using ASP.NET Core 7.0 featuring 15+ secure endpoints with JWT authentication for scalable stock, portfolio, and comment operations. Built a community-driven comment system with full CRUD functionality powered by Entity Framework Core and SQL Server, enabling investors to share insights. Delivered complete Swagger documentation covering 100% of endpoints and implemented advanced filtering and pagination to optimize data retrieval and accelerate client integration.",
    href: "https://github.com/yousefsaad12/FinFlex-Api",
    image: finflexImg,
    tags: [
      ".NET",
      "SQL",
      "RESTful",
      "ASP.NET Core",
      "JWT",
      "Entity Framework Core",
      "SQL Server",
      "Swagger",
      "C#",
    ],
  },

  {
    title: "Medical Records Management System",

    description:
      "Solves critical healthcare data fragmentation and medical error risks by providing a centralized SQL Server database that eliminates paper-based inefficiencies and reduces medication errors through real-time prescription tracking. Features automated appointment scheduling, comprehensive billing integration, and multi-department coordination with robust stored procedures and validation constraints—enabling healthcare facilities to deliver faster, safer, and more cost-effective patient care.",

    href: "https://github.com/yousefsaad12/Medical-Records-Management-System-",

    image: medicalrecordsImg,

    tags: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Database Design",
      "Entity-Relationship Modeling",
      "Data Normalization",
      "Foreign Key Constraints",
      "Database Views",
      "CRUD Operations",
      "Healthcare Database",
      "Query Optimization",
      "Transaction Management",
    ],
  },
];
