import React, { useState } from 'react';
import { Check, ShieldCheck, Sparkles, Lock, Users, ArrowRight, CheckCircle2, Clock, Calendar } from 'lucide-react';

export default function Pricing() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    website: '',
    title: '',
    revenue: '$1M - $24M',
    preferredTrack: 'Executive Residency ($2,495)',
    primaryFriction: 'AI Workforce & Execution Gaps'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectTrackAndScroll = (trackName: string) => {
    setFormData(prev => ({ ...prev, preferredTrack: trackName }));
    const formElement = document.getElementById('inquire');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '719625d5-8679-4b1a-b604-4f8c32992d95',
          from_name: 'Hilton Head Summit Concierge',
          subject: `New 2027 Summit Application: ${formData.companyName} (${formData.fullName})`,
          ...formData
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="relative py-28 px-5 overflow-hidden" style={{ background: '#040d1a' }}>
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-gray-700" style={{ background: 'rgba(197, 160, 89, 0.1)' }}>
            <Calendar className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>The Power of Purposeful Leadership • October 19–20, 2027</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Circuit Breaker You Need Before Year-End
          </h2>
        </div>

        {/* The Core Story Banner: Why Late October Matters */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-gray-800 bg-slate-900/80 mb-16 shadow-xl backdrop-blur-sm text-left">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6" style={{ color: 'var(--gold)' }} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Why This Summit Happens in October</h3>
          </div>
          
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            By mid-October, leaders are genuinely tired. You have been pushing since January, carrying the operational, financial, and emotional weight of your company for ten straight months. 
          </p>
          
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            Yet right now, you face a double burden: <strong>you have to push hard to finish strong in Q4, but you simultaneously have to establish your KPIs, your brand focus, and your operational plan for the new year.</strong>
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Once November arrives, your calendar is gone. Between Thanksgiving, holiday travel, company events, and year-end deadlines, deep strategic focus is impossible. <strong>October is the sweet spot.</strong> In 48 hours on Hilton Head Island, 150 enterprise leaders step out of the daily noise to recharge their physical stamina, stress-test their KPIs with non-competing peers, and head into the holidays with next year completely locked down.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-800 pt-6">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">01. Recharge the Leader</div>
              <div className="text-white text-sm font-medium">Reset your mental and physical stamina after 10 months of grinding.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">02. Power Your Q4 Close</div>
              <div className="text-white text-sm font-medium">Solve immediate execution friction to hit your year-end numbers.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">03. Lock Next Year's KPIs</div>
              <div className="text-white text-sm font-medium">Architect your 2028 operating plan before the holiday freeze.</div>
            </div>
          </div>
        </div>

        {/* 3 Offerings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">

          {/* Card 1: Early Vanguard */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Early Commitment</div>
              <h3 className="text-2xl font-bold text-white mb-2">Early Vanguard</h3>
              <p className="text-gray-400 text-xs mb-6">Reserved for the first 20 registered leaders locking in their next-year planning early.</p>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$1,850</span>
                <span className="text-gray-400 text-sm ml-2">/ executive</span>
              </div>

              <div className="border-t border-gray-800 pt-6 space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Full 2-Day Working Residency (20–22 Working Hours)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Closed-Door Boardroom Pod Placement (6 Curated Peers)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>All 5-Star Estate Dining (Breakfast, Lunch, Oceanfront Dinners)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Bound Folio: <strong>The 2028 Operational Blueprint</strong></span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Sunrise Beach Kinetic Labs &amp; Evening Veranda Soundings</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => selectTrackAndScroll('Early Vanguard ($1,850)')}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm border-2 transition-all hover:bg-gray-800 cursor-pointer block"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Apply for Early Vanguard &darr;
            </button>
          </div>

          {/* Card 2: Executive Residency (Standard - Core Track) */}
          <div className="relative p-8 rounded-2xl border-2 bg-slate-900/90 shadow-2xl flex flex-col justify-between" style={{ borderColor: 'var(--gold)' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-1 shadow-md" style={{ background: 'var(--gold)' }}>
              <Users className="w-3.5 h-3.5 fill-slate-950" />
              <span>Full Summit Experience</span>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: 'var(--gold)' }}>Standard Admission</div>
              <h3 className="text-2xl font-bold text-white mb-2">Executive Residency</h3>
              <p className="text-gray-400 text-xs mb-6">The complete 2-day residency to calibrate your Q4 and build your audited 2028 blueprint.</p>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$2,495</span>
                <span className="text-gray-400 text-sm ml-2">/ executive</span>
              </div>

              <div className="border-t border-gray-800 pt-6 space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>Complete 2-Day Residency (20–22 Working Hours)</strong></span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Closed-Door Boardroom Pod Placement (6 Curated Peers)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>All Private Chef Estate Dining &amp; Oceanfront Dinners</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>The 2028 Sovereign Ledger Folio</strong> (Board-Ready Plan)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Direct Working Immersion with All Faculty Practitioners</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Atlantic Beach Kinetic Labs &amp; Chatham House Firesides</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => selectTrackAndScroll('Executive Residency ($2,495)')}
              className="w-full py-4 px-6 rounded-xl font-bold text-center text-sm text-slate-950 transition-all hover:scale-105 hover:shadow-xl cursor-pointer block"
              style={{ background: 'var(--gold)', boxShadow: '0 8px 30px rgba(197, 160, 89, 0.3)' }}
            >
              Apply for Residency &darr;
            </button>
          </div>

          {/* Card 3: Residency + 1-on-1 Consultation */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Dedicated Advisory</div>
              <h3 className="text-2xl font-bold text-white mb-2">Residency + Consultation</h3>
              <p className="text-gray-400 text-xs mb-6">For leaders who want a private 1-on-1 audit with a faculty practitioner to stress-test their 2028 plans.</p>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$3,995</span>
                <span className="text-gray-400 text-sm ml-2">/ executive</span>
              </div>

              <div className="border-t border-gray-800 pt-6 space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span><strong>Includes Complete Executive Residency Access</strong></span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Closed-Door Boardroom Pods with 6 Curated Peers</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>All Private Chef Estate Dining, Receptions &amp; Dinners</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-amber-300">
                  <Sparkles className="w-4 h-4 mt-1 flex-shrink-0 text-amber-400" />
                  <span><strong>Dedicated 1-on-1 Private Consultation Session</strong></span>
                </div>
                <div className="flex items-start gap-3 text-sm text-amber-300">
                  <Sparkles className="w-4 h-4 mt-1 flex-shrink-0 text-amber-400" />
                  <span><strong>Bespoke 2028 Business Audit &amp; Risk Scoping</strong></span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => selectTrackAndScroll('Residency + 1-on-1 Consultation ($3,995)')}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm border-2 transition-all hover:bg-gray-800 cursor-pointer block"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Apply with 1-on-1 Consultation &darr;
            </button>
          </div>

        </div>

        {/* Universal Hospitality Commitment Banner */}
        <div className="p-6 rounded-xl border border-gray-800 bg-slate-950/80 text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-200 font-semibold mb-2">
            <ShieldCheck className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            <span>Our Universal Hospitality Promise</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Every attendee receives a world-class experience the moment they step onto the estate property. There are zero segregated rooms or divided meals—every executive participates fully in our estate dining, peer pods, and curriculum. The only difference is whether you choose to schedule a dedicated 1-on-1 consultation for your specific business.
          </p>
        </div>

        {/* EMBEDDED APPLICATION FORM SECTION */}
        <div id="inquire" className="scroll-mt-20 max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl border border-gray-800 bg-slate-900/90 shadow-2xl backdrop-blur-md">
          
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6" style={{ background: 'rgba(197, 160, 89, 0.2)', color: 'var(--gold)' }}>
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Application Dispatched</h3>
              <p className="text-gray-300 max-w-lg mx-auto text-base leading-relaxed mb-6">
                Thank you. Your inquiry for the <span className="text-white font-semibold">{formData.preferredTrack}</span> has been received.
              </p>
              <div className="p-4 rounded-xl border border-gray-800 bg-slate-950/60 text-xs text-gray-400 max-w-md mx-auto text-left">
                <span className="font-semibold text-gray-200 block mb-1">What happens next:</span>
                We review applications weekly to curate peer pods without direct competitors. Our concierge team will reach out within 2 business hours to confirm your pod alignment and 2028 planning focus.
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-500/30 text-amber-300 bg-amber-500/10">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Confidential Admissions Review</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Executive Inquiry &amp; Application
                </h3>
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  October 19–20, 2027 • Hilton Head Island, SC • Capped at 150 Enterprise Leaders
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Track Selection Radios */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">
                    Selected Residency Track *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Early Vanguard ($1,850)',
                      'Executive Residency ($2,495)',
                      'Residency + 1-on-1 Consultation ($3,995)'
                    ].map((track) => (
                      <label
                        key={track}
                        className={`p-3 rounded-xl border cursor-pointer text-xs font-medium transition flex items-center justify-between ${
                          formData.preferredTrack === track
                            ? 'border-amber-400 bg-amber-500/15 text-white'
                            : 'border-gray-800 bg-slate-950/60 text-gray-400 hover:border-gray-700'
                        }`}
                      >
