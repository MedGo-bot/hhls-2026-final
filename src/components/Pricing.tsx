import { Check, ShieldCheck, Sparkles, Lock, Users } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-5 overflow-hidden" style={{ background: '#040d1a' }}>
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #1e3a8a 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header & Unified Residency Philosophy */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-gray-700" style={{ background: 'rgba(197, 160, 89, 0.1)' }}>
            <Lock className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>Limited to 150 Enterprise Leaders • By Application Only</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Power of Purposeful Leadership            
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed font-normal mb-4">
            We cap attendance at 150 leaders to ensure that every participant experiences an intimate, world-class gathering from the moment they step onto the estate property.
          </p>

       <div className="max-w-3xl mx-auto text-center my-8">
  <h3 className="text-2xl font-bold text-white mb-3">
    One Shared Floor. Tailored Strategic Depth.
  </h3>
  <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
    There are no restricted sessions or hidden tiers—every delegate receives full access to all summit events, private chef dinners, and the hand-bound operational blueprint. 
    Simply choose the registration path that best fits your goals: standard summit access, or summit access paired with a dedicated 1-on-1 strategic consultation.
  </p>
</div>

        {/* Residency Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">

          {/* Card 1: Early Vanguard */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Early Admission</div>
              <h3 className="text-2xl font-bold text-white mb-2">Early Vanguard</h3>
              <p className="text-gray-400 text-xs mb-6">Reserved for the first 20 registered leaders confirming their residency placement.</p>

              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$1,850</span>
                <span className="text-gray-400 text-sm ml-2">/ executive</span>
              </div>

              <div className="border-t border-gray-800 pt-6 space-y-3 mb-8">
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Full 2-Day Working Residency </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Closed-Door Boardroom Pod Placement (6 Non-Competing Peers)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>All Five-Star Estate Dining (Breakfasts, Lunches, Oceanfront Dinners)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Personal Hand-Bound Copy of <em>The Sovereign Ledger</em></span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Sunrise Beach Kinetic Labs &amp; Evening Veranda Soundings</span>
                </div>
              </div>
            </div>

            <a
              href="#inquire"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm border-2 transition-all hover:bg-gray-800 block"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Apply for Early Vanguard
            </a>
          </div>

          {/* Card 2: Executive Residency (Standard - Most Popular) */}
          <div className="relative p-8 rounded-2xl border-2 bg-slate-900/90 shadow-2xl flex flex-col justify-between" style={{ borderColor: 'var(--gold)' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-1 shadow-md" style={{ background: 'var(--gold)' }}>
              <Users className="w-3.5 h-3.5 fill-slate-950" />
              <span>Full Summit Experience</span>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest font-bold mb-2" style={{ color: 'var(--gold)' }}>Standard Admission</div>
              <h3 className="text-2xl font-bold text-white mb-2">Executive Residency</h3>
              <p className="text-gray-400 text-xs mb-6">The complete, all-inclusive 2-day working residency for enterprise founders, CEOs, and operating leaders.</p>

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
                  <span>All Gourmet Private Chef Estate Dining &amp; Evening Dinners</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Hand-Bound 12-Month Operational Blueprint Folio</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Direct Working Immersion with All Faculty Practitioners</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-200">
                  <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>Sunrise Atlantic Kinetic Labs &amp; Chatham House Firesides</span>
                </div>
              </div>
            </div>

            <a
              href="#inquire"
              className="w-full py-4 px-6 rounded-xl font-bold text-center text-sm text-slate-950 transition-all hover:scale-105 hover:shadow-xl block"
              style={{ background: 'var(--gold)', boxShadow: '0 8px 30px rgba(197, 160, 89, 0.3)' }}
            >
              Apply for Residency
            </a>
          </div>

          {/* Card 3: Residency + 1-on-1 Consultation */}
          <div className="p-8 rounded-2xl border border-gray-800 bg-slate-900/60 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Dedicated Advisory</div>
              <h3 className="text-2xl font-bold text-white mb-2">Residency + 1-on-1 Consultation</h3>
              <p className="text-gray-400 text-xs mb-6">For leaders who want a private, scheduled consultation with a faculty expert to audit their specific business.</p>

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
                  <span>Closed-Door Boardroom Pods with 6 Non-Competing Peers</span>
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
                  <span><strong>Customized 1-on-1 Business Audit &amp; Risk Review</strong></span>
                </div>
              </div>
            </div>

            <a
              href="#inquire"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm border-2 transition-all hover:bg-gray-800 block"
              style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
            >
              Apply with 1-on-1 Consultation
            </a>
          </div>

        </div>

        {/* Universal Hospitality Commitment Banner */}
        <div className="p-6 rounded-xl border border-gray-800 bg-slate-950/80 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-200 font-semibold mb-2">
            <ShieldCheck className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            <span>Our Universal Hospitality Promise</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Every attendee receives a world-class experience the moment they step onto the estate property. There are no segregated rooms or divided meals—every executive participates fully in our estate dining, peer pods, and curriculum. The only difference is whether you choose to schedule a dedicated 1-on-1 consultation for your specific business.
          </p>
        </div>

      </div>
    </section>
  );
}
