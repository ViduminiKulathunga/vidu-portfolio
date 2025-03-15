"use client"

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    // Intersection Observer for revealing sections on scroll
    const observerOptions = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // trigger when 10% of the element is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Staggered animation for child elements with the .reveal-item class
          if (entry.target.querySelectorAll('.reveal-item').length > 0) {
            const items = entry.target.querySelectorAll('.reveal-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in-up');
              }, 100 * index);
            });
          }
        }
      });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Clean up
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return null;
}