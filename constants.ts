
import { Project, SkillGroup, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Vemula Moksha",
  role: "Design Engineer",
  tagline: "Engineering Empathy. Designing Performance.",
  location: "Hyderabad, India",
  email: "v.moksha3981@gmail.com"
};

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/vemula-moksha",
  github: "https://github.com/Moksha091",
  twitter: "https://twitter.com"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Soulax",
    location: "Hyderabad, India",
    role: "UI/UX Designer Intern",
    period: "Sept 2025 – Present",
    description: [
      "Spearheaded UI/UX enhancements for the Svarupa project, focusing on optimizing user journeys to significantly improve user retention rates.",
      "Refined UX writing and microcopy across the application to ensure clarity, reduce cognitive load, and guide users effectively through complex workflows.",
      "Collaborated closely with developers to implement responsive designs, ensuring fidelity between Figma prototypes and the final product.",
      "Conducted usability audits to identify friction points and implemented design solutions that streamlined the user interface."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nexus",
    number: "01",
    title: "Project Nexus",
    tagline: "Multi-INT Intelligence Fusion",
    description: "Engineered a 'Grand Unified Theory' of surveillance by merging financial data with OSINT into a Neo4j Graph Database. Features a deanonymization engine linking crypto wallets to real-world entities.",
    year: "2024",
    role: "System Architecture",
    tags: ["Neo4j", "OSINT", "Graph Theory"],
    image: "/images/project-nexus.jpg",
    link: "https://github.com/vemula-moksha/project-nexus"
  },
  {
    id: "gotham",
    number: "02",
    title: "Gotham Clone",
    tagline: "Computer Vision Intelligence",
    description: "Real-time situational awareness system using YOLO to retrieve live info from video feeds. Visualizes geospatial data of vehicles and radar captures, mimicking high-level defense software.",
    year: "2024",
    role: "Computer Vision",
    tags: ["YOLO", "PostgreSQL", "CV"],
    image: "/images/project-gotham.jpg",
    link: "https://github.com/vemula-moksha/gotham-clone"
  },
  {
    id: "evoting",
    number: "03",
    title: "Secure E-Voting",
    tagline: "Decentralized Security",
    description: "A secure electronic voting platform utilizing Blockchain to guarantee vote immutability. Architected to eliminate central points of failure and ensure cryptographic transparency.",
    year: "2024",
    role: "Blockchain Security",
    tags: ["Blockchain", "Security", "Smart Contracts"],
    image: "/images/project-evoting.jpg",
    link: "https://github.com/vemula-moksha/e-voting"
  },
  {
    id: "synthesis",
    number: "04",
    title: "Synthesis",
    tagline: "Document Automation",
    description: "Comprehensive workflow platform for enterprise documentation. Focus on dark-mode ergonomics, visual consistency, and streamlined user pathways.",
    year: "2024",
    role: "UI/UX Design",
    tags: ["React", "UI/UX", "Workflow"],
    image: "/images/project-synthesis.jpg",
    link: "https://github.com/vemula-moksha/synthesis"
  }
];

export const CREDITS: SkillGroup[] = [
  {
    category: "Core Stack",
    items: ["React 18+", "TypeScript", "Next.js", "Tailwind Architecture"]
  },
  {
    category: "Design",
    items: ["Figma", "Interaction Design", "Design Systems", "Typography", "UX Writing"]
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Python", "PostgreSQL", "Flask", "Neo4j"]
  },
  {
    category: "Leadership",
    items: ["NGIT Hackathon Organizer", "Tectonic Event Coordinator"]
  }
];
