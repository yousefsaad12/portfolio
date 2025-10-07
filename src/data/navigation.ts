import { BookOpen, Linkedin, Twitter, Github, FileText } from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  external: boolean;
  icon: any;
}

export const navItems: NavItem[] = [
  {
    name: "Blog",
    href: "https://medium.com/@yousefsaadmohamed1",
    external: true,
    icon: BookOpen,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yousefsaad1/",
    external: true,
    icon: Linkedin,
  },

  {
    name: "X",
    href: "https://x.com/Youseffsaadx",
    external: true,
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/yousefsaad12",
    external: true,
    icon: Github,
  },
  {
    name: "CV",
    href: "https://drive.google.com/file/d/1JLV5fQ8wi-mbpVT-r6m523eTmaQKvPCL/view?usp=sharing", // Replace with your actual Google Drive link
    external: true,
    icon: FileText,
  },
];
