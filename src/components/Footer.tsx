import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, X, ShieldCheck, Lock, AlertCircle, FileText } from 'lucide-react';

export default function Footer() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:concierge@hiltonheadleadershipsummit.com?subject=2027%20Summit%20Inquiry';
  };

  return (
    <>
      <footer className="bg-slate-950 text-gray-400 py-16 px-5 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
              HILTON HEAD <span style={{ color: 'var(--gold)' }}>2027</span>
            </h3>
            <p className="text-xs uppercase tracking-wider text-gray-300 font-semibold mb-3">
              Leading with Clarity, Courage &amp; Cohesion
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              A 2-day oceanfront working residency for 150 enterprise leaders to calibrate your Q4 finish and build your audited 2028 operating plan.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#why-attend" className="hover:text-white transition">Why Attend</a></li>
              <li><a href="#vision" className="hover:text-white transition">Vision</a></li>
              <li><a href="#curriculum" className="hover:text-white transition">Curriculum</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Residency Inclusions</a></li>
              <li><a href="#sponsorship" className="hover:text-white transition">Sponsorship</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <button
                type="button"
                onClick={handleEmailClick}
                className="flex items-center gap-2 hover:text-white transition cursor-pointer text-left"
              >
                <Mail className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                <span>concierge@hiltonheadleadershipsummit.com</span>
              </button>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                <span>(916) 890-9591 &bull; (916) 287-7127</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                <span>October 19–20, 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                <span>Hilton Head Island, SC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2027 Hilton Head Leadership Summit. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setIsDisclaimerOpen(true)}
              className="hover:text-white transition cursor-pointer underline underline-offset-4"
              style={{ color: 'var(--gold)' }}
            >
              Legal Disclaimers &amp; Discretion Standard
            </button>
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="#pricing" className="hover:text-white transition">Admissions Terms</a>
          </div>
        </div>
      </footer>

      {/* Embedded Legal Disclaimer Modal */}
      {isDisclaimerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-gray-800 bg-slate-950 p-6 sm:p-10 shadow-2xl text-left"
            style={{ scrollbarWidth: 'thin' }}
          >
            {/* Close Icon */}
            <button
              onClick={() => setIsDisclaimerOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full border border-gray-800 text-gray-400 hover:text-white hover:bg-slate-900 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Residency Disclaimers &amp; Discretion Standard</h3>
                <p className="text-xs text-gray-400">Hilton Head Leadership Summit 2027 • Governance &amp; Participation Terms</p>
              </div>
            </div>

            {/* Disclaimer Sections */}
            <div className="space-y-6 text-sm text-gray-300 leading-relaxed border-t border-gray-800/80 pt-6">
              
              {/* 1. Chatham House Standard */}
              <div>
                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <Lock className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                  <span>1. The Chatham House Discretion Standard</span>
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  All working boardroom pods, 1-on-1 consultations, masterclasses, and estate dining conversations operate under the Chatham House Rule. Participants are free to use the insights received, but neither the identity nor the affiliation of the speaker or any other participant may be revealed. Attendees agree to mutual non-disclosure regarding proprietary operational details shared in closed-door sessions.
                </p>
              </div>

              {/* 2. Advisory Scope */}
              <div>
                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                  <span>2. Strategic Advisory &amp; Non-Fiduciary Notice</span>
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  The Hilton Head Leadership Summit, its organizers, faculty, and sponsors provide strategic frameworks, peer perspectives, and operational methodologies for educational and high-level advisory purposes only. Presentations and discussions do not constitute formal legal counsel, certified tax planning, investment underwriting, or certified medical advice. Attendees should consult their independent legal, financial, and medical professionals before executing specific corporate transactions or lifestyle regimens.
                </p>
              </div>

              {/* 3. Recording Policy */}
              <div>
                <h4 className="font-bold text-white text-base mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                  <span>3. Recording &amp; Intellectual Property Policy</span>
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  To protect executive privacy and uninhibited peer candor, unauthorized audio recording, video capture, and AI note-taking bots are strictly prohibited during all closed-door working sessions. <em>The Sovereign Ledger</em> operational blueprint provided to attendees contains proprietary frameworks licensed solely for the attendee’s internal organizational use.
                </p>
              </div>

              {/* 4. Placement Authority */}
              <div>
                <h4 className="font-bold text-white text-base mb-1">
                  4. Admissions &amp; Peer Placement Authority
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  To preserve peer caliber and eliminate direct corporate conflicts of interest, the admissions desk reserves sole discretion over cohort selection, pod placement, and residency qualification.
                </p>
              </div>

            </div>

            {/* Close Action */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex justify-end">
              <button
                type="button"
                onClick={() => setIsDisclaimerOpen(false)}
                className="px-6 py-2.5 rounded-xl font-bold text-slate-950 text-xs sm:text-sm transition hover:scale-105 cursor-pointer"
                style={{ background: 'var(--gold)' }}
              >
                I Understand &amp; Agree
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
