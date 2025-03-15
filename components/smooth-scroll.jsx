"use client"

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners to each anchor link
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent default behavior
        e.preventDefault();
        
        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Calculate header height to offset the scroll position
          const headerHeight = document.querySelector('header').offsetHeight;
          
          // Calculate the target position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          // Smooth scroll to the target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Highlight active section in navigation
    const highlightActiveSection = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('header a[href^="#"]');
      
      let currentSection = '';
      const headerHeight = document.querySelector('header').offsetHeight;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100; // Add some buffer
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-gray-400');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.remove('text-gray-400');
          link.classList.add('text-white');
        }
      });
    };
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Clean up event listeners when the component unmounts
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
      window.removeEventListener('scroll', highlightActiveSection);
    };
  }, []);
  
  return null; // This component doesn't render anything
}