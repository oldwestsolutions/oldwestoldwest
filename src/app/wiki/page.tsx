import Link from 'next/link';
import TopBar from '../components/TopBar';

export default function Wiki() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">OldWestSolutions Wiki</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Your comprehensive knowledge base for infrastructure, deployment, and troubleshooting
          </p>
          <div className="bg-[#2a2a2a] rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search the wiki..." 
                className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none w-full"
              />
            </div>
            <p className="text-sm text-gray-400">Search for articles, guides, and troubleshooting tips</p>
          </div>
        </div>
      </section>

      {/* Wikipedia-style Search Results */}
      <section className="w-full max-w-4xl py-16 px-4">
        <div className="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
          
          {/* Wikipedia-style Article */}
          <div className="bg-white text-black rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">Lightning Deploy</h1>
            <div className="text-sm text-gray-600 mb-4">
              From OldWestSolutions Wiki
            </div>
            
            <div className="mb-6">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Lightning Deploy</strong> is a revolutionary server deployment technology developed by OldWestSolutions that enables 
                server provisioning and configuration in under 60 seconds. This breakthrough technology represents a significant 
                advancement in cloud infrastructure automation, reducing deployment times from industry-standard 5-10 minutes to 
                an unprecedented 60 seconds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2">
                <h2 className="text-xl font-bold mb-3">Technology Overview</h2>
                <p className="mb-4">
                  Lightning Deploy utilizes advanced containerization techniques, pre-configured templates, and intelligent 
                  resource allocation to achieve these remarkable speeds. The system employs a combination of:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Pre-built server templates</li>
                  <li>Container-based deployment</li>
                  <li>Automated configuration management</li>
                  <li>Intelligent resource provisioning</li>
                  <li>Real-time monitoring integration</li>
                </ul>
                
                <h2 className="text-xl font-bold mb-3">Key Features</h2>
                <p className="mb-4">
                  The Lightning Deploy system offers several key advantages over traditional deployment methods:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Speed:</strong> Deploy servers in under 60 seconds</li>
                  <li><strong>Reliability:</strong> 99.9% success rate</li>
                  <li><strong>Scalability:</strong> Supports deployments from single servers to large clusters</li>
                  <li><strong>Flexibility:</strong> Works with multiple operating systems and configurations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-3">Lightning Deploy</h3>
                <div className="mb-3">
                  <strong>Developer:</strong> OldWestSolutions<br/>
                  <strong>Initial Release:</strong> 2024<br/>
                  <strong>Platform:</strong> Cloud Infrastructure<br/>
                  <strong>License:</strong> Proprietary
                </div>
                <div className="text-sm">
                  <strong>Deployment Time:</strong><br/>
                  <span className="text-green-600 font-bold">Under 60 seconds</span>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-3">Implementation</h2>
            <p className="mb-4">
              Lightning Deploy is implemented through OldWestSolutions' proprietary deployment engine, which integrates 
              with their cloud infrastructure platform. The system automatically handles:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Server provisioning and configuration</li>
              <li>Network setup and security configuration</li>
              <li>Operating system installation and updates</li>
              <li>Application deployment and configuration</li>
              <li>Monitoring and logging setup</li>
            </ul>

            <h2 className="text-xl font-bold mb-3">Impact</h2>
            <p className="mb-4">
              Since its introduction, Lightning Deploy has revolutionized how developers and system administrators 
              approach server deployment. The technology has enabled:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Faster development cycles</li>
              <li>Improved testing environments</li>
              <li>Enhanced disaster recovery capabilities</li>
              <li>Reduced operational overhead</li>
            </ul>

            <div className="border-t pt-4 mt-6">
              <h3 className="font-bold mb-2">See Also</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Server Management</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Cloud Infrastructure</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">DevOps</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-16 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
