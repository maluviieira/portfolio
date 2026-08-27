export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-auto -mx-8 md:-mx-16 px-8 md:px-16 bg-brand text-white py-12 md:py-16 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        
        {/* Left: Copyright */}
        <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/80">
          &copy; {new Date().getFullYear()} Malu Vieira
        </p>

        {/* Center: Message */}
        <p className=" tracking-tight">
          thanks for stopping by!
        </p>

        {/* Right: Back to Top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        >
          BACK TO TOP
          <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-1">
              <path d="M12 19V5"/>
              <path d="M5 12l7-7 7 7"/>
            </svg>
          </span>
        </button>

      </div>
    </footer>
  );
}
