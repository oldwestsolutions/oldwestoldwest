import Link from 'next/link';
import Header from '../components/Header';

export default function Documents() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Tax Filing <span className="text-blue-400">Documents</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Complete documentation and guides to help you file your taxes accurately and efficiently.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Tax Filing Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Individual Tax Filing Guide</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step guide for filing individual income taxes, including forms, deductions, and credits.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>• Form 1040 Instructions</li>
                <li>• Standard vs. Itemized Deductions</li>
                <li>• Tax Credits Overview</li>
                <li>• Filing Deadlines and Extensions</li>
              </ul>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Download Guide →
              </button>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Business Tax Filing Guide</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive guide for business tax filing, including LLC, S-Corp, and C-Corp requirements.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>• Schedule C (Sole Proprietorship)</li>
                <li>• Form 1120 (C-Corporation)</li>
                <li>• Form 1120S (S-Corporation)</li>
                <li>• Partnership Tax Returns</li>
              </ul>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Download Guide →
              </button>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Required Tax Forms</h3>
              <p className="text-gray-400 mb-4">
                Downloadable copies of essential tax forms and schedules you'll need for filing.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>• Form 1040 (Individual Tax Return)</li>
                <li>• Schedule A (Itemized Deductions)</li>
                <li>• Schedule B (Interest and Dividends)</li>
                <li>• Schedule D (Capital Gains and Losses)</li>
                <li>• Form W-2 and 1099 Instructions</li>
              </ul>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                View Forms →
              </button>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tax Deductions Checklist</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive checklist of common tax deductions to maximize your refund.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm mb-4">
                <li>• Home Office Deduction</li>
                <li>• Medical and Dental Expenses</li>
                <li>• Charitable Contributions</li>
                <li>• Education Expenses</li>
                <li>• Business Expenses</li>
              </ul>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Download Checklist →
              </button>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Tax Filing Tips & Best Practices</h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Before You File</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Gather all necessary documents: W-2s, 1099s, receipts, and records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Review your previous year's tax return for reference</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Determine your filing status (Single, Married, Head of Household, etc.)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">During Filing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Double-check all numbers and calculations for accuracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Consider using tax software or consulting a tax professional for complex situations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keep copies of all filed documents for your records</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">After Filing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Track your refund status using the IRS "Where's My Refund?" tool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Store all tax documents securely for at least 7 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Plan ahead for next year's taxes by adjusting withholdings if needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-2xl p-12 border border-blue-500/20 mt-8">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">Important Tax Deadlines</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">2024 Tax Year Deadlines</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">January 31, 2025:</span>
                    <span>W-2 and 1099 forms must be mailed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">April 15, 2025:</span>
                    <span>Individual tax returns due (or file extension by this date)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">October 15, 2025:</span>
                    <span>Extended individual tax returns due</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">Quarterly Estimated Tax Payments</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">Q1:</span>
                    <span>Due April 15</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">Q2:</span>
                    <span>Due June 15</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">Q3:</span>
                    <span>Due September 15</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-white">Q4:</span>
                    <span>Due January 15 (following year)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help with Tax Filing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our support team for assistance with tax-related questions.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Contact Support
            </Link>
            <Link href="/help-desk" className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Visit Help Desk
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
                <li><Link href="/domains" className="hover:text-white transition-colors">Domains</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/newspaper" className="hover:text-white transition-colors">Newspaper</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents</Link></li>
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
            <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

