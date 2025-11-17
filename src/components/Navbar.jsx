import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 via-blue-500 to-cyan-400 p-[2px]">
            <div className="h-full w-full rounded-md bg-slate-950 grid place-items-center">
              <Sparkles className="h-4 w-4 text-cyan-300" />
            </div>
          </div>
          <span className="font-semibold text-white text-lg tracking-tight">Auralabs</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#get-started" className="inline-flex items-center rounded-lg bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 px-4 py-2 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow">
            Get started
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90 hover:text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-200/90 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="block text-white font-medium">
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
