import Link from 'next/link';
import Header from '../components/Header';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Learn More About Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Discover comprehensive solutions for your residential and repository needs. Explore our services and find the perfect solution for your project.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Interior Residential Services */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-colors">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Interior Residential Services</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive interior home services including roofing, flooring, solar, remodeling, and more. Transform your home with expert craftsmanship.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Roofing Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flooring Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Solar Energy Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Home Remodeling</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/pricing"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Remodeling Services */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-yellow-500/20 hover:border-yellow-500/50 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Remodeling Contracting</h3>
              <p className="text-gray-400 mb-6">
                Transform your space with expert remodeling services. From kitchen and bathroom renovations to complete home makeovers.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Kitchen Renovations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bathroom Remodeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete Home Makeovers</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Design Solutions</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/pricing"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Repository Services */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Repository Services</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive repository management including pull/merge requests, issues, and version control for your development workflow.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pull/Merge Requests</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Issue Tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Version Control</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Code Review</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/pricing"
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Pricing Information</h3>
              <p className="text-gray-400 mb-6">
                View our transparent pricing for all services. No hidden fees, no long-term contracts. Pay only for what you use.
              </p>
              <Link
                href="/pricing"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </Link>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Hosting Services</h3>
              <p className="text-gray-400 mb-6">
                Explore our comprehensive hosting solutions with premium CPU plans, GPU instances, storage options, and more.
              </p>
              <Link
                href="/hosting"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Hosting
              </Link>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Our Team</h3>
              <p className="text-gray-400 mb-6">
                Have questions? Our team is here to help. Get in touch with us to discuss your project needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
              <p className="text-gray-400 mb-6">
                Looking for career opportunities? Explore open positions and join our growing team of professionals.
              </p>
              <Link
                href="/careers"
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Careers
              </Link>
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

