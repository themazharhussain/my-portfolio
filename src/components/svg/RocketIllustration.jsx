import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RocketIllustration = () => {
  const rocketRef = useRef(null);
  const flamesRef = useRef(null);

  useEffect(() => {
    // Rocket animation
    gsap.fromTo(
      rocketRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: -20,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rocketRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Floating animation
    gsap.to(rocketRef.current, {
      y: '+=15',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Flame animation
    if (flamesRef.current) {
      gsap.to(flamesRef.current.children, {
        scaleY: 0.8,
        scaleX: 1.1,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <svg
      className="w-full h-full max-w-xs mx-auto"
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref={rocketRef}>
        {/* Rocket body */}
        <ellipse cx="100" cy="180" rx="30" ry="60" fill="#0ea5e9" />

        {/* Rocket nose */}
        <path d="M 100 100 L 130 140 L 70 140 Z" fill="#0284c7" />

        {/* Window */}
        <circle cx="100" cy="160" r="15" fill="#bae6fd" />
        <circle cx="100" cy="160" r="10" fill="#e0f2fe" />

        {/* Wings */}
        <path d="M 70 200 L 50 240 L 70 220 Z" fill="#d946ef" />
        <path d="M 130 200 L 150 240 L 130 220 Z" fill="#d946ef" />

        {/* Flames */}
        <g ref={flamesRef} style={{ transformOrigin: '100px 240px' }}>
          <ellipse cx="100" cy="255" rx="15" ry="25" fill="#f59e0b" opacity="0.8" />
          <ellipse cx="90" cy="250" rx="10" ry="20" fill="#ef4444" opacity="0.7" />
          <ellipse cx="110" cy="250" rx="10" ry="20" fill="#ef4444" opacity="0.7" />
        </g>

        {/* Details */}
        <rect x="85" y="190" width="30" height="3" fill="#075985" />
        <rect x="85" y="200" width="30" height="3" fill="#075985" />
      </g>

      {/* Stars */}
      <circle cx="30" cy="50" r="2" fill="#fbbf24" className="animate-pulse" />
      <circle cx="170" cy="80" r="2" fill="#fbbf24" className="animate-pulse" />
      <circle cx="160" cy="30" r="2" fill="#fbbf24" className="animate-pulse" />
      <circle cx="40" cy="120" r="2" fill="#fbbf24" className="animate-pulse" />
    </svg>
  );
};

export default RocketIllustration;
