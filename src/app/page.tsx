import Image from "next/image";

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
              href="#contact"
              className="inline-block bg-ms-gray-70 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-ms-gray-80 transition-colors"
            >
              Get Started
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">High Performance</h2>
          <p className="text-gray-300">Enterprise-grade VMware hosting with ultra-fast SSD storage and dedicated resources.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-ms-gray-60 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">Cloud Ready</h2>
          <p className="text-gray-300">Seamless cloud migration and hybrid solutions for modern businesses.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-ms-gray-60 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">Secure & Reliable</h2>
          <p className="text-gray-300">24/7 monitoring, advanced security, and 99.99% uptime guarantee.</p>
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
              Our platform enables businesses to develop, test, and deploy applications with confidence, backed by our expert team and cutting-edge infrastructure. Whether you're building AI applications, developing cross-platform solutions, or automating testing processes, our VMware environment provides the perfect foundation for your success.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Global Infrastructure</h4>
              <p className="text-gray-300">Access our VMware platform from anywhere with an internet connection, backed by a global network of data centers.</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Expert Support</h4>
              <p className="text-gray-300">Our team of VMware specialists provides 24/7 support and guidance to ensure your success.</p>
            </div>
            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-3 text-white">Innovation Ready</h4>
              <p className="text-gray-300">Built for modern development needs, from AI and machine learning to cross-platform application development.</p>
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
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 4.5l-2.5 2.5 2.5 2.5-1.5 1.5L13.5 8l2.5-2.5-1.5-1.5zM6.5 4.5l2.5 2.5-2.5 2.5 1.5 1.5L10.5 8 8 5.5 6.5 4.5zM12 6l-2 2 2 2 2-2-2-2zm-6 8l2-2 2 2-2 2-2-2zm8 0l-2-2 2-2 2 2-2 2zm-4 4l2-2 2 2-2 2-2-2z"/>
                  </svg>
                  <span>Visual Studio & VS Code</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>JetBrains IDEs</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>Docker & Kubernetes</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>Git & GitHub</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">AI & Machine Learning</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>TensorFlow & PyTorch</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                  </svg>
                  <span>Jupyter Notebooks</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>NVIDIA CUDA</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>OpenAI & Hugging Face</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2a2a2a] rounded-xl shadow p-6">
              <h4 className="text-xl font-bold mb-4 text-white">Enterprise Solutions</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>VMware vSphere</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>VMware NSX</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
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
              <p className="text-sm">Enterprise-grade VMware infrastructure for modern businesses.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@oldwestsolutions.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Tech Street</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved. | VMware Hosting & Cloud Solutions</p>
            <p className="mt-2">Terms of Service | Privacy Policy | Cookie Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
