// Temporary data array - you can move this to a separate file later!
const projectsData = [
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
  }
];

function Projects() {
  return (

    <section id="projects" className="w-full pt-32 pb-24">
      
      {/* section header */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-950">
          selected projects
        </h2>
      </div>

      {/* list */}
      <div className="w-full border-b border-zinc-300">
        {projectsData.map((project) => (
      
          <div 
            key={project.id} 
            className="group border-t border-zinc-300 px-4 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start hover:bg-zinc-50 transition-colors"
          >
            
            {/* column 1: number */}
            <div className="md:col-span-1 text-sm text-zinc-400 font-mono mt-2">
              [{project.id}]
            </div>

            {/* column 2: title */}
            <div className="md:col-span-5">
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 group-hover:text-brand transition-colors">
                {project.title}
              </h3>
            </div>

            {/* column 3: description*/}
            <div className="md:col-span-6 flex flex-col gap-6">
              <p className="text-zinc-600 md:max-w-md text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
              
              {/* tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs tracking-wide border border-zinc-300 rounded-full text-zinc-500 uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects