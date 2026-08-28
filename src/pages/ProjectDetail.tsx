import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TechTag from "@/components/ui/TechTag";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  const images = project?.photopath || [];
  
  const [activeImage, setActiveImage] = useState<string | undefined>(images[0]);

  // Ensure activeImage updates if the user navigates between projects directly
  useEffect(() => {
    setActiveImage(images[0]);
  }, [id, project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="w-full px-8 md:px-16 bg-white font-sans overflow-x-hidden text-zinc-950 min-h-screen flex flex-col justify-between">
      <Navbar />
      
      <main className="w-full grow flex flex-col pt-32 md:pt-48 pb-24 relative">
        
        {/* Giant background ID */}
        <div className="absolute top-24 right-8 -z-10 text-[25vw] font-bold text-zinc-50 leading-none select-none pointer-events-none">
          {project.id}
        </div>
        
        {/* Back Link */}
        <div className="mb-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand transition-colors font-medium tracking-tight uppercase text-xs tracking-widest">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            back to projects
          </Link>
        </div>

        {/* Content Grid */}
        <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text Info */}
          <div className={`flex flex-col ${images.length > 0 ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}`}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-950 mb-8">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            <div className={`text-lg md:text-xl text-zinc-700 leading-relaxed space-y-8 mb-16 ${images.length > 0 ? "max-w-xl" : "max-w-none"}`}>
              <p>
                {project.description}
              </p>
              {project.bigdesc && (
                <p className="whitespace-pre-wrap">
                  {project.bigdesc}
                </p>
              )}
            </div>

            <div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center gap-3 border border-zinc-950 px-10 py-5 text-xs font-bold tracking-widest text-zinc-950 uppercase transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white"
              >
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Gallery (Only renders if photopath has images) */}
          {images.length > 0 && (
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Main Big Image */}
              <div className="w-full bg-zinc-50 border border-zinc-200 overflow-hidden">
                {activeImage && (
                  <img 
                    src={activeImage} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-auto object-contain transition-opacity duration-300"
                  />
                )}
              </div>
              
              {/* Thumbnails (Only render if there are multiple images) */}
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`w-full aspect-[4/3] bg-zinc-50 overflow-hidden transition-all duration-300 border-2 ${activeImage === img ? 'border-brand opacity-100' : 'border-transparent opacity-50 hover:opacity-100 hover:border-zinc-300'}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
