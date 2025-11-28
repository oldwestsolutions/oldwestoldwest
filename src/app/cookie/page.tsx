import Link from 'next/link';
import Header from '../components/Header';

export default function Cookie() {
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
            Cookie <span className="text-gray-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-gray-500/20 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Essential Cookies:</strong> Required for the website to function properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Preference Cookies:</strong> Remember your settings and preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Most web browsers allow you to refuse or accept cookies, and to delete cookies that have already been set.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Please note that if you choose to disable cookies, some features of our website may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                We may also use third-party cookies from trusted partners to help us analyze website usage and improve our services. These cookies are subject to the respective third parties' privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
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

