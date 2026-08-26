import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";

export default function Home() {
  return (
    <div className="w-full px-8 md:px-16 bg-white font-sans overflow-x-hidden text-zinc-950">
      <div className="min-h-screen flex flex-col justify-between py-12">
        <Navbar />
        <main className="grow"></main>
        <Hero />
      </div>
      <Projects />
    </div>
  );
}