import { Link } from "react-router-dom";
import { projectsData } from "@/data/projects";
import TechTag from "@/components/ui/TechTag";

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
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* see more button */}
      <div className="mt-16 flex justify-end">
        <Link 
          to="/projects" 
          className="group relative inline-flex border border-zinc-300 px-10 py-5 text-xs tracking-widest text-zinc-600 uppercase transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white"
        >
          <span className="flex items-center gap-3">
            View all projects
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </Link>
      </div>

    </section>
  );
}

export default Projects;