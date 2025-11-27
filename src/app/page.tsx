'use client';

import Link from 'next/link';
import Header from './components/Header';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle quote form submission here
    console.log('Quote request submitted:', quoteData);
    setIsQuoteModalOpen(false);
    setQuoteData({ name: '', email: '', phone: '', serviceType: '', projectDetails: '' });
    alert('Thank you for your quote request! Our team will review your information and contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuoteData({
      ...quoteData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{fontFamily: 'Georgia, serif'}}>
      <Header />

      {/* Hero Section - Two Column */}
      <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden pt-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                <span className="text-black" style={{
                  WebkitTextStroke: '2px white',
                  textShadow: '0 0 20px rgba(255,255,255,0.3), 2px 2px 0 white, -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white'
                } as React.CSSProperties}>
                  Home & Code
                </span>{' '}
                Professional Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-4">
                Comprehensive solutions for your residential and repository needs. From interior home services and remodeling to repository management and version control—we deliver excellence across every service.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Verified Network</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/residential"
                className="inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Residential
              </Link>
              <Link
                href="/repository"
                className="inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Repository
              </Link>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/global.jpg" 
                alt="Professional Services" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Contracting Services Section - Full Page */}
      <section id="roofing" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-orange-500/20">
              <h2 className="text-3xl font-bold text-orange-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Residential Contracting Services
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Comprehensive residential contracting services including roofing, HVAC, appliances, plumbing, and more with our verified contractor network
              </p>
              
              {/* House Illustration */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-orange-500/30 mb-8">
                <div className="flex flex-col items-center">
                  {/* House Illustration */}
                  <div className="relative w-64 h-64 mb-6">
                    {/* House Base */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-orange-600/80 to-orange-700/80 rounded-t-lg border-2 border-orange-400/50">
                      {/* Windows */}
                      <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-yellow-400/50 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute right-6 top-6 w-8 h-8 bg-yellow-400/30 rounded border border-yellow-400/50">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-yellow-400/50 rounded"></div>
                        </div>
                      </div>
                      {/* Door */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-orange-800/80 rounded-t border-2 border-orange-400/50">
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                    {/* Roof */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-2xl">
                        <polygon points="100,20 40,80 160,80" fill="url(#roofGradient)" stroke="#f97316" strokeWidth="3" />
                        <defs>
                          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    {/* Protection Shield */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/20 rounded-full border-2 border-orange-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-orange-400 font-semibold text-lg mb-2">Maximum Protection</p>
                  <p className="text-gray-400 text-sm text-center">Weather-resistant materials and expert craftsmanship</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Expert Installation</p>
                    <p className="text-gray-400 text-sm">Licensed professionals with verified credentials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Contractors</p>
                    <p className="text-gray-400 text-sm">Background checked and insured professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Quality Reviews</p>
                    <p className="text-gray-400 text-sm">Rate your contractors and share experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Residential Contracting Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your home with our comprehensive residential contracting services. From expert roofing installations and HVAC systems to appliance services and plumbing solutions—we deliver excellence across every aspect of your home.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/residential/roofing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Roofing</p>
                <p className="text-gray-400 text-sm">Expert installation</p>
              </Link>
              
              <Link href="/residential/hvac" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">HVAC</p>
                <p className="text-gray-400 text-sm">Heating & cooling</p>
              </Link>
              
              <Link href="/residential/appliances" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Appliances</p>
                <p className="text-gray-400 text-sm">Installation & repair</p>
              </Link>
              
              <Link href="/residential/plumbing" className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Plumbing</p>
                <p className="text-gray-400 text-sm">Complete solutions</p>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </button>
              <Link
                href="/learn-more"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Section - Full Page */}
      <section id="solar" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Remodeling Contracting Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Transform your space with our expert remodeling contracting services. From kitchen and bathroom renovations to complete home makeovers, we bring your vision to life with quality craftsmanship and attention to detail.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/remodeling/energy" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Energy</p>
                <p className="text-gray-400 text-sm">Efficient solutions</p>
              </Link>
              
              <Link href="/remodeling/monitoring" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Smart Monitoring</p>
                <p className="text-gray-400 text-sm">Real-time tracking</p>
              </Link>
              
              <Link href="/remodeling/finishing" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Finishing</p>
                <p className="text-gray-400 text-sm">Interior & exterior</p>
              </Link>
              
              <Link href="/remodeling/outdoor" className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/50 transition-all transform hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-2">Outdoor</p>
                <p className="text-gray-400 text-sm">Landscaping & more</p>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </button>
              <Link
                href="/learn-more"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-yellow-500/20">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Remodeling Excellence
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Professional remodeling services with expert craftsmanship and premium materials for your home transformation
              </p>
              
              {/* Remodeling Illustration */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-yellow-500/30 mb-8">
                <div className="flex flex-col items-center">
                  {/* Home Remodeling Visual */}
                  <div className="relative w-64 h-48 mb-6">
                    {/* House Structure */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-yellow-600/80 to-yellow-700/80 rounded-t-lg border-2 border-yellow-400/50">
                      {/* Windows */}
                      <div className="absolute left-6 top-6 w-8 h-8 bg-yellow-300/40 rounded border border-yellow-400/50"></div>
                      <div className="absolute right-6 top-6 w-8 h-8 bg-yellow-300/40 rounded border border-yellow-400/50"></div>
                      {/* Door */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-yellow-800/80 rounded-t border-2 border-yellow-400/50"></div>
                    </div>
                    {/* Tools Icon */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-500/20 rounded-full border-2 border-yellow-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-yellow-400 font-semibold text-lg mb-2">Expert Craftsmanship</p>
                  <p className="text-gray-400 text-sm text-center">Professional remodeling and renovation services</p>
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Verified Contractors</p>
                    <p className="text-gray-400 text-sm">Licensed remodeling professionals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Quality Guarantee</p>
                    <p className="text-gray-400 text-sm">Satisfaction assured</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Project Reviews</p>
                    <p className="text-gray-400 text-sm">Share your remodeling experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Requests Section - Full Page */}
      <section id="pull-requests" className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Left Side - Visual Card */}
          <div className="relative">
            <div className="bg-[#2a2a2a] rounded-3xl shadow-2xl p-8 border border-blue-500/20">
              <h2 className="text-3xl font-bold text-blue-400 mb-4" style={{fontFamily: 'Georgia, serif'}}>
                Repository Services
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Comprehensive repository management including pull/merge requests, issues, and version control with our verified developer network
              </p>
              
              {/* Git Branch Illustration */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-blue-500/30 mb-8">
                <div className="flex flex-col items-center">
                  {/* Git Branch Diagram */}
                  <div className="relative w-64 h-64 mb-6">
                    {/* Main Branch */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-32 h-1 bg-blue-500 rounded"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-blue-400"></div>
                    </div>
                    
                    {/* Feature Branch 1 */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-1 bg-blue-400/60 rounded transform rotate-45 origin-left"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border border-blue-300"></div>
                    </div>
                    
                    {/* Feature Branch 2 */}
                    <div className="absolute top-24 left-1/2 transform translate-x-1/2">
                      <div className="w-20 h-1 bg-blue-400/60 rounded transform -rotate-45 origin-right"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full border border-blue-300"></div>
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
                    
                    {/* Code Blocks */}
                    <div className="absolute bottom-4 left-4 w-16 h-12 bg-gray-800 rounded border border-blue-500/30 p-2">
                      <div className="space-y-1">
                        <div className="h-1 bg-blue-400/40 rounded w-3/4"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-full"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 w-16 h-12 bg-gray-800 rounded border border-blue-500/30 p-2">
                      <div className="space-y-1">
                        <div className="h-1 bg-blue-400/40 rounded w-full"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-3/4"></div>
                        <div className="h-1 bg-blue-400/40 rounded w-5/6"></div>
                      </div>
                    </div>
                    
                    {/* Review Checkmark */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/20 rounded-full border-2 border-blue-400/50 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
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
          
          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Repository Services
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Manage your codebase with our comprehensive repository services. From pull and merge requests to issue tracking and version control, we provide the tools and expertise to streamline your development workflow.
              </p>
            </div>
            
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
            
            <div className="flex gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </button>
              <Link
                href="/learn-more"
                className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full mb-6">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Georgia, serif'}}>
                Ready to Transform Your Space?
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Join thousands of satisfied customers who trust OldWestSolutions for their residential and repository needs.
              </p>
              <p className="text-base text-gray-400 mb-8">
                Our team of licensed professionals is ready to bring your vision to life. Get a free, no-obligation quote today and discover why we're the trusted choice for quality service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl"
                >
                  Get Your Free Quote
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              {/* Trust indicators */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">Licensed & Insured</p>
                    <p className="text-gray-400 text-sm">Fully certified and protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">10+ Years Experience</p>
                    <p className="text-gray-400 text-sm">Proven track record of excellence</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">100% Satisfaction Guarantee</p>
                    <p className="text-gray-400 text-sm">We stand behind our work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-[#1a1a1a]/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/10">
                  <svg className="w-8 h-8 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-lg">Free Consultations</p>
                    <p className="text-gray-400 text-sm">No obligation, expert advice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-gray-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-white">Contact Us</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Get Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsQuoteModalOpen(false)}>
          <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-2xl w-full p-8 border border-gray-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-white">Request a Quote</h3>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleQuoteSubmit} className="space-y-6">
              <div>
                <label htmlFor="quote-name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={quoteData.name}
                  onChange={handleQuoteChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={quoteData.email}
                    onChange={handleQuoteChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={quoteData.phone}
                    onChange={handleQuoteChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quote-service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Type *
                </label>
                <select
                  id="quote-service"
                  name="serviceType"
                  value={quoteData.serviceType}
                  onChange={handleQuoteChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select a service</option>
                  <option value="interior-residential">Interior Residential Services</option>
                  <option value="remodeling">Remodeling Contracting</option>
                  <option value="repository">Repository Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-details" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="quote-details"
                  name="projectDetails"
                  value={quoteData.projectDetails}
                  onChange={handleQuoteChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-500 resize-none"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Quote Request
                </button>
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#1a1a1a] text-gray-400 py-12 px-4 border-t border-[#333]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8" />
                <h3 className="text-white text-lg font-bold">OldWestSolutions</h3>
              </div>
              <p className="text-sm">Professional services for your home and code. Roofing, solar, and pull request management.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/residential" className="hover:text-white transition-colors">Residential</Link></li>
                <li><Link href="/remodeling" className="hover:text-white transition-colors">Remodeling</Link></li>
                <li><Link href="/repository" className="hover:text-white transition-colors">Repository</Link></li>
                <li><Link href="/domains" className="hover:text-white transition-colors">Domains</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/newspaper" className="hover:text-white transition-colors">Newspaper</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/legal" className="hover:text-white transition-colors">Legal</Link></li>
                <li><Link href="/help-desk" className="hover:text-white transition-colors">Help Desk</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] mt-8 pt-8 text-center text-sm">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} OldWestSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
