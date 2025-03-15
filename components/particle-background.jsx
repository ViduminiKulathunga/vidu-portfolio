"use client"

import { useEffect, useRef } from 'react';

// Particle class defined outside of useEffect
class Particle {
  constructor(x, y, size, speedX, speedY, opacity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.opacity = opacity;
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around edges
    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3);
    ctx.fill();
  }
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Initialize particles
    function initParticles() {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150); // Increased particle count
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2 + .5; // Increased size between 0.8 and 2.8
        const speedX = Math.random() * 0.5 - 0.25; // Speed between -0.25 and 0.25
        const speedY = Math.random() * 0.5 - 0.25;
        const opacity = Math.random() * 0.6 + 0.2; // Increased opacity between 0.2 and 0.8
        
        particles.push(new Particle(x, y, size, speedX, speedY, opacity));
      }
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      
      // Draw connections between particles
      drawConnections();
      
      animationFrameId = requestAnimationFrame(animate);
    }

    // Draw connections between nearby particles
    function drawConnections() {
      const maxDistance = 120; // Increased maximum distance for connection
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`; // Increased connection opacity
            ctx.lineWidth = 0.7; // Slightly thicker lines
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-50"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleBackground; 