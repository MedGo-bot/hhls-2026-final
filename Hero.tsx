import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-32 px-5 text-center overflow-hidden" style={{ background: 'radial-gradient(circle at top, #0a1629 0%, #040d1a 100%)' }}>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #0a1629 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-gray-700" style={{ background: 'rgba(197, 160, 89, 0.1)' }}>
          <Sparkles className="w-4 h-4" style={{ color: 'var(--gold)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>October 13-14, 2026 | Hilton Head, SC</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-white font-bold leading-tight">
          The 2026 Mandate
        </h1>

        <p className="max-w-3xl mx-auto mb-6 text-2xl md:text-3xl text-gray-200 font-semibold">
          Walk in Tuesday with questions. Walk out Wednesday with a complete 12-month operational blueprint.
        </p>

        <p className="max-w-3xl mx-auto mb-12 text-lg md:text-xl text-gray-400 leading-relaxed">
          A high-stakes residency where B2B leaders build their 2026 AI integration strategy with the Amazing 7 consultants who've scaled million-dollar organizations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#pricing"
            className="inline-block py-4 px-10 font-bold rounded-lg transition-all hover:scale-105 hover:shadow-2xl text-lg"
            style={{ background: 'var(--gold)', color: 'var(--dark)', boxShadow: '0 10px 40px rgba(197, 160, 89, 0.3)' }}
          >
            Secure Your Position
          </a>
          <a
            href="#vision"
            className="inline-block py-4 px-10 font-bold rounded-lg transition-all hover:bg-gray-800 text-lg border-2"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--gold)' }}>300</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Limited Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--gold)' }}>48hrs</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Intensive Residency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--gold)' }}>100</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Private Council Seats</div>
          </div>
        </div>
      </div>
    </section>
  );
}
