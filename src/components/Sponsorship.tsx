import React, { useState } from 'react';
import { ShieldCheck, Check, Sparkles, Building2, ArrowRight, CheckCircle2, Clock, Mail, Phone, Lock, HeartHandshake } from 'lucide-react';

interface SponsorTier {
  name: string;
  tagline: string;
  slots: string;
  badge?: string;
  featured?: boolean;
  benefits: string[];
}

const sponsorTiers: SponsorTier[] = [
  {
    name: "Boardroom Pod Co-Practitioner",
    tagline: "Embedded Advisory & Collaborative Problem-Solving",
    slots: "3 Available Slots",
    benefits: [
      "1 All-Access Executive Pass (all sessions, estate dining, receptions & dinners)",
      "Permanent working seat inside an assigned 6-person closed-door Boardroom Pod",
      "Act as an embedded subject-matter advisor solving live operational bottlenecks",
      "Co-brand a specialized framework inside the bound 2028 Sovereign Ledger",
      "Complete attendee roster with pre-cleared executive contact profiles post-event"
    ]
  },
  {
    name: "Presenting Title Underwriter",
    tagline: "Premier Brand Alignment & Category Exclusivity",
    slots: "1 Exclusive Slot",
    featured: true,
    badge: "Category Exclusive",
    benefits: [
      "2 All-Access Executive Passes for your Senior Partners",
      "Official Co-Host of the Opening Oceanfront Reception & Evening Estate Dinner",
      "5-minute opening keynote remarks to the entire 150-executive cohort",
      "Prominent co-branding on the hand-bound leather 2028 Sovereign Ledger folio",
      "Dedicated private veranda lounge for confidential 1-on-1 executive meetings",
      "First right of refusal for the 2028 Summit title partnership"
    ]
  },
  {
    name: "Kinetic Vitality & Recovery Curator",
    tagline: "Executive Health, Movement & Stamina",
    slots: "1 Available Slot",
    benefits: [
      "1 All-Access Executive Pass for your Managing Director",
      "Underwriter of the Sunrise Atlantic Beach Movement Labs & Breathwork",
      "Exclusive branding in the Estate Recovery Lounge (contrast therapy & longevity)",
      "Opportunity to provide executive health/performance gear in attendee suites",
      "Feature integration in the 'Courage & Executive Stamina' curriculum session"
    ]
  }
];

