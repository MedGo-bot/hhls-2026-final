import { Users, Brain, TrendingUp, Award, Target, Shield } from 'lucide-react';

const speakers = [
  {
    name: 'Dharam Singh',
    title: 'Innovation Organizational Builder',
    specialty: 'High-Stakes Operations',
    icon: Shield,
    bio: 'Specializing in the engineering of high-stakes environments and the regulation of operational systems',
    confirmed: true
  },
  {
    name: 'Jaime Joseph',
    title: 'Human Capital Expert',
    specialty: 'Human Capital',
    icon: Users,
    bio: 'A Human Capital expert with over 10 years of experience managing complex organizational structures',
    confirmed: true
  },
  {
    name: 'Ms. Wilson',
    title: 'Risk Management Expert',
    specialty: 'Risk Management',
    icon: Shield,
    bio: 'Specializing in enterprise risk frameworks and strategic risk mitigation across complex organizational structures',
    confirmed: true
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'AI Integration Architect',
    specialty: 'Enterprise AI Strategy',
    icon: Brain,
    bio: 'Former Chief AI Officer at Fortune 100, pioneered frameworks for human-AI collaboration that generated $2B+ in value',
    confirmed: false
  },
  {
    name: 'Marcus Rodriguez',
    title: 'High-Stakes Negotiator',
    specialty: 'Executive Dealmaking',
    icon: Target,
    bio: 'Closed $5B+ in transactions, teaches the exact frameworks used in boardroom negotiations',
    confirmed: false
  },
  {
    name: 'Dr. Jennifer Walsh',
    title: 'Organizational Psychologist',
    specialty: 'Culture & Change',
    icon: Users,
    bio: 'Rebuilt leadership teams for 50+ companies, expert in managing transformation without cultural fracture',
    confirmed: false
  },
  {
    name: 'David Kim',
    title: 'Growth Architect',
    specialty: 'Profit Engineering',
    icon: TrendingUp,
    bio: 'Built 7 companies to 8-figure exits, specializes in identifying and executing on $100K+ profit opportunities',
    confirmed: false
  },
  {
    name: 'Lisa Morgan',
    title: 'Executive Coach',
    specialty: 'Leadership Development',
    icon: Award,
    bio: 'Coached 200+ CEOs through transformation, specializes in building resilient leadership under pressure',
    confirmed: false
  }
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 px-5" style={{ background: 'var(--dark)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-6 font-bold" style={{ color: 'var(--gold)' }}>
          The Amazing 7 Faculty
        </h2>
        <p className="text-center text-xl text-gray-300 mb-3 max-w-3xl mx-auto">
          Elite consultants who normally charge $10K+ per private session
        </p>
        <p className="text-center text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
          They've scaled million-dollar organizations and will be embedded throughout the residency—not keynote speakers who disappear after their talk
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => {
            const Icon = speaker.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border transition-all hover:scale-105 relative"
                style={{
                  background: 'var(--navy)',
                  borderColor: speaker.confirmed ? 'var(--gold)' : '#1a2433'
                }}
              >
                {speaker.confirmed && (
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'var(--gold)', color: 'var(--dark)' }}
                  >
                    CONFIRMED
                  </div>
                )}
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ background: 'var(--dark)' }}>
                  <Icon size={32} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 className="text-xl font-bold text-center mb-2" style={{ color: 'var(--gold)' }}>
                  {speaker.name}
                </h3>
                <p className="text-center text-sm font-semibold mb-2 text-white">
                  {speaker.title}
                </p>
                <p className="text-center text-xs mb-4" style={{ color: 'var(--gold)' }}>
                  {speaker.specialty}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed text-center">
                  {speaker.bio}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg max-w-4xl mx-auto" style={{ background: 'var(--navy)', borderLeft: '4px solid var(--gold)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--gold)' }}>
            Why This Matters
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            These aren't motivational speakers. They're active consultants who normally charge five figures for a single strategy session. At the residency, they're embedded throughout—reviewing your Roadmap Binder, joining your Boardroom Pod sessions, and available for direct consultation.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <strong>For Architect's Private Council members:</strong> You get a dedicated private consulting session with one of them. That session alone would cost you more than $10,000 if you booked it outside this event. You're getting it—plus the entire two-day residency—for $3,599.
          </p>
        </div>
      </div>
    </section>
  );
}
