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
    link: "https://github.com/maluviieira/junto",
    bigdesc: "junto is a full-featured social media platform designed to bring people together through shared cultural interests. the platform combines traditional social networking features with media discovery, allowing users to connect, share, and discuss their favorite movies, books, and music.",
  },
  {
    id: "02",
    title: "artflow",
    description: "freelance platform centered around the art community.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQLite"],
    link: "https://github.com/maluviieira/artflow",
    bigdesc: "in an era where artificial intelligence is rapidly transforming creative industries, many fear that ai-generated art will overshadow human creativity. 'artflow' was created as a response to these concerns—a platform that celebrates and empowers human creativity rather than replacing it. our mission is to create a marketplace where artists can: showcase their unique talents and creative services; connect directly with clients who value authentic, human-made art; maintain control over their work, pricing, and client interactions.",
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
    link: "https://github.com/maluviieira/portfolio"
  },
  {
    id: "05",
    title: "whack a diglett",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/maluviieira/whack-a-diglett",
    bigdesc: "whack a diglett is a whack-a-mole inspired 2D game built from scratch for the Minix operating system, featuring real-time graphics, user input handling, and smooth animations. the game challenges players to whack appearing diglett characters within a time limit to achieve the highest score possible.",
    photopath: ["/projects/whack-a-diglett/1.png", "/projects/whack-a-diglett/2.png", "/projects/whack-a-diglett/3.png", "/projects/whack-a-diglett/4.png"]
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
    title: "spring prairie",
    description: "whack-a-mole inspired game in Minix.",
    tech: ["C"],
    link: "https://github.com/yourusername/project5"
  },
  {
    id: "08",
    title: "bnnuvin",
    description: "annuvin hexagonal board game with AI opponents.",
    tech: ["Python"],
    link: "https://github.com/maluviieira/bnnuvin",
    bigdesc: "an implementation of the annuvin hexagonal board game with AI opponents using Minimax and Monte Carlo Tree Search algorithms. play against AI, watch AI battle each other, or compete with a friend in this strategic, two-player, bee-themed game!",
    photopath: ["/projects/bnnuvin/1.png"]
  },
  {
    id: "09",
    title: "wells",
    description: "ML pipeline to predict customer repurchases and recommend complementary products.",
    tech: ["Python"],
    link: "https://github.com/maluviieira/wells",
    bigdesc: "a proof-of-concept machine learning system for pharmacy and cosmetics stores that predicts when customers will repurchase products and recommends complementary items using association rules. it includes a complete pipeline from synthetic data generation to model training and an interactive Streamlit dashboard."
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
