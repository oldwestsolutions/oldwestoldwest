'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`w-full flex justify-between items-center py-8 px-8 bg-[#1a1a1a]/80 backdrop-blur-md shadow-md fixed top-0 z-50 border-b border-[#333]/50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="text-xl md:text-3xl font-extrabold tracking-tight flex items-center">
          <img src="/bell.png" alt="OldWestSolutions Logo" className="w-8 h-8 md:mr-3" />
          <span className="hidden md:inline">OldWestSolutions</span>
        </Link>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Link href="/contact" className="bg-transparent border-2 border-white/20 text-white hover:border-white/40 px-3 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold transition-colors">
          Contact Us
        </Link>
        <Link href="/login" className="bg-ms-gray-70 text-white px-3 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-semibold hover:bg-ms-gray-80 transition-colors">
          Login
        </Link>
      </div>
    </header>
  );
}

