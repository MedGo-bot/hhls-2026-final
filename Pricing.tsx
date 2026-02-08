export default function Pricing() {
  const eventbriteUrl = 'https://www.eventbrite.com/e/1981895827772?aff=oddtdtcreator';

  return (
    <section id="pricing" className="py-20 px-5 text-center" style={{ background: 'var(--dark)' }}>
      <h2 className="text-4xl md:text-5xl mb-4 font-bold" style={{ color: 'var(--gold)' }}>
        Residency Investment
      </h2>
      <p className="text-gray-400 mb-3 max-w-2xl mx-auto text-lg">
        Choose the level of engagement that matches your commitment to transformation
      </p>
      <p className="text-gray-500 mb-2 max-w-2xl mx-auto text-sm">
        Early Bird pricing ends April 15th, 2026
      </p>
      <p className="font-semibold mb-12 max-w-2xl mx-auto text-sm" style={{ color: 'var(--gold)' }}>
        Only 300 tickets available for this exclusive event
      </p>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto items-stretch">
        <div
          className="w-full md:w-80 p-8 rounded-lg flex flex-col justify-between relative"
          style={{ background: 'white', color: 'var(--dark)', border: '1px solid #ddd' }}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
            EARLY BIRD - EXPIRES 4/15/26
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 mt-2">Vanguard Early Bird</h3>
            <p className="text-sm text-gray-600 mb-4">Save $850 off regular price</p>
            <div className="text-5xl font-bold my-6">$649.99</div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Complete 2-Day Residency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Roadmap Binder Included</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Boardroom Pod Access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Breakfast and Lunch</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Opening Night Reception</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Keynote Sessions</span>
              </li>
            </ul>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-6 font-bold rounded-md transition-all hover:opacity-90"
            style={{ background: '#1a252f', color: 'white' }}
          >
            SECURE POSITION
          </a>
        </div>

        <div
          className="w-full md:w-80 p-8 rounded-lg flex flex-col justify-between"
          style={{ background: 'white', color: 'var(--dark)', border: '1px solid #ddd' }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Executive Resident</h3>
            <p className="text-sm text-gray-600 mb-4">Standard admission tier</p>
            <div className="text-5xl font-bold my-6">$1,499.00</div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Complete 2-Day Residency</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Roadmap Binder Included</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Boardroom Pod Access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Breakfast and Lunch</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Opening Night Reception</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Keynote Sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Hilton Head Onsite Merch Discount</span>
              </li>
            </ul>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-6 font-bold rounded-md transition-all hover:opacity-90"
            style={{ background: '#1a252f', color: 'white' }}
          >
            CLAIM YOUR SEAT
          </a>
        </div>

        <div
          className="w-full md:w-80 p-8 rounded-lg flex flex-col justify-between relative transform md:scale-105"
          style={{ background: 'var(--navy)', color: 'white', border: '2px solid var(--gold)' }}
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full" style={{ background: 'var(--gold)', color: 'var(--dark)' }}>
            LIMITED TO 100
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 mt-2" style={{ color: 'var(--gold)' }}>
              Architect's Private Council
            </h3>
            <p className="text-sm text-gray-400 mb-4">Private consulting session alone valued at $10K+</p>
            <div className="text-5xl font-bold my-6" style={{ color: 'var(--gold)' }}>
              $3,599.00
            </div>
            <ul className="text-left space-y-3 mb-6">
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span><strong>Private Consulting Session with an Amazing 7 Member</strong> ($10K+ value)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span>Personalized Business Audit & Implementation Plan</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span>Exclusive Council Dinner</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span>Priority Boardroom Placement</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span>VIP Lounge Access</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span>Founding Member Status</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2" style={{ color: 'var(--gold)' }}>✓</span>
                <span>All Executive Resident Perks</span>
              </li>
            </ul>
          </div>

          <a
            href={eventbriteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-3 px-6 font-bold rounded-md transition-all hover:opacity-90"
            style={{ background: 'var(--gold)', color: 'var(--dark)' }}
          >
            JOIN THE COUNCIL
          </a>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-12">
        *Pricing includes applicable state sales tax and processing fees.
      </p>
    </section>
  );
}
