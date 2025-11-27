import Link from 'next/link';
import Header from '../components/Header';

export default function Install() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Installation <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Complete installation procedures for roofing, solar, and pull request management. Our detailed protocols ensure professional setup and configuration.
          </p>
        </div>
      </section>

      {/* Roofing Installation Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Roofing Installation</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Pre-Installation Protocol</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">Site Preparation:</span> Protect landscaping, set up safety barriers, and prepare work area with tarps and equipment staging zones
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">Material Delivery:</span> Verify all materials match order specifications, check for damage, and organize by installation sequence
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">Safety Setup:</span> Install scaffolding, safety rails, and fall protection systems according to OSHA standards
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Installation Process</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">Tear-Off:</span> Remove existing roofing materials systematically, inspect decking for damage, and document any structural issues
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">Deck Repair:</span> Replace damaged decking, reinforce weak areas, and ensure proper ventilation installation
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">Underlayment:</span> Install ice and water shield in valleys and eaves, apply felt paper or synthetic underlayment across entire roof
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">4.</span>
                    <div>
                      <span className="font-semibold">Flashing Installation:</span> Install step flashing around chimneys, vent pipes, and walls; install drip edge along eaves and rakes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">5.</span>
                    <div>
                      <span className="font-semibold">Shingle Installation:</span> Start from bottom edge, install starter strip, then shingles in overlapping rows following manufacturer specifications
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">6.</span>
                    <div>
                      <span className="font-semibold">Ridge Cap:</span> Install ridge cap shingles, seal all penetrations, and ensure proper ventilation at ridge
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Post-Installation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Complete cleanup of all debris, nails, and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Final inspection and walk-through with homeowner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Provide warranty documentation and maintenance guidelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <div className="relative w-full h-80 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center">
                  <div className="relative w-64 h-48">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-orange-600/80 to-orange-700/80 rounded-t-lg border-2 border-orange-400/50">
                      <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50"></div>
                      <div className="absolute right-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <svg width="200" height="120" viewBox="0 0 200 120">
                        <polygon points="100,20 40,80 160,80" fill="#f97316" stroke="#ea580c" strokeWidth="3" opacity="0.9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-orange-400 font-semibold text-lg">Professional Installation</p>
                <p className="text-gray-400 text-sm mt-2">Expert contractors, quality materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Installation Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative order-2 md:order-1">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <div className="relative w-full h-80 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-2xl flex items-center justify-center">
                  <div className="relative w-64 h-48">
                    <div className="absolute top-0 right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-2xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-20 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded border-2 border-yellow-500/30 shadow-lg">
                          <div className="grid grid-cols-4 gap-1 p-2">
                            {[...Array(8)].map((_, j) => (
                              <div key={j} className="h-2 bg-yellow-400/20 rounded"></div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-yellow-400 font-semibold text-lg">Solar System Setup</p>
                <p className="text-gray-400 text-sm mt-2">Certified installers, optimal placement</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Solar Installation</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Pre-Installation Setup</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">Permit Verification:</span> Confirm all permits are approved, utility interconnection agreement is signed, and HOA approval (if required) is obtained
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">Equipment Inspection:</span> Verify all panels, inverters, mounting hardware, and electrical components match design specifications
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">Site Marking:</span> Mark panel locations, conduit paths, and inverter placement according to approved design
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Installation Steps</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">Mounting System:</span> Install roof attachments, rails, and mounting hardware following manufacturer torque specifications
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">Panel Installation:</span> Mount solar panels, secure with clamps, ensure proper spacing and alignment for optimal sun exposure
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">Wiring:</span> Run DC wiring from panels to inverter location, install conduit, and make all electrical connections per code
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">4.</span>
                    <div>
                      <span className="font-semibold">Inverter Installation:</span> Mount inverter, connect DC and AC wiring, install disconnect switches, and ground all equipment
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">5.</span>
                    <div>
                      <span className="font-semibold">Electrical Connection:</span> Connect to main electrical panel, install net meter, and ensure proper circuit breaker sizing
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">6.</span>
                    <div>
                      <span className="font-semibold">Monitoring Setup:</span> Install monitoring equipment, configure app access, and test system communication
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">System Activation</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Final inspection by certified electrician and building inspector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Utility approval and net metering activation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>System testing, performance verification, and customer training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Request Setup Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Pull Request Setup</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Repository Configuration</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">Branch Protection:</span> Configure branch protection rules, require pull request reviews, and set merge requirements
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">PR Templates:</span> Create standardized pull request templates with description fields, checklist, and review criteria
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">Access Control:</span> Set up team permissions, assign code owners, and configure review assignment rules
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">CI/CD Integration</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <div>
                      <span className="font-semibold">Pipeline Setup:</span> Configure GitHub Actions or GitLab CI/CD pipelines to run on every pull request
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <div>
                      <span className="font-semibold">Automated Testing:</span> Set up automated test suites, linting, code quality checks, and security scanning
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <div>
                      <span className="font-semibold">Status Checks:</span> Configure required status checks that must pass before merge approval
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <div>
                      <span className="font-semibold">Deployment:</span> Set up staging and production deployment workflows triggered by PR merges
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Workflow Training</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Team training on PR creation, review process, and merge strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Documentation of workflow procedures and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>Ongoing support and workflow optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <div className="relative w-full h-80 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-400"></div>
                    </div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-1 bg-blue-400/60 rounded transform rotate-45 origin-left"></div>
                    </div>
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-2 border-blue-400 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-blue-400 font-semibold text-lg">Workflow Configuration</p>
                <p className="text-gray-400 text-sm mt-2">Streamlined development process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your installation today and experience professional service with our detailed protocols.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Schedule Installation
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
