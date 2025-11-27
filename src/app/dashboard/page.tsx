'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (in a real app, this would check auth state)
    // For now, we'll just set loading to false after a brief moment
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <button
            onClick={() => {
              // In a real app, this would clear auth state
              router.push('/login');
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dashboard</h1>
          <p className="text-xl text-gray-300">View your projects and service results</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-orange-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">Roofing Projects</h3>
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white mb-2">0</p>
            <p className="text-sm text-gray-400">Active installations</p>
          </div>

          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-yellow-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">Solar Systems</h3>
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white mb-2">0</p>
            <p className="text-sm text-gray-400">Installed systems</p>
          </div>

          <div className="bg-[#2a2a2a] rounded-xl p-6 border border-blue-500/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-300">Pull Requests</h3>
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-white mb-2">0</p>
            <p className="text-sm text-gray-400">Managed PRs</p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Projects</h2>
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-[#333]">
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-400 text-lg mb-4">No projects yet</p>
              <p className="text-gray-500 mb-6">Get started by requesting a service</p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="/roofing"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Request Roofing Service
                </Link>
                <Link
                  href="/solar"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Request Solar Service
                </Link>
                <Link
                  href="/pull-requests"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Request PR Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="bg-[#2a2a2a] rounded-xl p-8 border border-[#333]">
            <div className="text-center py-8">
              <p className="text-gray-400">No recent activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

