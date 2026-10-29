import React from 'react';

export default function Header() {
  return (
    <header className="py-5 px-5 border-b border-gray-800 sticky top-0 bg-slate-950/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Identity with 2027 Badge */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="text-lg md:text-xl tracking-[0.2em] uppercase font-bold text-white transition-colors group-hover:text-amber-300">
            Hilton Head <span style={{ color: 'var(--gold)' }}>Leadership Summit</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
            2027
          </span>
        </a>

        {/* Navigation Links Matched Directly to App.tsx Components */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#why-attend" className="text-gray-300 hover:text-white transition-colors font-medium">
            Why Attend
          </a>
          <a href="#vision" className="text-gray-300 hover:text-white transition-colors font-medium">
            Vision
          </a>
          <a href="#speakers" className="text-gray-300 hover:text-white transition-colors font-medium">
            Speakers
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">
            Pricing
          </a>
          <a href="#sponsorship" className="text-gray-300 hover:text-white transition-colors font-medium">
            Sponsorship
          </a>

          {/* Primary Action Button (Direct to Application Form in Pricing) */}
          <a
            href="#inquire"
            className="px-6 py-2.5 rounded-xl font-bold transition-all duration-200 hover:scale-105 shadow-md shadow-amber-500/10 text-sm cursor-pointer"
            style={{ background: 'var(--gold)', color: '#0a0a0a' }}
          >
            Apply to Attend
          </a>
        </nav>
      </div>
    </header>
  );
}
