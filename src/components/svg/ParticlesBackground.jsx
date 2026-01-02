import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParticlesBackground = ({ count = 50, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles = containerRef.current.querySelectorAll('.particle');
    
    particles.forEach((particle) => {
      const duration = gsap.utils.random(20, 40);
      const delay = gsap.utils.random(0, 5);
      const x = gsap.utils.random(-100, 100);
      const y = gsap.utils.random(-100, 100);
      const rotation = gsap.utils.random(0, 360);

      gsap.to(particle, {
        x: `+=${x}`,
        y: `+=${y}`,
        rotation: `+=${rotation}`,
        duration: duration,
        delay: delay,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const color = ['#60a5fa', '#a78bfa', '#f472b6', '#fb923c'][Math.floor(Math.random() * 4)];
        
        return (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              backgroundColor: color,
              opacity: opacity,
              filter: 'blur(1px)',
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticlesBackground;
