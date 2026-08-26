export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "junto.",
    description: "social platform that connects people through their shared love of music, films, and books.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/yourusername/project1"
  },
  {
    id: "02",
    title: "artflow",
    description: "freelance platform centered around the art community.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQLite"],
    link: "https://github.com/yourusername/project2"
  },
  {
    id: "03",
    title: "focusly",
    description: "all-in-one study app.",
    tech: ["Flutter", "Firebase"],
    link: "https://github.com/yourusername/project3"
  },
  // mock projects to showcase the grid on the /projects page
  {
    id: "04",
    title: "portfolio",
    description: "this wbesite!",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/yourusername/project4"
  },
  {
    id: "05",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  },
  {
    id: "06",
    title: "fireboy & watergirl",
    description: "a 2D game using Lanterna.",
    tech: ["Java"],
    link: "https://github.com/yourusername/project6"
  },
  {
    id: "07",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  },
  {
    id: "08",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  },
  {
    id: "09",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  },
  {
    id: "10",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  },
  {
    id: "11",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  }
];
