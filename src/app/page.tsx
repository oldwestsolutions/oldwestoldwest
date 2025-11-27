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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Professional Services for Your Home & Code
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            From protecting your home with expert roofing and solar solutions to streamlining your development workflow with professional pull request management—we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 px-4 bg-[#1a1a1a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Roofing Service Card */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white text-center group-hover:text-orange-400 transition-colors">Roofing</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Expert installation and repair services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Quality materials and craftsmanship</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Free inspections and estimates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Weather-resistant solutions</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Protection Level</span>
                    <span className="text-sm text-orange-400 font-bold">Maximum</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <div className="flex">
                      <div className="w-1 h-1 bg-orange-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-orange-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solar Service Card */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white text-center group-hover:text-yellow-400 transition-colors">Solar</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Residential and commercial installations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Energy savings and sustainability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Professional system design</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Maintenance and monitoring</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Efficiency Rating</span>
                    <span className="text-sm text-yellow-400 font-bold">Premium</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <div className="flex">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-yellow-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pull Requests Service Card */}
            <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-white text-center group-hover:text-blue-400 transition-colors">Pull Requests</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Code review and quality assurance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Automated testing and CI/CD integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Merge conflict resolution</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">Workflow optimization</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Code Quality</span>
                    <span className="text-sm text-blue-400 font-bold">Enterprise</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-700 rounded-full h-2 mr-3">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                    <div className="flex">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-1"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="w-full max-w-6xl py-16 px-4 bg-[#1a1a1a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Service Details</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Roofing Details */}
          <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Roofing Services</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Protect your most valuable investment with our comprehensive roofing services. We specialize in residential and commercial roofing solutions that combine durability, aesthetics, and energy efficiency.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-orange-400 font-bold text-lg">Expert Installation</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Licensed professionals with years of experience in all roofing materials</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg p-4 border border-orange-500/30 backdrop-blur-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-orange-400 font-bold">24/7 Emergency Repairs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solar Details */}
          <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Solar Energy Solutions</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Harness the power of the sun with our state-of-the-art solar panel installations. Reduce your carbon footprint while saving on energy costs with our comprehensive solar solutions.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-4 border border-yellow-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-yellow-400 font-bold text-lg">Maximum Efficiency</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Premium solar panels with industry-leading efficiency ratings</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg p-4 border border-yellow-500/30 backdrop-blur-sm">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="text-yellow-400 font-bold">Smart Monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pull Requests Details */}
        <div className="mt-12">
          <div className="relative bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl shadow-lg p-8 border border-gray-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Pull Request Management</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Streamline your development workflow with our expert pull request services. We help teams maintain code quality, resolve conflicts, and optimize their Git workflows for maximum productivity.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-blue-400 font-bold">Code Review</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Thorough code reviews ensuring quality and best practices</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <span className="text-blue-400 font-bold">CI/CD Integration</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Automated testing and deployment pipelines</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <span className="text-blue-400 font-bold">Merge Management</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Expert conflict resolution and merge strategies</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg p-4 border border-blue-500/30 backdrop-blur-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <span className="text-blue-400 font-bold">Workflow Optimization</span>
                    </div>
                    <p className="text-gray-300 text-sm ml-11">Custom Git workflows tailored to your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-[#2a2a2a] border-b border-[#333]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you need roofing protection, solar energy, or pull request management, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-colors"
            >
              View Pricing
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-8 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">OldWestSolutions</h3>
              <p className="text-sm">Professional services for your home and code. Roofing, solar, and pull request management.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Roofing</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Solar</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">Pull Requests</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/launch" className="hover:text-white transition-colors">Launch</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
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
