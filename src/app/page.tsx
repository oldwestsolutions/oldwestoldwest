import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-xl md:text-3xl font-extrabold tracking-tight flex items-center">
            <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8 mr-3" />
            OldWestSolutions
          </Link>
        </div>
        <Link href="/login" className="bg-ms-gray-70 text-white px-6 py-2 rounded-full font-semibold hover:bg-ms-gray-80 transition-colors">
          Login
        </Link>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#1a1a1a] text-center border-b border-[#333]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Enterprise-Grade Server Infrastructure Solutions</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Deploy high-performance dedicated servers, virtual private servers, and scalable cloud infrastructure in minutes. Our enterprise-grade platform serves businesses, developers, and organizations worldwide with reliable, secure, and cost-effective computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/rent"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-colors"
              >
                Managed Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Our Servers?</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Instant deployment - servers ready in under 60 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Pay-as-you-go pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Global data centers for low latency worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">24/7 support and 99.9% uptime guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 bg-[#1a1a1a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Dedicated Servers Card */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-400/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white text-center group-hover:text-gray-300 transition-colors">Dedicated Servers</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Full server control and customization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">High-performance CPUs and GPUs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Perfect for gaming and mining</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Performance Level</span>
                    <span className="text-sm text-gray-300 font-bold">Maximum</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                      <div className="bg-gray-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <div className="flex">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* VPS Hosting Card */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-400/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white text-center group-hover:text-gray-300 transition-colors">VPS Hosting</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Scalable virtual private servers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Multiple OS options available</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Ideal for web development</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Scalability</span>
                    <span className="text-sm text-gray-300 font-bold">Flexible</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                      <div className="bg-gray-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <div className="flex">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cloud Infrastructure Card */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 hover:border-gray-500 transition-all duration-300 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-400/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white text-center group-hover:text-gray-300 transition-colors">Cloud Infrastructure</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Auto-scaling cloud resources</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Load balancing and CDN</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Enterprise-grade security</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Security Level</span>
                    <span className="text-sm text-gray-300 font-bold">Enterprise</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                      <div className="bg-gray-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <div className="flex">
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-6xl py-16 px-4 bg-[#1a1a1a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Services</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Mission Card */}
          <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Step into the digital frontier where OldWestSolutions reigns as the ultimate server rental platform. We&apos;re not just providing infrastructure—we&apos;re empowering your digital empire with lightning-fast dedicated servers, bulletproof VPS hosting, limitless cloud infrastructure, and fortress-grade storage solutions that scale with your wildest ambitions.
                </p>
                
                {/* Highlighted Features */}
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg p-4 border border-green-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-green-400 font-bold text-lg">Lightning-Fast Deployment</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Your infrastructure comes online in under 60 seconds—no shackles, no hidden traps</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-blue-400 font-bold">Fortress-Level Security</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  From launching your next breakthrough application to safeguarding your most critical data vaults, from orchestrating complex network architectures to scaling your digital dominion—we deliver the raw computing power and battle-tested services that transform your boldest visions into unstoppable reality.
                </p>
              </div>
            </div>
          </div>
          
          {/* Services Cards */}
          <div className="space-y-6">
            {/* Object Storage */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">Object Storage</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Get S3-compatible unlimited storage on demand. Scalable, secure, and cost-effective object storage for your applications and data.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">Storage Capacity</span>
                    <span className="text-xs text-blue-400 font-bold">Unlimited</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-3 mr-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1 animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-1 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Virtual Private Servers */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">Virtual Private Servers</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">A virtual private server, also referred to as a VPS, is a virtual dedicated server. Unlike web hosting (also known as shared hosting), where the technical aspects are managed by the provider — you are the administrator of your VPS, and fully manage it.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-xs text-gray-400 mb-1">Control Level</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-400 font-bold">Full Admin</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg p-3 border border-green-500/30">
                    <div className="text-xs text-gray-400 mb-1">Management</div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm text-green-400 font-bold">Self-Managed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* VPN Services */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">VPN Services by Deadwood</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Secure your network with Deadwood&apos;s premium VPN services. High-speed, encrypted connections with global server locations for maximum privacy and security.</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-xs text-gray-400 font-medium">Global Locations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-purple-400 font-bold mr-2">50+ Countries</span>
                      <div className="flex">
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-1 animate-pulse"></div>
                        <div className="w-1 h-1 bg-purple-400 rounded-full mr-1 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why OldWestSolutions Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">Why OldWestSolutions?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">CI/CD - Continuous Integration and Deployment</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Automated Builds</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Continuous Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  <span>Automated Deployment</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Pipeline Orchestration</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Identity & Access Management (IAM)</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <span>Single Sign-On (SSO) and OAuth integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Role-based access control (RBAC) for users and apps</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secret Management: Safely store API keys, passwords, certificates</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Virtual Machines (VM) / Virtual Private Server (VPS)</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span>Application Hosting</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>Database Servers</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Trading Engines</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Development Environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="w-full max-w-6xl py-16 px-4 bg-[#2a2a2a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Global Data Center Locations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Los Angeles</h3>
            <p className="text-gray-400 mb-2">Los Angeles, CA</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                eGPU and 4K addons
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">New York</h3>
            <p className="text-gray-400 mb-2">New York, NY</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                4K addon
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Houston</h3>
            <p className="text-gray-400 mb-2">Dallas, TX</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Sydney</h3>
            <p className="text-gray-400 mb-2">Sydney, Australia</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 px-4 bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Partners</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* IBM */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/ibm.png" alt="IBM" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Oracle */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/oracle.png" alt="Oracle" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Salesforce */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/salesforce.png" alt="Salesforce" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Google */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/google.png" alt="Google" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Coinbase */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/coinbase.png" alt="Coinbase" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-8 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">OldWestSolutions</h3>
              <p className="text-sm">Advanced data collection and automation solutions for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/launch" className="hover:text-white transition-colors">Launch</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/newspaper" className="hover:text-white transition-colors">Newspaper</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
                <li><Link href="/wiki" className="hover:text-white transition-colors">Wiki</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
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
