import Link from 'next/link';
import TopBar from '../components/TopBar';

export default function Documentation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      {/* Top Bar */}
      <TopBar />
      
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tight flex items-center">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Documentation</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Everything you need to know about deploying and managing your infrastructure
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="w-full max-w-6xl py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Getting Started */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Getting Started</h3>
            <p className="text-gray-300 mb-4">Learn the basics of deploying your first server and getting up and running quickly.</p>
            <Link href="/docs/getting-started" className="text-green-400 hover:text-green-300 font-semibold">
              Read Guide →
            </Link>
          </div>

          {/* API Reference */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">API Reference</h3>
            <p className="text-gray-300 mb-4">Complete API documentation for programmatically managing your infrastructure.</p>
            <Link href="/docs/api" className="text-blue-400 hover:text-blue-300 font-semibold">
              View API →
            </Link>
          </div>

          {/* Server Management */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Server Management</h3>
            <p className="text-gray-300 mb-4">Comprehensive guides for managing, monitoring, and scaling your servers.</p>
            <Link href="/docs/server-management" className="text-purple-400 hover:text-purple-300 font-semibold">
              Learn More →
            </Link>
          </div>

          {/* Security */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-colors">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Security</h3>
            <p className="text-gray-300 mb-4">Best practices for securing your infrastructure and protecting your data.</p>
            <Link href="/docs/security" className="text-red-400 hover:text-red-300 font-semibold">
              Security Guide →
            </Link>
          </div>

          {/* Troubleshooting */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Troubleshooting</h3>
            <p className="text-gray-300 mb-4">Common issues and solutions to help you resolve problems quickly.</p>
            <Link href="/docs/troubleshooting" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Troubleshoot →
            </Link>
          </div>

          {/* Support */}
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Support</h3>
            <p className="text-gray-300 mb-4">Get help from our support team and community when you need it most.</p>
            <Link href="/docs/support" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Get Support →
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-[#2a2a2a] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Popular Topics</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/deploy-server" className="text-gray-300 hover:text-white transition-colors">How to Deploy a Server</Link></li>
                <li><Link href="/docs/configure-firewall" className="text-gray-300 hover:text-white transition-colors">Configure Firewall</Link></li>
                <li><Link href="/docs/backup-data" className="text-gray-300 hover:text-white transition-colors">Backup Your Data</Link></li>
                <li><Link href="/docs/monitor-performance" className="text-gray-300 hover:text-white transition-colors">Monitor Performance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/glossary" className="text-gray-300 hover:text-white transition-colors">Glossary</Link></li>
                <li><Link href="/docs/changelog" className="text-gray-300 hover:text-white transition-colors">Changelog</Link></li>
                <li><Link href="/docs/examples" className="text-gray-300 hover:text-white transition-colors">Code Examples</Link></li>
                <li><Link href="/docs/faq" className="text-gray-300 hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-16 border-t border-[#333]">
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
