import Link from 'next/link';
import TopBar from '../components/TopBar';

export default function Referral() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white font-sans">
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tight">OldWestSolutions</Link>
        </div>
        <Link href="/login" className="bg-ms-gray-70 text-white px-6 py-2 rounded-full font-semibold hover:bg-ms-gray-80 transition-colors">
          Login
        </Link>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#1a1a1a] text-center border-b border-[#333]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Referral Program</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Earn credits by referring friends to OldWestSolutions
          </p>
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block">
            <span className="text-2xl font-bold">$20</span> for you, <span className="text-2xl font-bold">$10</span> for them
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-6xl py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#2a2a2a] rounded-xl shadow p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Share Your Link</h3>
            <p className="text-gray-300">Get your unique referral link from your dashboard and share it with friends</p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl shadow p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">They Sign Up</h3>
            <p className="text-gray-300">Your friend clicks your link and creates an account, getting $20 credit</p>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl shadow p-8 text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">You Earn</h3>
            <p className="text-gray-300">When they spend $10+ on server rental, you get $20 credit</p>
          </div>
        </div>

        {/* Referral Link Section */}
        <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Referral Link</h3>
          <div className="bg-[#1a1a1a] rounded-lg p-4 mb-4">
            <code className="text-green-400 break-all">https://oldwestsolutions.com/ref/YOUR_USERNAME</code>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Copy Link
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Share on Social Media
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-[#2a2a2a] rounded-xl shadow p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Referral Program Terms</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              OldWestSolutions&apos; Data protection agreement and Terms and conditions apply. All prices mentioned in this agreement are net prices (without VAT) unless stated otherwise. The appropriate VAT will be added.
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Conditions for Participation</h3>
            <p className="text-gray-300 mb-4">
              Under specific conditions defined by OldWestSolutions, customers who successfully attract new server rental customers may become eligible for credits that they may use on their OldWestSolutions accounts. For the purposes of this document, this program is called the &quot;Referral Program&quot;, a &quot;Referrer&quot; is a customer who recruits new server rental customers, and a &quot;Referee&quot; is a new server rental customer who the Referrer successfully recruits.
            </p>
            
            <p className="text-gray-300 mb-6">
              Referrers can use the referral link in online messages, emails, or social media platforms to try to recruit potential new customers. When a Referee clicks on the referral link and creates an account, they will receive an OldWestSolutions credit worth $20.00. For each successful Referee, the Referrer will receive an OldWestSolutions credit worth $20.00. The Referrer will receive this credit as soon as the Referee has generated an OldWestSolutions invoice worth $10.00 and has paid that invoice. (This means that the Referee has used their $20.00 credit and then spent an additional $10.00 or more.)
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Requirements</h3>
            <ul className="text-gray-300 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>The credits are only valid for OldWestSolutions server rental products.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referrers must meet one of the two following conditions before they may participate in the Referral Program: 1) They must have paid at least three OldWestSolutions invoices, each with a minimum amount of $5.00. 2) Or they must have paid OldWestSolutions invoices totaling at least $100.00 (incl. VAT).</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Only new contracts that occur as part of the Referral Program will be eligible for credits. Contracts that occur as a result of other reasons will not be eligible for credits.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referrers and Referees must both be 18 years or older.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referrers may not use themselves as Referees. And Referees may not live in the same household as Referrers.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referees may not have been OldWestSolutions customers within the last 12 months.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referees may not be former OldWestSolutions customers whose contracts were cancelled by OldWestSolutions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Accounts for referees may not receive transferred OldWestSolutions resources (servers, etc.) until after Referees have completely used their credits from the Referral Program.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referrers and Referees may not exchange the credits that they receive in the Referral program for cash or other monetary equivalents. Nor may they transfer them to third parties.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referrers who do not receive an OldWestSolutions invoice within a 12 month period will lose any remaining credits on their account that originated from the Referral Program.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Referrers may not send the referral link via mass mails or spam to unknown recipients, nor may they use automated systems or bots to share the link. Referrers may not place paid ads using their personalized referral link.</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4">Important Notes</h3>
            <ul className="text-gray-300 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Referrers who are suspected of abusing the Referral Program will be prohibited from participating in the Program. OldWestSolutions will invalidate the Referrer&apos;s personalized referral link and will not provide credits that may be the result of abuse. (OldWestSolutions also reserves the right to retroactively revoke credits.)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>OldWestSolutions&apos; participation in the Referral Program is completely voluntary. OldWestSolutions customers have no legal claim to any potential redress. OldWestSolutions is not required to provide justification or evidence if it suspects abuse on the part of the Referrer.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>OldWestSolutions reserves the right to change, cancel or terminate the Referral Program at any time and without prior notice or warning.</span>
              </li>
            </ul>

            <p className="text-gray-300 mb-6">
              By participating in the Referral Program, both the Referrer and the Referee agree to all of the above conditions and requirements.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#2a2a2a] rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">How much can I earn?</h3>
              <p className="text-gray-300 mb-4">You earn $20 for each successful referral. There&apos;s no limit to how many people you can refer!</p>
              
              <h3 className="text-lg font-bold text-white mb-2">When do I get paid?</h3>
              <p className="text-gray-300 mb-4">You receive your $20 credit when your referred friend spends $10 or more on server rental.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Can I refer family members?</h3>
              <p className="text-gray-300">No, referrals must not be from the same household to prevent abuse of the program.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">What counts as a successful referral?</h3>
              <p className="text-gray-300 mb-4">A successful referral is when someone clicks your link, creates an account, and spends at least $10 on server rental.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">Can I use my credits for anything?</h3>
              <p className="text-gray-300 mb-4">Credits can only be used for OldWestSolutions server rental products and services.</p>
              
              <h3 className="text-lg font-bold text-white mb-2">How do I track my referrals?</h3>
              <p className="text-gray-300">You can track your referrals and earnings in your account dashboard under the &quot;Referrals&quot; section.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-16 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-sm">
          <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
