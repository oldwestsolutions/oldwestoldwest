import Link from 'next/link';
import Header from '../components/Header';

export default function Solar() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            <span className="text-yellow-400">Solar</span> Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Complete protocol and procedures for solar energy system consultation, site assessment, system design, and installation. Our systematic approach ensures optimal energy production and maximum savings.
          </p>
        </div>
      </section>

      {/* Step 1: Initial Consultation */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Initial Consultation</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Energy Assessment</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our solar consultation begins with understanding your energy needs:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Review of past 12 months of electricity bills to determine energy consumption patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Assessment of roof orientation, shading, and available space for panels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Discussion of energy goals, budget, and financing options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Information about available tax credits, rebates, and incentives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <div className="relative w-full h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-yellow-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-yellow-400 font-semibold text-lg">Energy Analysis</p>
                <p className="text-gray-400 text-sm mt-2">Comprehensive review of your energy needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Site Assessment */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative order-2 md:order-1">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <div className="relative w-full h-80 mb-6">
                {/* Solar panel illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-48">
                    {/* Sun */}
                    <div className="absolute top-0 right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl animate-pulse">
                      <div className="absolute inset-2 bg-yellow-300 rounded-full"></div>
                    </div>
                    
                    {/* Solar Panels */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                      <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 bg-yellow-400/20 rounded"></div>
                          ))}
                        </div>
                      </div>
                      <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 bg-yellow-400/20 rounded"></div>
                          ))}
                        </div>
                      </div>
                      <div className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                        <div className="grid grid-cols-4 gap-1 p-2">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 bg-yellow-400/20 rounded"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-yellow-400 font-semibold text-lg">Site Evaluation</p>
                <p className="text-gray-400 text-sm mt-2">Detailed assessment of installation potential</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Site Assessment & Walk-Around</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">On-Site Evaluation Protocol</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our certified solar assessor conducts a comprehensive site evaluation:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div>
                      <span className="font-semibold">Roof Analysis:</span> Measurement of roof dimensions, pitch, orientation, and structural integrity assessment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Sun Exposure:</span> Shading analysis using solar pathfinder tools, identifying optimal panel placement
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Electrical Assessment:</span> Evaluation of existing electrical panel, capacity, and connection requirements
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Documentation:</span> Photographic documentation, measurements, and site condition notes for system design
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Assessment Checklist</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Roof measurements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Shading analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Electrical capacity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Structural evaluation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access routes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Permit requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: System Design */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">System Design & Proposal</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Custom System Design</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our engineering team creates a customized solar system design:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Panel Layout:</span> Optimized panel placement using CAD software, maximizing energy production
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Inverter Selection:</span> Choosing the right inverter type (string, micro, or power optimizer) based on your roof configuration
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Energy Production Estimate:</span> Projected annual kWh production based on location, orientation, and system size
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Financial Analysis:</span> ROI calculations, payback period, and lifetime savings projections
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Proposal Includes</h3>
                <div className="space-y-3 text-gray-300">
                  <p>Your detailed proposal will contain:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• System specifications and component details</li>
                    <li>• Energy production estimates and savings projections</li>
                    <li>• Total cost breakdown and financing options</li>
                    <li>• Installation timeline and process overview</li>
                    <li>• Warranty information and maintenance requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-yellow-500/30">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">20-30</div>
                  <div className="text-sm text-gray-300">Year Warranty</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-yellow-500/30">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                  <div className="text-sm text-gray-300">Year Lifespan</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-yellow-500/30">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">5-10</div>
                  <div className="text-sm text-gray-300">Year Payback</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-yellow-400 font-semibold text-lg">System Benefits</p>
                <p className="text-gray-400 text-sm mt-2">Long-term value and reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Permits & Approvals */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative order-2 md:order-1">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Building Permit</span>
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">We handle all local building department permits</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Electrical Permit</span>
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Electrical permits and utility interconnection</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-yellow-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Utility Approval</span>
                    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300">Net metering agreement with your utility company</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Permits & Approvals</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">We Handle Everything</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Once you approve the proposal, our team manages all necessary permits and approvals:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Building Permits:</span> Submit all required documentation to local building department
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Electrical Permits:</span> Coordinate with licensed electricians for electrical work permits
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <span className="font-semibold">Utility Interconnection:</span> Submit net metering application and coordinate with utility company
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Timeline:</span> Typically 2-6 weeks for all permits and approvals, depending on local requirements
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Installation */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold text-white">5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Professional Installation</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-yellow-500/20">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Day 1: Racking & Mounting</h3>
              <p className="text-gray-300">Install mounting hardware and racking system according to design specifications.</p>
            </div>
            
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-yellow-500/20">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Day 2: Panel Installation</h3>
              <p className="text-gray-300">Mount solar panels, connect wiring, and install inverters and monitoring equipment.</p>
            </div>
            
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-yellow-500/20">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Day 3: Final Inspection</h3>
              <p className="text-gray-300">System testing, utility inspection, activation, and comprehensive walk-through with you.</p>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-yellow-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Installation Process</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Site Preparation</h4>
                  <p className="text-gray-300">Protect property, set up safety equipment, and prepare installation area</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Mounting System</h4>
                  <p className="text-gray-300">Install roof attachments, rails, and mounting hardware following manufacturer specifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Panel Installation</h4>
                  <p className="text-gray-300">Mount solar panels, secure connections, and ensure proper alignment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Electrical Work</h4>
                  <p className="text-gray-300">Install inverters, connect to electrical panel, and set up monitoring system</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">System Activation</h4>
                  <p className="text-gray-300">Final inspection, utility approval, system activation, and training on monitoring platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Go Solar?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow our proven protocol from consultation to activation. Start your solar journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Pricing
            </Link>
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
