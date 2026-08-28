import { useState } from "react";
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
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);
  const [prevId, setPrevId] = useState(id);

  // Ensure state resets cleanly if the user navigates directly between projects
  if (id !== prevId) {
    setPrevId(id);
    setActiveImage(images[0]);
    setThumbnailStartIndex(0);
  }

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
        <div className="mb-12 max-w-7xl mx-auto w-full">
          <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand transition-colors font-medium tracking-tight uppercase text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            back to projects
          </Link>
        </div>

        {/* Content Grid */}
        <div className="w-full max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Text Info */}
          <div className={`flex flex-col ${images.length === 0 ? "lg:col-span-2 max-w-4xl" : ""}`}>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-950 mb-8">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tech.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            <div className={`text-lg md:text-xl text-zinc-700 leading-relaxed space-y-8 mb-16 ${images.length > 0 ? "max-w-xl" : "max-w-none"}`}>
              {project.bigdesc ? (
                <p className="whitespace-pre-wrap">
                  {project.bigdesc}
                </p>
              ) : (
                <p>
                  {project.description}
                </p>
              )}
            </div>

            <div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group inline-flex items-center gap-3 border border-zinc-300 px-10 py-5 text-xs tracking-widest text-zinc-600 uppercase transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white"
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
            <div className="flex flex-col gap-4">
              
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
                <div className="flex items-center gap-2 relative">
                  
                  {/* Left Arrow (only if more than 3 images) */}
                  {images.length > 3 && (
                    <button 
                      onClick={() => setThumbnailStartIndex(Math.max(0, thumbnailStartIndex - 3))}
                      disabled={thumbnailStartIndex === 0}
                      className={`flex-none p-2 border transition-colors aspect-square flex items-center justify-center ${thumbnailStartIndex === 0 ? 'text-zinc-300 border-zinc-100 cursor-not-allowed bg-zinc-50' : 'text-zinc-600 border-zinc-200 hover:border-brand hover:text-brand bg-white'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                  )}

                  {/* Inner Sliding Track */}
                  <div className="grow overflow-hidden relative">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out gap-2"
                      style={{ transform: `translateX(calc(-${(thumbnailStartIndex / 3) * 100}% - ${(thumbnailStartIndex / 3) * 0.5}rem))` }}
                    >
                      {images.map((img: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(img)}
                          style={{ flex: "0 0 calc(33.3333% - 0.3333rem)" }}
                          className={`aspect-4/3 bg-zinc-50 overflow-hidden transition-all duration-300 border-2 ${activeImage === img ? 'border-brand opacity-100' : 'border-transparent opacity-50 hover:opacity-100 hover:border-zinc-300'}`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain p-1" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Arrow (only if more than 3 images) */}
                  {images.length > 3 && (
                    <button 
                      onClick={() => setThumbnailStartIndex(Math.min(images.length - 1, thumbnailStartIndex + 3))}
                      disabled={thumbnailStartIndex + 3 >= images.length}
                      className={`flex-none p-2 border transition-colors aspect-square flex items-center justify-center ${thumbnailStartIndex + 3 >= images.length ? 'text-zinc-300 border-zinc-100 cursor-not-allowed bg-zinc-50' : 'text-zinc-600 border-zinc-200 hover:border-brand hover:text-brand bg-white'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                  )}
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
