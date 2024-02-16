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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ITI Trainee MEAN Stack",
    location: "Egypt, Cario",
    description:
      "Developed and implemented a dynamic movies web application using the MEAN stack  leveraging MongoDB for NoSQL databases. Express.js for efficient backend Angular for interactive user interfaces",
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
