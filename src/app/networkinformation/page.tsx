import Link from 'next/link';
import Header from '../components/Header';

export default function NetworkInformation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            OldWest.net Network
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Experience revolutionary network solutions through OldWest.net. From gaming and bandwidth sharing to Ethereum VM services and ad sharing capabilities, our distributed network infrastructure enables you to capitalize on your participation while playing sports, games, and engaging in real-life activities.
          </p>
        </div>
      </section>

      {/* OldWest.net Network Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Revolutionary Network Solutions
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Revolutionary network solutions for gaming, bandwidth sharing, and Ethereum VM services with ad sharing capabilities through our distributed network infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Network Solutions</h3>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Gaming Network</p>
                    <p className="text-gray-400 text-sm">Low latency gaming</p>
                  </Link>
                  
                  <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Bandwidth Sharing</p>
                    <p className="text-gray-400 text-sm">Earn from sharing</p>
                  </Link>
                  
                  <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Ethereum VM</p>
                    <p className="text-gray-400 text-sm">Smart contracts</p>
                  </Link>
                  
                  <Link href="/network" className="bg-[#2a2a2a] rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Ad Sharing</p>
                    <p className="text-gray-400 text-sm">Monetize participation</p>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-purple-500/20">
                <h3 className="text-3xl font-bold text-purple-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  OldWest.net Network
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Revolutionary network solutions for gaming, bandwidth sharing, and Ethereum VM services with ad sharing capabilities through our distributed network infrastructure
                </p>
                
                {/* Network Image */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-purple-500/30 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      <img src="/globe crystal.jpg" alt="Network Infrastructure" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-purple-400 font-semibold text-lg mb-2">Network Infrastructure</p>
                    <p className="text-gray-400 text-sm text-center">Gaming, bandwidth sharing, and Ethereum VM services</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Gaming Network</p>
                      <p className="text-gray-400 text-sm">Ultra-low latency gaming</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Bandwidth Sharing</p>
                      <p className="text-gray-400 text-sm">Monetize your bandwidth</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Ethereum VM Services</p>
                      <p className="text-gray-400 text-sm">Deploy smart contracts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

