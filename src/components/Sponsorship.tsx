export default function Sponsorship() {
  return (
    <section id="sponsorship" className="py-24 px-5" style={{ background: 'linear-gradient(180deg, #040d1a 0%, #0a1629 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#c5a059' }}>
            Strategic Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Position your brand at the intersection of executive leadership and cutting-edge innovation.
            Connect with 500+ decision-makers who control $2B+ in annual budgets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg border-l-4" style={{ borderColor: '#c5a059' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#c5a059' }}>Why Build Brand Recognition with Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#c5a059' }}>•</span>
                <span>Direct access to C-suite executives and senior leadership from Fortune 1000 companies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#c5a059' }}>•</span>
                <span>Extended engagement time in intimate, high-trust environments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#c5a059' }}>•</span>
                <span>Measurable ROI through qualified lead generation and brand positioning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: '#c5a059' }}>•</span>
                <span>Association with thought leadership and strategic innovation</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Audience Profile</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>C-Level Executives</span>
                <span className="font-bold text-blue-400">40%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>VP/Director Level</span>
                <span className="font-bold text-blue-400">30%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>Senior Managers</span>
                <span className="font-bold text-blue-400">20%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <span>Entrepreneurs</span>
                <span className="font-bold text-blue-400">10%</span>
              </div>
              <div className="pt-2">
                <p className="text-sm italic">Industries: Tech, Finance, Healthcare, Life Science, Manufacturing</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gray-900 p-12 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#c5a059' }}>
            Custom Sponsorship Opportunities
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have unique goals? We'll craft a bespoke sponsorship package aligned with your objectives.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-300">
              Contact our Partnership Team:
            </p>
            <a
              href="mailto:sponsorship@hiltonheadleadershipsummit.com"
              className="inline-block px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
              style={{ background: '#c5a059', color: '#0a0a0a' }}
            >
              sponsorship@hiltonheadleadershipsummit.com
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Or call us directly: <span className="font-bold text-gray-400">(916) 898-4319</span>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Limited sponsorship slots available. Early commitment ensures maximum visibility and preferred partner status.</p>
        </div>
      </div>
    </section>
  );
}
