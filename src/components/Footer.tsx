import { Mail, MapPin, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-5 border-t border-gray-800 relative overflow-hidden" style={{ background: 'black' }}>
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5">
        <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-2xl tracking-wide" style={{ color: 'var(--gold)' }}>
              HILTON HEAD<br />LEADERSHIP SUMMIT
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The premier B2B leadership residency for 2026 AI integration and operational transformation.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#why-attend" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></span>
                  Why Attend
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></span>
                  Vision
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></span>
                  Speakers
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#sponsorship" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></span>
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white text-lg">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="mailto:concierge@hiltonheadleadershipsummit.com" className="hover:text-white transition-colors flex items-start gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                  <span>concierge@hiltonheadleadershipsummit.com</span>
                </a>
              </li>
              <li className="pt-2 flex items-start gap-2">
                <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                <span>October 13-14, 2026</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                <span>Hilton Head, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; 2026 Hilton Head Leadership Summit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
