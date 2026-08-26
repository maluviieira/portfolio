import { Link } from "react-router-dom";
import { projectsData } from "@/data/projects";

function Projects() {
  // only show the first 3 projects on the home page
  const featuredProjects = projectsData.slice(0, 3);

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
        {featuredProjects.map((project) => (
      
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
      
      {/* see more button */}
      <div className="mt-12 flex justify-center">
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 hover:border-brand hover:text-brand text-zinc-600 font-medium tracking-tight rounded-full transition-all duration-300"
        >
          see more projects
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>

    </section>
  );
}

export default Projects;