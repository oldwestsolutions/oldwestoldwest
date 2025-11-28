import Link from 'next/link';
import Header from '../components/Header';

export default function Legal() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Legal <span className="text-gray-400">Information</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Important legal documents and policies. Access our terms of service, privacy policy, and cookie policy.
          </p>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Legal Documents</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Link href="/terms" className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-500/20 hover:border-gray-500/50 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gray-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Terms of Service</h3>
              <p className="text-gray-400">
                Read our terms and conditions governing the use of our services and website.
              </p>
            </Link>

            <Link href="/privacy" className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-500/20 hover:border-gray-500/50 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gray-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Privacy Policy</h3>
              <p className="text-gray-400">
                Learn how we collect, use, and protect your personal information and data.
              </p>
            </Link>

            <Link href="/cookie" className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-500/20 hover:border-gray-500/50 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-gray-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cookie Policy</h3>
              <p className="text-gray-400">
                Understand how we use cookies and similar technologies on our website.
              </p>
            </Link>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-gray-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Legal Information</h3>
            <div className="space-y-6 text-gray-300">
              <p>
                OldWestSolutions is committed to transparency and legal compliance. All our legal documents are regularly reviewed and updated to ensure they reflect current practices and applicable laws.
              </p>
              <p>
                If you have any questions about our legal policies or need clarification on any terms, please contact our legal team through our contact page.
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Last Updated</h4>
                <p className="text-gray-400">
                  All legal documents were last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Questions About Our Legal Policies?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us for more information or clarification.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Us
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

