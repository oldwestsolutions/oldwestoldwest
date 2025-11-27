import Link from 'next/link';

export default function Terms() {
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
            Terms of <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Service</span>
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using OldWestSolutions services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                OldWestSolutions provides professional services including but not limited to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Roofing installation and repair services</li>
                <li>• Solar energy system installation and maintenance</li>
                <li>• Pull request management and code review services</li>
                <li>• Related consulting and support services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Users agree to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Provide accurate and complete information</li>
                <li>• Maintain the security of their account credentials</li>
                <li>• Use services only for lawful purposes</li>
                <li>• Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                All services are subject to payment as agreed upon in individual service contracts. Payment terms, including deposits, milestones, and final payments, will be specified in your service agreement. All prices are in USD unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Warranties and Disclaimers</h2>
              <p className="text-gray-300 leading-relaxed">
                OldWestSolutions provides services on an &quot;as is&quot; basis. We make reasonable efforts to ensure quality service delivery, but we do not guarantee specific outcomes. Warranties for specific services will be outlined in individual service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the maximum extent permitted by law, OldWestSolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All content, trademarks, and intellectual property on this website and in our services are the property of OldWestSolutions or its licensors. Users may not reproduce, distribute, or create derivative works without express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                OldWestSolutions reserves the right to modify these terms at any time. We will notify users of significant changes. Continued use of services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms of Service, please contact us at <Link href="/contact" className="text-orange-400 hover:text-orange-300">our contact page</Link>.
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

