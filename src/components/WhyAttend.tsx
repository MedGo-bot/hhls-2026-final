import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MetricCardProps {
  stat: string;
  source: string;
  label: string;
  insight: string;
}

const researchMetrics: MetricCardProps[] = [
  {
    stat: "67%",
    source: "Gartner & HBR Executive Research",
    label: "Strategy Execution Gap",
    insight: "Of well-formulated corporate strategies fail due to cross-functional alignment breakdowns during Q4 planning."
  },
  {
    stat: "74%",
    source: "McKinsey & Co. AI Governance Study",
    label: "Agentic AI Exposure",
    insight: "Of C-suite leaders cite lack of board-level governance as their primary risk when deploying autonomous workflows."
  },
  {
    stat: "3.2x",
    source: "Deloitte Executive Health Benchmark",
    label: "Executive Longevity ROI",
    insight: "Higher sustained strategic velocity for enterprise leaders who integrate structured cognitive & physical recovery protocols."
  }
];

export default function WhyAttend() {
  return (
    <section 
      id="why-attend" 
      aria-label="Why Attend Hilton Head Leadership Summit"
      className="py-24 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full inline-block mb-4">
            The Business Case
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Why High-Performance Executives Attend
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            The Hilton Head Leadership Summit is engineered as a high-ROI strategic pitstop. 
            We combine hard market research, autonomous technology governance, and physical recovery 
            to solve the dual crises facing modern leadership: execution velocity and cognitive fatigue.
          </p>
        </div>

        {/* Research Numbers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {researchMetrics.map((item, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 mb-2 tracking-tight">
                  {item.stat}
                </div>
                <div className="text-xs text-neutral-400 font-mono mb-4 uppercase tracking-wider">
                  {item.source}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.label}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.insight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scannable "4 Core ROI Pillars" for Busy Executives */}
        <div className="p-8 sm:p-12 rounded-2xl bg-neutral-950 border border-neutral-800 mb-16 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">
            What You Walk Away With: Tangible Deliverables
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400/10 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-400/20">
                  1
                </span>
                <h4 className="text-base font-bold text-white">Stress-Tested 2028 Strategy</h4>
              </div>
              <p className="text-gray-400 text-sm pl-10 leading-relaxed">
                A hand-bound, fully audited operational blueprint that eliminates cross-functional friction before your Q1 launch.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400/10 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-400/20">
                  2
                </span>
                <h4 className="text-base font-bold text-white">Autonomous AI Governance Risk Framework</h4>
              </div>
              <p className="text-gray-400 text-sm pl-10 leading-relaxed">
                Clear guidelines and board-level protocols for managing agentic software fleets, synthetic labor, and algorithmic liability.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400/10 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-400/20">
                  3
                </span>
                <h4 className="text-base font-bold text-white">Personalized Executive Longevity Playbook</h4>
              </div>
              <p className="text-gray-400 text-sm pl-10 leading-relaxed">
                A 12-month energy, biomarker, and cognitive health roadmap developed from on-site diagnostic testing and recovery sessions.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-amber-400/10 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-400/20">
                  4
                </span>
                <h4 className="text-base font-bold text-white">Unrestricted Peer Network Access</h4>
              </div>
              <p className="text-gray-400 text-sm pl-10 leading-relaxed">
                Closed-door access to 150 enterprise decision-makers and private chef dining experiences—with zero trade show booths or fluff.
              </p>
            </div>
          </div>
        </div>

        {/* Final Conversion Action Banner with Direct Application Button */}
        <div className="text-center bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 p-8 sm:p-10 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Ready to Secure Your Strategic Advantage?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Attendance is strictly capped at 150 enterprise leaders across our 6-person boardroom pods. Applications are reviewed on a rolling basis.
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
              className="w-full sm:w-auto inline-flex items-center justify-center bg-neutral-950/80 hover:bg-neutral-800 text-gray-300 hover:text-white border border-neutral-800 px-8 py-4 rounded-xl transition-all text-sm"
            >
              Review Residency Inclusions
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
