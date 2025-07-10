import { BiLogoPostgresql } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import {
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { LuBoxes } from "react-icons/lu";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

export const SkillCategories = [
  {
    name: "Frontend",
    icon: <BsGlobe2 size={24} className="text-primary" />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CSS3",
      "JavaScript",
      "HTML5",
    ],
  },
  {
    name: "Backend",
    icon: <FaServer size={24} className="text-primary" />,
    skills: [
      "Express.js",
      "Node.js",
      "REST API",
      "JWT",
      "Socket.IO",
      "Fastify",
    ],
  },
  {
    name: "State Management",
    icon: <LuBoxes size={24} className="text-primary" />,
    skills: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
  },
  {
    name: "Databases",
    icon: <FaDatabase size={24} className="text-primary" />,
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
  },
];

export const SkillLogos = [
  { name: "HTML", icon: <FaHtml5 size={24} className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt size={24} className="text-[#1572B6]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={24} className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={24} className="text-[#3178C6]" />,
  },
  {
    name: "React",
    icon: <FaReact size={24} className="text-[#61DAFB]" />,
  },
  { name: "Next.js", icon: <SiNextdotjs size={24} className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs size={24} className="text-[#339933]" /> },
  { name: "Express", icon: <SiExpress size={24} className="text-white" /> },
  {
    name: "MongoDB",
    icon: <SiMongodb size={24} className="text-[#47A248]" />,
  },
  { name: "Redux", icon: <SiRedux size={24} className="text-[#764ABC]" /> },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio size={24} className="text-white" />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={24} className="text-[#336791]" />,
  },
  { name: "Prisma", icon: <SiPrisma size={24} className="text-white" /> },
  { name: "GitHub", icon: <FiGithub size={24} className="text-white" /> },
];
