import { useState, useEffect } from "react";
import comp from "@/assets/gif/compi.png";
import filme from "@/assets/gif/filme.png";
import livros from "@/assets/gif/livros.png";
import paoacucar from "@/assets/gif/paoacucar.png";
import vinil from "@/assets/gif/vinil.png";
import mouth from "@/assets/gif/mouth.png";
import fone from "@/assets/gif/fone.png";
import lirio from "@/assets/gif/lirio.png";


const imageConfig = [
  { src: comp, scale: "scale-110" },
  { src: filme, scale: "scale-70" },
  { src: livros, scale: "scale-100" },
  { src: lirio, scale: "scale-80" },
  { src: paoacucar, scale: "scale-120" },
  { src: vinil, scale: "scale-100" },
  { src: fone, scale: "scale-80" },
  { src: mouth, scale: "scale-60" },
];

export default function HeroGif() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 200ms interval 
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageConfig.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const currentImg = imageConfig[currentIndex];

  return (
    // fixed bounding box prevents layout shifting when aspect ratios differ
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center pointer-events-none select-none">
      <img 
        src={currentImg.src} 
        alt="Malu's interests" 
        className={`w-full h-full object-contain opacity-90 ${currentImg.scale}`}
      />
    </div>
  );
}
