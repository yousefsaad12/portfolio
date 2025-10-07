import type { IconType } from 'react-icons';
import { 
  SiCplusplus, 
  SiSharp, 
  SiPython, 
  SiJavascript, 
  SiTypescript, 
  SiMysql, 
  SiHtml5, 
  SiCss3,
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiDotnet, 
  SiDocker, 
  SiGit, 
  SiGithub 
} from 'react-icons/si';


export interface Technology {
    name: string;
    category: string;
    icon: IconType;
    color: string;
}


export const technologies: Technology[] = [
    // Programming Languages
    { name: 'C++', category: 'Programming Language', icon: SiCplusplus, color: '#00599C' },
    { name: 'C#', category: 'Programming Language', icon: SiSharp, color: '#239120' },
    { name: 'Python', category: 'Programming Language', icon: SiPython, color: '#3776AB' },
    { name: 'JavaScript', category: 'Programming Language', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', category: 'Programming Language', icon: SiTypescript, color: '#3178C6' },
    { name: 'SQL', category: 'Query Language', icon: SiMysql, color: '#4479A1' },
    { name: 'HTML', category: 'Markup', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', category: 'Styling', icon: SiCss3, color: '#1572B6' },
  
    // Frontend Framework
    { name: 'React', category: 'Frontend Framework', icon: SiReact, color: '#61DAFB' },
  
    // Runtime & Backend
    { name: 'Node.js', category: 'Runtime', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', category: 'Backend Framework', icon: SiExpress, color: '#000000' },
  
    // Databases
    { name: 'PostgreSQL', category: 'SQL Database', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', category: 'NoSQL Database', icon: SiMongodb, color: '#47A248' },
  
    // ORM & Tools
    { name: 'Prisma', category: 'ORM', icon: SiPrisma, color: '#2D3748' },
    { name: 'Entity Framework', category: 'ORM', icon: SiDotnet, color: '#512BD4' },
    { name: 'Docker', category: 'Containerization', icon: SiDocker, color: '#2496ED' },
  
    // Version Control
    { name: 'Git', category: 'Version Control', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', category: 'Version Control Platform', icon: SiGithub, color: '#FFFFFF' },
];