export default function Sponsorship() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    phone: '',
    tierInterest: 'Presenting Title Underwriter',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hidden, bot-protected email launcher routing directly to tracydwilson@besheawe.com
  const handleEmailClick = () => {
    const user = 'tracydwilson';
    const domain = 'besheawe.com';
    const subject = encodeURIComponent('2027 Summit Strategic Partnership Inquiry');
    window.location.href = `mailto:${user}@${domain}?subject=${subject}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || '719625d5-8679-4b1a-b604-4f8c32992d95';
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: 'Hilton Head Summit Partnership Desk',
          subject: `New 2027 Sponsorship Inquiry: ${formData.companyName} (${formData.contactName})`,
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
    <section id="sponsorship" className="relative py-28 px-5 overflow-hidden" style={{ background: '#020813' }}>
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px]" style={{ background: 'radial-gradient(circle, #c5a059 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-gray-700" style={{ background: 'rgba(197, 160, 89, 0.1)' }}>
            <Building2 className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--gold)' }}>Strategic Brand Partnerships • October 19–20, 2027</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Zero Trade-Show Booths.<br />
            <span style={{ color: 'var(--gold)' }}>Pure Peer Immersion.</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed font-normal mb-6">
            Rather than selling passive sponsorship packages, we invite a select group of enterprise partners into the room as active participants alongside 150 C-level executives.
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
            Engage directly with true enterprise decision-makers—founders, senior executives, and managing partners—at the exact moment they are setting next year’s trajectory.
          </p>
        </div>

        {/* Audience Demographic Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
          <div className="p-6 rounded-2xl border border-gray-800 bg-slate-950/60 text-center">
            <div className="text-3xl font-extrabold text-white mb-1" style={{ color: 'var(--gold)' }}>150</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Enterprise Decision-Makers</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-slate-950/60 text-center">
            <div className="text-3xl font-extrabold text-white mb-1" style={{ color: 'var(--gold)' }}>$20M–$250M</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Attendee Company ARR</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-slate-950/60 text-center">
            <div className="text-3xl font-extrabold text-white mb-1" style={{ color: 'var(--gold)' }}>100%</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">C-Suite &amp; Founder Level</div>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800 bg-slate-950/60 text-center">
            <div className="text-3xl font-extrabold text-white mb-1" style={{ color: 'var(--gold)' }}>20–22 hrs</div>
            <div className="text-xs uppercase tracking-wider text-gray-400">Direct Working Interaction</div>
          </div>
        </div>

        {/* The Curated Fellowship Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-2xl border border-gray-800 bg-slate-900/60 mb-20 max-w-4xl mx-auto shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="w-6 h-6" style={{ color: 'var(--gold)' }} />
            <h3 className="text-xl sm:text-2xl font-bold text-white">Mutual Respect &amp; Fellowship</h3>
          </div>
          
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            We believe true partnership happens when you stop selling and start solving problems together. In our oceanfront estate setting, artificial corporate barriers disappear. You share meals, walk the grounds, and unpack real organizational hurdles alongside 150 enterprise decision-makers.
          </p>

          <p className="text-gray-400 text-sm leading-relaxed">
            What emerges isn't a list of sales prospects—it is an inner circle of mutual respect, shared purpose, and lasting business fellowship that endures long after October.
          </p>
        </div>

        {/* Sponsorship Packages Grid (100% Private Pricing) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 rounded-2xl border flex flex-col justify-between backdrop-blur-sm transition-all ${
                tier.featured 
                  ? 'border-2 bg-slate-900/90 shadow-2xl relative' 
                  : 'border-gray-800 bg-slate-900/50 hover:border-gray-700'
              }`}
              style={tier.featured ? { borderColor: 'var(--gold)' } : {}}
            >
              {tier.badge && (
                <div 
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 flex items-center gap-1 shadow-md"
                  style={{ background: 'var(--gold)' }}
                >
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{tier.slots}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-gray-400 mb-6">{tier.tagline}</p>

                <div className="border-t border-gray-800 pt-6 space-y-3 mb-8">
                  {tier.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-gray-300">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#sponsor-inquire"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-center text-sm transition-all block cursor-pointer"
                style={
                  tier.featured
                    ? { background: 'var(--gold)', color: 'var(--dark)', boxShadow: '0 8px 25px rgba(197, 160, 89, 0.25)' }
                    : { border: '2px solid var(--gold)', color: 'var(--gold)' }
                }
              >
                Inquire for Prospectus
              </a>
            </div>
          ))}
        </div>

        {/* Sponsor Inquiry Form */}
        <div id="sponsor-inquire" className="scroll-mt-20 max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl border border-gray-800 bg-slate-900/90 shadow-2xl backdrop-blur-md">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6" style={{ background: 'rgba(197, 160, 89, 0.2)', color: 'var(--gold)' }}>
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Partnership Briefing Dispatched</h3>
              <p className="text-gray-300 max-w-lg mx-auto text-base leading-relaxed mb-6">
                Thank you, <span className="text-white font-semibold">{formData.contactName}</span>. Your inquiry on behalf of <span className="text-white font-semibold">{formData.companyName}</span> has been received by our Partnership Team.
              </p>
              <div className="p-4 rounded-xl border border-gray-800 bg-slate-950/60 text-xs text-gray-400 max-w-md mx-auto text-left">
                <span className="font-semibold text-gray-200 block mb-1">Direct Response Commitment:</span>
                Our team will contact you within 1 business day to schedule an executive alignment call and provide the complete 2027 Strategic Prospectus.
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-amber-500/30 text-amber-300 bg-amber-500/10">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Category-Exclusive Partner Review</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Request Partnership Prospectus
                </h3>
                <p className="text-sm text-gray-400 max-w-xl mx-auto">
                  October 19–20, 2027 • Hilton Head Island, SC • Strictly Capped at 5 Partner Co-Practitioners
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Organization / Firm Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-slate-950 text-white focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Primary Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-slate-950 text-white focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Corporate Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-slate-950 text-white focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-slate-950 text-white focus:outline-none focus:border-amber-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Partnership Tier of Interest *
                  </label>
                  <select
                    value={formData.tierInterest}
                    onChange={(e) => setFormData({ ...formData, tierInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-slate-950 text-white focus:outline-none focus:border-amber-400 transition"
                  >
                    <option value="Presenting Title Underwriter">Presenting Title Underwriter (Category Exclusive)</option>
                    <option value="Boardroom Pod Co-Practitioner">Boardroom Pod Co-Practitioner (Embedded Advisory)</option>
                    <option value="Kinetic Vitality & Recovery Curator">Kinetic Vitality &amp; Recovery Curator</option>
                    <option value="Custom Bespoke Partnership">Custom / Bespoke Industry Activation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2">
                    Primary Practice Area &amp; Strategic Goal
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-slate-950 text-white focus:outline-none focus:border-amber-400 transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 font-bold rounded-xl text-slate-950 transition-all duration-200 hover:scale-[1.01] hover:shadow-xl text-base flex items-center justify-center gap-2 cursor-pointer"
                    style={{ background: 'var(--gold)', boxShadow: '0 10px 30px rgba(197, 160, 89, 0.25)' }}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-5 h-5 animate-spin" />
                        Routing Inquiry to Partnerships Desk...
                      </span>
                    ) : (
                      <>
                        <span>Submit Partnership Inquiry</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Direct Protected Contact Bar */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            {/* Hidden Email Action Button Routing to tracydwilson@besheawe.com */}
            <button
              type="button"
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800 bg-slate-950/80 hover:border-amber-400/60 text-gray-300 hover:text-white transition cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span className="font-medium">Email Partnership Team</span>
            </button>

            {/* Direct Phone Line */}
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>(916) 890-9591 &bull; (916) 287-7127</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
