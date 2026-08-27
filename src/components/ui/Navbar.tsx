import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 md:px-16 py-10 flex justify-between items-start z-50">
      {/* purple asterisk */}
      <div className="flex-none">
        <Link to="/" className="text-brand text-[4rem] font-medium leading-none block hover:opacity-80 transition-opacity">
          *
        </Link>
      </div>

      {/* nav links */}
      <div className="flex-none">
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
  );
}

export default Navbar;
