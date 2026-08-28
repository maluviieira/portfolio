import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-6 md:px-16 py-4 flex justify-between items-center z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200 transition-all">
        {/* purple asterisk */}
        <div className="flex-none flex items-center h-full relative z-50">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-brand text-[4rem] font-medium leading-none block hover:opacity-80 transition-opacity translate-y-2">
            *
          </Link>
        </div>

        {/* mobile menu hamburger button */}
        <button 
          className="md:hidden p-2 text-zinc-950 focus:outline-none relative z-50 transition-transform active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
          )}
        </button>

        {/* nav links (desktop) */}
        <div className="hidden md:flex flex-none">
          <div className="flex flex-row gap-x-8 md:gap-x-12 font-medium tracking-tight text-lg md:text-xl">
            <Link to="/#projects" className="hover:text-brand-hover transition-colors">
              projects
            </Link>
            <Link to="/#about" className="hover:text-brand-hover transition-colors">
              about me
            </Link>
            <Link to="/#experience" className="hover:text-brand-hover transition-colors">
              experience
            </Link>
            <Link to="/#contact" className="hover:text-brand-hover transition-colors">
              contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center pt-20 pb-10 px-6 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-y-12 font-medium tracking-tight text-4xl text-zinc-950 w-full text-center">
          <Link to="/#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors block w-full py-4 border-b border-zinc-100">
            projects
          </Link>
          <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors block w-full py-4 border-b border-zinc-100">
            about me
          </Link>
          <Link to="/#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors block w-full py-4 border-b border-zinc-100">
            experience
          </Link>
          <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors block w-full py-4">
            contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
