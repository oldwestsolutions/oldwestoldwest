import Link from 'next/link';

export default function Launch() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tight">OldWestSolutions</Link>
        </div>
        <button className="bg-ms-gray-70 text-white px-6 py-2 rounded-full font-semibold hover:bg-ms-gray-80 transition-colors">
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h1>
        
        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* VM Rental Plan */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border-2 border-transparent hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Virtual Machine</h2>
            <div className="text-3xl font-bold mb-4">$99<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>4 vCPU Cores</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>16GB RAM</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100GB SSD Storage</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited Bandwidth</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Select Plan
            </button>
          </div>

          {/* Database Plan */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h2 className="text-2xl font-bold mb-4">Database Service</h2>
            <div className="text-3xl font-bold mb-4">$149<span className="text-lg text-gray-400">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>PostgreSQL & MySQL</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>50GB Storage</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily Backups</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>High Availability</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Select Plan
            </button>
          </div>

          {/* Framer UI Plan */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border-2 border-transparent hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-bold mb-4">Framer UI Template</h2>
            <div className="text-3xl font-bold mb-4">$299<span className="text-lg text-gray-400">/one-time</span></div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Modern Design</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fully Responsive</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Customizable Components</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifetime Updates</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Purchase Template
            </button>
          </div>
        </div>

        {/* Checkout Form */}
        <div className="bg-[#2a2a2a] rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Complete Your Order</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Enter company name"
              />
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h3 className="text-xl font-bold mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-8 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">OldWestSolutions</h3>
              <p className="text-sm">Advanced data collection and automation solutions for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/launch" className="hover:text-white transition-colors">Launch</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/newspaper" className="hover:text-white transition-colors">Newspaper</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
                <li><Link href="/wiki" className="hover:text-white transition-colors">Wiki</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link> | 
              <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
              <Link href="/cookies" className="hover:text-white transition-colors ml-2">Cookie Policy</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 