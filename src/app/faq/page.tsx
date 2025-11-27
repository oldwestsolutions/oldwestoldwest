import Link from 'next/link';

export default function FAQ() {
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
            Frequently Asked <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Roofing FAQs */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-orange-500/20">
              <h2 className="text-3xl font-bold text-orange-400 mb-6">Roofing Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">How long does a roof installation take?</h3>
                  <p className="text-gray-300">Most residential roof installations take 1-3 days depending on the size and complexity of your roof. We'll provide a detailed timeline during your free inspection.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Do you offer warranties?</h3>
                  <p className="text-gray-300">Yes, we offer comprehensive warranties on both materials and workmanship. Warranty terms vary by product and will be clearly outlined in your contract.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What materials do you use?</h3>
                  <p className="text-gray-300">We use premium, weather-resistant materials from trusted manufacturers. We'll help you choose the best option for your climate and budget during your consultation.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Do you provide free estimates?</h3>
                  <p className="text-gray-300">Yes, we offer free, no-obligation estimates and inspections. Contact us to schedule your free assessment.</p>
                </div>
              </div>
            </div>

            {/* Solar FAQs */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">Solar Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">How much can I save with solar?</h3>
                  <p className="text-gray-300">Savings vary based on your energy usage, location, and system size. Most homeowners see 50-90% reduction in electricity bills. We'll provide a detailed savings estimate during your consultation.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What is the payback period?</h3>
                  <p className="text-gray-300">Typical payback periods range from 5-10 years, depending on your system size, energy usage, and local incentives. After that, you'll enjoy essentially free electricity.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Do you handle permits and paperwork?</h3>
                  <p className="text-gray-300">Yes, we handle all permits, inspections, and paperwork required for your solar installation. We make the process as seamless as possible.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What maintenance is required?</h3>
                  <p className="text-gray-300">Solar panels require minimal maintenance. We recommend periodic cleaning and annual inspections, which we can provide as part of our maintenance services.</p>
                </div>
              </div>
            </div>

            {/* Pull Requests FAQs */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-blue-400 mb-6">Pull Request Services</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What is included in code review?</h3>
                  <p className="text-gray-300">Our code reviews include security audits, best practice recommendations, performance optimization suggestions, and detailed feedback on code quality and maintainability.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">How quickly can you review pull requests?</h3>
                  <p className="text-gray-300">Review times vary based on PR size and complexity. Standard reviews are typically completed within 24-48 hours. Rush reviews are available for urgent requests.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Do you help with merge conflicts?</h3>
                  <p className="text-gray-300">Yes, we provide expert conflict resolution services. We'll help identify conflicts, suggest resolution strategies, and assist with the merge process.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Can you set up CI/CD pipelines?</h3>
                  <p className="text-gray-300">Absolutely! We can configure and optimize CI/CD pipelines for your project, including automated testing, building, and deployment workflows.</p>
                </div>
              </div>
            </div>

            {/* General FAQs */}
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">General Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">How do I get started?</h3>
                  <p className="text-gray-300">Simply contact us through our contact page or call us directly. We'll schedule a consultation to discuss your needs and provide a detailed quote.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What areas do you serve?</h3>
                  <p className="text-gray-300">We serve customers nationwide for all our services. Some services may have specific coverage areas - contact us to confirm availability in your location.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-300">We accept all major credit cards, bank transfers, and offer financing options for larger projects. Payment terms will be discussed during your consultation.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Do you offer emergency services?</h3>
                  <p className="text-gray-300">Yes, we offer 24/7 emergency services for roofing repairs. Contact us anytime for urgent issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 px-4 bg-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help. Get in touch with us today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
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
                <li><Link href="/roofing" className="hover:text-white transition-colors">Roofing</Link></li>
                <li><Link href="/solar" className="hover:text-white transition-colors">Solar</Link></li>
                <li><Link href="/pull-requests" className="hover:text-white transition-colors">Pull Requests</Link></li>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

