import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-32 px-5 text-center overflow-hidden" style={{ background: 'radial-gradient(circle at top, #0a1629 0%, #040d1a 100%)' }}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #0a1629 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Date & Location Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-gray-700" style={{ background: 'rgba(197, 160, 89, 0.1)' }}>
          <Sparkles className="w-4 h-4" style={{ color: 'var(--gold)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>October 19–20, 2027 | Hilton Head, SC • By Invitation Only</span>
        </div>

        {/* Master Opening Hook */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white font-bold leading-tight">
          Your company adopted AI. Your workforce is distributed. <br className="hidden md:inline" />
          <span style={{ color: 'var(--gold)' }}>And your leadership team is more exhausted than ever.</span>
        </h1>
        
        {/* Thematic Anchor */}
        <p className="text-2xl md:text-3xl mb-6 italic font-semibold text-gray-200">
          Leading with Clarity, Courage &amp; Cohesion
        </p>
        
        {/* Core Sub-headline */}
        <p className="max-w-3xl mx-auto mb-6 text-xl md:text-2xl text-gray-200 font-medium leading-snug">
          Technology accelerated, but executive clarity fractured. In a market where algorithms execute decisions, the only enduring competitive advantage is the judgment, stamina, and cohesion of the humans running the business.
        </p>

        {/* Value Proposition Description */}
        <p className="max-w-3xl mx-auto mb-12 text-base md:text-lg text-gray-400 leading-relaxed">
          A 2-day oceanfront working residency for 150 enterprise leaders. Walk in Tuesday with execution bottlenecks. Walk out Wednesday with an audited, 12-month operational blueprint.
        </p>

        {/* Action Buttons (Application Model) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#apply"
            className="inline-block py-4 px-10 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-2xl text-lg cursor-pointer"
            style={{ background: 'var(--gold)', color: 'var(--dark)', boxShadow: '0 10px 40px rgba(197, 160, 89, 0.3)' }}
          >
            Request an Invitation to Attend
          </a>
          <a
            href="#pillars"
            className="inline-block py-4 px-10 font-bold rounded-lg transition-all hover:bg-gray-800 text-lg border-2"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
          >
            Explore the 3 Pillars
          </a>
        </div>

        {/* 150-Capacity Residency Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--gold)' }}>150</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Qualified Leaders</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--gold)' }}>20–22 hrs</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Working Residency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--gold)' }}>12-Month</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Operational Blueprint</div>
          </div>
        </div>
      </div>
    </section>
  );
}
