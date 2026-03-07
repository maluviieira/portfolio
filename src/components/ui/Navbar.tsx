function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full px-6 md:px-16 py-10 flex justify-between items-start">
      {/* purple asterisk */}
      <div className="flex-none">
        <span className="text-[#6D28D9] text-[4rem] font-medium leading-none block">
          *
        </span>
      </div>

      {/* nav links */}
      <div className="flex-none">
        <div className="flex flex-row gap-x-8 md:gap-x-12 font-medium tracking-tight text-lg md:text-xl">
          <a href="#projects" className="hover:text-zinc-500 transition-colors">
            projects
          </a>
          <a href="#about" className="hover:text-zinc-500 transition-colors">
            about me
          </a>
          <a href="#contacts" className="hover:text-zinc-500 transition-colors">
            contacts
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
