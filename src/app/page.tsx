export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] text-white font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <span className="text-3xl font-extrabold tracking-tight">OldWestSolutions</span>
        </div>
        <button className="bg-ms-gray-70 text-white px-6 py-2 rounded-full font-semibold hover:bg-ms-gray-80 transition-colors">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 bg-[#1a1a1a] text-center border-b border-[#333]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">VMware Solutions for the Modern West</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Empowering your business with robust, scalable, and secure VMware infrastructure. OldWestSolutions delivers expert virtualization, cloud migration, and IT management tailored for your needs.
            </p>
            <a
              href="/launch"
              className="inline-block bg-ms-gray-70 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-ms-gray-80 transition-colors"
            >
              Launch Now
            </a>
          </div>
          <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Us?</h2>
            <ul className="space-y-4 text-left">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Enterprise-grade VMware infrastructure with 99.99% uptime guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">24/7 expert support and monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Seamless cloud migration and hybrid solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Advanced security and compliance features</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl py-16 px-4 grid md:grid-cols-3 gap-8 bg-[#2a2a2a] border-b border-[#333]">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-ms-gray-60 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4 text-white">Virtual Machines</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>High-performance SSD storage</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Dedicated CPU and RAM resources</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>99.99% uptime guarantee</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-ms-gray-60 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4 text-white">Database as a Service</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>PostgreSQL & MySQL support</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>MongoDB & Redis integration</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Automated daily backups</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-ms-gray-60 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-4 text-white">Framer Templates</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Modern, responsive designs</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customizable components</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-ms-gray-60 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Built-in animations</span>
            </li>
          </ul>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-6xl py-16 px-4 bg-[#1a1a1a] border-b border-[#333]">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">What is OldWestSolutions?</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#2a2a2a] rounded-xl shadow p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              OldWestSolutions is a premier VMware infrastructure provider, delivering enterprise-grade cloud solutions to businesses worldwide. We specialize in creating robust, scalable, and secure virtual environments that empower organizations to focus on innovation and growth.
            </p>
            <p className="text-gray-300">
              Our platform enables businesses to develop, test, and deploy applications with confidence, backed by our expert team and cutting-edge infrastructure. Whether you&apos;re building AI applications, developing cross-platform solutions, or automating testing processes, our VMware environment provides the perfect foundation for your success.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Web Crawlers</h4>
              <p className="text-gray-300">Powerful distributed crawlers that efficiently index and extract data from websites while respecting robots.txt and rate limits.</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Data Scrapers</h4>
              <p className="text-gray-300">Advanced scraping solutions with built-in proxy rotation, CAPTCHA handling, and automatic retry mechanisms for reliable data extraction.</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">API Wrappers</h4>
              <p className="text-gray-300">Robust API wrappers that simplify integration with popular services, featuring automatic rate limiting, caching, and error handling.</p>
            </div>
          </div>
        </div>

        {/* Why OldWestSolutions Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-10 text-white">Why OldWestSolutions?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Development & Testing</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M6 22L24 8V24L6 10" fill="#0066B8"/>
                    <path d="M6 10L12 16L6 22" fill="#007ACC"/>
                    <path d="M12 16L24 8V24L12 16Z" fill="#1F9CF0"/>
                  </svg>
                  <span>Visual Studio & VS Code</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="4" width="24" height="24" rx="4" fill="url(#jbGradient)"/>
                    <path d="M12 12h8v8h-8z" fill="white" fillOpacity="0.2"/>
                    <defs>
                      <linearGradient id="jbGradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FCF84A"/>
                        <stop offset="0.5" stopColor="#A259FF"/>
                        <stop offset="1" stopColor="#FF6257"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span>JetBrains IDEs</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <rect x="8" y="16" width="2" height="4" fill="#2496ED"/>
                    <rect x="12" y="16" width="2" height="4" fill="#2496ED"/>
                    <rect x="16" y="16" width="2" height="4" fill="#2496ED"/>
                    <rect x="20" y="16" width="2" height="4" fill="#2496ED"/>
                    <path d="M6 20c0 4 6 6 10 6s10-2 10-6h-20z" fill="#2496ED"/>
                    <path d="M22 20c0-2-2-4-4-4s-4 2-4 4" stroke="#2496ED" strokeWidth="2"/>
                  </svg>
                  <span>Docker & Kubernetes</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  <span>Git & GitHub</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">AI & Machine Learning</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C12 2 7 8 7 13a5 5 0 1010 0c0-5-5-11-5-11z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="17" r="2" fill="currentColor"/>
                  </svg>
                  <span>TensorFlow & PyTorch</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25.2c-6.186 0-11.2-5.014-11.2-11.2S9.814 4.8 16 4.8 27.2 9.814 27.2 16 22.186 27.2 16 27.2z" fill="#F37726"/>
                    <path d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12.8c-2.651 0-4.8-2.149-4.8-4.8s2.149-4.8 4.8-4.8 4.8 2.149 4.8 4.8-2.149 4.8-4.8 4.8z" fill="#F37726"/>
                    <path d="M16 12.8c-1.767 0-3.2 1.433-3.2 3.2s1.433 3.2 3.2 3.2 3.2-1.433 3.2-3.2-1.433-3.2-3.2-3.2z" fill="#F37726"/>
                  </svg>
                  <span>Jupyter Notebooks</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16C8 8 24 8 28 16C24 24 8 24 4 16Z" stroke="#76B900" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="16" r="4" fill="#76B900"/>
                  </svg>
                  <span>NVIDIA CUDA</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="#10A37F" strokeWidth="2"/>
                    <path d="M16 8v8l6 3" stroke="#10A37F" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>OpenAI & Hugging Face</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Enterprise Solutions</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <polygon points="16,4 28,12 28,28 16,36 4,28 4,12" stroke="#0071C5" strokeWidth="2" fill="none"/>
                  </svg>
                  <span>VMware vSphere</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <circle cx="8" cy="16" r="3" stroke="#00BFAE" strokeWidth="2"/>
                    <circle cx="24" cy="8" r="3" stroke="#00BFAE" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="3" stroke="#00BFAE" strokeWidth="2"/>
                    <path d="M11 16L21 8M11 16L21 24" stroke="#00BFAE" strokeWidth="2"/>
                  </svg>
                  <span>VMware NSX</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
                    <rect x="6" y="8" width="20" height="4" rx="2" fill="#7C3AED"/>
                    <rect x="6" y="14" width="20" height="4" rx="2" fill="#A78BFA"/>
                    <rect x="6" y="20" width="20" height="4" rx="2" fill="#C4B5FD"/>
                  </svg>
                  <span>VMware vSAN</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>VMware Horizon</span>
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
            <div className="bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="#0078D4">
                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="#000000">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="#1F70C1">
                <path d="M22.5 9.5c0-1.2-.4-2.2-1.2-3-.8-.8-1.8-1.2-3-1.2h-4.5V3h-3v2.3h-4.5c-1.2 0-2.2.4-3 1.2-.8.8-1.2 1.8-1.2 3v5c0 1.2.4 2.2 1.2 3 .8.8 1.8 1.2 3 1.2h4.5V21h3v-2.3h4.5c1.2 0 2.2-.4 3-1.2.8-.8 1.2-1.8 1.2-3v-5zm-2 5c0 .6-.2 1.1-.6 1.5-.4.4-.9.6-1.5.6h-4.5V9.5h4.5c.6 0 1.1.2 1.5.6.4.4.6.9.6 1.5v5z"/>
              </svg>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
              <svg className="w-24 h-24" viewBox="0 0 24 24" fill="#FF4B4B">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
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
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/launch" className="hover:text-white transition-colors">Launch</a></li>
                <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/tutorials" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="/api" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="/status" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
            <p className="mt-2">
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a> | 
              <a href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</a> | 
              <a href="/cookies" className="hover:text-white transition-colors ml-2">Cookie Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
