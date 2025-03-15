"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/mobile-nav-single-page';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id');
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/90 backdrop-blur-sm shadow-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">Vidu Kulathunga</a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                activeSection === link.href.substring(1) 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className={`${
              scrolled 
                ? 'border-gray-700 text-white hover:bg-gray-800' 
                : 'border-gray-500 text-white hover:bg-white/10'
            }`}
            onClick={() => window.location.href = '#contact'}
          >
            Let's Talk
          </Button>
        </div>
        
        <MobileNav />
      </div>
    </header>
  );
}