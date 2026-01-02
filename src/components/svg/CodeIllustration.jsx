import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CodeIllustration = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const lines = svgRef.current.querySelectorAll('.code-line');

    gsap.fromTo(
      lines,
      {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
      },
      {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full h-full max-w-md mx-auto"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Browser window frame */}
      <rect x="20" y="30" width="360" height="240" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <rect x="20" y="30" width="360" height="30" rx="8" fill="#334155" />
      <circle cx="40" cy="45" r="5" fill="#ef4444" />
      <circle cx="60" cy="45" r="5" fill="#f59e0b" />
      <circle cx="80" cy="45" r="5" fill="#10b981" />

      {/* Code lines */}
      <path
        className="code-line"
        d="M 40 90 L 120 90"
        stroke="#0ea5e9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 60 110 L 180 110"
        stroke="#d946ef"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 60 130 L 140 130"
        stroke="#0ea5e9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 40 150 L 100 150"
        stroke="#d946ef"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 40 180 L 160 180"
        stroke="#0ea5e9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 60 200 L 200 200"
        stroke="#d946ef"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 60 220 L 130 220"
        stroke="#0ea5e9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="code-line"
        d="M 40 240 L 90 240"
        stroke="#d946ef"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Cursor */}
      <rect x="140" y="234" width="12" height="18" fill="#0ea5e9" className="animate-pulse" />
    </svg>
  );
};

export default CodeIllustration;
