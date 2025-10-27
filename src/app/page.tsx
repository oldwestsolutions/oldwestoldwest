import Link from 'next/link';
import TopBar from './components/TopBar';

export default function Home() {
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Rent Powerful Servers in the Digital Wild West</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Get instant access to high-performance dedicated servers, VPS hosting, and cloud infrastructure. Perfect for gaming, development, mining, and enterprise applications. No long-term contracts, just pure computing power when you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/rent"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-colors"
              >
                Rent Server Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Our Servers?</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Instant deployment - servers ready in under 60 seconds</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Pay-as-you-go pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Global data centers for low latency worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">24/7 support and 99.9% uptime guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl py-16 px-4 grid md:grid-cols-3 gap-8 bg-[#2a2a2a] border-b border-[#333]">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4 text-white">Dedicated Servers</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Full server control and customization</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>High-performance CPUs and GPUs</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Perfect for gaming and mining</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4 text-white">VPS Hosting</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Scalable virtual private servers</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Multiple OS options available</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Ideal for web development</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4 text-white">Cloud Infrastructure</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Auto-scaling cloud resources</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Load balancing and CDN</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Enterprise-grade security</span>
            </li>
          </ul>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-6xl py-16 px-4 bg-[#1a1a1a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Why Choose OldWestSolutions?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#2a2a2a] rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              OldWestSolutions is the premier server rental platform in the digital frontier. We provide instant access to high-performance dedicated servers, VPS hosting, cloud infrastructure, and comprehensive storage solutions for businesses worldwide.
            </p>
            <p className="text-gray-300">
              Our platform enables you to deploy powerful servers in under 60 seconds, with no long-term contracts or hidden fees. Whether you&apos;re running applications, managing data storage, or securing your network, we provide the computing power and services you need when you need it.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Object Storage</h4>
              <p className="text-gray-300">Get S3-compatible unlimited storage on demand. Scalable, secure, and cost-effective object storage for your applications and data.</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Virtual Private Servers</h4>
              <p className="text-gray-300">A virtual private server, also referred to as a VPS, is a virtual dedicated server. Unlike web hosting (also known as shared hosting), where the technical aspects are managed by the provider — you are the administrator of your VPS, and fully manage it.</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">VPN Services by Deadwood</h4>
              <p className="text-gray-300">Secure your network with Deadwood&apos;s premium VPN services. High-speed, encrypted connections with global server locations for maximum privacy and security.</p>
            </div>
          </div>
        </div>

        {/* Why OldWestSolutions Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">Why OldWestSolutions?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">CI/CD - Continuous Integration and Deployment</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Automated Builds</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Continuous Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  <span>Automated Deployment</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Pipeline Orchestration</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Identity & Access Management (IAM)</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  <span>Single Sign-On (SSO) and OAuth integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Role-based access control (RBAC) for users and apps</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secret Management: Safely store API keys, passwords, certificates</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Virtual Machines (VM) / Virtual Private Server (VPS)</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  <span>Application Hosting</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>Database Servers</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Trading Engines</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Development Environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="w-full max-w-6xl py-16 px-4 bg-[#2a2a2a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Global Data Center Locations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Los Angeles</h3>
            <p className="text-gray-400 mb-2">Los Angeles, CA</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                eGPU and 4K addons
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">New York</h3>
            <p className="text-gray-400 mb-2">New York, NY</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                4K addon
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Houston</h3>
            <p className="text-gray-400 mb-2">Dallas, TX</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl shadow p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Sydney</h3>
            <p className="text-gray-400 mb-2">Sydney, Australia</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Managed Server Plan
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-ms-gray-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated Server Plan
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-16 px-4 bg-[#1a1a1a]">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Partners</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* IBM */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/ibm.png" alt="IBM" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Oracle */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/oracle.png" alt="Oracle" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Salesforce */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/salesforce.png" alt="Salesforce" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Google */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/google.png" alt="Google" className="max-w-full max-h-full object-contain" />
            </div>
            
            {/* Coinbase */}
            <div className="p-4 w-32 h-32 flex items-center justify-center">
              <img src="/coinbase.png" alt="Coinbase" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-8 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">OldWestSolutions</h3>
              <p className="text-sm">Advanced data collection and automation solutions for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/launch" className="hover:text-white transition-colors">Launch</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/tutorials" className="hover:text-white transition-colors">Tutorials</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="/status" className="hover:text-white transition-colors">System Status</Link></li>
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
