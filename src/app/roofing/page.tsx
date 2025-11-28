import Link from 'next/link';
import Header from '../components/Header';

export default function Roofing() {
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
            Professional <span className="text-orange-400">Roofing</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Complete protocol and procedures for roofing estimates, shingles selection, and comprehensive walk-arounds. Our systematic approach ensures quality and transparency every step of the way.
          </p>
        </div>
      </section>

      {/* Step 1: Initial Consultation */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Initial Consultation & Request</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Contact & Scheduling</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When you contact us for a roofing estimate, our team will:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collect your contact information and property address</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Schedule a convenient time for the walk-around inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide preliminary information about your roofing needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Confirm appointment details via email and SMS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <div className="relative w-full h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-orange-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-orange-400 font-semibold text-lg">24-48 Hour Response</p>
                <p className="text-gray-400 text-sm mt-2">We respond to all inquiries within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Walk-Around Inspection */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative order-2 md:order-1">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <div className="relative w-full h-80 mb-6">
                {/* House illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-48">
                    {/* House Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-orange-600/80 to-orange-700/80 rounded-t-lg border-2 border-orange-400/50">
                      {/* Windows */}
                      <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50"></div>
                      <div className="absolute right-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50"></div>
                      {/* Door */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-orange-800/80 rounded-t border-2 border-orange-400/50"></div>
                    </div>
                    {/* Roof */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <svg width="200" height="120" viewBox="0 0 200 120">
                        <polygon points="100,20 40,80 160,80" fill="#f97316" stroke="#ea580c" strokeWidth="3" opacity="0.9" />
                      </svg>
                    </div>
                    {/* Inspector icon */}
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500/20 rounded-full border-2 border-orange-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-orange-400 font-semibold text-lg">Comprehensive Inspection</p>
                <p className="text-gray-400 text-sm mt-2">Thorough evaluation of all roof components</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Walk-Around Inspection</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">On-Site Assessment Protocol</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our certified inspector conducts a comprehensive walk-around following this systematic procedure:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <div>
                      <span className="font-semibold">Exterior Examination:</span> Complete visual inspection of roof surface, gutters, flashing, and chimneys
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <div>
                      <span className="font-semibold">Interior Check:</span> Attic inspection for leaks, ventilation, and insulation assessment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <div>
                      <span className="font-semibold">Documentation:</span> Photographic evidence of all findings, measurements, and condition notes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <div>
                      <span className="font-semibold">Structural Analysis:</span> Assessment of roof deck, support structures, and load-bearing capacity
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Inspection Checklist</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Shingle condition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Flashing integrity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gutter systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ventilation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Leak detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Chimney condition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Shingles Selection */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Shingles Selection Process</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Material Consultation</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Based on the inspection findings, we guide you through shingle selection:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Asphalt Shingles:</span> Most common, cost-effective, 20-30 year lifespan, various styles and colors
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Architectural Shingles:</span> Premium option, dimensional appearance, 30-50 year warranty, enhanced durability
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Metal Roofing:</span> Long-lasting, energy-efficient, 40-70 year lifespan, higher initial investment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Slate/Tile:</span> Premium materials, 50-100+ year lifespan, requires specialized installation
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Selection Criteria</h3>
                <div className="space-y-3 text-gray-300">
                  <p>We consider your:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Budget and long-term value</li>
                    <li>• Climate and weather conditions</li>
                    <li>• Home architectural style</li>
                    <li>• Energy efficiency goals</li>
                    <li>• Warranty preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">20-30</div>
                  <div className="text-sm text-gray-300">Years (Asphalt)</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">30-50</div>
                  <div className="text-sm text-gray-300">Years (Architectural)</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">40-70</div>
                  <div className="text-sm text-gray-300">Years (Metal)</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-sm text-gray-300">Years (Premium)</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-orange-400 font-semibold text-lg">Material Lifespan</p>
                <p className="text-gray-400 text-sm mt-2">Warranty-backed protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Detailed Estimate */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative order-2 md:order-1">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-orange-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Material Cost</span>
                    <span className="text-2xl font-bold text-orange-400">$X,XXX</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-2 bg-orange-500 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-orange-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Labor Cost</span>
                    <span className="text-2xl font-bold text-orange-400">$X,XXX</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-2 bg-orange-500 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-orange-500/30">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Additional Services</span>
                    <span className="text-2xl font-bold text-orange-400">$XXX</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-2 bg-orange-500 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                
                <div className="border-t border-orange-500/30 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total Estimate</span>
                    <span className="text-3xl font-bold text-orange-400">$XX,XXX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Detailed Estimate</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Comprehensive Quote Breakdown</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Within 48-72 hours of the walk-around, you'll receive a detailed estimate including:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Itemized Costs:</span> Material costs, labor fees, permits, disposal, and any additional services
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Project Timeline:</span> Start date, completion date, and milestone schedule
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Warranty Information:</span> Material warranties, workmanship guarantees, and coverage details
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Payment Schedule:</span> Deposit requirements, progress payments, and final payment terms
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Estimate Validity</h3>
                <p className="text-gray-300">
                  All estimates are valid for 30 days from the date of issue. We honor quoted prices during this period, ensuring no surprise costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Approval & Installation */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold text-white">5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Approval & Installation</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Contract Signing</h3>
              <p className="text-gray-300">Review and sign the detailed contract. Secure your project date with a deposit.</p>
            </div>
            
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scheduling</h3>
              <p className="text-gray-300">We coordinate with you to schedule the optimal installation date that works for your schedule.</p>
            </div>
            
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Professional Installation</h3>
              <p className="text-gray-300">Our certified team performs the installation following industry best practices and safety standards.</p>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Installation Process</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Preparation</h4>
                  <p className="text-gray-300">Protect landscaping, set up safety equipment, and prepare the work area</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Removal</h4>
                  <p className="text-gray-300">Safely remove old roofing materials and inspect underlying structure</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Repair & Preparation</h4>
                  <p className="text-gray-300">Address any structural issues, install underlayment, and prepare for new materials</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Installation</h4>
                  <p className="text-gray-300">Install new shingles, flashing, and all components according to manufacturer specifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Final Inspection</h4>
                  <p className="text-gray-300">Complete walk-through with you, clean up, and provide warranty documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Roofing Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow our proven protocol from consultation to completion. Get your free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Estimate
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
            <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
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
