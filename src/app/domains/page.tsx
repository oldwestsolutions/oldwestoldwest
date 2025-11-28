import Link from 'next/link';
import Header from '../components/Header';

export default function Domains() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Domain <span className="text-purple-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional domain registration, management, and DNS services. Secure your online presence with reliable domain solutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Domain Management Solutions</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Domain Registration</h3>
              <p className="text-gray-400">
                Register domains with all major TLDs including .com, .net, .org, and hundreds of specialty extensions.
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">DNS Management</h3>
              <p className="text-gray-400">
                Advanced DNS configuration with A, AAAA, CNAME, MX, TXT records and DNS propagation monitoring.
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Domain Security</h3>
              <p className="text-gray-400">
                Domain privacy protection, SSL certificates, and security features to protect your online identity.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Domain Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Registration & Transfer</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Domain registration with competitive pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Easy domain transfers from other registrars</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Auto-renewal and expiration management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-purple-400 mb-4">Management Tools</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>User-friendly domain management dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bulk domain management for multiple domains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 customer support and assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Secure Your Domain Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get professional domain services for your online presence.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started
            </Link>
            <Link href="/pricing" className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1a1a1a] text-gray-400 py-12 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8" />
                <h3 className="text-white text-lg font-bold">OldWestSolutions</h3>
              </div>
              <p className="text-sm">Professional services for your home and code.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/residential" className="hover:text-white transition-colors">Residential</Link></li>
                <li><Link href="/remodeling" className="hover:text-white transition-colors">Remodeling</Link></li>
                <li><Link href="/repository" className="hover:text-white transition-colors">Repository</Link></li>
                <li><Link href="/domains" className="hover:text-white transition-colors">Domains</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/legal" className="hover:text-white transition-colors">Legal</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-sm">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

