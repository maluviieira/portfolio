export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  bigdesc?: string;
  photopath?: string[];
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "junto.",
    description: "social platform that connects people through their shared love of music, films, and books.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "PostgreSQL"],
    link: "https://github.com/maluviieira/junto"
  },
  {
    id: "02",
    title: "artflow",
    description: "freelance platform centered around the art community.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQLite"],
    link: "https://github.com/maluviieira/artflow",
    bigdesc: "in an era where artificial intelligence is rapidly transforming creative industries, many fear that AI-generated art will overshadow human creativity. 'artflow' was created as a response to these concerns—a platform that celebrates and empowers human creativity rather than replacing it. our mission is to create a marketplace where artists can: showcase their unique talents and creative services; connect directly with clients who value authentic, human-made art; maintain control over their work, pricing, and client interactions; build sustainable careers in the creative economy",
    photopath: ["/projects/artflow/0.png", "/projects/artflow/8.png", "/projects/artflow/1.png", "/projects/artflow/2.png", "/projects/artflow/3.png", "/projects/artflow/4.png", "/projects/artflow/5.png", "/projects/artflow/6.png", "/projects/artflow/7.png"]
  
  },
  {
    id: "03",
    title: "focusly",
    description: "all-in-one study app.",
    tech: ["Flutter", "Firebase"],
    link: "https://github.com/maluviieira/focusly",
    bigdesc: "focusly transforms the way you study by combining essential tools into one seamless experience. create personalized quizzes and flashcards, boost focus with a built-in Pomodoro timer, and collaborate with peers through an interactive forum. whether you're preparing for exams or just reviewing concepts, our app makes studying smarter, not harder. join a community of learners and take your productivity to the next level!",
    photopath: ["/projects/focusly/1.png"]
  },
 

  {
    id: "04",
    title: "portfolio",
    description: "this website!",
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
