'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Allow any login - just redirect to dashboard
    // In a real app, you would validate credentials here
    setTimeout(() => {
      router.push('/dashboard');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-8 px-8 bg-[#2a2a2a] shadow-md">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-extrabold tracking-tight flex items-center">
            <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8 mr-3" />
            OldWestSolutions
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto py-12 px-4">
        <div className="bg-[#2a2a2a] rounded-xl p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2a2a2a] text-gray-400 mt-8 border-t border-[#333]">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center text-sm">
          <p>&copy; 2026 OldWestSolutions. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link> | 
            <Link href="/privacy" className="hover:text-white transition-colors ml-2">Privacy Policy</Link> | 
            <Link href="/cookies" className="hover:text-white transition-colors ml-2">Cookie Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
