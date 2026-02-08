export default function WhyAttend() {
  return (
    <section id="why-attend" className="py-20 px-5" style={{ background: '#000' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 font-bold" style={{ color: 'var(--gold)' }}>
          Why This Event Exists
        </h2>

        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              2026 is not a normal year. It's the inflection point where AI capabilities will fundamentally reshape competitive advantage.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              The gap between leaders who master strategic AI integration and those who treat it as "just another tool" will become irreversible. This isn't about technology—it's about whether your organization's culture can absorb exponential change without fracturing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--gold)' }}>72%</div>
              <p className="text-gray-300">
                of executives report their teams lack the frameworks to implement AI ethically and effectively
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--gold)' }}>$100K+</div>
              <p className="text-gray-300">
                Average profit pool unlocked by leaders who master AI-human collaboration models
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold mb-4" style={{ color: 'var(--gold)' }}>48hrs</div>
              <p className="text-gray-300">
                To build your complete 2026 strategic roadmap with world-class practitioners
              </p>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-lg" style={{ background: 'var(--navy)', borderLeft: '4px solid var(--gold)' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--gold)' }}>
              What You're Actually Buying
            </h3>
            <p className="text-lg leading-relaxed text-gray-300 mb-4">
              Most leadership conferences give you inspiration and send you home with a tote bag. You'll leave with a bound, audited 12-month operational blueprint that your team can execute Monday morning.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              <strong>The transformation happens over 48 intensive hours.</strong> You'll work directly with the Amazing 7—consultants who normally charge $10K+ per session and have scaled million-dollar B2B organizations. They'll audit your current state, identify your biggest leverage points, and build your custom roadmap for 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
