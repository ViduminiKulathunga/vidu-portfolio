"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Clean up the overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="block md:hidden">
      <Button 
        variant="ghost" 
        className="p-0 w-10 h-10 text-white" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </>
          )}
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6">
              <a href="#home" className="text-2xl font-bold" onClick={closeMenu}>
                indoleta
              </a>
              <Button 
                variant="ghost" 
                className="p-0 w-10 h-10 text-white" 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </Button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-1 space-y-10 text-2xl">
              <a 
                href="#home" 
                className="hover:text-gray-300 transition" 
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-gray-300 transition" 
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#work" 
                className="hover:text-gray-300 transition" 
                onClick={closeMenu}
              >
                Work
              </a>
              <a 
                href="#services" 
                className="hover:text-gray-300 transition" 
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="hover:text-gray-300 transition" 
                onClick={closeMenu}
              >
                Contact
              </a>
            </nav>
            
            <div className="flex justify-center p-6">
              <div className="flex space-x-6">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                    aria-label={social}
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}