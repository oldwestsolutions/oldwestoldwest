import Link from 'next/link';
import Header from '../components/Header';

export default function ResidentialInformation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Residential Contracting Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Transform your home with our comprehensive residential contracting services. From expert roofing installations and HVAC systems to appliance services and plumbing solutions—we deliver excellence across every aspect of your home.
          </p>
        </div>
      </section>

      {/* Residential Contracting Services Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Comprehensive Residential Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive residential contracting services including roofing, HVAC, appliances, plumbing, and more with our verified contractor network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
                <h3 className="text-3xl font-bold text-orange-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  Residential Contracting Services
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Comprehensive residential contracting services including roofing, HVAC, appliances, plumbing, and more with our verified contractor network
                </p>
                
                {/* House Image */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-orange-500/30 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      <img src="/house.jpg" alt="Maximum Protection" className="w-full h-full object-cover" />
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
            
            {/* Right Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/residential/roofing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Roofing</p>
                    <p className="text-gray-400 text-sm">Expert installation</p>
                  </Link>
                  
                  <Link href="/residential/hvac" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41-1.41m11.32-11.32l-1.41-1.41" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">HVAC</p>
                    <p className="text-gray-400 text-sm">Heating & cooling</p>
                  </Link>
                  
                  <Link href="/residential/appliances" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Appliances</p>
                    <p className="text-gray-400 text-sm">Installation & repair</p>
                  </Link>
                  
                  <Link href="/residential/plumbing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Plumbing</p>
                    <p className="text-gray-400 text-sm">Complete solutions</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
