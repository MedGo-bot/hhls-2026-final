import React from 'react';

export default function Vision() {
  return (
    <section id="vision" className="py-20 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block mb-3">
            The 2028 Strategic Vision
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Leading Autonomous Systems. Sustaining Human Capacity.
          </h2>
          <p className="text-gray-400 text-base max-w-3xl">
            The novelty of basic AI has worn off—replaced by board-level scrutiny over autonomous software, coupled with unprecedented executive fatigue. Here is how our vision addresses both:
          </p>
        </div>

        {/* Scannable Bullet Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Pillar 1: AI Governance & Autonomous Strategy */}
          <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800">
            <h3 className="text-xl font-bold text-amber-400 mb-2">
              1. Enterprise Governance for Autonomous AI
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Move beyond high-level tech demos into actionable board-level risk management and operational execution.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-base leading-none">✓</span>
                <span><strong>Agentic Fleet Oversight:</strong> Direct frameworks for managing liability, compliance, and control as software acts autonomously.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-base leading-none">✓</span>
                <span><strong>Synthetic Workforce Integration:</strong> Structuring cross-functional leadership alongside digital, autonomous labor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-base leading-none">✓</span>
                <span><strong>Board-Ready Judgment:</strong> Cutting through hype to establish clear decision rights and operational boundaries.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Executive Longevity & Peak Performance */}
          <div className="p-8 rounded-2xl bg-neutral-900/90 border border-neutral-800">
            <h3 className="text-xl font-bold text-amber-400 mb-2">
              2. Executive Longevity &amp; Energy Optimization
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              High-velocity strategic execution requires an executive engine operating at absolute peak physical and cognitive health.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-base leading-none">✓</span>
                <span><strong>Biomarker &amp; Stress Audits:</strong> On-site comprehensive biological profiling and cognitive stress diagnostics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-base leading-none">✓</span>
                <span><strong>Oceanfront Recovery Protocol:</strong> Guided low-country breathwork and targeted physical reset sessions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 font-bold text-base leading-none">✓</span>
                <span><strong>12-Month Longevity Playbook:</strong> A personalized, actionable health and energy roadmap to take home.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Takeaway Bar */}
        <div className="mt-8 p-4 rounded-xl bg-amber-400/5 border border-amber-400/20 text-center">
          <p className="text-amber-200 text-sm font-semibold">
            The Takeaway: Ironclad governance for your organization. Peak cognitive endurance for yourself.
          </p>
        </div>

      </div>
    </section>
  );
}
 
