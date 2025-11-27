import Link from 'next/link';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#1a1a1a]/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-[#333]/50">
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
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Cookie <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                OldWestSolutions uses cookies for the following purposes:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• <strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li>• <strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
              
              <div className="mt-4 space-y-4">
                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies are essential for the website to function and cannot be switched off. They are usually set in response to actions made by you.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-2">Performance Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-2">Functionality Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies enable the website to provide enhanced functionality and personalization.
                  </p>
                </div>

                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-2">Targeting Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    These cookies may be set through our site by our advertising partners to build a profile of your interests.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Most browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. You can also delete cookies that have already been set.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. We will notify you of any material changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at <Link href="/contact" className="text-orange-400 hover:text-orange-300">our contact page</Link>.
              </p>
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

