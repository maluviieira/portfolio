import Navbar from "@/components/ui/Navbar";
import { projectsData } from "@/data/projects";

export default function AllProjects() {
  return (
    <div className="w-full px-8 md:px-16 bg-white font-sans overflow-x-hidden text-zinc-950 min-h-screen pb-24">
      <div className="pt-12 pb-24">
        <Navbar />
      </div>
      
      <main className="w-full mt-8">
        {/* header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-950">
            all projects
          </h1>
          <p className="mt-4 text-zinc-600 text-lg md:text-xl">
            a complete archive of everything I've built.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={project.id}
              className="group flex flex-col justify-between p-8 border border-zinc-300 hover:border-brand transition-colors h-full"
            >
              <div>
                <div className="text-sm text-zinc-400 font-mono mb-4">
                  [{project.id}]
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-brand transition-colors mb-4">
                  {project.title}
                </h3>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs tracking-wide border border-zinc-200 bg-zinc-50 rounded-full text-zinc-500 uppercase group-hover:border-brand/30 group-hover:text-brand/80 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
