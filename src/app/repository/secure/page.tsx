import Link from 'next/link';
import Header from '../../components/Header';

export default function SecureRepositories() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Secure <span className="text-blue-400">Repositories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Enterprise-grade security for your codebases. Protect your repositories with advanced access controls, encryption, and compliance features.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Comprehensive Security</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Access Control</h3>
              <p className="text-gray-400">
                Fine-grained permissions, role-based access control, and team management for secure collaboration.
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Encryption</h3>
              <p className="text-gray-400">
                End-to-end encryption for data at rest and in transit, ensuring your code remains protected.
              </p>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
              <p className="text-gray-400">
                SOC 2, GDPR, and HIPAA compliance features to meet regulatory requirements.
              </p>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Security Features</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Protection Mechanisms</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secret scanning and leak detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dependency vulnerability scanning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Branch protection rules and policies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Monitoring & Auditing</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Activity logs and audit trails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time security alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compliance reporting and documentation</span>
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
          <h2 className="text-4xl font-bold text-white mb-6">Secure Your Codebases</h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your repositories with enterprise-grade security.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Started
            </Link>
            <Link href="/repository" className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Learn More
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

