import React from "react";

export default function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-xs tracking-wide border border-zinc-300 rounded-full text-zinc-500 uppercase group-hover:border-brand/40 group-hover:text-brand transition-colors">
      {children}
    </span>
  );
}
