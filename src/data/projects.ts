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
    link: "https://github.com/maluviieira/junto.",
    bigdesc: "junto. is a full-featured social media platform designed to bring people together through shared cultural interests. the platform combines traditional social networking features with media discovery, allowing users to connect, share, and discuss their favorite movies, books, and music.",
    photopath: ["/projects/junto/1.png", "/projects/junto/2.png", "/projects/junto/3.png", "/projects/junto/4.png", "/projects/junto/5.png", "/projects/junto/6.png", "/projects/junto/7.png", "/projects/junto/8.png", "/projects/junto/9.png", "/projects/junto/10.png"]
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
    description: "3D interactive survival simulation built on WebCGF.",
    tech: ["JavaScript", "HTML", "GLSL"],
    link: "https://github.com/maluviieira/spring-prairie",
    bigdesc: "3D interactive survival simulation built on WebCGF. players control a horse-drawn covered wagon through a vast prairie. the objective is to manage the wagon's health, collect hay bales scattered around the map, and deliver them to the barn to restore health. hitting obstacles like rocks and trees damages the wagon. your score is the total number of seconds you manage to survive!"

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
    bigdesc: "a proof-of-concept machine learning system for pharmacy and cosmetics stores that predicts when customers will repurchase products and recommends complementary items using association rules. it includes a complete pipeline from synthetic data generation to model training and an interactive Streamlit dashboard.",
    photopath: ["/projects/wells/1.png", "/projects/wells/2.png", "/projects/wells/3.png", "/projects/wells/4.png", "/projects/wells/5.png"]
  },
  {
    id: "10",
    title: "route planner",
    description: "collection of several route-planning algorithms.",
    tech: ["C++"],
    link: "https://github.com/maluviieira/route-planner",
    bigdesc: "C++ project implementing several route-planning algorithms (best route, restricted route, and environmentally friendly route variants). the program reads road network and location data, computes routes according to user-selected criteria, and supports both interactive and batch input modes."
  },
  {
    id: "11",
    title: "serial link",
    description: "serial-port-based file transfer protocol.",
    tech: ["C"],
    link: "https://github.com/maluviieira/serial-link",
    bigdesc:"this project is an implementation of a serial port communication protocol that involves developing both the link-layer and application-layer protocols for reliable file transfer between a transmitter and a receiver. to ensure robustness, the system includes a virtual cable simulator that allows developers to test the protocol's resilience against real-world network disruptions, such as sudden cable disconnections and signal noise, ultimately guaranteeing that the transmitted data perfectly matches the received data even under challenging conditions."
  },
  {
    id: "12",
    title: "knaptruck",
    description: "solver for a packing/knapsack-style problem using several algorithmic approaches.",
    tech: ["C++"],
    link: "https://github.com/maluviieira/knaptruck",
    bigdesc: "C++ application focused on delivery truck pallet packing optimization, which models logistics challenges using variations of the knapsack problem. it provides an interactive command-line interface that allows users to test and compare multiple algorithmic approaches for packing trucks efficiently, including dynamic programming, greedy algorithms, backtracking, and exhaustive search. the project also features Python integration to support an integer linear programming (ILP) approach. overall, it serves as an educational and analytical tool to evaluate the performance of different algorithms on various logistics datasets."
  },
  {
    id: "13",
    title: "netfetch",
    description: "file-download client.",
    tech: ["C"],
    link: "https://github.com/maluviieira/netfetch",
    bigdesc: "this project showcases a complete end-to-end networking implementation, combining infrastructure architecture with low-level protocol development. it involved designing and configuring a multi-node network environment using linux systems, switches, and routers, requiring the setup of IP subnets, static routing, network bridges, and Network Address Translation (NAT) to ensure robust cross-subnet communication. complementing the infrastructure setup, a custom FTP client was developed from scratch in C using socket programming. this client was engineered to reliably connect, authenticate, and transfer large files from various public and private servers, serving as a practical validation of the network's routing and connectivity capabilities."
  },
  {
    id: "14",
    title: "compiler",
    description: "compiler for the programming language Java--.",
    tech: ["Java"],
    link: "https://github.com/maluviieira/compilers",
    bigdesc: "compiler for the programming language Java--. it parses, analyzes, optimizes, and compiles code, featuring several advanced language extensions like for-loops, array initialization, and code optimization."
  }, 
  {
    id: "15",
    title: "musicfy",
    description: "spotify like music streaming service database.",
    tech: ["SQLite"],
    link: "https://github.com/maluviieira/musicfy",
    photopath: ["/projects/musicfy/1.jpg"]
  }
];
