import Link from 'next/link';
import Header from '../components/Header';

export default function PullRequests() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Pull Request <span className="text-blue-400">Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Complete protocol and procedures for professional pull request management on GitHub and GitLab. Our systematic approach ensures code quality, smooth merges, and optimized development workflows.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a 
              href="https://github.com/oldwestsolutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#2a2a2a] hover:bg-[#333] px-6 py-3 rounded-lg border border-gray-700 transition-all"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">View on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Step 1: PR Creation Protocol */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Pull Request Creation</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Branch Strategy</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our pull request protocol begins with proper branch management:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Feature Branches:</span> Create descriptive branch names (e.g., `feature/user-authentication`, `fix/payment-bug`)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Base Branch:</span> Always branch from `main` or `develop` and keep it up-to-date
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Commit Standards:</span> Write clear, descriptive commit messages following conventional commit format
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">PR Template:</span> Use our standardized PR template with description, changes, testing notes, and checklist
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <div className="relative w-full h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-32 h-32 text-blue-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-blue-400 font-semibold text-lg">Standardized Process</p>
                <p className="text-gray-400 text-sm mt-2">Consistent PR creation workflow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Code Review Process */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="relative order-2 md:order-1">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <div className="relative w-full h-80 mb-6">
                {/* Git branch diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Main Branch */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-400"></div>
                    </div>
                    
                    {/* Feature Branch */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-1 bg-blue-400/60 rounded transform rotate-45 origin-left"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border border-blue-300"></div>
                    </div>
                    
                    {/* Merge Point */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-2 border-blue-400 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Review Checkmark */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full border-2 border-blue-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-blue-400 font-semibold text-lg">Review Process</p>
                <p className="text-gray-400 text-sm mt-2">Thorough code quality assurance</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Code Review Protocol</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Automated Checks</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Every pull request automatically triggers:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Linting:</span> ESLint, Prettier, and style checks to ensure code consistency
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Unit Tests:</span> Automated test suite execution to verify functionality
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Security Scans:</span> Dependency vulnerability checks and security analysis
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Build Verification:</span> CI/CD pipeline runs to ensure code compiles and deploys correctly
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Manual Review Checklist</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Code quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Best practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Test coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: GitHub & GitLab Platforms */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Platform Support</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide professional pull request management on both GitHub and GitLab platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* GitHub Section */}
            <div className="bg-[#2a2a2a] rounded-3xl p-8 border border-blue-500/20">
              <div className="flex items-center gap-4 mb-8">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitHub</h3>
                  <p className="text-gray-400">Professional PR management</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-2">Our GitHub Account</h4>
                  <a 
                    href="https://github.com/oldwestsolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span>github.com/oldwestsolutions</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <h4 className="text-white font-semibold">GitHub PR Features:</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Pull request templates and automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>GitHub Actions for CI/CD integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Code review assignments and notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Branch protection rules and merge policies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Issue linking and project management integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GitLab Section */}
            <div className="bg-[#2a2a2a] rounded-3xl p-8 border border-blue-500/20">
              <div className="flex items-center gap-4 mb-8">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <div>
                  <h3 className="text-2xl font-bold text-white">GitLab</h3>
                  <p className="text-gray-400">Enterprise MR management</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-[#1a1a1a] rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-white font-semibold mb-2">GitLab Merge Requests</h4>
                  <p className="text-gray-400 text-sm">We also provide services for GitLab repositories</p>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <h4 className="text-white font-semibold">GitLab MR Features:</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Merge request templates and workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>GitLab CI/CD pipeline integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Approval workflows and merge rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Code quality reports and security scanning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Epic and issue tracking integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Merge Management */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Merge Management</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Conflict Resolution</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When merge conflicts arise, our team follows a systematic approach:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <div>
                      <span className="font-semibold">Conflict Identification:</span> Analyze conflict markers and understand conflicting changes
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Resolution Strategy:</span> Determine the best approach (accept theirs, accept ours, or manual merge)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Testing:</span> Verify resolved code compiles and all tests pass after conflict resolution
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold">Documentation:</span> Document resolution approach and update PR description
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Merge Strategies</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">Merge Commit:</span>
                    <span>Preserves branch history, creates merge commit</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">Squash & Merge:</span>
                    <span>Combines all commits into one, cleaner history</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">Rebase & Merge:</span>
                    <span>Linear history, rewrites commit history</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Merge Success Rate</span>
                    <span className="text-3xl font-bold text-blue-400">98%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-2 bg-blue-500 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Average Review Time</span>
                    <span className="text-3xl font-bold text-blue-400">24h</span>
                  </div>
                  <p className="text-sm text-gray-400">Typical turnaround for code reviews</p>
                </div>
                
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Conflict Resolution</span>
                    <span className="text-3xl font-bold text-blue-400">100%</span>
                  </div>
                  <p className="text-sm text-gray-400">All conflicts successfully resolved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Workflow Optimization */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold text-white">5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Workflow Optimization</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">CI/CD Integration</h3>
              <p className="text-gray-300">Automated testing, building, and deployment pipelines triggered on every PR</p>
            </div>
            
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Workflows</h3>
              <p className="text-gray-300">Tailored Git workflows designed for your team's specific needs and processes</p>
            </div>
            
            <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Team Training</h3>
              <p className="text-gray-300">Comprehensive training on best practices, tools, and workflow optimization</p>
            </div>
          </div>
          
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Our Complete PR Workflow</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Create Feature Branch</h4>
                  <p className="text-gray-300">Branch from main, implement feature with clear commits</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Open Pull Request</h4>
                  <p className="text-gray-300">Create PR with detailed description, link issues, and assign reviewers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Automated Checks</h4>
                  <p className="text-gray-300">CI/CD runs tests, linting, security scans, and build verification</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Code Review</h4>
                  <p className="text-gray-300">Team reviews code, provides feedback, requests changes if needed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Approval & Merge</h4>
                  <p className="text-gray-300">Once approved, merge using appropriate strategy and deploy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Optimize Your PR Workflow?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Follow our proven protocol for professional pull request management. Check out our work on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/oldwestsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.425 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Our GitHub
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started
            </Link>
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
