import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const shapes = containerRef.current.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: '+=30',
        x: '+=20',
        rotation: 360,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.2,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        {/* Circle */}
        <circle
          className="shape fill-primary-400"
          cx="100"
          cy="100"
          r="40"
        />

        {/* Triangle */}
        <polygon
          className="shape fill-accent-400"
          points="800,100 850,200 750,200"
        />

        {/* Square */}
        <rect
          className="shape fill-primary-500"
          x="150"
          y="700"
          width="60"
          height="60"
          rx="8"
        />

        {/* Hexagon */}
        <polygon
          className="shape fill-accent-300"
          points="900,700 930,730 930,790 900,820 870,790 870,730"
        />

        {/* Small circles */}
        <circle
          className="shape fill-primary-300"
          cx="400"
          cy="150"
          r="25"
        />

        <circle
          className="shape fill-accent-500"
          cx="700"
          cy="500"
          r="30"
        />

        {/* Diamond */}
        <polygon
          className="shape fill-primary-600"
          points="200,400 250,450 200,500 150,450"
        />
      </svg>
    </div>
  );
};

export default FloatingShapes;
