import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechTag from "@/components/ui/TechTag";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Capgemini Engineering",
    role: "Software Engineer Intern",
    date: "Feb 2026 - Jul 2026",
    description: [
      "Developed a full-stack health monitoring platform that creates a digital twin of a patient’s cardiac health, with wearable data ingestion, AI-powered anomaly detection, and live metric broadcasting to a clinical dashboard for remote medical supervision."
    ],
    tech: ["React", "TypeScript", "Flutter", "Python", "FastAPI", "PostgreSQL", "OpenAI API"]
  },
  {
    company: "FEUP",
    role: "Software Engineering Teaching Assistant",
    date: "Feb 2026 - Jul 2026",
    description: [
      "Help Software Engineering students with questions about the subject theory and project."
    ]
  },
  {
    company: "NIAEFEUP",
    role: "Member",
    date: "Nov 2025 - Present",
    description: [
      "Collaborating on developing uni, a mobile application to help students discover and manage academic information in one place, and TTS, a platform where students can experiment with the possible combination of schedule options they can pick for the semester."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.experience-item');
    
    items.forEach((item) => {
      gsap.from(item, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="w-full pt-32 pb-24 border-t border-zinc-300">
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-950">
          experience
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-zinc-200 ml-4 md:ml-6 space-y-16 pb-8">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot */}
            <div className="absolute -left-1.25 top-2 w-2.25 h-2.25 rounded-full bg-zinc-300 group-hover:bg-brand transition-colors duration-300 z-10"></div>
            
            {/* Outline Pulse on Hover */}
            <div className="absolute -left-2.25 top-1 w-4.25 h-4.25 rounded-full border border-brand/0 group-hover:border-brand/40 group-hover:scale-125 transition-all duration-500"></div>

            {/* Content */}
            <div className="flex flex-col xl:flex-row xl:items-baseline xl:justify-between w-full mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2 xl:mb-0">
                <h3 className="text-2xl md:text-3xl font-medium text-zinc-900 group-hover:text-brand transition-colors duration-300">
                  {exp.role}
                </h3>
                <span className="text-lg text-zinc-500 font-medium">@ {exp.company}</span>
              </div>
              <div className="text-sm md:text-base font-mono text-zinc-400 mt-1 xl:mt-0 whitespace-nowrap">
                {exp.date}
              </div>
            </div>
            
            <div className="space-y-4">
              {exp.description.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-zinc-600 md:text-lg leading-relaxed max-w-4xl">
                  {paragraph}
                </p>
              ))}
              
              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
