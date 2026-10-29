import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TopicCardProps {
  phase: string;
  tagline: string;
  title: string;
  description: string;
  takeaway: string;
}

const topics: TopicCardProps[] = [
  {
    phase: "Opening Keynotes",
    tagline: "The Strategic Reset",
    title: "Stepping Off the Treadmill: Restoring Executive Bandwidth Under Pressure",
    description: "Late Q4 demands relentless tactical output, leaving little space for clear-headed vision. This session shifts your focus from reactive management to deliberate, high-altitude command.",
    takeaway: "Frameworks to protect decision-making energy and lead teams with steady, unshakeable composure."
  },
  {
    phase: "Core Session I",
    tagline: "Immediate Yield",
    title: "Closing Year-End Horizons Without Taxing Organizational Culture",
    description: "Driving final revenue goals often creates friction across operations and sales. Discover how top executives capture year-end momentum while building trust and alignment.",
    takeaway: "Actionable tactics for rallying teams around final execution targets without inducing exhaustion."
  },
  {
    phase: "Core Session II",
    tagline: "2028 Strategic Blueprint",
    title: "De-Siloing the Horizon: KPIs Built for Cohesion, Not Division",
    description: "Most multi-year plans disintegrate at the cross-functional boundary. We examine how to stress-test your 2028 roadmap, stripping away bloated metrics in favor of lean, unified performance drivers.",
    takeaway: "A stress-tested blueprint that aligns executive priorities before Q1 launches."
  },
  {
    phase: "Executive Dinner",
    tagline: "Unfiltered Exchange",
    title: "Closed-Door Candor: The Unspoken Realities of C-Suite Governance",
    description: "Set against a private chef culinary experience, this intimate session invites open dialogue on executive isolation, high-stakes trade-offs, and steering through market ambiguity.",
    takeaway: "Unvarnished perspective from peers who navigate the exact same weight at the top."
  },
  {
    phase: "Closing Keynote",
    tagline: "Clarity in Motion",
    title: "Translating Vision into Immediate Velocity",
    description: "Strategy is useless without seamless transition into action. Synthesize summit insights into a clear, prioritized focus plan ready for immediate deployment upon your return.",
    takeaway: "A 90-day operational action plan to lead your organization with clarity, courage, and cohesion."
  }
];

export default function Speakers() {
  return (
    <section id="curriculum" className="py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Lead-in Header: The Strategic Sanctuary */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full inline-block mb-4">
            A Sanctuary for High-Stakes Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Step Away from the Noise.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
              Return to Strategic Clarity.
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
            End-of-year execution can feel like an endless sprint through dense haze. 
            The Hilton Head Leadership Summit is designed as a calm, high-altitude sanctuary—a dedicated space 
            where senior executives quiet the daily friction, pressure-test their long-term direction, 
            and recharge alongside true peers.
          </p>
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 max-w-xl mx-auto">
            <p className="text-amber-200 text-xs sm:text-sm font-medium tracking-wide">
              🔒 Keynote Faculty &amp; Industry Guest Announcements Release Soon.<br />
              <span className="text-gray-400 font-normal">Early-access delegates lock in guaranteed access before main stage reveals.</span>
            </p>
          </div>
        </div>

        {/* Topics Framework Grid */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {topics.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl backdrop-blur-sm group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  {item.phase}
                </span>
                <span className="text-xs text-neutral-400 font-mono bg-neutral-800 px-3 py-1 rounded-full w-fit">
                  {item.tagline}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="pt-4 border-t border-neutral-800/80 flex items-start gap-2">
                <span className="text-amber-400 text-sm font-bold">Key Focus:</span>
                <span className="text-gray-400 text-sm italic">{item.takeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button Section (Direct Route to Application) */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-gray-300 text-base font-medium mb-6">
            Ready to calibrate your Q4 finish and build your audited 2028 operating plan?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#inquire"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 text-sm hover:scale-105 group cursor-pointer"
            >
              <span>Submit Executive Application</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-gray-300 hover:text-white border border-neutral-800 px-8 py-4 rounded-xl transition-all text-sm"
            >
              Review Residency Inclusions
            </a>
          </div>

          <p className="text-xs text-neutral-500 mt-4">
            Limited to 150 enterprise leaders across 25 boardroom pods. Vetted on a rolling basis.
          </p>
        </div>

      </div>
    </section>
  );
}

