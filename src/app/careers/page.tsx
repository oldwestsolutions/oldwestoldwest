import Link from 'next/link';
import Header from '../components/Header';

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Build the future of professional services with OldWestSolutions. We're looking for talented individuals who share our passion for excellence.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Open Positions</h2>
          
          <div className="space-y-6">
            {/* Job Listing 1 */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Senior Full Stack Developer</h3>
                  <p className="text-gray-300 mb-4">Remote • Full-time</p>
                  <p className="text-gray-400">
                    We're looking for an experienced full stack developer to join our team. You'll work on building scalable web applications and APIs.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job Listing 2 */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">DevOps Engineer</h3>
                  <p className="text-gray-300 mb-4">Remote • Full-time</p>
                  <p className="text-gray-400">
                    Join our infrastructure team to help build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job Listing 3 */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Customer Success Manager</h3>
                  <p className="text-gray-300 mb-4">Remote • Full-time</p>
                  <p className="text-gray-400">
                    Help our customers succeed by providing exceptional support and building strong relationships with our client base.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Job Listing 4 */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Sales Representative</h3>
                  <p className="text-gray-300 mb-4">Remote • Full-time</p>
                  <p className="text-gray-400">
                    Drive growth by identifying new business opportunities and building relationships with potential clients in roofing, solar, and tech services.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Work</h3>
              <p className="text-gray-400">Work from anywhere with flexible hours that fit your lifestyle.</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-400">Continuous learning and career development with mentorship and training programs.</p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Competitive Benefits</h3>
              <p className="text-gray-400">Comprehensive health benefits, competitive salary, and equity options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1a1a1a] text-gray-400 py-12 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">OldWestSolutions</h3>
              <p className="text-sm">Professional services for your home and code. Roofing, solar, and pull request management.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pull-requests" className="hover:text-white transition-colors">Pull Requests</Link></li>
                <li><Link href="/roofing" className="hover:text-white transition-colors">Roofing</Link></li>
                <li><Link href="/solar" className="hover:text-white transition-colors">Solar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/hosting" className="hover:text-white transition-colors">Hosting</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/install" className="hover:text-white transition-colors">Install</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
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

