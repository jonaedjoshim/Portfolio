export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "gradepilot",
    name: "GradePilot",
    category: "Full-Stack Web Application",
    description:
      "An academic result management application with GPA and CGPA calculation, saved results, and performance insights.",
    image: "/pss/gradepilot.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],
    liveUrl: "https://grade-pilot-mj.vercel.app/",
    githubUrl: "https://github.com/jonaedjoshim/GradePilot.git",
    featured: true,
  },
  {
    slug: "zapshift",
    name: "ZapShift",
    category: "Full-Stack Web Application",
    description:
      "A parcel delivery management project exploring authentication, database integration, and logistics-focused workflows.",
    image: "/pss/zapshift.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    liveUrl: "https://zap-shift-mj.vercel.app/",
    githubUrl: "https://github.com/jonaedjoshim/zap-shift-client.git",
    featured: true,
  },
  {
    slug: "noxcodec",
    name: "NoxCodec",
    category: "Frontend Application",
    description:
      "A terminal-inspired Morse code encoder and decoder with real-time translation and audio playback.",
    image: "/pss/noxcodec.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://noxcodec-morse-code-terminal.vercel.app/",
    githubUrl:
      "https://github.com/jonaedjoshim/noxcodec-morse-code-terminal.git",
    featured: true,
  },
  {
    slug: "tuition-finder",
    name: "Tuition Finder",
    category: "Full-Stack Web Application",
    description:
      "An ongoing tuition discovery project focused on connecting students and tutors.",
    image: "/pss/tuition-finder.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    liveUrl: "https://tuition-finder.vercel.app/",
    githubUrl: "https://github.com/jonaedjoshim/tuition-finder-client.git",
    featured: false,
  },
];
