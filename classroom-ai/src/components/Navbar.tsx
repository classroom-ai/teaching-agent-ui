'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 font-extrabold text-2xl">
          <h3>Pandaversity</h3>
          </div>

          {/* User Profile and Dropdown */}
          <div className="flex items-center space-x-3">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                {/* User Profile Picture */}
                <div className="w-8 h-8 rounded-full overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all duration-200">
                  <Image
                    src="/personal.png"
                    alt="User Profile"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                    <span>U</span>
                  </div>
                </div>
                
                {/* Dropdown Arrow */}
                <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200">
                  <svg 
                    className={`h-3 w-3 text-gray-600 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 animate-in fade-in-0 zoom-in-95">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Settings
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
