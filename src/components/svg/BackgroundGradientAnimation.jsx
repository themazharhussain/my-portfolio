import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BackgroundGradientAnimation = ({ className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const gradients = containerRef.current.querySelectorAll('.gradient-orb');

    gradients.forEach((gradient, index) => {
      gsap.to(gradient, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        scale: gsap.utils.random(0.8, 1.2),
        duration: gsap.utils.random(15, 25),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 2,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient orbs */}
      <div className="gradient-orb absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      <div className="gradient-orb absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
      <div className="gradient-orb absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20" />
    </div>
  );
};

export default BackgroundGradientAnimation;
