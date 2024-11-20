import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import stockimg from "@/public/stock.png";
import contactimg from "@/public/contect.png";
import pokiImg from "@/public/poki.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Articles",
    hash: "#article",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "CIB Summer Internship Program",
    location: "Egypt, Cairo",
    description:
      "During my Software Engineering Internship at CIB, I contributed to developing and optimizing financial software solutions, focusing on hands-on coding with Python and C#. My work included collaborating with cross-functional teams and leveraging data analysis to support essential banking operations. This experience helped me strengthen my technical skills, enhance my problem-solving abilities, and deepen my understanding of software applications within the financial sector. Additionally, I participated in mentorship sessions, networked with industry professionals, and contributed to high-impact projects under tight timelines.",
    icon: React.createElement(CgWorkAlt),
    date: " 06/2024 - 08/2024",
  },
  
  {
    title: "MEAN Stack Trainee – Information Technology Institute (ITI)",
    location: "Egypt, Cairo",
    description:
      "Gained extensive, hands-on experience with MongoDB, Express.js, Angular, and Node.js to build scalable, high-performance applications. Contributed to a full-stack movie web app with a team, creating core services, developing schema for favorites and movies, and optimizing performance by 10% through indexing. This training strengthened my skills in backend development, data modeling, and problem-solving in dynamic environments.",
    icon: React.createElement(CgWorkAlt),
    date: " 07/2023 - 08/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Contact Management ",
    description:
      "This ASP.NET MVC application provide an efficient solution for managing your contacts ",
    tags: ["C#","SQL","Bootstrap", "HTML", "CSS","Entity Framework"],
    imageUrl: contactimg,
    gitlink:"https://github.com/yousefsaad12/Contact-App"
  },
  {
    title: "FinFlex Api",
    description:
      "This API serves as the backend providing endpoints for managing financial transactions.",
    tags: ["ASP.NET API", "SQL", "Entity Framework", "C#"],
    imageUrl: stockimg,
    gitlink:"https://github.com/yousefsaad12/FinFlex-Api"
  },
  {
    title: "Pokemon Review API",
    description:
      "Welcome to the Pokemon Review API, a powerful tool for retrieving and managing Pokemon reviews.",
    tags: ["ASP.NET API", "SQL", "Entity Framework", "C#"],
    imageUrl: pokiImg,
    gitlink:"https://github.com/yousefsaad12/Pokemon-Review-API"
  },
] as const;



export const blogsData = [
  {
    title: "Efficient Prime Checks and GCD/LCM Calculations for Competitive Programming",
    summary:
      "For efficient prime checks, use optimized methods like trial division up to \(\sqrt{n}\) or precompute primes for a range. These save time in competitive programming.",
  
    link:"https://www.linkedin.com/pulse/efficient-prime-checks-gcdlcm-calculations-competitive-yousef-saad-vhmff/?trackingId=eIIRDaXNRqyj%2BTjbaJXwew%3D%3D",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQG_oe4MY7eqSg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731274858763?e=1737590400&v=beta&t=1ylMJ0eXrw5BPWjeGcL-PWv9C-TOWfxzj9NVVK4QysA"
  },
  {
    title: "Bit Diving in Divisors: An Optimization for Competitive Programmers",
    summary:
      "To count divisors efficiently, iterate up to \( \sqrt{n} \). For each divisor \( i \), also count \( n / i \), unless \( i = n / i \). This reduces the time complexity to \( O(\sqrt{n}) \).",
    
    link:"https://www.linkedin.com/pulse/bit-diving-divisors-optimization-competitive-programmers-yousef-saad-gjkgf/?trackingId=eIIRDaXNRqyj%2BTjbaJXwew%3D%3D",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGOFbKfNOHnnw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731078898695?e=1737590400&v=beta&t=EiKc2BkdtGBfOLMkQFjfEG6-azUO1vMb1vUKwBQJ6ck"
  },
]


export const skillsData = [
  "C#",
  "C++",
  "SQL",
  "ASP.NET CORE",
  "ASP.NET API",
  "ASP.NET MVC",
  "HTML",
  "CSS",
  "MongoDB",
  "TypeScript",
  "Node JS",
  "Express",
  "Git",
  "Algorithm",
  "Data Structure",
  "OOP",
] as const;
