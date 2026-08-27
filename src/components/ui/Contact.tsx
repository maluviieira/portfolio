import { useState, useEffect } from "react";

export default function Contact() {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrpgzwbg", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Lisbon', 
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="w-full py-24 border-t border-zinc-300">
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-950">
          say hi!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        
        {/* Left: Form */}
        <div className="md:col-span-7 lg:col-span-8">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full bg-transparent border-b border-zinc-300 py-3 text-xl text-zinc-900 focus:outline-none focus:border-brand transition-colors placeholder:text-zinc-300"
                placeholder="what's your name?"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="message" className="text-sm font-bold text-zinc-950 uppercase tracking-widest">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                required
                rows={4}
                className="w-full bg-transparent border-b border-zinc-300 py-3 text-xl text-zinc-900 focus:outline-none focus:border-brand transition-colors resize-none placeholder:text-zinc-300"
                placeholder="what do you want to say?"
              ></textarea>
            </div>

            <div className="mt-4 flex">
              <button 
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="group relative border border-zinc-300 px-10 py-5 text-xs tracking-widest text-zinc-600 uppercase transition-all duration-500 hover:border-brand hover:bg-brand hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-3">
                  {status === "submitting" ? "SENDING..." : status === "success" ? "MESSAGE SENT" : "SEND MESSAGE"}
                  {(status === "idle" || status === "error") && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                  {status === "success" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
              </button>
              {status === "error" && (
                <span className="text-red-500 text-sm ml-4 self-center">Oops! Something went wrong.</span>
              )}
            </div>
          </form>
        </div>

        {/* Right: Info */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-12 pt-2 md:pt-0">
          <div>
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest mb-6">Socials</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://github.com/maluviieira" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-600 hover:text-brand transition-colors text-lg w-fit inline-flex items-center gap-2 group"
              >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/marialuizahvieira" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-600 hover:text-brand transition-colors text-lg w-fit inline-flex items-center gap-2 group"
              >
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest mb-4">Location</h3>
            <p className="text-zinc-600 text-lg">Porto, Portugal</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-widest mb-4">Local Time</h3>
            <p className="text-zinc-600 text-lg tracking-wide">
              {time || "—"}
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
