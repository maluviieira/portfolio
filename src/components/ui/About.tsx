import meImage from "@/assets/me.png";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlighterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!highlighterRef.current || !containerRef.current) return;
    
    gsap.to(highlighterRef.current, {
      scaleX: 1,
      duration: 1,
      delay: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 25%",
        toggleActions: "play reverse play reverse"
      }
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="w-full py-24">
      
      {/* section header */}
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-950">
          about me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* left: photo */}
        <div className="md:col-span-5 lg:col-span-4 relative group">
          {/* decorative offset border */}
          <div className="absolute inset-0 border border-brand translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          
          {/* image container */}
          <div className="w-full aspect-4/5 bg-zinc-50 border border-zinc-300 relative z-10 transition-colors duration-500 group-hover:border-brand overflow-hidden">
            <img src={meImage} alt="Malu Vieira" className="w-full h-full object-cover" />
            {/* subtle hover overlay */}
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>

        {/* right: text content */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-8 group">
          <p className="text-2xl md:text-3xl text-zinc-900 leading-snug font-medium tracking-tight">
            informatics and computer engineering graduate, passionate about{" "}
            <span className="relative inline-block whitespace-nowrap z-0">
              <span className="relative z-10">software development</span>
              <span 
                ref={highlighterRef} 
                className="absolute bottom-1 left-0 w-full h-3 md:h-4 bg-brand-hover opacity-40 z-0 origin-left"
                style={{ transform: "scaleX(0)" }}
              ></span>
            </span>.
          </p>
          
          <div className="text-lg text-zinc-600 leading-relaxed space-y-6">
            <p>
              i believe that great software is born at the intersection of logical engineering and creative design. 
              my goal is to build interfaces that not only solve complex problems but also feel intuitive and bring a touch of joy to the user!
            </p>
            <p>
              when i'm not writing code, you can probably find me exploring new music, reading a good book, or watching a movie :D
            </p>
          </div>
          
          {/* decorative dots - pensando se fica  */}
          <div className="flex gap-3 mt-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand transition-transform group-hover:scale-150"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand/60 transition-transform delay-75 group-hover:scale-150"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand/30 transition-transform delay-150 group-hover:scale-150"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
