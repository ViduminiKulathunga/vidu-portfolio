"use client"

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-10">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}