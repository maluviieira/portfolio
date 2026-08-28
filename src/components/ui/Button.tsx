import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export default function Button({
  children,
  href,
  to,
  type = "button",
  disabled,
  className = "",
  onClick,
  target,
  rel,
  download
}: ButtonProps) {
  // Base brutalist styles for all buttons
  const baseClasses = "group relative inline-flex items-center justify-center gap-3 border border-zinc-300 px-10 py-5 text-xs tracking-widest text-zinc-600 uppercase transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Merge base classes with any custom classes passed in (like 2xl sizing)
  const combinedClasses = `${baseClasses} ${className}`.trim();

  // 1. If 'to' is provided, render a React Router <Link>
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // 2. If 'href' is provided, render a standard <a> tag
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses} 
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </a>
    );
  }

  // 3. Otherwise, render a standard <button> tag
  return (
    <button 
      type={type} 
      className={combinedClasses} 
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}
