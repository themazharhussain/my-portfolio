import { useEffect, useRef } from 'react';

const GlowingStars = ({ count = 30, className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const stars = containerRef.current.querySelectorAll('.star');
    
    stars.forEach((star) => {
      const randomDelay = Math.random() * 3;
      const randomDuration = Math.random() * 2 + 2;
      
      star.style.animationDelay = `${randomDelay}s`;
      star.style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        return (
          <div
            key={i}
            className="star absolute rounded-full bg-blue-400 animate-glow"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              boxShadow: `0 0 ${size * 3}px ${size}px rgba(59, 130, 246, 0.5)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default GlowingStars;
