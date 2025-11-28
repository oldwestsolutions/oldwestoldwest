import Link from 'next/link';
import Header from '../components/Header';

export default function RepositoryInformation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Repository Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Manage your codebase with our comprehensive repository services. From pull and merge requests to issue tracking and version control, we provide the tools and expertise to streamline your development workflow.
          </p>
        </div>
      </section>

      {/* Repository Services Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Georgia, serif'}}>
              Comprehensive Repository Management
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive repository management including pull/merge requests, issues, and version control with our verified developer network
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Visual Card */}
            <div className="relative">
              <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
                <h3 className="text-3xl font-bold text-blue-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                  Repository Services
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  Comprehensive repository management including pull/merge requests, issues, and version control with our verified developer network
                </p>
                
                {/* Repository Image */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-blue-500/30 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                      <img src="/скрипт.jpg" alt="Repository Management" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-blue-400 font-semibold text-lg mb-2">Repository Management</p>
                    <p className="text-gray-400 text-sm text-center">Pull/merge requests, issues, and version control</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Pull/Merge Requests</p>
                      <p className="text-gray-400 text-sm">Professional code review</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Issues Management</p>
                      <p className="text-gray-400 text-sm">Track and resolve issues</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Version Control</p>
                      <p className="text-gray-400 text-sm">Git workflow management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Services */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Services</h3>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/repository/pull-merge-requests" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Pull/Merge Requests</p>
                    <p className="text-gray-400 text-sm">Code review & merging</p>
                  </Link>
                  
                  <Link href="/repository/issues" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Issues</p>
                    <p className="text-gray-400 text-sm">Track & manage issues</p>
                  </Link>
                  
                  <Link href="/repository/version-control" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Version Control</p>
                    <p className="text-gray-400 text-sm">Git workflow management</p>
                  </Link>
                  
                  <Link href="/repository/secure" className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all transform hover:scale-105 cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold mb-2">Secure Repositories</p>
                    <p className="text-gray-400 text-sm">Protected codebases</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

