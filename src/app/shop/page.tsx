import Link from 'next/link';
import Header from '../components/Header';

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            OldWest <span className="text-orange-400">Shop</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover quality products and services for your home and business needs.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Products</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-24 h-24 text-orange-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Home Improvement Tools</h3>
              <p className="text-gray-400 mb-4">
                Professional-grade tools and equipment for your residential projects.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-400">$99.99</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-24 h-24 text-orange-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Solutions</h3>
              <p className="text-gray-400 mb-4">
                Advanced security systems and monitoring equipment for your property.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-400">$299.99</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-24 h-24 text-orange-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Development Services</h3>
              <p className="text-gray-400 mb-4">
                Professional software development and repository management services.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-400">Custom</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-orange-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Shop Categories</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Residential</h4>
                <p className="text-gray-400 text-sm">Home improvement products</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Business</h4>
                <p className="text-gray-400 text-sm">Commercial solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Software</h4>
                <p className="text-gray-400 text-sm">Development tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Services</h4>
                <p className="text-gray-400 text-sm">Professional services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding the Right Product?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you find the perfect solution for your needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Us
            </Link>
            <Link href="/help-desk" className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Help Desk
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
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/newspaper" className="hover:text-white transition-colors">Newspaper</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents</Link></li>
                <li><Link href="/domains" className="hover:text-white transition-colors">Domains</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/legal" className="hover:text-white transition-colors">Legal</Link></li>
                <li><Link href="/help-desk" className="hover:text-white transition-colors">Help Desk</Link></li>
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
            <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

