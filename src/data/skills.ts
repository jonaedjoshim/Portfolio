export type Skill = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Languages for development and problem solving.",
    skills: [
      { name: "C", icon: "c" },
      { name: "C++", icon: "cplusplus" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python (Basics)", icon: "python" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building interactive and responsive interfaces.",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Vite", icon: "vitejs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Authentication",
    description: "Working with APIs, servers, and authentication.",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Firebase", icon: "firebase" },
      { name: "Better Auth" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Storing and managing application data.",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL (Exploring)", icon: "postgresql" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    description: "Tools I use to build and publish applications.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "npm", icon: "npm" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
    ],
  },
];

export const currentlyLearning: Skill[] = [
  { name: "TypeScript", icon: "typescript" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Data Structures & Algorithms" },
];
