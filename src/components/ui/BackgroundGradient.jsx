import { useEffect, useRef, useState } from 'react';

const BackgroundGradient = ({ 
  children, 
  className = '', 
  containerClassName = '',
  animate = true 
}) => {
  const interactiveRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    if (!interactiveRef.current || !animate) return;

    const handleMouseMove = (event) => {
      if (interactiveRef.current) {
        const rect = interactiveRef.current.getBoundingClientRect();
        setTgX(event.clientX - rect.left);
        setTgY(event.clientY - rect.top);
      }
    };

    interactiveRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (interactiveRef.current) {
        interactiveRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [animate]);

  useEffect(() => {
    if (!animate) return;

    const move = () => {
      setCurX((prevX) => prevX + (tgX - prevX) / 20);
      setCurY((prevY) => prevY + (tgY - prevY) / 20);
    };

    const animationId = requestAnimationFrame(function animate() {
      move();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [tgX, tgY, animate]);

  return (
    <div
      ref={interactiveRef}
      className={`relative group ${containerClassName}`}
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-100 blur-xl transition-all duration-500"
        style={{
          background: animate
            ? `radial-gradient(circle at ${curX}px ${curY}px, rgba(59, 130, 246, 0.6), transparent 50%)`
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent 50%)',
        }}
      />
      
      {/* Secondary gradient layer */}
      <div
        className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-60 blur-2xl transition-all duration-700"
        style={{
          background: animate
            ? `radial-gradient(circle at ${100 - curX / 2}px ${100 - curY / 2}px, rgba(168, 85, 247, 0.5), transparent 50%)`
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.5), transparent 50%)',
        }}
      />

      {/* Content */}
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;
