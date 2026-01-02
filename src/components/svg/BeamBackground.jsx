import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BeamBackground = ({ className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const beams = containerRef.current.querySelectorAll('.beam');
    
    beams.forEach((beam, index) => {
      const duration = gsap.utils.random(3, 6);
      const delay = gsap.utils.random(0, 2);
      
      gsap.fromTo(
        beam,
        { 
          scaleY: 0,
          opacity: 0,
          transformOrigin: 'top'
        },
        {
          scaleY: 1,
          opacity: 0.6,
          duration: duration,
          delay: delay,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          repeatDelay: gsap.utils.random(1, 3)
        }
      );
    });
  }, []);

  const beamCount = 20;
  const beams = Array.from({ length: beamCount }, (_, i) => {
    const leftPosition = (100 / beamCount) * i;
    const height = Math.random() * 60 + 40; // 40-100%
    const color = ['#60a5fa', '#a78bfa', '#f472b6', '#fb923c'][Math.floor(Math.random() * 4)];
    
    return (
      <div
        key={i}
        className="beam absolute bottom-0 w-px"
        style={{
          left: `${leftPosition}%`,
          height: `${height}%`,
          background: `linear-gradient(to top, ${color}, transparent)`,
        }}
      />
    );
  });

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {beams}
    </div>
  );
};

export default BeamBackground;
