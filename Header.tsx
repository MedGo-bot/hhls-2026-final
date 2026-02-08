export default function Header() {
  return (
    <header className="py-6 px-5 border-b border-gray-800 sticky top-0 bg-black bg-opacity-95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl md:text-2xl tracking-[0.25em] uppercase font-bold" style={{ color: 'var(--gold)' }}>
          Hilton Head Leadership Summit
        </div>

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
          <a
            href="#pricing"
            className="px-6 py-2 rounded font-bold transition-all hover:scale-105"
            style={{ background: 'var(--gold)', color: '#0a0a0a' }}
          >
            Register Now
          </a>
        </nav>
      </div>
    </header>
  );
}
