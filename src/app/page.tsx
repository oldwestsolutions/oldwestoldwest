import Link from 'next/link';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section - Two Column */}
      <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                <span className="text-black" style={{
                  WebkitTextStroke: '2px white',
                  textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'
                } as React.CSSProperties}>
                  Home & Code
                </span>{' '}
                Professional Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
                Comprehensive solutions for your property and development needs. From expert roofing installations and solar energy systems to professional pull request management—we deliver excellence across every service.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verified Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/roofing"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Roofing
              </Link>
              <Link
                href="/solar"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Solar
              </Link>
              <Link
                href="/pull-requests"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Pull Requests
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              {/* Abstract visual composition */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#2a2a2a] rounded-2xl"></div>
              
              {/* Floating service icons */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              
              <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500" style={{animationDelay: '0.2s'}}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              
              <div className="absolute bottom-20 left-16 w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500" style={{animationDelay: '0.4s'}}>
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" style={{zIndex: 1}}>
                <line x1="10%" y1="15%" x2="35%" y2="25%" stroke="currentColor" strokeWidth="2" className="text-orange-500" />
                <line x1="75%" y1="30%" x2="45%" y2="50%" stroke="currentColor" strokeWidth="2" className="text-yellow-500" />
                <line x1="25%" y1="60%" x2="20%" y2="75%" stroke="currentColor" strokeWidth="2" className="text-blue-500" />
              </svg>
              
              {/* Glow effects */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="absolute top-32 right-16 w-20 h-20 bg-yellow-500/20 rounded-2xl blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 left-16 w-28 h-28 bg-blue-500/20 rounded-2xl blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Section - Full Page */}
      <section id="roofing" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <h2 className="text-3xl font-bold text-orange-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Professional Roofing Services
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Expert installation and protection for your home with our verified contractor network and quality materials
              </p>
              
              {/* House Illustration */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-orange-500/30 mb-8">
                <div className="flex flex-col items-center">
                  {/* House Illustration */}
                  <div className="relative w-64 h-64 mb-6">
                    {/* House Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-orange-600/80 to-orange-700/80 rounded-t-lg border-2 border-orange-400/50">
                      {/* Windows */}
                      <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-yellow-400/50 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute right-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-yellow-400/50 rounded"></div>
                        </div>
                      </div>
                      {/* Door */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-orange-800/80 rounded-t border-2 border-orange-400/50">
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                    {/* Roof */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-2xl">
                        <polygon points="100,20 40,80 160,80" fill="url(#roofGradient)" stroke="#f97316" strokeWidth="3" />
                        <defs>
                          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* Protection Shield */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 rounded-full border-2 border-orange-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-orange-400 font-semibold text-lg mb-2">Maximum Protection</p>
                  <p className="text-gray-400 text-sm text-center">Weather-resistant materials and expert craftsmanship</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Expert Installation</p>
                    <p className="text-gray-400 text-sm">Licensed professionals with verified credentials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Contractors</p>
                    <p className="text-gray-400 text-sm">Background checked and insured professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Quality Reviews</p>
                    <p className="text-gray-400 text-sm">Rate your contractors and share experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Professional Roofing Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Protect your most valuable investment with our comprehensive roofing solutions. Expert installation, quality materials, and verified contractors ensure maximum protection for your home.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Expert Installation</p>
                <p className="text-gray-400 text-sm">Licensed & verified</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">24/7 Support</p>
                <p className="text-gray-400 text-sm">Always available</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Secure Payments</p>
                <p className="text-gray-400 text-sm">Protected transactions</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Quality Materials</p>
                <p className="text-gray-400 text-sm">Premium selection</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/pricing"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Section - Full Page */}
      <section id="solar" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Solar Energy Solutions
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Harness the power of the sun with our state-of-the-art solar installations. Reduce your carbon footprint while saving on energy costs with our comprehensive solar solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Maximum Efficiency</p>
                <p className="text-gray-400 text-sm">Premium panels</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Smart Monitoring</p>
                <p className="text-gray-400 text-sm">Real-time tracking</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Energy Savings</p>
                <p className="text-gray-400 text-sm">Lower bills</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Eco-Friendly</p>
                <p className="text-gray-400 text-sm">Sustainable energy</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/pricing"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Solar Efficiency System
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Premium solar panel installations with maximum efficiency and smart monitoring systems
              </p>
              
              {/* Solar Panel Illustration */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-yellow-500/30 mb-8">
                <div className="flex flex-col items-center">
                  {/* Solar Panel Array */}
                  <div className="relative w-64 h-48 mb-6">
                    {/* Sun */}
                    <div className="absolute top-0 right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl animate-pulse">
                      <div className="absolute inset-2 bg-yellow-300 rounded-full"></div>
                      {/* Sun Rays */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400 rounded"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-yellow-400 rounded"></div>
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400 rounded"></div>
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-yellow-400 rounded"></div>
                    </div>
                    
                    {/* Solar Panels */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {/* Panel 1 */}
                      <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 bg-yellow-400/20 rounded"></div>
                          ))}
                        </div>
                      </div>
                      {/* Panel 2 */}
                      <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 bg-yellow-400/20 rounded"></div>
                          ))}
                        </div>
                      </div>
                      {/* Panel 3 */}
                      <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 bg-yellow-400/20 rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Energy Flow Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30">
                      <path d="M 200 80 Q 150 60 100 100" stroke="#eab308" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                      <path d="M 200 100 Q 150 80 100 120" stroke="#eab308" strokeWidth="2" fill="none" strokeDasharray="4,4" />
                    </svg>
                  </div>
                  <p className="text-yellow-400 font-semibold text-lg mb-2">Premium Efficiency</p>
                  <p className="text-gray-400 text-sm text-center">Industry-leading solar panel technology</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Installers</p>
                    <p className="text-gray-400 text-sm">Certified solar professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Efficiency Rating</p>
                    <p className="text-gray-400 text-sm">Industry-leading performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">System Reviews</p>
                    <p className="text-gray-400 text-sm">Share your solar experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Requests Section - Full Page */}
      <section id="pull-requests" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-blue-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Pull Request Management System
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Professional code review and workflow optimization with our verified developer network
              </p>
              
              {/* Git Branch Illustration */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-blue-500/30 mb-8">
                <div className="flex flex-col items-center">
                  {/* Git Branch Diagram */}
                  <div className="relative w-64 h-64 mb-6">
                    {/* Main Branch */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-400"></div>
                    </div>
                    
                    {/* Feature Branch 1 */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-1 bg-blue-400/60 rounded transform rotate-45 origin-left"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border border-blue-300"></div>
                    </div>
                    
                    {/* Feature Branch 2 */}
                    <div className="absolute top-24 left-1/2 transform translate-x-1/2">
                      <div className="w-20 h-1 bg-blue-400/60 rounded transform -rotate-45 origin-right"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border border-blue-300"></div>
                    </div>
                    
                    {/* Merge Point */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-2 border-blue-400 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Code Blocks */}
                    <div className="absolute bottom-4 left-4 w-16 h-12 bg-gray-800 rounded border border-blue-500/30 p-2">
                      <div className="space-y-1">
                        <div className="h-1 bg-blue-400/40 rounded w-3/4"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-full"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-16 h-12 bg-gray-800 rounded border border-blue-500/30 p-2">
                      <div className="space-y-1">
                        <div className="h-1 bg-blue-400/40 rounded w-full"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-3/4"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-5/6"></div>
                      </div>
                    </div>
                    
                    {/* Review Checkmark */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full border-2 border-blue-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-blue-400 font-semibold text-lg mb-2">Enterprise Quality</p>
                  <p className="text-gray-400 text-sm text-center">Professional code review and merge management</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Code Review</p>
                    <p className="text-gray-400 text-sm">Thorough quality assurance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Developers</p>
                    <p className="text-gray-400 text-sm">ID & background checked</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Review System</p>
                    <p className="text-gray-400 text-sm">Rate your code reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Pull Request Management
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Streamline your development workflow with our expert pull request services. We help teams maintain code quality, resolve conflicts, and optimize their Git workflows for maximum productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">CI/CD Integration</p>
                <p className="text-gray-400 text-sm">Automated pipelines</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Merge Management</p>
                <p className="text-gray-400 text-sm">Conflict resolution</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Secure Workflows</p>
                <p className="text-gray-400 text-sm">Protected processes</p>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Workflow Optimization</p>
                <p className="text-gray-400 text-sm">Custom solutions</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/pricing"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
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
                <li><Link href="/solar" className="hover:text-white transition-colors">Solar</Link></li>
                <li><Link href="/roofing" className="hover:text-white transition-colors">Roofing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/install" className="hover:text-white transition-colors">Install</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/referral" className="hover:text-white transition-colors">Referral Program</Link></li>
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
